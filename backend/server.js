const express=require("express");
const http=require('http');
const socket=require('socket.io');
const port=process.env.PORT||3001;
const app=express();
const server=http.createServer(app);
const io=socket(server);
const nsp=io.of('/quizland');
var information={

}
nsp.on('connection', socket=>{
	console.log('new client connected');

//HOST functionalities
	socket.on('createNewGame', data=>{
		socket.join(data.gameId);
		console.log(data.gameId);
		socket.emit('gameCreated', {
			'gameId': data.gameId
		});
	});
	socket.on('sendQuestion', data=>{
		socket.to(data.gameId).emit('questionSent', {
			question: data.question
		});
	});
//PLAYER functionalities
	socket.on('joinGame',(data)=>{
		var existRoom=io.nsps['/quizland'].adapter.rooms[data.gameId];
		if(existRoom!=='undefined'){
			socket.join(data.gameId);
			socket.to(data.gameId).emit('playerJoined', {
				'playerName': data.playerName,
				'gameId': data.gameId
			})
		}else{
			socket.emit('err', {
				info: 'There is no game with this CODE'
			})
		}
	});
	socket.on('questionAnswered', data=>{
		socket.to(data.gameId).emit('questionResult',{
        'playerName': data.playerName,
        'correct': data.correct
		});
	})
});
server.listen(port, () => console.log(`Listening on port ${port}`));
// function findClientsSocketByRoomId(roomId) {
// var res = []
// , room = io.sockets.adapter.rooms[roomId];
// if (room) {
//     for (var id in room) {
//     res.push(io.sockets.adapter.nsp.connected[id]);
//     }
// }
// return res;
// }


// var clients_in_the_room = io.sockets.adapter.rooms[roomId]; 
// for (var clientId in clients_in_the_room ) {
//   console.log('client: %s', clientId); //Seeing is believing 
//   var client_socket = io.sockets.connected[clientId];//Do whatever you want with this
// }