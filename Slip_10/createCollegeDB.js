const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(err => {
  if (err) throw err;
  console.log("Connected!");

  con.query("CREATE DATABASE IF NOT EXISTS college", (err) => {
    if (err) throw err;
    console.log("Database created");

    const db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "college"
    });

    db.connect(err => {
      if (err) throw err;

      const sql = `CREATE TABLE IF NOT EXISTS students (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        department VARCHAR(255)
      )`;

      db.query(sql, (err) => {
        if (err) throw err;
        console.log("Table created");
      });
    });
  });
});
