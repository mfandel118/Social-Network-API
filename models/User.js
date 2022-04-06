// Import mongoose
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
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please provide a valid email address']
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

// Initialize User model
const User = model('user', userSchema);

// Export User model
module.exports = User;