require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/config/db");

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  } catch (error) {
    console.error("No se pudo iniciar la API:", error.message);
    process.exit(1);
  }
};

startServer();
