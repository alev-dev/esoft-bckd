const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const subjectSchema = new Schema({
    name: String,
    email: String,
    password: String,
    image: String,
    subejcts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Subject',
        },
    ],
    role: { type: String, default: 'Aluno' },
    semester: { type: Number, default: 1 },
    messages: {
        type: Number,
        default: 0,
    },
    points: {
        type: Number,
        default: 0,
    },
    ativities: {
        type: Number,
        default: 0,
    },
});

module.exports = model('User', subjectSchema);
