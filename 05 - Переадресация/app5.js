// подключение express
const express = require("express");

// создание объекта приложения
const app = express();

app.use("/home/foo/bar", function(request, response){
  response.redirect("./about")
});

app.use("/home/foo/about", function(request, response){
  response.send("<h1>About</h1>");
});
// начало прослушивания подключения на 3000 порту
app.listen(3000);
