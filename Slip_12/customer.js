const mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "your_db_name" // Replace with your actual database name
});

db.connect(err => {
  if (err) throw err;
  console.log("Connected!");

  db.query("SELECT * FROM customers", (err, result) => {
    if (err) throw err;
    console.log(result); // Display all customer records
  });
});


// -- Create database
// CREATE DATABASE IF NOT EXISTS mydb;

// -- Use the database
// USE mydb;

// -- Create customers table
// CREATE TABLE IF NOT EXISTS customers (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(100),
//   email VARCHAR(100),
//   city VARCHAR(50)
// );

// -- Insert sample records
// INSERT INTO customers (name, email, city) VALUES
// ('Amit Sharma', 'amit@example.com', 'Pune'),
// ('Sneha Joshi', 'sneha@example.com', 'Mumbai'),
// ('Rahul Mehta', 'rahul@example.com', 'Delhi');