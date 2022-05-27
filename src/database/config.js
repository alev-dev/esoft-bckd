const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Alejandro:16481648@esoft.fzpku.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected');
});
