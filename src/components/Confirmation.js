// Confirmation.js

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Confirmation() {
  return (
    <Box sx={{ maxWidth: 400, margin: '0 auto', mt: 4, p: 2, textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Thank You!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Your RSVP has been successfully submitted.
      </Typography>
      <Typography variant="body1">
        We look forward to seeing you at our wedding!
      </Typography>
    </Box>
  );
}

export default Confirmation;
