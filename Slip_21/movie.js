const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

conn.connect(err => {
    if (err) throw err;
    console.log("Connected to MySQL!");

    conn.query("CREATE DATABASE IF NOT EXISTS movieDB", (err) => {
        if (err) throw err;
        console.log("Database 'movieDB' created or already exists.");

        conn.changeUser({ database: "movieDB" }, (err) => {
            if (err) throw err;

            const sql = `
                CREATE TABLE IF NOT EXISTS movies (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    title VARCHAR(255),
                    year INT
                )
            `;
            conn.query(sql, (err) => {
                if (err) throw err;
                console.log("Movies table created or already exists.");
                conn.end();
            });
        });
    });
});
