const { Router } = require('express');
const router = Router();

module.exports = (app) => {
    app.use('/subjects', require('./subject'));
    app.use('/users', require('./user'));
};
