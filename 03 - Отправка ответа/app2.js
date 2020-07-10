// подключение express
const express = require("express");

// создание объекта приложения
const app = express();

app.use("/home/foo/bar", function(request, response){
  response.sendStatus(404);
});

// начало прослушивания подключения на 3000 порту
app.listen(3000);
