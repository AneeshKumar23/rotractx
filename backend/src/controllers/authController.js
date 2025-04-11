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

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const isValid = await user.comparePassword(password);
      if (!isValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      res.json({
        message: "Login successful",
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          email_verified: user.email_verified,
          token: user.token
        }
      });
    } catch (error) {
      res.status(500).json({ message: "Error in login" });
    }
  },

  async updateProfile(req, res) {
    try {
      const { userId, ...updateData } = req.body;
      const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ message: "Profile updated successfully", user });
    } catch (error) {
      res.status(500).json({ message: "Error updating profile" });
    }
  }
};

module.exports = authController;
