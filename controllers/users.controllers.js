const { v4: uuidv4 } = require("uuid");
// eslint-disable-next-line
let users = require("../models/users.model");

const getAllUsers = (req, res) => {
  res.status(200).json({ users });
};
const createUsers = (req, res) => {
  const newUser = {
    id: uuidv4(),
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);

  res.status(200).json(users);
};

const updateUsers = (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;

  users
    .filter((user) => user.id === userId)
    // eslint-disable-next-line array-callback-return
    .map((selectedUser) => {
      // eslint-disable-next-line
      selectedUser.name = name;
      // eslint-disable-next-line
      selectedUser.email = email;
    });

  res.status(200).json(users);
};

const deleteUsers = (req, res) => {
  const userId = req.params.id;
  users = users.filter((user) => user.id !== userId);
  res.status(200).json(users);
};

module.exports = { getAllUsers, createUsers, updateUsers, deleteUsers };
