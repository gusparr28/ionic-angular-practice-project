// modules importation
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';
import passportMiddleware from './middlewares/passport';

import authRoutes from './routes/auth';
import specialRoutes from './routes/special';

// initializations
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);

// routes
app.use(authRoutes);
app.use(specialRoutes);

// settings
app.set('port', process.env.PORT || 3000);

export default app;