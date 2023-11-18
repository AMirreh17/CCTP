//import logo from './logo.svg';
import './App.css';
//import Appbar from './Appbar';

import { Box, Button, Paper, Typography } from '@mui/material';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
     
      
      <header className="App-header"> 
      {
      //<img src={logo} className="App-logo" alt="logo" />
      }
        <Typography variant='h1' sx={{my: 4, }}>The Undercover Project</Typography>
        <Typography variant='h2'>
          Revealing the truth behind Artificial Intelligence within Social Media Content/Platforms
        </Typography>
    
      </header>
      <div className='mainBody'>
        <Box >
      
      <Typography variant='h1' sx={{my: 1, mt: 2}}>Welcome to Our Website</Typography>
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
      <div className='mainBody'>
        <Box sx={{display: 'flex', flexDirection: {xs: "column", md: "row"},  justifyContent:'space-between', gap:3, m: 3,  }}>
       
      <Paper  elevation={16} square={false} style={{ width: {xs: 1, md:500}, padding: 10 }}>
        <Typography variant='h3'>How can AI improve your Social Media</Typography>
        <Typography sx={{mt: 2}}> 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        </Typography>
        
        <Button variant='outlined' sx={{mt: 2}}>Learn More</Button>
      </Paper>
      <Paper  elevation={12} square={false} style={{ width: {xs: 1, md:500}, padding: 10 }}>
        <Typography variant='h3'>The Dangers of AI on Social Media</Typography>
        <Typography sx={{mt: 2}}> 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        </Typography>
        
        <Button variant='outlined' sx={{mt: 2}}>Learn More</Button>
      </Paper>
      <Paper  elevation={12} square={false} style={{ width: {xs: 1, md:500}, padding: 10 }}>
        <Typography variant='h3'>Is AI really bad for you?</Typography>
        <Typography sx={{mt: 2}}> 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        </Typography>
        
        <Button variant='outlined' sx={{mt: 2}}>Learn More</Button>
        
      </Paper>
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

export default App;
