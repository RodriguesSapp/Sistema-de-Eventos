import connection from "../config/db.js";

export const getUsers = (req, res) => {
    connection.query("SELECT * FROM users", (err, results) => {
        if (err) {
            console.error("Erro ao buscar usuários:", err);
            res.status(500).json({ error: "Erro no servidor"});
        } else {
            res.json(results);
        }
    });
};