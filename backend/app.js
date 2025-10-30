import express from "express";
import dontenv from "dotenv";
import connection from "./config/db";
import userRoutes from "./routes/userRoutes.js";

dontenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Servidor rodando!");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});