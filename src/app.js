const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "API de usuarios funcionando",
    endpoints: {
      health: "/health",
      users: "/api/users",
    },
  });
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/users", userRoutes);

module.exports = app;
