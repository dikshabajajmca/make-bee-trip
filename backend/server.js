const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Make Bee Trip Backend Running ");
});


app.get("/api/flights", (req, res) => {
  res.json([
    {
      airline: "IndiGo",
      from: "Delhi",
      to: "Mumbai",
      departure: "10:00 AM",
      arrival: "12:00 PM",
      price: 4500,
    },
    {
      airline: "Air India",
      from: "Delhi",
      to: "Mumbai",
      departure: "1:00 PM",
      arrival: "3:30 PM",
      price: 5200,
    },
    {
      airline: "SpiceJet",
      from: "Delhi",
      to: "Mumbai",
      departure: "6:00 PM",
      arrival: "8:30 PM",
      price: 4800,
    },
  ]);
});

app.get("/api/bus", (req, res) => {
  res.json([
    { operator: "Volvo Travels", price: 1200 },
    { operator: "RedBus Express", price: 900 },
  ]);
});

app.get("/api/train", (req, res) => {
  res.json([
    { train: "Rajdhani Express", price: 2000 },
    { train: "Shatabdi Express", price: 1500 },
  ]);
});

app.get("/api/hotel", (req, res) => {
  res.json([
    { hotel: "Taj Hotel", price: 5000 },
    { hotel: "Moon Rooms", price: 1500 },
  ]);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});