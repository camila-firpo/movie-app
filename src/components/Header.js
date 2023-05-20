import * as React from 'react';
import Box from '@mui/material/Box';
import logo from './../img/logoE.png';
import "../index.css";


function Header() {
    return (
    <Box sx={{border: '1px dashed grey', backgroundColor: '#1976D2', display: 'flex', alignItems: 'center', gap: '8px'}}>
        <img src={logo} alt="logoE"/>
        <h2>MOST POPULAR MOVIES</h2>
    </Box>
    );
  }
  
  export default Header;