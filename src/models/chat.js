const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const chatSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    message: {
        type: Array,
        default: [],
    },
    date: { type: Date, default: Date.now },
});

module.exports = model('Chat', chatSchema);
