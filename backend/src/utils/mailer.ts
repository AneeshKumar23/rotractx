import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendVerificationEmail = async (email: string, otp: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verify your FarmLife Account',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Welcome to FarmLife!</h2>
        <p>Your verification code is:</p>
        <h1 style="color: #10b981; font-size: 32px; letter-spacing: 2px;">${otp}</h1>
        <p>This code will expire in 10 minutes.</p>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
};
