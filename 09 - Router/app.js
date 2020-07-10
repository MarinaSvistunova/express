// подключение express
const express = require("express");

// создание объекта приложения
const app = express();

// определение Router
const productRouter = express.Router();

// определение маршрутов и их обработчиков внутри роутера
productRouter.use("/create",function(request, response){
  response.send("Добавление товара");
});

productRouter.use("/:id",function(request, response){
  response.send(`Товар ${request.params.id}`);
});

productRouter.use("/",function(request, response){
  response.send("Список товаров");
});

// сопоставление роутера с конечной точкой "/products"
app.use("/products", productRouter);

app.use("/about", function(request, response){
  response.send("О сайте");
});

app.use("/", function(request, response){
  response.send("Главная страница");
});

// начало прослушивания подключения на 3000 порту
app.listen(3000);
