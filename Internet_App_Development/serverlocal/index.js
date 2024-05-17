const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url).pathname;

  if (reqUrl == "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "Text/plain");
    res.write("helloworld");
    res.end();
  } else if (reqUrl == "/home") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "Text/plain");
    res.write("I love you from home");
    res.end();
  } else if (reqUrl == "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "Text/plain");
    res.write("About us");
    res.end();
  }
});

const port = 3000;
server.listen(port, (req, res) => {
  console.log(`Server running at http://localhost:${port}/`);
});
