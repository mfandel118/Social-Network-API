// import express router
const router = require('express').Router();
// import controller functions
const { getThoughts, getThoughtbyID, createThought, updateThought, deleteThought } = require('../../controllers/thoughtController')

// route: /api/thoughts
router.route('/')
    .get(getThoughts)
    .post(createThought);

// route: /api/thoughts/:thoughtId
router.route('/:userId')
    .get(getThoughtbyID)
    .put(updateThought)
    .delete(deleteThought);

// route: /api/thoughts/:thoughtId/reactions/:reactionId
// post & delete here

// export router
module.exports = router;