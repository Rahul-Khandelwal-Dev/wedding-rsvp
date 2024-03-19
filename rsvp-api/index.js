// index.js

const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'resvp',
  port: 5432,
});

// API endpoint to handle RSVP data
app.post('/api/rsvp', async (req, res) => {
  try {
    const { name, email, guests, response } = req.body;
    const query = 'INSERT INTO rsvp (name, email, guests, response) VALUES ($1, $2, $3, $4)';
    await pool.query(query, [name, email, guests, response]);
    res.status(201).json({ message: 'RSVP saved successfully' });
  } catch (error) {
    console.error('Error saving RSVP:', error);
    res.status(500).json({ error: 'An error occurred while saving RSVP' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
