import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { userModel } from '../models/user.model';

const authMiddleware = async (req: any, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization') ? req.header('Authorization').split('Bearer ')[1] : null;

        if (token) {
            const secretKey = process.env.JWT_SECRET || 'secret';
            const verificationResponse = verify(token, secretKey) as any;
            const userId = verificationResponse._id || verificationResponse.id;

            const user = await userModel.findById(userId);
            if (user) {
                req.user = user;
                next();
            } else {
                next(new Error('Wrong authentication token'));
            }
        } else {
            next(new Error('Authentication token missing'));
        }
    } catch (error) {
        next(new Error('Wrong authentication token'));
    }
};

export default authMiddleware
