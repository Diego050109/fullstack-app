const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// 🔥 conexión a Mongo
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch((error) => console.log("Error MongoDB:", error));

// rutas
app.get("/", (req, res) => {
  res.send("Backend funcionando");
});

app.get("/api/saludo", (req, res) => {
  res.json({ mensaje: "Hola desde la API" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});