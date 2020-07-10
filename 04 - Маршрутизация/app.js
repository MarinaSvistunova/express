// подключение express
const express = require("express");

// создание объекта приложения
const app = express();

app.use("/static", express.static(__dirname + "/public"));

app.get("/bo?k", function(request, response){
  response.send(request.url)
});

app.get("/bo+k", function(request, response){
  response.send(request.url)
});

app.get("/bo*k", function(request, response){
  response.send(request.url)
});

app.get("/book(.html)?", function(request, response){
  response.send(request.url)
});

app.get(/.*(\.)html$/, function(request, response){
  response.send(request.url)
});

app.use("/", function(request, response){
  response.send("<h1>Главная страница</h1>");
});

// начало прослушивания подключения на 3000 порту
app.listen(3000);
