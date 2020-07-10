// подключение express
const express = require("express");

// создание объекта приложения
const app = express();

app.use(function(request, response, next){
  console.log("Middleware 1");
  next()
});

app.use(function(request, response, next){
  console.log("Middleware 2");
  next();
});

app.get("/", function(request, response){
  console.log("Route /");
  response.send("Hello");
});

// начало прослушивания подключения на 3000 порту
app.listen(3000);
