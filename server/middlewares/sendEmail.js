const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    /*
      For Gmail -
      service: 'gmail',
      auth:{
        user: 'email address',
        pass: 'password of email'
      }
    */

    // testing with mailtrap
    host: 'smtp.mailtrap.io',
    port: 2525,

    // enter mailtrap auth credentials to test with your mailtrap account
    auth: {
      user: '',
      pass: '',
    },
  });

  const message = {
    from: `${options.organisationName} <${options.organisationEmail}>`,
    to: options.userEmail,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(message);
};

module.exports = sendEmail;
