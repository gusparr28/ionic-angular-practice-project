"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const keys_1 = __importDefault(require("./config/keys"));
mongoose_1.default.connect(keys_1.default.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('Successfully connected to MongoDB');
});
connection.on('error', err => {
    console.error(err);
    process.exit(0);
});
