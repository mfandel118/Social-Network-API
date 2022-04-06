// Import mongoose
const { Schema, model } = require('mongoose');
const User = require('./User');

// Schema to create Reaction model
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
},
{
    toJSON: {
        virtuals: true
    },
    id: false
})

// Initialize Reaction model
const User = model('reaction', reactionSchema);

module.exports = Reaction;