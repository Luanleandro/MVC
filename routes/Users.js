const express = require('express');
const routes = express.Router();

const {
  GetAllUsers,
  GetUserById,
  AddUser,
  DeleteUser,
} = require('../controllers/UserController');

routes.get('/user', GetAllUsers);
routes.get('/user/:id', GetUserById);
routes.post('/user', AddUser);
routes.delete('/user/:id', DeleteUser);

module.exports = routes;
