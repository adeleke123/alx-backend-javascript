const http = require('http');

const app = http.createServer((req, res) => {
  // Set the response status code to 200
  res.statusCode = 200;

  // Set the response content type to text/plain
  res.setHeader('Content-Type', 'text/plain');

  //  Send the response body
  res.end('Hello Holberton School!');
});

// Listen on port
app.listen(1245);

// Export the app variable
module.exports = app;
