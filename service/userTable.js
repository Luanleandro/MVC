let { FAKE_USER_DATA } = require('../models/UserModelFake');

const QueryUserById = (id) => {
  let user;
  FAKE_USER_DATA.forEach((userData) => {
    if (userData.id === Number(id)) {
      user = userData;
    }
  });
  return user;
};

const QueryListUsers = () => {
  return FAKE_USER_DATA;
};

const DeleteUserById = (id) => {
  FAKE_USER_DATA = FAKE_USER_DATA.filter(
    (userData) => userData.id !== Number(id),
  );
  return FAKE_USER_DATA;
};

const PostUser = (id, name, age, email, role) => {
  const user = {
    id: id,
    name: name,
    age: age,
    email: email,
    role: role || 'user',
  };
  FAKE_USER_DATA.push(user);
  return FAKE_USER_DATA;
};


module.exports = {
  QueryUserById,
  QueryListUsers,
  DeleteUserById,
  PostUser,
};
