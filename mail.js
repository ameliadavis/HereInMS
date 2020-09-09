// console.log("mail.js script")
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
//const fs = require("fs");

const auth = {
    auth: {
        api_key: 'd2635f650c0e99d0b8e6638e6d66547b-a65173b1-42b693b0',
        domain: 'sandbox6dea089437704590bb56058b01be1025.mailgun.org'
    }
};

const transporter= nodemailer.createTransport(mailGun(auth));

const sendMail = (data) => {
    // formFills = JSON.stringify(data);
    // console.log( "in sendmail function", formFills )
    // email = formfills.map()
    // console.log(data.email)

    // emailBody = {
    //     name = data.name,
    //     text= data.text, 
    //     ista= data.igHandle, 
    //     email = data.email
    // }
    // var readstream = fs.createReadStream()


    const mailOptions = {
        from: data.email, 
        to: "ameliaaltman22@gmail.com",
        subject: "Here in MS Image Submission",
        text: [ 
            data.name,
            data.text, 
            data.igHandle, 
            data.email,

        ],
        attachments: [
            {filename: data.upload, path: '/Users/adavis853/Desktop/Members Exchange /02_WorkingFiles/LandingPageDesign/public/Assets/SocialPlaceholder.png'}
        ] 
    };
    
    transporter.sendMail(mailOptions, function(err, data){
        if(err) {
            console.log("error,", err)
            throw err;
            // cb(err, null);
        } else {
            console.log ("Message Sent")
            throw err;
            // cb(null, data);
        }
    });
};

module.exports = sendMail;


