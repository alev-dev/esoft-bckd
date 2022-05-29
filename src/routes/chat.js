const { Router } = require('express');
const { getChats, getChatbyUserId, newMessage, updateChat } = require('../controllers/chat');
const router = Router();

router.get('/', getChats);
router.get('/:id', getChatbyUserId);
router.post('/sendMessage/:userId', newMessage);
router.put('/:id', updateChat);
module.exports = router;
