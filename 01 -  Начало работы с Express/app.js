// подключение express
const express = require("express");

// создание объкта приложения
const app = express();

// определение обработчика для создания маршрута "/"
app.get("/", function(request, response){
  // отправка ответа
  response.send("<h2>Привет Express!</h2>");
});

// начало прослушивания подключения на 3000 порту
app.listen(3000);
