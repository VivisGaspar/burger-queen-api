const express = require("express");
const app = express();
const db = require("./models/index");
const models = require("./models/");
const Users = models.Users;
const Orders = models.Orders;
const Products = models.Products;

app.get("/", (req, resp) => {
  resp.send("teste3");
});

app.post("/orders", (req, resp) => {
  Orders.create(req.body).then(o => {
    resp.send(o.dataValues);
  });
});

app.listen(3006, () => {
  console.log("agora vai");
});

db.sequelize.sync();
