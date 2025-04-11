const User = require('../models/User');
const VerificationCode = require('../models/VerificationCode');
const { sendEmail } = require('../utils/mailer');
const crypto = require('crypto');

const authController = {
  async signup(req, res) {
    try {
      const { username, email, password } = req.body;

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already registered" });
      }

      const token = crypto.randomBytes(32).toString('hex');
      
      const user = new User({
        username,
        email,
        password,
        token,
        email_verified: false
      });

      await user.save();

      res.status(201).json({
        message: "User registered successfully",
        userId: user._id.toString(),
        token
      });
    } catch (error) {
      res.status(500).json({ message: "Error in signup" });
    }
  },

  // ...existing code for other methods...
};

module.exports = authController;
