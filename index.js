var http = require("http");
var hostname = "127.0.0.1";
var port = 8080;

const server = http.createServer(function (req, res) {
  const path = req.url;
  const method = req.method;

  if (path === "/products") {
    if (method === "GET") {
      res.writeHead(200, { "Contect-Type": "application/json" });
      res.end(
        JSON.stringify([
          {
            products: [
              {
                id: 1,
                name: "농구공",
                price: 100000,
                seller: "조던",
                imageUrl: "images/products/basketball1.jpeg",
              },
              {
                id: 2,
                name: "축구공",
                price: 50000,
                seller: "메시",
                imageUrl: "images/products/soccerball1.jpg",
              },
              {
                id: 3,
                name: "키보드",
                price: 10000,
                seller: "그랩",
                imageUrl: "images/products/keyboard1.jpg",
              },
            ],
          },
        ])
      );
    } else if (method === "POST") {
      res.end("생성되었습니다!");
    }
  }
});

server.listen(port, hostname);

console.log("grab market server on!");
