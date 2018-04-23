const UserController = require('../controllers/user-controller');

module.exports = (server) => {

    server.get('/users', UserController.readAll);
    server.get('/user/:id', UserController.read);
    server.post('/user', UserController.create);
    
}

 