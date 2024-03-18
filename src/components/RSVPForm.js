// RSVPForm.js

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

function RSVPForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState('');
  const [response, setResponse] = useState('accept'); // Default response

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, guests, response });
    setName('');
    setEmail('');
    setGuests('');
    setResponse('accept'); // Reset response after submission
  };

  return (
    <Box sx={{ maxWidth: 400, margin: '0 auto', mt: 4, p: 2 }}>
      <form onSubmit={handleSubmit}>
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
        <FormControl component="fieldset" sx={{ mt: 2 }}>
          <FormLabel component="legend">Response</FormLabel>
          <RadioGroup
            aria-label="response"
            name="response"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
          >
            <FormControlLabel value="accept" control={<Radio />} label="Accept with Pleasure" />
            <FormControlLabel value="decline" control={<Radio />} label="Decline with Regards" />
          </RadioGroup>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit RSVP
        </Button>
      </form>
    </Box>
  );
}

export default RSVPForm;
