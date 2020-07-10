// подключение express
const express = require("express");

// создание объекта приложения
const app = express();

app.set("view engine", "hbs");

app.use("/contact", function(request, response){
  response.render("contact.hbs");
});

app.use("/", function(request, response){
  response.send("Главная страница");
});
// начало прослушивания подключения на 3000 порту
app.listen(3000);
