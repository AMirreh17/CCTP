//import logo from './logo.svg';
import './App.css';
//import Appbar from './Appbar';

import { Box, Button,  Paper, Typography, Grid } from '@mui/material';
import NavBar from './NavBar';
import {motion} from 'framer-motion';

import welcomeimg from '../src/assets/image4.png';
import welcomeimg2 from '../src/assets/image3.png';
import { Link } from 'react-router-dom';



const fadeInAnimationsVariants = {
 initial: {
  opacity:0,
  y: 100,
 },
 animate: {
  opacity: 1,
  y:0,
  transition: {
    delay: 0.05,
  }
 },
}


export default function Home() {
    return (
        <div className="App">
      <NavBar />
      
      
      <header className="App-header"> 
      {
      //<img src={logo} className="App-logo" alt="logo" />
      }
      <motion.div animate={{y: -50, opacity: 1}} initial={{ opacity:0}} transition={{duration: 1, ease: "easeOut"}}>
      
        <Typography fontSize="80px" variant='h1' sx={{my: 4, }}>The Undecover Project</Typography>
        
        
          <Typography variant='h6'>
          Revealing the truth behind Artificial Intelligence within social media content and platforms
        </Typography>
        <br></br>
        
       
        {
          //<Button variant='contained' sx={{mt: 2}} href="/CCTP/#about">Learn More</Button>
        }
        
        

        <Link to="/about">
        <motion.button whileHover={{scale: 1.2}}class="bg-white px-10 py-5 text-xl uppercase tracking-widest text-black rounded-full" href="/CCTP/#about"> Learn More</motion.button></Link>
      </motion.div>
        
      </header>
      
      <motion.div className="welcome" variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>

      <Grid container direction="row" my={4} className='text' spacing={2} columnSpacing={21}>
      
        <Grid item xs={9} sm={7}>
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Welcome our website</Typography>
          <Typography variant='h3'>
            *Prototype Version*
            </Typography>
            <br></br>
          <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged 
        </Typography>
        <br></br>
        </div>
        </Grid>
        <Grid item>
        <img src={welcomeimg} width="500" height="500"alt=''/>
        </Grid>
        
      </Grid>
      </motion.div>
      
      <motion.div className="welcome2" variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>

      <Grid container direction="row" my={4} className='text2' spacing={2} columnSpacing={21}>
      <Grid item>
        <img src={welcomeimg2} width="500" height="500"alt=''/>
        </Grid>
        <Grid item xs={9} sm={7}>
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Our Mission</Typography>
            <br></br>
          <div className="">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged 
        </Typography>
        <br></br>
        </div>
        </Grid>
      </Grid>
      </motion.div>
      <motion.div className="welcome3" variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>

      <Grid container direction="row" my={4} className='text3' spacing={2} columnSpacing={21}>
      
        <Grid item xs={11} sm={8}>
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Is AI bad for social media?</Typography>
            <br></br>
          <div className="">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged 
        </Typography>
        <br></br>
        </div>
        </Grid>
      </Grid>
      </motion.div>

      <motion.div className='mainBody' variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>
        <Box sx={{display: 'flex', flexDirection: {xs: "column", md: "row"},  justifyContent:'space-between', gap:3, m: 3,  }}>
       
      <Paper  elevation={16} square={false} style={{ width: {xs: 1, md:500}, padding: 10 }}>
        <Typography variant='h3'>About us</Typography>
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
        <Typography variant='h3'>Popular AI tools</Typography>
        <Typography sx={{mt: 2}}> 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        </Typography>
        
        <Button variant='outlined' sx={{mt: 2}} href="/CCTP/#recommendations">Learn More</Button>
        
      </Paper>
      </Box>
      </motion.div>
      
      
      <footer>
        <Typography>
          ©The Undercover Project - 2024
          </Typography>
        </footer>
    </div>
    );

}