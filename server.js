// import node modules for server connection
const express = require('express');
const db = require('./config/connect');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Start running server
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on http://localhost:${PORT}!`);
    });
  });