import { Strategy, ExtractJwt } from 'passport-jwt';
import keys from '../config/keys';
import User from '../models/User';

export default new Strategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.JWT_SECRET
}, async (payload, done) => {
    try {
        const user = await User.findById(payload.id);
        if (user) return done(null, user);
        return done(null, false);
    } catch (e) {
        console.error(e);
    };
});
