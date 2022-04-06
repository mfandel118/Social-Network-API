// import express router
const router = require('express').Router();
// import controller functions
const { getThoughts, getThoughtbyID, createThought, updateThought, deleteThought, addReaction, deleteReaction } = require('../../controllers/thoughtController')

// route: /api/thoughts
router.route('/')
    .get(getThoughts)
    .post(createThought);

// route: /api/thoughts/:thoughtId
router.route('/:thoughtId')
    .get(getThoughtbyID)
    .put(updateThought)
    .delete(deleteThought);

// route: /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
    .post(addReaction)

// route: /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction)

// export router
module.exports = router;