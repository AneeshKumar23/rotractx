import { Request, Response } from "express";
import { User } from "../models/User";
import { generateOTP, generateToken, createResponse } from "../utils/auth";
import { sendVerificationEmail } from "../utils/mailer";

export const signup = async (req: Request, res: Response) => {
  try {
    const { fullName, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return createResponse(res, 400, false, "Email already registered");
    }

    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

    const user = new User({
      fullName,
      email,
      password,
      otp,
      otpExpiry,
    });
    await user.save();
    await sendVerificationEmail(email, otp);

    createResponse(
      res,
      201,
      true,
      "Please check your email for verification code",
      {
        userId: user._id,
      }
    );
  } catch (error) {
    createResponse(res, 500, false, "Error in signup");
  }
};

export const verifyOTP = async (req: Request, res: Response) => {
  try {
    const { userId, otp } = req.body;
    const user = await User.findById(userId);

    if (!user || user.otp !== otp || Date.now() > user.otpExpiry.getTime()) {
      return createResponse(res, 400, false, "Invalid or expired OTP");
    }

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();

    const token = generateToken(user._id);
    createResponse(res, 200, true, "Email verified successfully", { token });
  } catch (error) {
    createResponse(res, 500, false, "Error in OTP verification");
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return createResponse(res, 404, false, "User not found");
    }

    if (!user.isVerified) {
      return createResponse(res, 403, false, "Please verify your email first");
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return createResponse(res, 400, false, "Invalid credentials");
    }

    user.lastLogin = new Date();
    await user.save();

    const token = generateToken(user._id);
    createResponse(res, 200, true, "Login successful", {
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    createResponse(res, 500, false, "Error in login");
  }
};
