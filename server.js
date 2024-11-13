import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import mysql from 'mysql2';
import authRoutes from './routes/authRoutes.js';
import roomRoutes from './routes/roomRoutes.js';
import fileRoutes from './routes/fileRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import socketService from './services/socketService.js';

const app = express();
const server = http.createServer(app);
const io = new Server(server);


const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'collaborative_code_editor',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use('/auth', authRoutes);
app.use('/rooms', roomRoutes);
app.use('/files', fileRoutes);
app.use('/messages', messageRoutes);

socketService(io, db);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));