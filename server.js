
// tools/server.js
const express = require('express');
const path = require('path');
const open = require('open');

/* eslint-disable no-console */

const PORT = process.env.PORT || 8888;
const app = express();

//app.get('*', (req, res) => {
//	res.sendFile(path.join(dirname, '../PostGrad/build/index.html'));
//});

const server = app.listen(PORT, (err) => {
		if (err) {
			console.log(err);
		} else {
			open(`http://localhost:${port}`);
}
});

const io = require('socket.io')(server);

io.on('connection', (socket) => {
	console.log('a user connected', socket.user);

socket.on('disconnect', () => {
	console.log('user disconnected');
});

socket.on('room', (data) => {
	socket.join(data.room);
});

socket.on('leave room', (data) => {
	socket.leave(data.room);
});

socket.on('coding event', (data) => {
	socket.broadcast.to(data.room).emit('receive code',
	data);
});
});
