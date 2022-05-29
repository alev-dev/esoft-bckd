const chat = require('../models/chat');

const chatController = {
    getChatbyUserId: async (req, res) => {
        await chat
            .find({ user: req.params.id })
            .populate('user')
            .then((chat) => {
                res.json(chat);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    updateChat: async (req, res) => {
        await chat
            .findByIdAndUpdate(req.params.id, req.body)
            .then((chat) => {
                res.json(chat);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    getChats: async (req, res) => {
        await chat
            .find()
            .populate('user')
            .then((chat) => {
                res.json(chat);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    newMessage: async (req, res) => {
        const { userId } = req.params;
        const { message } = req.body;
        await chat
            .findOne({ user: userId })
            .then((chatData) => {
                if (chatData) {
                    chatData.message.push(message);
                    chatData.save();
                    res.json(chatData);
                } else {
                    chat.create({ ...req.body, user: userId }).then((response) => {
                        res.json(response);
                    });
                }
            })
            .catch((err) => {
                res.json(err);
            });
    },

    deleteChat: async (req, res) => {
        await chat
            .findByIdAndDelete(req.params.id)
            .then((chat) => {
                res.json(chat);
            })
            .catch((err) => {
                res.json(err);
            });
    },
};

module.exports = chatController;
