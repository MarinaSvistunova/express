// подключение express
const express = require("express");

// создание объекта приложения
const app = express();

app.get("/", function(request, response){
  response.send("<h1>Главная страница</h1>");
});

app.use("/about", function(request, response){
  console.log(request.query);
  let names = request.query.name;
  let responseText = "<ul>";
  for(let i=0; i<names.length; i++){
    responseText += "<li>" + names[i] + "</li>";
  }
  responseText += "</ul>";
  response.send(responseText);
});
// начало прослушивания подключения на 3000 порту
app.listen(3000);
