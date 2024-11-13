import db from '../config/db.js';

export const saveFile = (req, res) => {
  const { roomId, filename, content, language } = req.body;
  
  db.query('INSERT INTO files (roomId, filename, content, language) VALUES (?, ?, ?, ?)', 
    [roomId, filename, content, language], 
    (err, result) => {
      if (err) return res.status(500).json({ message: 'Database error' });
      res.status(201).json({ message: 'File saved successfully', fileId: result.insertId });
    }
  );
};

export const getFiles = (req, res) => {
  const { roomId } = req.params;

  db.query('SELECT * FROM files WHERE roomId = ?', [roomId], (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    res.status(200).json(results);
  });
};
