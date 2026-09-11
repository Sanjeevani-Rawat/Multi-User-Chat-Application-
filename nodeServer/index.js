// node sefver which will handle socket io connections

// const io = require('socket.io')(8000);

// i need socket.io and will use it in 8000 port
const io = require('socket.io')(8000, {     
  cors: {
    origin: "*",  // allow all origins
    // ####################################
    // methods: ["GET", "POST"]
  }
});

const users = {};

// io.on is a socket.io instance which listens multiple sockets connections
io.on('connection', socket => {

    socket.on('new-user-joined', name => {
        // console.log("New User", name);
        users[socket.id]=name;
        socket.broadcast.emit('user-joined', name)
    })

    socket.on('send', message => {
        socket.broadcast.emit('receive', {message: message, name: users[socket.id]})
    })

    // ####################################
    socket.on('disconnect', () => {
        socket.broadcast.emit('left', users[socket.id])
        delete users[socket.id];
    })

})