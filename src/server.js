// const express = require('express');
// const mongoose = require('mongoose');
// const routes = require('./routes');

// const server = express();

// mongoose.connect('mongodb+srv://saulojmc:smcd2482@clustersaulo-7snvo.mongodb.net/devs?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// server.use(express.json());

// server.use(routes);

// server.listen(3333);

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', socket => {
  const { user } = socket.handshake.query;

  connectedUsers[user] = socket.id;
});
//mongodb://saulojmc:smcd2482@main-shard-00-00-03xkr.mongodb.net:27017,main-shard-00-01-03xkr.mongodb.net:27017,main-shard-00-02-03xkr.mongodb.net:27017/main?ssl=true&replicaSet=Main-shard-0&authSource=admin&retryWrites=true

mongoose.connect('mongodb+srv://saulojmc:smcd2482@clustersaulo-7snvo.mongodb.net/devs?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);