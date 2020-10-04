"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = exports.signUp = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const keys_1 = __importDefault(require("../config/keys"));
const User_1 = __importDefault(require("../models/User"));
const createToken = (user) => {
    return jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, keys_1.default.JWT_SECRET);
};
exports.signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password, date, gender } = req.body;
    if (!username || !email || !password || !date || !gender)
        return res.status(422).json({ error: 'Please complete all fields' });
    const savedUser = yield User_1.default.findOne({ email });
    if (savedUser)
        return res.status(422).json({ error: 'User already exists' });
    const newUser = new User_1.default({
        username,
        email,
        password,
        date,
        gender
    });
    yield newUser.save();
    return res.json(newUser);
});
exports.signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(422).json({ error: 'Please complete all fields' });
    const savedUser = yield User_1.default.findOne({ email });
    if (!savedUser)
        return res.status(422).json({ error: 'Invalid credentials' });
    const correctCreds = yield savedUser.comparePassword(password);
    if (correctCreds)
        return res.json({ token: createToken(savedUser) });
    return res.status(422).json({ error: 'Invalid credentials' });
});
