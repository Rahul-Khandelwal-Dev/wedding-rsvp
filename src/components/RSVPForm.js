import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

function RSVPForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState('');
  const [selectedResponse, setSelectedResponse] = useState('accept');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/rsvp', {
        name,
        email,
        guests,
        response: selectedResponse,
      });
      console.log(response.data); // Log the response from the server
      // Optionally, display a success message to the user
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      // Optionally, display an error message to the user
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>
          <label>
            <input
              type="radio"
              value="accept"
              checked={selectedResponse === 'accept'}
              onChange={() => setSelectedResponse('accept')}
            />
            Accept with Pleasure
          </label>
          <label>
            <input
              type="radio"
              value="decline"
              checked={selectedResponse === 'decline'}
              onChange={() => setSelectedResponse('decline')}
            />
            Decline with Regards
          </label>
        </div>
        <TextField
          fullWidth
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Number of Guests"
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit RSVP
        </Button>
      </form>
    </div>
  );
}

export default RSVPForm;
