const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const databaseFile = process.argv[2];

// Define a route for the endpoint '/' URL
app.get('/', (req, res) => {
  // Send the response
  res.send('Hello Holberton School!');
});

// Define a route for the endpoint '/students'
app.get('/students', (req, res) => {
  // Call function to get d list of students
  countStudents(databaseFile)
    // Display the studentData (list of students)
    .then((studentData) => res.send(`This is the list of our students\n${studentData}`))
    // If error occurs, display error message
    .catch(() => {
      res.write('This is the list of our students\n');
      res.write('Cannot load the database');
      res.end();
    });
});

// Listen on port 1245
app.listen(port);

// Export the app variable
module.exports = app;
