const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload_file');

const { 
  getAllUser, getUserById, postUser, loginHandler, 
  deleteUser, getUserByToken, editUserAccount,
} = require('../controller/user');

//GET ALL USER (ENDPOINT 1)
router.get("/users/fetch-all", getAllUser);

//GET USER DATA BY TOKEN
router.get("/users/fetch-by-token", getUserByToken);

//GET User By ID
router.get("/users/:userId", getUserById);

//Register new User
router.post("/users/register", postUser);

//Login user
router.post("/users/login", loginHandler);

//DELETE /users/:userId
router.delete("/users/:userId", deleteUser);

//PUT /users/edit-account
router.put("/users/user-account", upload.single('image'), editUserAccount)

module.exports = router;