const express = require("express");
const routes = express.Router();

const { UserContoller } = require("../controllers/UserController");

const userController = new UserContoller();

routes.get("/user", userController.GetAllUsers);
routes.get("/user/:id", userController.GetUserById);
routes.post("/user", userController.AddUser);
routes.delete("/user/:id", userController.DeleteUser);

module.exports = routes;
