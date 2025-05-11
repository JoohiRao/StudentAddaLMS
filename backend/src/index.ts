import express from 'express';
import dotenv from 'dotenv';


process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const port = process.env.PORT || '5000';

const app = express();

app.use(express.json());

app.get('/', (req,res) => {
    res.send('Hello World');
})


app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});


export default app;


