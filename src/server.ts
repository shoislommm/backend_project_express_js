import express from 'express';
import router from './router';
import { register, login } from './handlers/user';

const server = express();

server.use(express.json());
server.use('/api', router);

server.post('/register', register);
server.post('/login', login);

server.get('/', (req, res) => {
    res.send('<h1>Homepage</h1>');
    console.log('сделан GET запрос');
});

server.get('/login', (req, res) => {
    res.send('<h1>Login page</h1>');
    console.log('сделан GET запрос');
});

export default server;
