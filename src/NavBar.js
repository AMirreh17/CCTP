import { AppBar, IconButton, Stack, Toolbar, Typography, Button, Drawer, Box} from "@mui/material"; //importing functions/variables, Typography, Box, Button, Drawer, Appbar, Toolbar, Stack and IconButton from a react library called Material UI. This is referenced from the Material Ui documentsation: https://mui.com/components/
import MenuIcon from '@mui/icons-material/Menu'; // Importing MenuIcon component from the Material UI Icons library. This is referenced from: https://mui.com/material-ui/material-icons/
import HomeIcon from '@mui/icons-material/Home'; // Importing HomeIcon component from the Material UI Icons library. This is referenced from: https://mui.com/material-ui/material-icons/
import {useState} from 'react'; // importing the function useState from react


export default function NavBar() {

const [isDrawerOpen, setIsDrawerOpen] = useState(false); // This line of code is based from the Drawer tutorial from Codevolution. Reference: https://www.youtube.com/watch?v=wnCYd0l1OJw&t=261s
return (
//The Appbar/Toolbar/Stack sections were originally built from the Navbar tutorial from Codevolution. Reference: https://www.youtube.com/watch?v=y9iX6sfB40k
<AppBar position="sticky" style={{background: '#111111', minHeight: "65px"}}> 
 <Toolbar>
    <IconButton size='large' edge='start' color='inherit' aria-label="logo" onClick={() => setIsDrawerOpen(true)}>{/*// This line of code is based from the Drawer tutorial from Codevolution. Reference: https://www.youtube.com/watch?v=wnCYd0l1OJw&t=261s */}
    <MenuIcon /> {/*The MenuIcon function is added here */}
    </IconButton> 
    <IconButton size='large' edge='start' color='inherit' aria-label="logo"  href="/CCTP/" > 
    <HomeIcon /> {/*The HomeIcon function is added here */}
    </IconButton>
    <Typography variant="h6"></Typography>
    <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
     
    </Typography>
    <Stack direction='row' spacing={2}>

     <a href='/CCTP/#Background'> {/*Button is added here with custom styling through tailwind css. Tutorial reference: https://www.youtube.com/watch?v=z1EqQft4VsM&t */}
     <button class=" bg-amber-50 font-semibold transition ease-in-out delay-150 uppercase px-3 py-2 text-sm text-black  hover:bg-black rounded font-sans hover:text-white" > Background</button>
     </a>
     <a href='/CCTP/#AIResources'> {/*Button is added here with custom styling through tailwind css. Tutorial reference: https://www.youtube.com/watch?v=z1EqQft4VsM&t */}
     <button class=" bg-amber-50 font-semibold transition ease-in-out delay-150 uppercase px-3 py-2 text-sm text-black  hover:bg-black rounded font-sans hover:text-white" > AI Resources</button>
     </a>
     
    </Stack>
   {/*This section of code is based from the Drawer tutorial from Codevolution. Reference: https://www.youtube.com/watch?v=wnCYd0l1OJw&t=261s */}
   <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
       <Box p={2} width='250px' textAlign='center' role='presentation'>
        <Typography variant='h6' component='div'>
                Welcome
        </Typography>
        <br></br>
        <Stack direction='column' spacing={2}>
      {/*These elements were added by myself*/}
       <Button color='inherit' href="/CCTP">Home</Button>
       <Button color='inherit' href="/CCTP/#about">About</Button>
       <Button color='inherit' href="/CCTP/#background">Background</Button>
       <Button color='inherit' href="/CCTP/#AIResources">AI Resources</Button>
       <Button color='inherit' href="/CCTP/#Awareness">Awareness</Button>
    </Stack>
       </Box>
   </Drawer>
 </Toolbar>
</AppBar>
)
}