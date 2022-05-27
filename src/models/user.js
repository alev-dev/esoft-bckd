const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const subjectSchema = new Schema({
    name: String,
    email: String,
    password: String,
    image: String,
    role: { type: String, default: 'Aluno' },
    semester: { type: Number, default: 1 },
});

module.exports = model('User', subjectSchema);
