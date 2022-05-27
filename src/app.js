const express = require('express');
const app = express();
const server = require('http').Server(app);
const cors = require('cors');
const routes = require('./routes');
const io = require('socket.io')(server, { cors: { origin: '*' } });

//database
require('./database/config');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//socket
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

//routes
routes(app);
app.get('/', (req, res) => {
    res.send('welcome');
});

module.exports = server;
