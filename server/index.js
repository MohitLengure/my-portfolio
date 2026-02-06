// server/index.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Configure the transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mohitlengure1208@gmail.com', // Sender
      pass: 'imjw tugl jgnn eojg'     // ← Gmail App Password (not actual Gmail pass!!)
    }
  });

  // Email message details
  const mailOptions = {
    from: `"${name}" <mohitlengure1208@gmail.com>`,
    to: 'mohitlengure2002@gmail.com', // Receiver
    subject: subject,
    text: `
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ message: 'Error sending email', error: err });
  }
});

app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
