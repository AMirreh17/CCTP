//import logo from './logo.svg';
import './App.css';


import { /*Box, Button,  Paper,*/ Typography, Grid } from '@mui/material'; // importing functions/variables, Typography and Grid from react library called Material Ui
import NavBar from './NavBar'; // importing the function NavBar from NavBar.js file
import {motion, useMotionValueEvent, useScroll, useTransform, useSpring, useMotionValue} from 'framer-motion'; // importing functions/variables from react library called Framer Motion
import Footer from './footer'; // importing the function Footer from Footer.js file
import welcomeimg from '../src/assets/image4.png';// importing a image from assets folder
import welcomeimg2 from '../src/assets/Image5.png'; // importing a image from assets folder
import { useRef } from 'react';// importing the function useRef from react
import Explore from './ExploreSection';// // importing the function Explore from ExploreSection.js file




// This function used to add fade up animations within different div components
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

      const container = useRef(null);// declaring the function container and it is equal to the react function useRef. useRef is given a null value, so it can be later added to a element within the page
      const yScroll = useMotionValue(0);
      //Declaring the function ScrollYProgress, this captures the scroll progress of the user from the Y axis. This can used for scroll animations on the Y axis
      const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', '0.8 0.18']
      }

      )
      
      const sm = useTransform(scrollYProgress, [0,1], [0,-50]);// The function sm is used to add a parallax scroll to an element. Parallax scrolls can be used to change the speed of different components while scrolling
     //Declarinf the function scaleX whihc used the useSpring function from framer motion. This function can give an element a spring effect while scrolling.
      const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      });
      
      // This is used for viewing the user scroll value from the Y axis within the console
      useMotionValueEvent(scrollYProgress, "change", (latest) => {
        yScroll.set(latest);
        console.log(latest)
      })

  return (
    <div className="App">

      <NavBar /> {/*The NavBar function is added to the top of the page*/}
  
      <div ref={container}> {/*The container function uis added here*/}
      <motion.header className="App-header" animate={{ opacity: 1}} initial={{ opacity:0}} transition={{duration: 3, ease: "easeOut"}}> {/*motion is added to header elemeent to allow aniamtions and the fade animation is added to the componenets within this div*/}
      <motion.div animate={{y: -30, opacity: 1}} initial={{ opacity:0}} transition={{duration: 1, ease: "easeOut"}}> {/*motion is added to this div elemeent to allow aniamtions and the fade animation is added to the componenets within this div*/}
        <Typography  fontSize="70px" variant='h1' sx={{my: 4, }}>The Undecover Project</Typography>
        <motion.p  class="font-light  max-w-xl">Revealing the truth behind Artificial Intelligence within social media content and platforms</motion.p>
        <br></br>
        <a href='/CCTP/#about'> {/*Button is added here with custom styling*/}
        <motion.button style={{y:sm}} whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} class="bg-white px-10 py-5 text-xl uppercase tracking-widest text-black rounded-full" href="/CCTP/#about"> Learn More</motion.button>
        </a>
      </motion.div>
      </motion.header>

      <motion.div class="text-white py-10" className='welcome'>

        <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to this div elemeent to allow aniamtions and the fade up animation is added to the componenets within this div*/}
      <Grid container direction="row" my={4} className='text' spacing={2} columnSpacing={21}> {/*Grid component from Material UI is used here to align and organise content*/}
      
        <Grid item xs={9} sm={8} md={7}>
        <div className='text-black'>
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Welcome</Typography>
        
          <Typography variant='h3'>
            *Prototype Version*
            </Typography>
            <br></br>
            </div>
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

      <motion.div className="welcome3" class="py-10" > 
      <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to this div elemeent to allow aniamtions and the fade up animation is added to the componenets within this div*/}
      <Grid container direction="row" my={4} className='text3' spacing={2} columnSpacing={21}>
       
        <Grid item xs={11} sm={8} md={6}> {/*Grid component from Material UI is used here to align and organise content*/}
          <div className='text-white'>
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Our Mission</Typography>
            <br></br>
            </div>
          <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        Our mission is to bring further awareness to AI within the context of social media. 
      This online resource will help bring clarity to how AI is used within social media platforms 
      as well as how social media users utilise AI tools to produce social media content. AI is becoming prominent within social media content, 
      therefore it is important to educate users on the current dangers and usability of AI
        </Typography>
        <br></br>
        <br></br>
        </div>
        </Grid>
      </Grid>
      </motion.div>
      </motion.div>

      <motion.div class="text-white py-10" className='welcome'>

      <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to this div elemeent to allow aniamtions and the fade up animation is added to the componenets within this div*/}
      <Grid container direction="row" my={4} className='text2' spacing={2} columnSpacing={21}> {/*Grid component from Material UI is used here to align and organise content*/}
      <Grid item>
      <img src={welcomeimg2} width="500" height="500"alt=''/>
      </Grid>
      <Grid item xs={9} sm={8} md={7}>
      <div className='text-black'>
      <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Does AI Impact our social media experience?</Typography>
          <br></br>
          </div>
        <div className="textColor">
      <Typography  fontSize="20px" sx={{mt: 2}} > 
      All social media applications utilise AI algorithms in some form to improve their overall user experiences. 
      AI allows social media applications to understand their user’s habits more such as how users interact with different genres of content and recommending 
      potential content which they might be interested in. 
      </Typography>
      <br></br>
      </div>
      </Grid>
      </Grid>
      </motion.div>
      </motion.div>

      <motion.div className="welcome3" class="py-10">
      <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to this div elemeent to allow aniamtions and the fade up animation is added to the componenets within this div*/}

      <Grid container direction="row" my={4} className='text3' spacing={2} columnSpacing={21}> 
      
        <Grid item xs={11} sm={8} md={6}>
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}> Why is there a "negative stigma" behind AI?</Typography>
            <br></br>
          <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        AI technology has developed further within the recent decades; however, we still are uncertain on the growth of AI and it’s impacts on our livelihood. 
        The “negative stigma” behind AI stems from the dangers and risks which AI can bring to our society in the future. 
        For example, Privacy issues, Ethical implications and Employability. 
        </Typography>
        <br></br>
        </div>
        </Grid>
      </Grid>
      </motion.div>
      </motion.div>

      <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to this div elemeent to allow aniamtions and the fade up animation is added to the componenets within this div*/}

        <Explore /> {/*The Explore function is placed here. The contents from  the ExploreSection.js is added here*/}
      </motion.div>
      
        <Footer /> {/*The Footer function is placed here. The contents from  the Footer.js is added here*/}
      {/*This div displays the scroll line animation and sticks to the bottom of the browser view*/}
        <motion.div style={{ 
        scaleX,
        background: "white",
        transformOrigin: "Left",
        position: "sticky",
        top: 0,
        bottom: 0,
        width: "100%",
        height: "5px"
      }}>
      </motion.div>
      </div>
    </div>
    );

}