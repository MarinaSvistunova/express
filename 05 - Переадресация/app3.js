// подключение express
const express = require("express");

// создание объекта приложения
const app = express();

app.use("/home/bar", function(request, response){
  response.redirect("about")
});

app.use("/home/about", function(request, response){
  response.send("<h1>About</h1>");
});
// начало прослушивания подключения на 3000 порту
app.listen(3000);
