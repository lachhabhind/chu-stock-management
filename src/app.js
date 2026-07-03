const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Route de test
app.get("/", (req, res) => {
    res.json({
        message: "Bienvenue dans l'API CHU Stock Management 🚀"
    });
});

module.exports = app;