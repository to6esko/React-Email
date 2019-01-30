const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
           <h3>Contact Details</h3>
           <ul>
             <li> Name: ${req.body.name}</li>
             <li> Email: ${req.body.email}</li>
             </ul>
             <h3> Message</h3>
             <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: 'feqkkbz6saacdruo@ethereal.email',
                pass: 'Umhd5CR7CTyZ4hXmwb'
            }
        });
        let mailOptions = {
            from: 'test@testaccont.com',
            to: 'feqkkbz6saacdruo@ethereal.email',
            replyTo: 'test@testaccont.com',
            text: req.body.message,
            html: htmlEmail
        }
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err);
            }
            console.log('Message send: %s', info.message);
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
        })
    })
    console.log(req.body);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});