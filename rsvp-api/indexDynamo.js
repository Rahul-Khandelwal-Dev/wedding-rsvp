// index.js

const express = require('express');
const AWS = require('aws-sdk');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Configure AWS DynamoDB
AWS.config.update({
  region: 'us-east-1', // Change the region according to your DynamoDB configuration
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY'
});

// Create a new DynamoDB DocumentClient
const docClient = new AWS.DynamoDB.DocumentClient();

// API endpoint to handle RSVP data
app.post('/api/rsvp', (req, res) => {
  try {
    const { name, email, guests, response } = req.body;
    
    // Define parameters for DynamoDB put operation
    const params = {
      TableName: 'rsvp',
      Item: {
        name: name,
        email: email,
        guests: guests,
        response: response
      }
    };

    // Put item into DynamoDB
    docClient.put(params, (err, data) => {
      if (err) {
        console.error('Error saving RSVP:', err);
        res.status(500).json({ error: 'An error occurred while saving RSVP' });
      } else {
        console.log('RSVP saved successfully');
        res.status(201).json({ message: 'RSVP saved successfully' });
      }
    });
  } catch (error) {
    console.error('Error saving RSVP:', error);
    res.status(500).json({ error: 'An error occurred while saving RSVP' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
