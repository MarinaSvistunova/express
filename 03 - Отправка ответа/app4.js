// подключение express
const express = require("express");

// создание объекта приложения
const app = express();

app.use("/static", express.static(__dirname + "/public"));

app.use("/", function(request, response){
  response.send("<h1>Главная страница</h1>");
});

// начало прослушивания подключения на 3000 порту
app.listen(3000);
