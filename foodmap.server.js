const http = require("http");

const html = `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>FoodMap</title>
  <style>
    body { font-family: Arial; background:#111; color:#fff; text-align:center; padding-top:50px; }
    button { padding:15px 25px; font-size:18px; cursor:pointer; }
  </style>
</head>
<body>
  <h1>FoodMap</h1>
  <p>Сервер работает ✅</p>
  <button onclick="document.body.style.background='#1e90ff'">
    Сменить цвет
  </button>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
});

server.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});const http = require("http");

const html = `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>FoodMap</title>
  <style>
    body { font-family: Arial; background:#111; color:#fff; text-align:center; padding-top:50px; }
    button { padding:15px 25px; font-size:18px; cursor:pointer; }
  </style>
</head>
<body>
  <h1>FoodMap</h1>
  <p>Сервер работает ✅</p>
  <button onclick="document.body.style.background='#1e90ff'">
    Сменить цвет
  </button>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
});

server.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
