const express = require("express");
const cors = require('cors');
const app = express();
const { MongoClient } = require('mongodb');

app.use(cors());
app.use(express.json());

const main = async () => {


    const uri = "mongodb+srv://burr:rupin123@clickdb.ojxlzbo.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
        const FoodCollection = client.db('Products').collection('foodData');
        const CartCollection = client.db('Products').collection('Cart');

        app.get("/food", async (req, res) => {
            const cursor = FoodCollection.find({});
            const food = await cursor.toArray();
            res.send(food)
        })
        app.get("/cart", async (req, res) => {
            const cursor = CartCollection.find({});
            const food = await cursor.toArray();
            res.send(food)
        })  
    } catch (error) {
        console.log(error);
    } finally {
    }
};

main().catch(console.error);


app.listen(3001, () => {
    console.log("Server running on port 3001... peany weany");
});