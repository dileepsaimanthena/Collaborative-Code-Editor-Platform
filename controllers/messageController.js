import db from '../config/db.js';

export const sendMessage = (req, res) => {
  const { roomId, userId, message } = req.body;

  db.query(
    'INSERT INTO messages (room_id, user_id, message) VALUES (?, ?, ?)',
    [roomId, userId, message],
    (err, result) => {
      if (err) return res.status(500).json({ message: 'Database error' });
      res.status(201).json({ message: 'Message sent successfully' });
    }
  );
};

export const getMessages = (req, res) => {
  const { roomId } = req.params;

  db.query(
    'SELECT messages.*, users.username FROM messages JOIN users ON messages.user_id = users.id WHERE room_id = ? ORDER BY messages.created_at',
    [roomId],
    (err, results) => {
      if (err) return res.status(500).json({ message: 'Database error' });
      res.status(200).json(results);
    }
  );
};
