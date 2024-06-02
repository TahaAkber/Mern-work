const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url).pathname;
  if (reqUrl == "/") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain");
    res.write("hello world");
    res.end();
  }
});

server.listen(3001, (req, res) => {
  console.log(`server is connected at localhost:${3001}`);
});
