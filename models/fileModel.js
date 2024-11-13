import db from '../config/db.js';

const createFile = (roomId, filename, content, language, callback) => {
  db.query(
    'INSERT INTO files (room_id, filename, content, language) VALUES (?, ?, ?, ?)',
    [roomId, filename, content, language],
    (err, result) => {
      if (err) return callback(err);
      callback(null, { id: result.insertId, roomId, filename, content, language });
    }
  );
};

const getFilesByRoom = (roomId, callback) => {
  db.query(
    'SELECT * FROM files WHERE room_id = ? ORDER BY created_at DESC',
    [roomId],
    (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    }
  );
};

const updateFileContent = (fileId, content, callback) => {
  db.query(
    'UPDATE files SET content = ? WHERE id = ?',
    [content, fileId],
    (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    }
  );
};

export { createFile, getFilesByRoom, updateFileContent };
