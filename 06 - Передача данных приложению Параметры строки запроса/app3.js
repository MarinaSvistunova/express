// подключение express
const express = require("express");

// создание объекта приложения
const app = express();

app.get("/", function(request, response){
  response.send("<h1>Главная страница</h1>");
});

app.use("/about", function(request, response){
  console.log(request.query);
  let id = request.query.user.id;
  let name = request.query.user.name;
  response.send("<h3>id:" + id + "<br>name: " + name + "</h3>");
});
// начало прослушивания подключения на 3000 порту
app.listen(3000);
