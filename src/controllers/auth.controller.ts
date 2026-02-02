import { Request, Response, NextFunction } from 'express';
import AuthService from '../services/auth.service';

class AuthController {

    public authService = new AuthService();

    public signUp = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData = req.body;
            const newUser = await this.authService.signup(userData);

            res.status(201).json({
                data: newUser,
                message: 'signup'
            });
        } catch (error) {
            next(error);
        }
    };

    public logIn = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body;
            const { token, findUser } = await this.authService.login(data);

            res.status(200).json({
                data: { token, user: findUser },
                message: 'login'
            });
        } catch (error) {
            next(error);
        }
    };
}

export default AuthController;
