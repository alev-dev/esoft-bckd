module.exports = (app) => {
    app.use('/subjects', require('./subject'));
    app.use('/users', require('./user'));
    app.use('/chats', require('./chat'));
};
