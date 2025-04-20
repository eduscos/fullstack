const mysql = require('mysql');
const conn = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "testdb" });

conn.connect(err => {
  if (err) throw err;
  conn.query("SELECT * FROM customers WHERE name LIKE 'A%'", (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});

/*

CREATE TABLE customers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(15)
);

INSERT INTO customers (name, email, phone) VALUES
('Alice Johnson', 'alice@example.com', '1234567890'),
('Andrew Brown', 'andrew@example.com', '9876543210'),
('Amanda Davis', 'amanda@example.com', '4567891230'),
('Bob Smith', 'bob@example.com', '7891234560'),
('Charlie Adams', 'charlie@example.com', '3216549870');
*/
