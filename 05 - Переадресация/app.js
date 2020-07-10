// подключение express
const express = require("express");

// создание объекта приложения
const app = express();

app.use("/index", function(request, response){
  response.redirect("https://metanit.com");
});

// начало прослушивания подключения на 3000 порту
app.listen(3000);
