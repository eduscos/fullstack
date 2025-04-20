const mysql = require('mysql');

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",     
  database: "college"
});

conn.connect((err) => {
  if (err) {
    console.error("Connection error:", err.message);
    return;
  }

  console.log("Connected to MySQL!");

  let sql = "SELECT * FROM Teacher WHERE salary > 20000";
  conn.query(sql, (err, result) => {
    if (err) {
      console.error("Query error:", err.message);
      return;
    }

    console.log("Teachers with salary > 20000:");
    console.table(result);

    conn.end(); 
  });
});




// SQL 

// CREATE DATABASE college;

// USE college;

// CREATE TABLE Teacher (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(100),
//   subject VARCHAR(100),
//   salary INT
// );

// INSERT INTO Teacher (name, subject, salary) VALUES
// ('Ravi', 'Math', 18000),
// ('Neha', 'Physics', 25000),
// ('Anil', 'Chemistry', 22000

