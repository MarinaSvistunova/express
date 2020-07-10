// подключение express
const express = require("express");

// создание объкта приложения
const app = express();

// определение обработчика для создания маршрута "/"
app.get("/", function(request, response){
  // отправка ответа
  response.send("<h2>Главная страница</h2>");
});

app.get("/about", function(request, response){
  response.send("<h1>О сайте</h1>");
});

app.get("/contact", function(request, response){
  response.send("<h1>Контакты</h1>");
});
// начало прослушивания подключения на 3000 порту
app.listen(3000);
