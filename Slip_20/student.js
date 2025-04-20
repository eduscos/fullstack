const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '' 
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');

  connection.query("CREATE DATABASE IF NOT EXISTS student_db", (err) => {
    if (err) throw err;
    console.log("Database 'student_db' created or already exists.");

    connection.changeUser({ database: 'student_db' }, (err) => {
      if (err) throw err;

      const tableQuery = `
        CREATE TABLE IF NOT EXISTS students (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(100),
          email VARCHAR(100),
          mobile VARCHAR(10),
          pincode VARCHAR(6)
        )
      `;

      connection.query(tableQuery, (err) => {
        if (err) throw err;
        console.log("Table 'students' created or already exists.");
        connection.end();
      });
    });
  });
});
