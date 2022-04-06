// Import mongoose module
const mongoose = require('mongoose');

// Connect mongoose to MongoDB
mongoose.connect('mongodb://localhost:27017/socialMediaDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection to server
module.exports = mongoose.connection;