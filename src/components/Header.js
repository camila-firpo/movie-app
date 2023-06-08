import * as React from 'react';
import Box from '@mui/material/Box';
import logo from './../img/logoE.png';
import "../index.css";
import { Typography } from '@mui/material';


function Header() {
    return (
        <Box sx={{ border: '1px dashed grey', backgroundColor: 'primary.button', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src={logo} alt="logoWeb" height={125} width={125} />
            <Typography variant="h3" align='center' color='primary.main'>Most Popular movies</Typography>
        </Box>
    );
}

export default Header;