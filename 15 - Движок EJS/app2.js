// подключение express
const express = require("express");

// создание объекта приложения
const app = express();

app.set("view engine", "ejs");

app.use("/contact", function(request, response){

    response.render("contact", {
        title: "Мои контакты",
        emailsVisible: true,
        emails: ["sv.marina.97@gmail.com", "sv.marina.97@outlook.com"],
        phone: "+1234567890"
    });
});

app.use("/", function(request, response){

    response.send("Главная страница");
});

// начало прослушивания подключения на 3000 порту
app.listen(3000);
