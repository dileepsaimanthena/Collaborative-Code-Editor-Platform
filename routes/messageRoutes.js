import express from 'express';
import { sendMessage, getMessages } from '../controllers/messageController.js';

const router = express.Router();

router.post('/send', sendMessage);
router.get('/:roomId', getMessages);

export default router;
