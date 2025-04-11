import jwt from 'jsonwebtoken';
import { Response } from 'express';

export const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const generateToken = (userId: string) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: '7d' });
};

export const createResponse = (res: Response, statusCode: number, success: boolean, message: string, data?: any) => {
  return res.status(statusCode).json({
    success,
    message,
    data
  });
};
