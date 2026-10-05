const http = require("http");

const PORT = 5004;

const server = http.createServer((req, res) => {
  res.end("Hello from GitHub Actions + Docker!");
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
