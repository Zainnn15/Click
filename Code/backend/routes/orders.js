const { Orders } = require("../models/orders");
const express = require("express");
const router = express.Router();

router.get("/user/:user", async (req, res) => {
  if (!req.params.user) return res.status(422).send({ message: `Provide user information` })
  let query = {
    user: req.params.user
  };
  let orders = await Orders.find(query);
  res.send(orders);
});

router.post("/", async (req, res) => {

  try {
    let order = new Orders(req.body);
    order = await order.save();

    res.send(order);
  } catch (err) {
    res.status(422).send({ err })
  }
});

module.exports = router;
