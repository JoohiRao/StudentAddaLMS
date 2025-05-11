"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const port = process.env.PORT || '5000';
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});
app.listen(port, () => {
    console.log(`Server is running on  http://localhost:${port}`);
});
