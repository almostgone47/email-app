const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    
    app.post('/api/stripe', requireLogin, (req, res) => {
        stripe.charges.create(
        // `source` is obtained with Stripe.js; see https://stripe.com/docs/payments/accept-a-payment-charges#web-create-token
            {
                amount: 500,
                currency: 'usd',
                source: req.body.id,
                description: 'My First Test Charge (created from API docs)',
            },
            (err, charge) => {
                // asynchronously called
                if (err) {
                    console.log('Error trying to charge card')
                } else {
                    req.user.credits += 5;
                    req.user.save((err, data) => {
                        if (err) {
                            console.log('Error saving user credits: ', err)
                        } else {
                            console.log('successful charge: ', data, 'req.user: ', req.user)
                            res.send(data)
                        }
                    });
                }
            }
        );
    });
};

