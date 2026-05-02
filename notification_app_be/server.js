const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request received:", req.url);

  if (req.url === "/test") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Working ✅");
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(5050, () => {
  console.log("Server running at http://localhost:5050");
});