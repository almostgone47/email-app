const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const template = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
    app.get('/api/surveys/thanks', (req, res) => {
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
        console.log('SHOULD BE SHOWING THANKS FOR VOTING', req.body);
        res.send({});
    })
};