import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import keys from '../config/keys';
import User, { IUser } from '../models/User';

const createToken = (user: IUser) => {
    return jwt.sign({ id: user.id, username: user.username }, keys.JWT_SECRET);
};

export const signUp = async (req: Request, res: Response): Promise<Response> => {
    const { username, email, password, date, gender } = req.body;
    if (!username || !email || !password || !date || !gender) return res.status(422).json({ error: 'Please complete all fields' });
    const savedUser = await User.findOne({ username });
    if (savedUser) return res.status(422).json({ error: 'User already exists' });
    const newUser = new User({
        username,
        email,
        password,
        date,
        gender
    });
    await newUser.save();
    return res.json(newUser);
};

export const signIn = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(422).json({ error: 'Please complete all fields' });
    const savedUser = await User.findOne({ username });
    if (!savedUser) return res.status(422).json({ error: 'Invalid credentials' });
    const correctCreds = await savedUser.comparePassword(password);
    if (correctCreds) return res.json({ token: createToken(savedUser) });
    return res.status(422).json({ error: 'Invalid credentials' });
};