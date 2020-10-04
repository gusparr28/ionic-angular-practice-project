import mongoose from 'mongoose';
import keys from './config/keys';

mongoose.connect(keys.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Successfully connected to MongoDB');
});

connection.on('error', err => {
    console.error(err);
    process.exit(0);
});