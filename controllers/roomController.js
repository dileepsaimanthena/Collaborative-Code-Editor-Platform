import db from '../config/db.js';

export const createRoom = (req, res) => {
  const { name, language } = req.body;
  
  db.query('INSERT INTO rooms (name, language) VALUES (?, ?)', [name, language], (err, result) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    res.status(201).json({ message: 'Room created successfully', roomId: result.insertId });
  });
};

export const getRooms = (req, res) => {
  db.query('SELECT * FROM rooms', (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    res.status(200).json(results);
  });
};
