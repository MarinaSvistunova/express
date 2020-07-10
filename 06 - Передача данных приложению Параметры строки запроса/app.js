// подключение express
const express = require("express");

// создание объекта приложения
const app = express();

app.get("/", function(request, response){
  response.send("<h1>Главная страница</h1>");
});

app.use("/about", function(request, response){
  let id = request.query.id;
  let userName = request.query.name;
  response.send("<h1>Информация</h1><p>id=" + id + "</p><p>name=" + userName + "</p>");
});
// начало прослушивания подключения на 3000 порту
app.listen(3000);
