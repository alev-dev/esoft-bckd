const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const subjectSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    teacher: String,
    image: String,
    comments: [{ body: String, date: Date, student: String }],
    date: { type: Date, default: Date.now },
    hidden: { type: Boolean, default: false },
    meta: { type: Object, default: { votes: 0, favs: 0 } },
    content: [
        {
            title: String,
            content: String,
            date: { type: Date, default: Date.now },
            hidden: { type: Boolean, default: false },
        },
    ],
    ativities: [
        {
            question: String,
            answers: [
                {
                    answer: String,
                    correct: Boolean,
                },
            ],
            points: { type: Number, default: 10 },
        },
    ],
    videos: [
        {
            title: String,
            url: String,
            background: String,
            date: { type: Date, default: Date.now },
            hidden: { type: Boolean, default: false },
        },
    ],
});

module.exports = model('Subject', subjectSchema);
