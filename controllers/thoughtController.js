// import models
const Thought = require('../models/Thought');
const User = require('../models/User');

// export Thought methods
module.exports = {
    // See all Thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // See 1 Thought by ID
    getThoughtbyID(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought exists with that ID!' })
                    : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // Create New Thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: thought._id } },
                    { new: true }
                );
            })
            .then((user) =>
                !user
                ? res.status(404).json({
                    message: 'Thought created, but no user found with that ID!',
                    })
                : res.json('Thought created!')
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // Update a Thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought exists with this ID!' })
                    : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // Delete a Thought
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) => {
                if (!thought) {
                    return res.status(404).json({ message: 'No thought exists with this ID!' })
                }
            })
            .then(() => {
                res.json({ message: 'Thought deleted!' });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // Create a reaction to a Thought
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.params.reactionId } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                ? res.status(404).json({ message: 'No thought exists with this ID!' })
                : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
        });
    },

    // Delete a reaction to a Thought
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                ? res.status(404).json({ message: 'No thought exists with this ID!' })
                : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
    });
    }
}