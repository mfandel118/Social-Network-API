// import express router
const router = require('express').Router();
// import controller methods
const { getUsers, getUserbyID, createUser, updateUser, deleteUser } = require('../../controllers/userController')

// route: /api/users
router.route('/')
    .get(getUsers)
    .post(createUser);

// route: /api/users/:userId
router.route('/:userId')
    .get(getUserbyID)
    .put(updateUser)
    .delete(deleteUser);

// route: /api/users/:userId/friends/:friendId


// export router
module.exports = router;