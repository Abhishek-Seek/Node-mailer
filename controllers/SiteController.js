const config = require("../config/config");
const nodemailer = require("nodemailer");
const path = require("path");
const Handlebars = require('handlebars');
const fs = require('fs');


const Sitecontroller = {
  index: function (req, resp) {
    resp.status(200).sendFile(`${config.APP_PATH}/pages/index.html`);
  },
  login: function (req, resp) {
    resp.status(200).sendFile(`${config.APP_PATH}/pages/login.html`);
  },
  getUserList: function (req, resp) {
    resp.status(200).json({
      message: "Record Found",
      data: {
        id: 1001,
        name: "Awnish",
      },
    });
  },
  createUser: function (req, resp) {
    resp.status(200).json({
      message: "Post Method is Running",
    });
  },
  showView: function (req, resp) {
    resp.render("index", {
      title: "index Page",
      name: "Ravi",
    });
  },
  sendEmail: function (req, resp) {
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      auth: {
        user: process.env.MAIL_USER || config.MAIL_SETTING.user,
        pass: process.env.MAIL_PASS || config.MAIL_SETTING.pass,
      },
    });

const templateSource = fs.readFileSync(path.join(config.APP_PATH,'controllers/templates/index.hbs'), 'utf-8');
const template = Handlebars.compile(templateSource);
const data = {
  name: 'AWnish Kumar',
};

    const htmlContent = template(data);
   
    const infoPromise = transporter.sendMail({
      from: '"Administrator" <abhishek.prajapati.psa@postmortemshala.co.in>', 
      to: "abhishek.prajapati.psa@postmortemshala.co.in,darkworld1914@gmail.com", 
      subject: "Welcome on Board to SEEKSOLUTION LLP",
      html: htmlContent,

      attachments: [
        {
          filename: 'Thesis-pana 1.pdf', 
          path: path.join('controllers/public/Thesis-pana 1.pdf'), 
          contentType: 'application/pdf' 
        },
        
      ]
    });

    infoPromise
      .then((success) => {
        console.log("Message Sent", success.response);
        resp.status(200).json({
          code: 200,
          status: true,
          message: "Email Sent Successfully",
          data: success.response,
          error: false,
        });
      })
      .catch((error) => {
        console.log("Error Occurred", error);
        resp.status(200).json({
          code: 505,
          status: false,
          message: "Email Not Sent",
          error: error,
        });
      });
  },
};

module.exports = Sitecontroller;
