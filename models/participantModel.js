import db from '../config/db.js';

const addParticipant = (roomId, userId, callback) => {
  db.query(
    'INSERT INTO participants (room_id, user_id) VALUES (?, ?) ON DUPLICATE KEY UPDATE joined_at = CURRENT_TIMESTAMP',
    [roomId, userId],
    callback
  );
};

const getParticipantsByRoom = (roomId, callback) => {
  db.query(
    'SELECT users.id, users.username FROM participants JOIN users ON participants.user_id = users.id WHERE participants.room_id = ?',
    [roomId],
    callback
  );
};

export { addParticipant, getParticipantsByRoom };
