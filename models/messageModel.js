import db from '../config/db.js';

const createMessage = (roomId, userId, message, callback) => {
  db.query(
    'INSERT INTO messages (room_id, user_id, message) VALUES (?, ?, ?)',
    [roomId, userId, message],
    (err, result) => {
      if (err) return callback(err);
      callback(null, { id: result.insertId, roomId, userId, message });
    }
  );
};

const getMessagesByRoom = (roomId, callback) => {
  db.query(
    'SELECT messages.*, users.username FROM messages JOIN users ON messages.user_id = users.id WHERE room_id = ? ORDER BY messages.created_at',
    [roomId],
    (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    }
  );
};

export { createMessage, getMessagesByRoom };
