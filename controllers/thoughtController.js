// import Thought model
const Thought = require('../models/Thought');

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
                    ? res.status(404).json({ message: 'No thought with that ID' })
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
            .then((thought) => res.json(thought))
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
                    : res.json(user)
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
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    }
    // Create a reaction to a Thought

    // Delete a reaction to a Thought

}