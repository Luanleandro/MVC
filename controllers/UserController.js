const {
  QueryListUsers,
  DeleteUserById,
  PostUser,
  QueryUserById,
} = require("../service/userTable");

class UserContoller {
  GetAllUsers = (req, res) => {
    const users = QueryListUsers();
    return res.json(users);
  };

  GetUserById = (req, res) => {
    const userId = QueryUserById(req.params.id);
    return res.json(userId);
  };

  DeleteUser = (req, res) => {
    const userId = DeleteUserById(req.params.id);
    console.log(req.params);
    return res.json(userId);
  };

  AddUser = (req, res) => {
    const user = PostUser(
      req.body.id,
      req.body.name,
      req.body.age,
      req.body.email,
      req.body.role
    );
    return res.json(user);
  };
}

module.exports = {
  UserContoller,
};
