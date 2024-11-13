import { v4 as uuidv4 } from 'uuid';

export default function socketService(io, db) {
  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);
    
    socket.on('joinRoom', (roomId) => {
      socket.join(roomId);
      console.log(`User ${socket.id} joined room ${roomId}`);
    });

    socket.on('codeUpdate', (data) => {
      socket.to(data.roomId).emit('codeUpdate', data);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
}
