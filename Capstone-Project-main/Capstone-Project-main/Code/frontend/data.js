const express = require("express");

const cors = require("cors");
const app = express();
const { MongoClient } = require("mongodb");
const mongodb = require("mongodb");

app.use(cors());
app.use(express.json());

const main = async () => {
  const uri =
    "mongodb+srv://burr:rupin123@clickdb.ojxlzbo.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  try {
    const FoodCollection = client.db("Products").collection("foodData");
    const CartCollection = client.db("Products").collection("Cart");
    const AccountCollection = client.db("Account").collection("login");

    app.get("/food", async (req, res) => {
      console.log("sadasd", req);
      const cursor = FoodCollection.find({});
      const food = await cursor.toArray();

      console.log("food", food);
      res.send(food);
    });

    app.get("/cart", async (req, res) => {
      const cursor = CartCollection.find({});
      const food = await cursor.toArray();
      res.send(food);
    });

    app.post("/cart/:id", async (req, res) => {
      const food = req.body;
      const result = await CartCollection.insertOne(food);
      res.send(result);
    });

    app.delete("/delete/:id", async (req, res) => {
      const id = req.params.id;
      await CartCollection.deleteOne({ _id: new mongodb.ObjectId(id) });
      res.send("deleted");
    });
  } catch (error) {
    console.log(error);
  } finally {
  }
};

main().catch(console.error);

app.listen(3001, () => {
  console.log("Server running on port 3001... peany weany");
});
