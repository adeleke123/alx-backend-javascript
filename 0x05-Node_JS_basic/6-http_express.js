// import express
const express = require('express');

// Create a new Express app
const app = express();

// Define a route for the root endpoint '/'
app.get('/', (req, res) => {
  // Send response with the message "Hello Holberton School!"
  res.send('Hello Holberton School!');
});

// Listen on port 1245
app.listen(1245);

// Export app
module.exports = app;
