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

hbs.registerHelper("createStringList", function(array){

    var result="";
    for(var i=0; i<array.length; i++){
        result +="<li>" + array[i] + "</li>";
    }
    return new hbs.SafeString("<ul>" + result + "</ul>");
});

app.set("view engine", "hbs");

app.use("/", function(request, response){
  response.render("home.hbs", {
        fruit: [ "apple", "lemon", "banana", "grape"]
    });
});
// начало прослушивания подключения на 3000 порту
app.listen(3000);
