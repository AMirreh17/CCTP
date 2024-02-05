import { AppBar, IconButton, Stack, Toolbar, Typography, Button, Drawer, Box} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
//import AppLogo from '../src/assets/logo2.png';

import {useState} from 'react'


export default function NavBar() {
   const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    return (
<AppBar position="static" style={{background: 'transparent'}}>
   
 <Toolbar>
    <IconButton size='large' edge='start' color='inherit' aria-label="logo" onClick={() => setIsDrawerOpen(true)}>
     {
      //<img src={AppLogo} width="40" height="40" alt=""/>
     }   
    <MenuIcon />
    </IconButton>
    <Typography variant="h6">The Undercover Project</Typography>
    <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
     
    </Typography>
    <Stack direction='row' spacing={2}>
      {
       //<Button color='inherit' href="/CCTP">Home</Button>
       //<Button color='inherit' href="/CCTP/#about">About</Button>
       //<Button color='inherit' href="/CCTP/#background">Background</Button>
       //<Button color='inherit' href="/CCTP/#recommendations">Recommendations</Button>
       
        //<Button color='inherit' href="/CCTP/#showcase">Showcase</Button>
       }
    </Stack>
   <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
       <Box p={2} width='250px' textAlign='center' role='presentation'>
        <Typography variant='h6' component='div'>
                Welcome
        </Typography>
        <br></br>
        <Stack direction='column' spacing={2}>
        <Button color='inherit' href="/CCTP">Home</Button>
       <Button color='inherit' href="/CCTP/#about">About</Button>
       <Button color='inherit' href="/CCTP/#background">Background</Button>
       <Button color='inherit' href="/CCTP/#recommendations">Recommendations</Button>
       {
        //<Button color='inherit' href="/CCTP/#showcase">Showcase</Button>
       }
    </Stack>
       </Box>
   </Drawer>
 </Toolbar>
</AppBar>
)
}