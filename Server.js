import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const PORT = process.env.PORT || 5000;
const app = express();
app.disable("x-powered-by");

app.use(cors());
app.use(express.json());

// Ruta raíz
app.get("/", (req, res) => {
  res.send("Bienvenido a mi servidor");
});

// Rutas de usuarios
app.use(userRoutes);

// Servidor en ejecución
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
