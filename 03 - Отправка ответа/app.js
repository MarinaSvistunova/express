// подключение express
const express = require("express");

// создание объекта приложения
const app = express();

app.use(function(request, response){
  response.sendFile(__dirname + "/index.html");
});
// начало прослушивания подключения на 3000 порту
app.listen(3000);
