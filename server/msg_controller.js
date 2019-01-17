const { ACCOUNT_SID, AUTH_TOKEN, EMAIL_USER, EMAIL_PASS } = process.env;
const client = require("twilio")(ACCOUNT_SID, AUTH_TOKEN);
let nodemailer = require("nodemailer");
// let aws = require("aws-sdk");
// let transporter = nodemailer.createTransport({
//   SES: new aws.SES({ apiVersion: "2010-12-01" })
// });

module.exports = {
  sendTwilioMessage: (req, res) => {
    const { recipient, message } = req.query;

    client.messages
      .create({
        body: message,
        from: "+18017973237",
        // to: "+1" + recipient
        to: "+18168881088"
      })
      .then(message => console.log(message.body));
  },
  sendNodeMailer: async (req, res) => {
    const { recipient, message } = req.query;
    let account = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
      }
    });
    let mailOptions = {
      from: `"Liberty Roofing" <${EMAIL_USER}>`,
      // to: recipient,
      to: "ldscirkev@gmail.com",
      subject: "Hey there!",
      text: 'this part seems worthless',
      html: `<b>${message}</b>`
    };
    let info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }
};
