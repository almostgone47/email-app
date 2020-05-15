const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const template = require('../services/emailTemplates/surveyTemplate');
const Path = require('path-parser');
const { URL } = require('url');

const Survey = mongoose.model('surveys');

module.exports = app => {
    app.get('/api/surveys', requireLogin, async (req, res) => {
        const surveys = await Survey.find({ _user: req.user.id }).select({ recipients: false });

        res.send(surveys); 
    })

    app.get('/api/surveys/:surveyId/:choice', (req, res) => {
        res.send('Thanks for voting!');
    })

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        console.log('app.post /api/surveys', req.body)
        const { title, subject, body, recipients } = req.body;
        
        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => { return { email: email.trim() }}),
            _user: req.user.id,
            dateSent: Date.now()
        });

        const mailer = new Mailer(survey, template(survey));
        
        try {
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user =  await req.user.save();
            
            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }
    });

    app.post('/api/surveys/webhooks', (req, res) => {
        let events = req.body.map(event => {
            const pathname = new URL(event.url).pathname;
            const p = new Path('/api/surveys/:surveyId/:choice');
            const match = p.test(pathname);
            if (match) {
                return { email: event.email, surveyId: match.surveyId, choice: match.choice };
            }
        });
        events = events.filter(Boolean);
        events = [...new Set(events)];
        events.forEach(({ surveyId, email, choice }) => {
            Survey.updateOne({
                _id: surveyId,
                recipients: {
                    $elemMatch: { email: email, responded: false }
                }
            }, {
                $inc: { [choice]: 1 },
                $set: { 'recipients.$.responded': true },
                lastResponded: Date.now()
            }).exec();
        })
        console.log('EVENTS: ', events)
    })
};