const http = require('http');
const path = require('path');

const port = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.sendFile(path.join(__dirname, 'index.html'));
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
