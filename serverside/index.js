require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
 
const authRoutes = require('./routes/authorisation');

const { HoldingModel } = require('./model/holdingsmodel');
const { Positionmodel } = require('./model/positionmodel');
const { Ordermodel } = require('./model/ordersmodel');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(express.json()); // replaces bodyParser.json()

app.use('/api/auth', authRoutes);

// MongoDB Connection and Server Start
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });

// Routes
app.get('/allholdings', async (req, res) => {
  const allHoldings = await HoldingModel.find({});
  res.send(allHoldings);
});

app.get('/allpositions', async (req, res) => {
  const allPositions = await Positionmodel.find({});
  res.send(allPositions);
});

app.post("/neworder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const newOrder = new Ordermodel({ name, qty, price, mode });
    await newOrder.save();
    res.send("Order saved!");
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).send("Internal server error");
  }
});
