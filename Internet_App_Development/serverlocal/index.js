const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "Text/plain");
  res.write("helloworld");
  res.end();
});
const port = 3000;

server.listen(port, (req, res) => {
  console.log(`Server running at http://localhost:${port}/`);
});
