const mongoose = require('mongoose');

const verificationCodeSchema = new mongoose.Schema({
  email: { type: String, required: true },
  code: { type: String, required: true },
  expiresAt: { type: Date, required: true }
});

const VerificationCode = mongoose.model("VerificationCode", verificationCodeSchema, "v_codes");

module.exports = VerificationCode;
