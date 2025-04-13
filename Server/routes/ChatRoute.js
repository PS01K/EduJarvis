const express = require('express');
const { ChatWithGroq } = require('../controllers/ChatController.js');

const ChatRoute = express.Router()

ChatRoute.post('/', ChatWithGroq)



module.exports = {ChatRoute};
