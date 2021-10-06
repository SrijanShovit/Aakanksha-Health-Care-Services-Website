const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    /*
      For Gmail -
      service: 'gmail',
      auth:{
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      }
    */

    // testing with mailtrap
    host: 'smtp.mailtrap.io',
    port: process.env.MAILTRAP_PORT,
    auth: {
      user: process.env.MAILTRAP_ID,
      pass: process.env.MAILTRAP_PASSWORD,
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
