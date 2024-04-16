import { AppBar, IconButton, Stack, Toolbar, Typography, Button, Drawer, Box} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
//import AppLogo from '../src/assets/logo2.png';

import {useState} from 'react'


export default function NavBar() {
   const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    return (
<AppBar position="sticky" style={{background: '#111111', minHeight: "65px"}}>
   
 <Toolbar>
    <IconButton size='large' edge='start' color='inherit' aria-label="logo" onClick={() => setIsDrawerOpen(true)}> 
    <MenuIcon />
    </IconButton>
    <IconButton size='large' edge='start' color='inherit' aria-label="logo"  href="/CCTP/" > 
    <HomeIcon />
    </IconButton>
   
    <Typography variant="h6"></Typography>
    <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
     
    </Typography>
    <Stack direction='row' spacing={2}>

     <a href='/CCTP/#Background'>
     <button class=" bg-amber-50 font-semibold transition ease-in-out delay-150 uppercase px-3 py-2 text-sm text-black  hover:bg-black rounded font-sans hover:text-white" > Background</button>
     </a>
     <a href='/CCTP/#AIResources'>
     <button class=" bg-amber-50 font-semibold transition ease-in-out delay-150 uppercase px-3 py-2 text-sm text-black  hover:bg-black rounded font-sans hover:text-white" > AI Resources</button>
     </a>
     
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
       <Button color='inherit' href="/CCTP/#AIResources">AI Resources</Button>
       <Button color='inherit' href="/CCTP/#Awareness">Awareness</Button>
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