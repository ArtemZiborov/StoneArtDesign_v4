import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true, // Use SSL
  auth: {
    user: "info@mystonemaster.co.uk",
    pass: "Akmensmeistars88$$",
  },
});

transporter
  .verify()
  .then(() => console.log("SMTP Configuration is valid"))
  .catch((error) => console.error("SMTP Configuration Error:", error));
