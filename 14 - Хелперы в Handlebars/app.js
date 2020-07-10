const hbs = require("hbs");
// подключение express
const express = require("express");

// создание объекта приложения
const app = express();

hbs.registerHelper("getTime", function(){
  var myDate = new Date();
    var hour = myDate.getHours();
    var minute = myDate.getMinutes();
    var second = myDate.getSeconds();
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    return "Текущее время: " + hour + ":" + minute + ":" + second;
});

app.set("view engine", "hbs");

app.use("/", function(request, response){
  response.render("home.hbs");
});
// начало прослушивания подключения на 3000 порту
app.listen(3000);
