// import User model
const User = require('../models/User');

// export user controller
module.exports = {
    // See All Users
    getUsers(req, res) {
        User.find()
          .then((users) => res.json(users))
          .catch((err) => res.status(500).json(err));
    },
    // See 1 User by ID
    getUserbyID(req, res) {
        User.findOne({ _id: req.params.userId })
          .select('-__v')
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
    // Create New User
    createUser(req, res) {
        User.create(req.body)
          .then((dbUserData) => res.json(dbUserData))
          .catch((err) => res.status(500).json(err));
      },
};