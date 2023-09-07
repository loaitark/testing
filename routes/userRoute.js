const express = require("express");
const {
  createUser,
  deleteOne,
  getUser,
  getUsers,
  updateUser,
} = require("../controllers/userControllers");

const router = express.Router();

router.route("/").post(createUser).get(getUsers);

router.route("/:id").put(updateUser).delete(deleteOne).get(getUser);

module.exports = router;
