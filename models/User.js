// Import model & schema
const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        // matching validation here
    },
    thoughts: [{
       // Thought model reference here
    }],
    friends: [{
        // Friend model reference here
    }]
},
{
    toJSON: {
        virtuals: true
    },
    id: false
});

// Create virtual that retrieves length of user's friend array
userSchema
    .virtual('friendCount')
    // Getter function
    .get(() => {
        return this.friends.length;
    })

// Export User model
module.exports = User;