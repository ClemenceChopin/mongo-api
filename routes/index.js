const UserController = require('../controllers/user-controller');
const MovieController = require('../controllers/movie-controller')

module.exports = (server) => {

    // users
    server.get('/users', UserController.readAll);
    server.get('/user/:id', UserController.read);
    server.post('/user', UserController.create);
    server.delete('/user/', UserController.delete);
    // movies
    server.get('/movies', MovieController.readAll);
    server.get('/movie/:id', MovieController.read);
    server.post('/movie', MovieController.create);
    server.delete('/movie/', MovieController.delete);
    
}

 