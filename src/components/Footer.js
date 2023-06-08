import * as React from 'react';
import "../footer.css";
import { Facebook, Instagram, Twitter, Code } from '@mui/icons-material';
import { Box } from '@mui/system';
import { Link, Typography } from '@mui/material';


function Footer() {
  return (
    <Box sx={{ border: '1px dashed grey', backgroundColor: '#241F1E', display: 'flex', height: '200px', width: '100%' }}>

      <Box sx={{ border: '3px dashed grey', backgroundColor: '#241F1E', height: '50px', width: '300px', marginTop: '70px', marginLeft: '550px' }}>
        <Typography>@2023 EuripidesMovie</Typography>
      </Box>
      <Box sx={{ height: '200px', width: '50px', marginLeft: '1300px', position: 'absolute' }}>
        <Box sx={{ marginBottom: '10px' }}>
          <Link href="https://www.facebook.com">
            <Facebook />
          </Link>
        </Box>
        <Box sx={{ marginBottom: '10px' }}>
          <Link href="https://www.instagram.com">
            <Instagram />
          </Link>
        </Box>
        <Box sx={{ marginBottom: '10px' }}>
          <Link href="https://www.twitter.com">
            <Twitter />
          </Link>
        </Box>
        <Box sx={{ marginBottom: '10px' }}>
          <Link href="https://reactjs.org">
            <Code />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}


export default Footer;