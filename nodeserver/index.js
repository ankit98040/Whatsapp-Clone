const io = require('socket.io')(3600)

const users = {};

io.on('connection', socket => {
    socket.on('new-user-joined', name => {
        console.log("New User", name);
        user[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });
    socket.on('send', message => {
        socket.broadcast.emit('recieve', { message: message, name: users[socket.id] })
    });
});