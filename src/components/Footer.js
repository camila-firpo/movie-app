import * as React from 'react';
import "../index.css";
import { Facebook, Instagram, Twitter, Code } from '@mui/icons-material';
import { Box } from '@mui/system';


function Footer() {
    return (
        <Box sx={{border: '1px dashed grey', backgroundColor: '#241F1E', display: 'flex', alignItems: 'center', gap: '8px'}}>
                <a href="https://www.facebook.com">
          <Facebook />
        </a>
        <a href="https://www.instagram.com">
          <Instagram />
        </a>
        <a href="https://www.twitter.com">
          <Twitter />
        </a>
        <a href="https://reactjs.org">
          <Code />
        </a>
        </Box>
    );
  }
  
  export default Footer;