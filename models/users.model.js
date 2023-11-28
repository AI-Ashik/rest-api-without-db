const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    name: "Ashik",
    email: "arisulsilamashik07@gmail.com",
  },
  {
    id: uuidv4(),
    name: "Arman",
    email: "Arman@gmail.com",
  },
  {
    id: uuidv4(),

    name: "sabbir",
    email: "sabbir@gmail.com",
  },
];

module.exports = users;
