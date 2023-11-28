const router = require("express").Router();
const {
  getAllUsers,
  createUsers,
  updateUsers,
  deleteUsers,
} = require("../controllers/users.controllers");

router.get("/", getAllUsers);
router.post("/", createUsers);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUsers);

module.exports = router;
