const http = require("http");

const todos = [
  { id: 1, text: "Todo one" },
  { id: 2, text: "Todo two" },
  { id: 3, text: "Todo three" }
];
const server = http.createServer((req, res) => {
  res.writeHead(404, {
    "Content-Type": "application/json",
    "X-Powered-By": "MY BUTTHOLE"
  });

//   console.log(req.headers.authorization);

let body = []
  req.on('data', chunk => {
    body.push(chunk)
  }).on('end', () => {
      body = Buffer.concat(body).toString()
      console.log(body)
  })

  res.end(
    JSON.stringify({
      success: true,
      data: todos,
    
    })
  );
});

const PORT = 8080;

server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
