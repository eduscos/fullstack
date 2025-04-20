const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(err => {
  if (err) throw err;
  console.log("Connected!");

  con.query("CREATE DATABASE IF NOT EXISTS movieDB", (err) => {
    if (err) throw err;
    console.log("Database created");

    const db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "movieDB"
    });

    db.connect(err => {
      if (err) throw err;

      const sql = `CREATE TABLE IF NOT EXISTS movies (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255),
        director VARCHAR(255),
        year INT
      )`;

      db.query(sql, (err) => {
        if (err) throw err;
        console.log("Table created");
      });
    });
  });
});
