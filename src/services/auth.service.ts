import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { userModel } from '../models/user.model';

class AuthService {
    public users = userModel;

    public async signup(data: any) {
        const user = await this.users.findOne({ email: data.email });
        if (user) {
            throw new Error(`User with email ${data.email} already exists`);
        }

        const hashedPassword = await hash(data.password, 10);
        const newUser = await this.users.create({ ...data, password: hashedPassword });

        return newUser;
    }

    public async login(data: any) {
        const user = await this.users.findOne({ email: data.email });
        if (!user) {
            throw new Error('User not found');
        }

        const isMatch = await compare(data.password, user.password!);
        if (!isMatch) {
            throw new Error('Incorrect password');
        }

        const tokenData = { _id: user._id, email: user.email };
        const secretKey = process.env.JWT_SECRET || 'secret';


        const token = sign(tokenData, secretKey, { expiresIn: '1h' });

        return { token, findUser: user };
    }
}

export default AuthService;
