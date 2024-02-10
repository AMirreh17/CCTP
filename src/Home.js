//import logo from './logo.svg';
import './App.css';
//import Appbar from './Appbar';

import { /*Box, Button,  Paper,*/ Typography, Grid } from '@mui/material';
import NavBar from './NavBar';
import {motion, useScroll, useTransform} from 'framer-motion';

import welcomeimg from '../src/assets/image4.png';
import welcomeimg2 from '../src/assets/Image5.png';
import { useRef } from 'react';




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

      const container = useRef(null);
      const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', 'end start']
      }

      )
      
      const sm = useTransform(scrollYProgress, [0,1], [0,-50]);
      const md = useTransform(scrollYProgress, [0,1], [0,-150]);



  return (
        <div ref={container} className="App">
      <NavBar />
      
      
      <header className="App-header"> 
      {
      //<img src={logo} className="App-logo" alt="logo" />
      }
      <motion.div animate={{y: -50, opacity: 1}} initial={{ opacity:0}} transition={{duration: 1, ease: "easeOut"}}>
      

        
        
        <motion.h1  class="text-7xl font-bold leading-normal"> The Undecover Project</motion.h1>
        
        {
         /* <Typography fontSize="80px" variant='h1' sx={{my: 4, }}>The Undecover Project</Typography>
           <Typography variant='h6'>
          Revealing the truth behind Artificial Intelligence within social media content and platforms
        </Typography>*/
        }
         
        <motion.p style={{y:sm}} class="font-light  max-w-xl">Revealing the truth behind Artificial Intelligence within social media content and platforms</motion.p>
        <br></br>
        
       
        {
          //<Button variant='contained' sx={{mt: 2}} href="/CCTP/#about">Learn More</Button>
          //<Button  class="bg-white px-10 py-5 text-xl uppercase tracking-widest text-black hover:bg-black hover:text-white rounded-full" href="/CCTP/#about">Learn More</Button>
        }
        
        
        
        
        <a href='/CCTP/#about'>
        <motion.button style={{y:md}} whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} class="bg-white px-10 py-5 text-xl uppercase tracking-widest text-black rounded-full" href="/CCTP/#about"> Learn More</motion.button>
        </a>
        
        
      </motion.div>
        
      </header>
      
      <motion.div class="text-white">

        <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>
      <Grid container direction="row" my={4} className='text' spacing={2} columnSpacing={21}>
      
        <Grid item xs={9} sm={7}>
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Welcome</Typography>
        
          <Typography variant='h3'>
            *Prototype Version*
            </Typography>
            <br></br>
          <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        The Undercover Project is an online resource to help educate social media users and enthusiasts on the impacts and benefits of 
        Artificial Intelligence (AI) within social media content and platforms. 
        This website will outline the basics of AI, its usage within popular social media platforms, and what AI tools and resources are available
        </Typography>
        <br></br>
        </div>
        </Grid>
        <Grid item>
        <img src={welcomeimg} width="500" height="500"alt=''/>
        </Grid>
        
      </Grid>
      </motion.div>
      </motion.div>
      
      <motion.div className="" >
      <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>
      <Grid container direction="row" my={4} className='text2' spacing={2} columnSpacing={21}>
      <Grid item>
        <motion.img  src={welcomeimg2} width="500" height="500"alt=''/>
        </Grid>
        <Grid item xs={9} sm={7}>
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Our Mission</Typography>
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
      </Grid>
      </motion.div>
      </motion.div>

      <motion.div className="welcome3" >
      <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>
      <Grid container direction="row" my={4} className='text3' spacing={2} columnSpacing={21}>
       
        <Grid item xs={11} sm={6}>
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Is AI bad for social media?</Typography>
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
      </Grid>
      </motion.div>
      </motion.div>

      <motion.div className="welcome3" >
      <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>
      <Grid container direction="row" my={4} className='text3' spacing={2} columnSpacing={21}>
      
        <Grid item xs={11} sm={6}>
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}> Why is there a "negative stigma" behind AI?</Typography>
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
      </Grid>
      </motion.div>
      </motion.div>

      <motion.div className="welcome3" >
      <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>
      <Grid container direction="row" my={4} className='text3' spacing={2} columnSpacing={21}>
      
        <Grid item xs={11} sm={6}>
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Can I use AI to improve my social media content?</Typography>
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
      </Grid>
      </motion.div>
      </motion.div>

      <motion.div className="welcome3">
      <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>
      <Grid container direction="row" my={4} className='text3' spacing={2} columnSpacing={21}>
      
        <Grid item xs={11} sm={4}>
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>About us</Typography>
            <br></br>
          <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        Do you want to find out the background behind our aims as well as the purpose of this project and why it was created? 
        </Typography>
        <br></br>
        </div>
        <a href='/CCTP/#about'>
        <motion.button whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} class=" bg-white px-10 py-5 text- uppercase tracking-widest text-black rounded-full" href="/CCTP/#about"> Learn More</motion.button>
        </a>
        </Grid>
        <Grid item xs={11} sm={4}>
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>What is AI?</Typography>
            <br></br>
          <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        What is AI and why is it used within social media platforms, and does it have an impact? Find out more about the background of AI within social media.  
        </Typography>
        <br></br>
        </div>
        <a href='/CCTP/#background'>
        <motion.button whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} class=" bg-white px-10 py-5 text- uppercase tracking-widest text-black rounded-full" href="/CCTP/#about"> Learn More</motion.button>
        </a>
        </Grid>
        <Grid item xs={11} sm={4}>
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Popular AI Tools</Typography>
            <br></br>
          <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        Are you a content creator or social media enthusiast? There are AI tools available which can improve your productivity and artwork 
        </Typography>
        <br></br>
        </div>
        <a href='/CCTP/#recommendations'>
        <motion.button whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}class=" bg-white px-10 py-5 text- uppercase tracking-widest text-black rounded-full" href="/CCTP/#about"> Learn More</motion.button>
        </a>
        </Grid>
      </Grid>
      </motion.div>
      </motion.div>






        {
          /*
      <motion.div className='mainBody'>
      <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>
        <Box sx={{display: 'flex', flexDirection: {xs: "column", md: "row"},  justifyContent:'space-between', gap:3, m: 3,  }}>
       
      <Paper  elevation={16} square={false} style={{ width: {xs: 1, md:500}, padding: 10 }}>
        <br></br>
        <Typography variant='h3'>About us</Typography>
        <Typography sx={{mt: 2}}> 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        </Typography>
        {
          //<Button variant='outlined' sx={{mt: 2}} href="/CCTP/#about">Learn More</Button>
        }
        <br></br>
        <a href='/CCTP/#about'>
        <motion.button whileHover={{scale: 1.2}}class=" bg-white px-10 py-5 text- uppercase tracking-widest text-black rounded-full" href="/CCTP/#about"> Learn More</motion.button>
        </a>
        
      </Paper>
      <Paper  elevation={12} square={false} style={{ width: {xs: 1, md:500}, padding: 10 }}>
        <br></br>
        <Typography variant='h3'>What is AI?</Typography>
        <Typography sx={{mt: 2}}> 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        </Typography>
        {
          //<Button variant='outlined' sx={{mt: 2}} href="/CCTP/#background">Learn More</Button>
        }
        <br></br>
        <a href='/CCTP/#background'>
        <motion.button whileHover={{scale: 1.2}}class=" bg-white px-10 py-5 text- uppercase tracking-widest text-black rounded-full" href="/CCTP/#about"> Learn More</motion.button>
        </a>
      </Paper>
      <Paper  elevation={12} square={false} style={{ width: {xs: 1, md:500}, padding: 10 }}>
        <br></br>
        <Typography variant='h3'>Popular AI tools</Typography>
        <Typography sx={{mt: 2}}> 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        </Typography>
        {
          //<Button variant='outlined' sx={{mt: 2}} href="/CCTP/#recommendations">Learn More</Button>
        }
        <br></br>
        <a href='/CCTP/#recommendations'>
        <motion.button whileHover={{scale: 1.2}}class=" bg-white px-10 py-5 text- uppercase tracking-widest text-black rounded-full" href="/CCTP/#about"> Learn More</motion.button>
        </a>
        
      </Paper>
      </Box>
      </motion.div>
      </motion.div>
      */
      
}
      <footer >
        <Typography>
          ©The Undercover Project - 2024
          </Typography>
        </footer>
    </div>
    );

}