const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(SENDGRID_API_KEY);
const sendWelcomeEmail = (email) => {
  sgMail
    .send({
      to: email,
      from: `${process.env.FROM_EMAIL}`,
      subject: 'Welcome to MindPassage',
      template_id: 'd-ad0c186a17314c5ba7f003046a6673f9'
    })
    .catch((error) => console.log(error.response.body.errors));
};
const sendCancellationEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: `${process.env.FROM_EMAIL}`,
      subject: 'Sorry to see you go!',
      template_id: 'd-9f8c1fe19a94472ab4e0219bf75ae034'
    })
    .catch((error) => console.log(error.response.body.errors));
};
const forgotPasswordEmail = (email, token) => {
  const exampleHTMLEmail = `
  <div>Click the link below to reset your password</div>
  <a target="_blank" rel="noopener noreferrer" href="${process.env.URL}/api/password/${token}">Reset Password</a>
  `;
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: 'Password Reset.',
    // text: `Hi ${name}! Please click the link below to reset your password.`
    html: exampleHTMLEmail
  });
};
module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
  forgotPasswordEmail
};
