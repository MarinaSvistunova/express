// подключение express
const express = require("express");

// создание объекта приложения
const app = express();

// парсер для данных в формате JSON
const jsonParser = express.json();

app.post("/user", jsonParser, function(request, response) {
  console.log(request.body);
  if(!request.body) return response.sendStatus(400);

  // отправка ответа обратно
  response.json(request.body);
});

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});
// начало прослушивания подключения на 3000 порту
app.listen(3000);
