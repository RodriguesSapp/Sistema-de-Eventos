import mysql from "mysql2";
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sistemaDeEventos"
});

connection.connect((err) => {
    if (err) {
        console.error("Erro ao conectar no MySQL:", err);
    } else {
        console.log("Conectado ao MySQL com sucesso!");
    }
});

export default connection;
