//import logo from './logo.svg';
import './App.css';
//import Appbar from './Appbar';

import { Box, Button,  Paper, Typography } from '@mui/material';
import NavBar from './NavBar';

//import welcomeimg from '../src/assets/image3.png';






export default function Home() {
    return (
        <div className="App">
      <NavBar />
      
      
      <header className="App-header"> 
      {
      //<img src={logo} className="App-logo" alt="logo" />
      }
      
        <Typography variant='h1' sx={{my: 4, }}>The Undecover Project</Typography>
        
       <Typography variant='h6'>
          Revealing the truth behind Artificial Intelligence within social media content and platforms
        </Typography>
        
        <br></br>
        <Button variant='contained' sx={{mt: 2}} href="/CCTP/#about">Learn More</Button>
      </header>
      
      <div className='mainBody'>
        <Box sx={{display: 'flex', flexDirection: {xs: "column", md: "row"},  justifyContent:'space-between', gap:3, m: 3,  }}>
       
      <Paper  elevation={16} square={false} style={{ width: {xs: 1, md:500}, padding: 10 }}>
        <Typography variant='h3'>Our Goal</Typography>
        <Typography sx={{mt: 2}}> 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        </Typography>
        
        <Button variant='outlined' sx={{mt: 2}} href="/CCTP/#about">Learn More</Button>
      </Paper>
      <Paper  elevation={12} square={false} style={{ width: {xs: 1, md:500}, padding: 10 }}>
        <Typography variant='h3'>What is AI?</Typography>
        <Typography sx={{mt: 2}}> 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        </Typography>
        
        <Button variant='outlined' sx={{mt: 2}} href="/CCTP/#background">Learn More</Button>
      </Paper>
      <Paper  elevation={12} square={false} style={{ width: {xs: 1, md:500}, padding: 10 }}>
        <Typography variant='h3'>Recommendations</Typography>
        <Typography sx={{mt: 2}}> 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        </Typography>
        
        <Button variant='outlined' sx={{mt: 2}} href="/CCTP/#recommendations">Learn More</Button>
        
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