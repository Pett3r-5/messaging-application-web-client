const io = require('socket.io-client');
const socket = io(`http://localhost:5000`);

socket.on('welcome', () => {
  console.log('on welcome : welcome received renderer'); // displayed
  socket.emit('test')
});
socket.on('error', (e) => {
  console.log(e); // displayed ?
});
socket.on('ok', () => {
  console.log("OK received renderer"); // displayed
});
socket.on('connect', () => {
  console.log("connected renderer"); // displayed
  socket.emit('test');
});