const hbs = require("hbs");
// подключение express
const express = require("express");
const expressHbs = require("express-handlebars");
// создание объекта приложения
const app = express();

// настройка для файлов layout
app.engine("hbs", expressHbs(
  {
    layoutsDir: "views/layouts",
    defaultLayout: "layouts",
    extname: "hbs"
  }
));

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use("/contact", function(request, response){
  response.render("contact.hbs", {
    title: "Мои контакты",
    emailsVisible: true,
    emails: ["sv.marina.97@gmail.com", "sv.marina.97@outlook.com"],
    phone: "+1234567890"
  });
});

app.use("/", function(request, response){
  response.render("home.hbs");
});
// начало прослушивания подключения на 3000 порту
app.listen(3000);
