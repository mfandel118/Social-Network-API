// Import mongoose
const { Schema, model } = require('mongoose');
// Import Reaction schema
const Reaction = require('./Reaction');

// Schema to create Thought model
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    reactions: [
        Reaction
    ]
},
{
    toJSON: {
        virtuals: true
    },
    id: false
});

// Create virtual that retrieves length of thought's reactions array
thoughtSchema
    .virtual('reactionCount')
    // Getter function
    .get(function () {
        return this.reactions.length;
    })

// Initialize Thought model
const Thought = model('thought', thoughtSchema);

// Export Thought model
module.exports = Thought;