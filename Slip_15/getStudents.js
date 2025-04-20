const mysql = require('mysql');
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

db.connect(err => {
  if (err) throw err;
  db.query("SELECT * FROM students", (err, result) => {
    if (err) throw err;
    console.table(result);
  });
});

/*

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  age INT NOT NULL,
  grade VARCHAR(10)
);

INSERT INTO students (name, age, grade) VALUES
('John Doe', 20, 'A'),
('Jane Smith', 22, 'B'),
('Alice Johnson', 19, 'A'),
('Bob Brown', 21, 'C'),
('Charlie Davis', 23, 'B');
*/