const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  // Set the response header to plain text
  res.setHeader('Content-Type', 'text/plain');

  // Handle requests based on the URL path
  if (req.url === '/') {
    // Handle the root URL
    res.statusCode = 200;
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    // Handle the /students URL

    // Get the database file from command-line arguments
    const databaseFile = process.argv[2];

    // Call the countStudents function to get the list of students
    countStudents(databaseFile)
      .then((studentData) => {
        // Display the studentData (list of students)
        res.statusCode = 200;
        res.write('This is the list of our students\n');
        res.write(studentData);
        res.end();
      })
      .catch(() => {
        // If error occurs during function call, display error message
        res.statusCode = 500;
        res.write('This is the list of our students\n');
        res.write('Cannot load the database');
        res.end();
      });
  } else {
    // Handle all other URLs
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Listen on port 1245
app.listen(1245);

// Export the app variable
module.exports = app;
