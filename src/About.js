import {Typography, Box} from '@mui/material';
import NavBar from './NavBar';
import './App.css';


export default function About() {
   return(
    <div className='App'>
        <NavBar />
       <div className='App-header'>

        <Typography variant="h2">About</Typography>
       </div>
       <div className='mainBody'>
        <Box >
      
      <Typography variant='h1' sx={{my: 1, mt: 2}}>Our Goal</Typography>
      <Typography variant='h3'>
          *Prototype Version*
        </Typography>

        <Typography variant= 'body2' sx={{my: 4, mt: 2, whiteSpace: 'pre-line'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
          <Typography variant= 'body2'  sx={{my: 4, mt: 2}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
         
          </Box>
        </div>
        
       <footer>
        <Typography>
          ©The Undercover Project - 2024
          </Typography>
        </footer>
    </div>
        
   );
}

