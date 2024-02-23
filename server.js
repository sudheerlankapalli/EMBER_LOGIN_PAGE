//backend/server.js
/* eslint-disable no-undef */
const express = require('express');
// eslint-disable-next-line no-undef
const mysql = require('mysql2');
var cors = require('cors');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'user_data',
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected');
});

app.use(express.json());
app.use(cors());

// Route to handle form submission
app.post('/submit-form', (req, res) => {
  const { firstName, lastName, email, phoneNumber, address } = req.body;
  const sql =
    'INSERT INTO user (first_name, last_name, email, phone_number, address) VALUES (?, ?, ?, ?, ?)';
  db.query(
    sql,
    [firstName, lastName, email, phoneNumber, address],
    // eslint-disable-next-line no-unused-vars
    (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.set('Access-Control-Allow-Origin', '*');
        res.status(200).json({ message: 'Data inserted successfully' });
      }
    },
  );
});
app.get('/', (req, res) => {
  // Send the contents of the index.html file
  res.set('Access-Control-Allow-Origin', '*');
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
