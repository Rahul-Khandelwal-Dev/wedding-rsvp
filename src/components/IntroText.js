// IntroText.js

import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function IntroText() {
  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <Typography variant="h5" gutterBottom>
        You're invited!
      </Typography>
      <Typography variant="body1" gutterBottom>
        We are excited to celebrate our special day with you.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Please RSVP by filling out the form below.
      </Typography>
      <Typography variant="body1">
        For more details, visit our <Link href="https://example.com" target="_blank">wedding website</Link>.
      </Typography>
      <Typography variant="body1">
        Find us on <Link href="https://maps.google.com" target="_blank">Google Maps</Link>.
      </Typography>
    </div>
  );
}

export default IntroText;
