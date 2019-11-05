const http = require("http");

const todos = [
  { id: 1, text: "Todo one" },
  { id: 2, text: "Todo two" },
  { id: 3, text: "Todo three" }
];
const server = http.createServer((req, res) => {
  const { method, url } = req;
  //   console.log(req.headers.authorization);

  let body = [];
  req
    .on("data", chunk => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();

      let status = 404;

      const response = {
        success: true,
        data: null
      };

      if (method === "GET" && url === "/todos") {
        status = 200;
        response.success = true;
        response.data = todos;
      } else if (method === "POST" && url === "/todos") {
        const { id, text } = JSON.parse(body);

        if (!id || !text) {
          status = 400;
        } else {
          todos.push({ id, text });
          status = 201;
          response.success = true;
          response.data = todos;
        }
        res.writeHead(status, {
          "Content-Type": "application/json",
          "X-Powered-By": "MY BUTTHOLE"
        });

        res.end(JSON.stringify(response));
      }
    });
});

const PORT = 8080;

server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
