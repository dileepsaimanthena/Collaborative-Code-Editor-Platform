import db from '../config/db.js';

const createRoom = (name, language, callback) => {
  db.query(
    'INSERT INTO rooms (name, language) VALUES (?, ?)',
    [name, language],
    (err, result) => {
      if (err) return callback(err);
      callback(null, { id: result.insertId, name, language });
    }
  );
};

const getRooms = (callback) => {
  db.query('SELECT * FROM rooms ORDER BY created_at DESC', (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

export { createRoom, getRooms };
