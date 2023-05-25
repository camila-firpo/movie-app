import * as React from 'react';
import "../footer.css";
import { Facebook, Instagram, Twitter, Code } from '@mui/icons-material';
import { Box } from '@mui/system';


function Footer() {
    return (
      <Box sx={{border: '1px dashed grey', backgroundColor: '#241F1E', display: 'flex', height: '200px', width: '1441px'}}>

        <Box sx={{border: '3px dashed grey', backgroundColor: '#241F1E', height: '50px', width: '300px', marginTop: '70px', marginLeft: '550px'}}>
          <p>@2023 EuripidesMovie</p>
        </Box>
        <Box sx={{height: '200px', width: '50px', marginLeft: '1300px', position: 'absolute'}}>
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
      </Box>
    );
  }
  

  export default Footer;