// Import mongoose
const { Schema, Types } = require('mongoose');
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
        // Date getter function here
    },
},
{
    toJSON: {
        getters: true
    },
    id: false
})

// export Reaction schema
module.exports = reactionSchema;