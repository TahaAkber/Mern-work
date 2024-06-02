const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("content-type", "text/plain");
  res.write("Hello World!");
  res.end();
});

app.post("/", (req, res) => {
  const body = req.body;

  // Set appropriate content type for JSON response
  res.setHeader("Content-Type", "application/json");

  // Write the body as a JSON string
  result = res.write(JSON.stringify(body));
  res.json(result);
  res.end();
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
