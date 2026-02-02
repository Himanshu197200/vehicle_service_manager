import { NextFunction, Request, Response } from 'express';

const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    try {
        const status: number = err.status || 500;
        const message: string = err.message || 'Something went wrong';

        console.log(`[Error] ${message}`);

        res.status(status).json({ message });
    } catch (error) {
        next(error);
    }
};

export default errorMiddleware;
