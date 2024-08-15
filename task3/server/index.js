const express = require('express');
const connection = require('./db');
const bcrypt = require('bcrypt');

const app = express();


const port = 8000;


app.use(express.json());
const salt = bcrypt.genSaltSync(10);
const secret = 'kalsdjc9sa8235-098*09sdf09846te=-w209359'


app.get('/', (req, res) => {
  res.send('Hello, World!');
});
//add user to the database
app.post('/register', async(req, res) =>{
  const {username, password} = req.body;
  try {
    const hashedPassword = await bcrypt.hashSync(password, salt);
    const query = `INSERT INTO users (username, password) VALUES (?, ?)`;
  connection.query(query,[username,hashedPassword],(err,result)=>{
    if (err) {
      console.error('Error inserting data:', err.stack);
      res.status(500).send('Error inserting data');
      return;
    }
    res.status(201).send(`User added with ID: ${result.insertId}`);
  })
  } catch (error) {
    console.error('Error hashing password:', error);
    res.status(500).send('Error processing your request');
  }
  
})

// Route to get all users from the database
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (error, results) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      res.status(500).send('Error retrieving data from database');
      return;
    }
    res.json(results);
  });
});


// Catch-all route for handling 404 errors
app.use((req, res, next) => {
  res.status(404).send('Sorry, we could not find that resource!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
