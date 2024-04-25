import './App.css';// Importing css file called app.css onto this page
import { /*Box, Button,  Paper,*/ Typography, Grid, IconButton } from '@mui/material'; //importing functions/variables, Typography, Grid and IconButton from the react library called Material UI. This is referenced from the Material Ui documentsation: https://mui.com/components/
import NavBar from './NavBar'; // importing the function NavBar from NavBar.js file
import {motion, useMotionValueEvent, useScroll, useTransform, useSpring, useMotionValue} from 'framer-motion'; // importing functions/variables from the react library called Framer Motion. This is referenced from framer motiion documentation:https://www.framer.com/motion/component/ 
import Footer from './footer'; // importing the function Footer from Footer.js file
import welcomeimg from '../src/assets/tupslogan.png';// importing a image from assets folder
import welcomeimg2 from '../src/assets/chatgpt.avif'; // importing a image from assets folder
import { useRef } from 'react';// importing the function useRef from react
import Explore from './ExploreSection';// // importing the function Explore from ExploreSection.js file
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'; // Importing downward arrow from the Material UI icon library. This is referenced from: https://mui.com/material-ui/material-icons/ 





//This function is used to add fade up animations within different div components
//This function is referenced from the ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s
const fadeAnimations = {
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
      //The variables and functions below are referenced from Oliver Larose and Sakura Dev tutorials: https://www.youtube.com/watch?v=VhXemORYup8&t and https://www.youtube.com/watch?v=GMafliGL7Zs
      const container = useRef(null);// declaring the function container which is equal to the react function useRef. useRef is given a null value, so it can be later added to a element within the page
      const targetRef = useRef(null);
      const yScroll = useMotionValue(0);
      //Declaring the function ScrollYProgress, this captures the scroll progress of the user from the Y axis. This can be used for scroll animations on the Y axis
      const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', '0.8 0.18']
      })
      
      const sm = useTransform(scrollYProgress, [0,1], [0,-50]);// The function sm is used to add a parallax scroll to an element. Parallax scrolls can be used to change the speed of different components while scrolling
     //Declaring the function scaleX which uses the useSpring function from framer motion. This function can provide an element with a spring effect while scrolling.
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
      <motion.header className="App-header" animate={{ opacity: 1}} initial={{ opacity:0}} transition={{duration: 3, ease: "easeOut"}}> {/*motion is added to the header elemeent to allow animations.  The fade animation is added to the components within this div, //This div is referenced from the ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s*/}
      <motion.div animate={{y: -30, opacity: 1}} initial={{ opacity:0}} transition={{duration: 1, ease: "easeOut"}}> {/*motion is added to this div elemeent to allow animations. The fade animation is added to the componenets within this div. //This div is referenced from the ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s*/}
        <Typography  fontSize="65px" variant='h1' sx={{my: 4, }}>The Undercover Project</Typography> {/*These elements were produced by myself*/}
        <motion.p  class="font-light  max-w-xl">Revealing the truth behind Artificial Intelligence within social media content and platforms</motion.p>
        <br></br>
        <a href='/CCTP/#about'> {/*Button is added here with custom styling through tailwind css. Tutorial reference: https://www.youtube.com/watch?v=z1EqQft4VsM&t */}
        <motion.button style={{y:sm}} whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} class="bg-amber-50 px-10 py-5 text-xl uppercase tracking-widest text-black rounded-full" href="/CCTP/#about"> Learn More</motion.button>
        </a> 
        <br></br>
        <br></br>
        <div >
        <IconButton  color='inherit' aria-label="logo" onClick={() => targetRef.current?.scrollIntoView({behaviour: "smooth"})}> {/* A continuous of the previous tutorial reference: https://www.youtube.com/watch?v=GMafliGL7Zs */}
         <ArrowDownwardIcon style={{fontSize:"50px"}}/>
        </IconButton>
        </div>
      </motion.div>
      
      </motion.header>

      <motion.div ref={targetRef} class="text-white py-10" className='welcome'>

        <motion.div variants={fadeAnimations} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to this div elemeent to allow animations.  The fade animation is added to the components within this div, //This div is referenced from the ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s*/}
      <Grid container direction="row" my={4} className='text' spacing={2} columnSpacing={21}> {/*Grid component from Material UI is used here to align and organise content*/} 
        <Grid item xs={12} sm={8} md={6}>{/*This Grid item is responsive for various devices. Tutorial reference: https://www.youtube.com/watch?v=jrgiTFwvglw&t=158s */}
        <div className='text-black'>{/*These elements were produced by myself*/}
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Our Mission</Typography>
        </div>
        <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        The Undercover Project is an online resource to help educate social media users and enthusiasts on the impacts and benefits of 
        Artificial Intelligence (AI) within social media content and platforms. 
        This website will outline the basics of AI, its usage within popular social media platforms, and what AI tools and resources are available.
        </Typography>
        <br></br>
        </div>
        <a href='/CCTP/#about'>{/*Button is added here with custom styling through tailwind css. Tutorial reference: https://www.youtube.com/watch?v=z1EqQft4VsM&t */}
         <motion.button whileHover={{scale: 1.2}}class=" uppercase bg-black px-7 py-4 text-xl  text-white rounded-full" > About Us</motion.button>
         </a>
        </Grid>
        <Grid item>
        <img src={welcomeimg} width="500" height="500"alt=''/>
        </Grid>
        
      </Grid>
      </motion.div>
      </motion.div>

      <motion.div className="welcome3" class="py-10" > 
      <motion.div variants={fadeAnimations} initial="initial" whileInView="animate" viewport={{once: true,}}>  {/*motion is added to this div elemeent to allow animations.  The fade animation is added to the components within this div, //This div is referenced from the ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s*/}
      <Grid container direction="row" my={4} className='text3' spacing={2} columnSpacing={21}>{/*Grid component from Material UI is used here to align and organise content*/} 
        <Grid item xs={11} sm={8} md={7}> {/*This Grid item is responsive for various devices. Tutorial reference: https://www.youtube.com/watch?v=jrgiTFwvglw&t=158s */}
          <div className='text-white'> {/*These elements were produced by myself*/}
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>What is AI and how is it used on social media?</Typography>
            <br></br>
            </div>
          <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        AI is a technology/system which is designed to complete complex tasks. Social media applications utilise AI to 
        improve their user experiences on their platforms. This consists of tracking likes, comments, follows, trends and more. 
        Find out more information about the context behind AI and how its implemented within social media content and platforms.
        </Typography>
        <br></br>
        <br></br>
        </div>
        <a href='/CCTP/#background'> {/*Button is added here with custom styling through tailwind css. Tutorial reference: https://www.youtube.com/watch?v=z1EqQft4VsM&t */}
         <motion.button whileHover={{scale: 1.2}}class=" uppercase bg-amber-50 px-7 py-4 text-xl  text-black rounded-full" > Discover</motion.button>
         </a>
        </Grid>
      </Grid>
      </motion.div>
      </motion.div>

      <motion.div class="text-white py-10" className='welcome'>

      <motion.div variants={fadeAnimations} initial="initial" whileInView="animate" viewport={{once: true,}}>  {/*motion is added to this div elemeent to allow animations.  The fade animation is added to the components within this div, //This div is referenced from the ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s*/}
      <Grid container direction="row" my={4} className='text2' spacing={2} columnSpacing={21}> {/*Grid component from Material UI is used here to align and organise content*/}
      <Grid item> {/*These elements were produced by myself*/}
      <img src={welcomeimg2} width="500" height="500"alt=''/>
      </Grid>
      <Grid item xs={12} sm={8} md={6}> {/*This Grid item is responsive for various devices. Tutorial reference: https://www.youtube.com/watch?v=jrgiTFwvglw&t=158s */}
      <div className='text-black'>
      <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Can AI tools be used for content creation?</Typography>
          <br></br>
          </div>
        <div className="textColor">
      <Typography  fontSize="20px" sx={{mt: 2}} > 
      Many social media content creators utilise AI tools to improve their content production. 
      There are various AI tools available, which can benefit your social media experience and enhance your creativity. 
      Find out more information about popular AI tools for social media content or visual artworks. 
      </Typography>
      <br></br>
      </div>
      <a href='/CCTP/#AIResources'> {/*Button is added here with custom styling through tailwind css. Tutorial reference: https://www.youtube.com/watch?v=z1EqQft4VsM&t */}
      <motion.button whileHover={{scale: 1.2}}class=" uppercase bg-black px-7 py-4 text-xl text-white rounded-full" > Discover</motion.button>
      </a>
      </Grid>
      </Grid>
      </motion.div>
      </motion.div>

      <motion.div className="welcome3" class="py-10">
      <motion.div variants={fadeAnimations} initial="initial" whileInView="animate" viewport={{once: true,}}>  {/*motion is added to this div elemeent to allow animations.  The fade animation is added to the components within this div, //This div is referenced from the ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s*/}
      <Grid container direction="row" my={4} className='text3' spacing={2} columnSpacing={21}>  {/*Grid component from Material UI is used here to align and organise content*/}
        <Grid item xs={11} sm={8} md={7}>   {/*This Grid item is responsive for various devices. Tutorial reference: https://www.youtube.com/watch?v=jrgiTFwvglw&t=158s */}
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}> How to be more aware of AI based social media content</Typography>{/*These elements were produced by myself*/}
            <br></br>
          <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        AI can be a powerful tool when elevating your creative work, however, there are many social media users who unfortunately use AI to mislead others. 
        Social media applications such as Instagram, YouTube and X (Twitter), have recently developed methods on mitigating AI misinformation across their platforms. 
        Find out more information about how to be aware of AI based social media content.
        </Typography>
        <br></br>
        </div>
        <a href='/CCTP/#Awareness'> {/*Button is added here with custom styling through tailwind css. Tutorial reference: https://www.youtube.com/watch?v=z1EqQft4VsM&t */}
         <motion.button whileHover={{scale: 1.2}}class=" uppercase bg-amber-50 px-7 py-4 text-xl  text-black rounded-full" > Discover</motion.button>
         </a>
        </Grid>
      </Grid>
      </motion.div>
      </motion.div>

      <motion.div variants={fadeAnimations} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to this div elemeent to allow animations.  The fade animation is added to the components within this div, //This div is referenced from the ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s*/}

        <Explore /> {/*The Explore function is placed here. The web content from the ExploreSection.js file is added here*/}
      </motion.div>
      
        <Footer /> {/*The Footer function is placed here. The web content from the Footer.js file is added here*/}
      {/*This div displays the scroll line animation and sticks to the bottom of the browser view. This div is referenced from a tutorial: https://www.youtube.com/watch?v=AsniwnTMNrw&t*/}
        <motion.div style={{ 
        scaleX,
        background: "grey",
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