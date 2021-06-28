// const express = require('express');
// const DesenvolvedorController = require('./controller/DesenvolvedorController');
// const LikeController = require('./controller/LikeController');
// const DislikeController = require('./controller/DislikeController');

// const routes = express.Router();

// routes.get('/devs', DesenvolvedorController.index);
// routes.post('/devs', DevController.store);

// routes.post('/devs/:devId/likes', LikeController.store);
// routes.post('/devs/:devId/dislikes', DislikeController.store);

// module.exports = routes;

const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;