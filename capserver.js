const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");

const app = express();
const db = new sqlite3.Database("./registrations.db");

app.use(bodyParser.json());
app.use(express.static("public")); // Serves static files (HTML, CSS, JS)

db.run(`CREATE TABLE IF NOT EXISTS registrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone TEXT NOT NULL
)`);

app.post("/register", (req, res) => {
    const { name, email, phone } = req.body;

    const query = `INSERT INTO registrations (name, email, phone) VALUES (?, ?, ?)`;
    db.run(query, [name, email, phone], function (err) {
        if (err) {
            res.status(400).json({ message: "Email already registered!" });
        } else {
            res.json({ message: "Registration successful!" });
        }
    });
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:8080");
});
