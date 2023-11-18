import logo from './logo.svg';
import './App.css';
import Appbar from './Appbar';
import { Box, Button, Paper, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Appbar/>
      <title>The Undercover Project</title>
      <header className="App-header"> 
      <img src={logo} className="App-logo" alt="logo" />
        <Typography variant='h1' sx={{my: 4, }}>The Undercover Project</Typography>
        <Typography variant='h2'>
          Revealing the truth behind Artificial Intelligence within Social Media Content/Platforms
        </Typography>
    
      </header>
      <div className='mainBody'>
        <Box sx={{display: 'flex', flexDirection: {xs: "column", md: "row"},  justifyContent:'space-between', gap:3, m: 3,  }}>
       
      <Paper  elevation={16} square={false} style={{ width: {xs: 1, md:300}, padding: 10 }}>
        <Typography variant='h3'>How can AI improve your Social Media</Typography>
        <Typography sx={{mt: 2}}> 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        </Typography>
        <br></br>
        <Button variant='contained'>Learn More</Button>
      </Paper>
      <Paper  elevation={12} square={false} style={{ width: {xs: 1, md:300}, padding: 10 }}>
        <Typography variant='h3'>The Dangers of AI on Social Media</Typography>
        <Typography sx={{mt: 2}}> 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        </Typography>
        <br></br>
        <Button variant='contained'>Learn More</Button>
      </Paper>
      <Paper  elevation={12} square={false} style={{ width: {xs: 1, md:200}, padding: 10 }}>
        <Typography variant='h3'>Is AI really bad for you?</Typography>
        <Typography sx={{mt: 2}}> 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        </Typography>
        <br></br>
        <Button variant='contained'>Learn More</Button>
        
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
