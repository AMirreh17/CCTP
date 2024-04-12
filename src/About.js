import {Typography, Grid} from '@mui/material'; //importing functions/variables, Typography and Grid from react library called Material UI. This is referenced from Material Ui documentsation: https://mui.com/components/
import NavBar from './NavBar'; // importing the function NavBar from NavBar.js file
import './App.css';// Importing css file called app.css onto this page
import {motion, useMotionValueEvent, useScroll, useSpring, useMotionValue} from 'framer-motion'; // importing functions/variables from react library called Framer Motion. The is referenced from framer motiion documentation:https://www.framer.com/motion/component/ 
import Footer from './footer';// importing the function Footer from Footer.js file
import { useRef } from 'react'; // importing the function useRef from react
import aboutimg2 from '../src/assets/me.jpg';// importing a image from assets folder
import aboutimg from '../src/assets/tuplogo.png';// importing a image from assets folder

//This function used to add fade up animations within different div components
//This function is referenced from ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s
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
 

export default function About() {
   //The variables and functions below are referenced from tutorials from Oliver Larose and Sakura Dev: https://www.youtube.com/watch?v=VhXemORYup8&t and https://www.youtube.com/watch?v=GMafliGL7Zs
      const container = useRef(null);// declaring the function container and it is equal to the react function useRef. useRef is given a null value, so it can be later added to a element within the page
      const yScroll = useMotionValue(0);
      //Declaring the function ScrollYProgress, this captures the scroll progress of the user from the Y axis. This can used for scroll animations on the Y axis
      const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', '0.8 0.18']
      })
      
      
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

   return(
    <div className='App'>
      <div ref={container}>{/*The container function uis added here*/}
        <NavBar />{/*The NavBar function is added to the top of the page*/}
        <motion.header className="container2" animate={{ opacity: 1}} initial={{ opacity:0}} transition={{duration: 3, ease: "easeOut"}}> {/*motion is added to header elemeent to allow animations and the fade animation is added to the componenets within this div, //This div is referenced from ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s*/}
        <motion.div animate={{y: -50, opacity: 1}} initial={{ opacity:0}} transition={{duration: 1, ease: "easeOut"}}> {/*motion is added to this div elemeent to allow animations and the fade animation is added to the componenets within this div. //This div is referenced from ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s*/}
        <Typography  fontSize="55px" variant='h1' sx={{my: 4, }}>About</Typography>{/*These elements were produced by myself*/}
        <motion.p  class="font-light  max-w-xl">Find out more about our project aims and objectives</motion.p>
        <br></br>
        
      </motion.div>
      </motion.header>
      <motion.div class="text-white py-10" className='backgroundsection2'>

        <motion.div variants={fadeAnimations} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to header elemeent to allow animations and the fade animation is added to the componenets within this div, //This div is referenced from ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s*/}
        <Grid container direction="row" my={4} className='text' spacing={2} columnSpacing={21}>  {/*Grid component from Material UI is used here to align and organise content*/} 

        <Grid item xs={12} sm={6}> {/*This Grid item is responsive for various devices. Tutorial referencel: https://www.youtube.com/watch?v=jrgiTFwvglw&t=158s */}
        <div className='text-black'>{/*These elements were produced by myself*/}
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Who are we?</Typography>
            <br></br>
            </div>
          <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        The Undercover Project is an online resource to help educate social media users and enthusiasts on the impacts and benefits of AI within social media content and platforms. 
        </Typography>
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        This online resource is a part of a final year project on the BSc Digital Media course at the University of West of England Bristol (UWE). The objective of this project is to bring more awareness to AI within social media and to provide advice on the usability of AI within social media content production. 
        For example, recommending AI tools which can benefit social media content creators and enthusiasts.  
        </Typography>
        <br></br>
        </div>
        </Grid>
        <Grid item>
        <img src={aboutimg} width="500" height="500"alt=''/>
        </Grid>

        </Grid>
        </motion.div>
        </motion.div>
        <motion.div class="text-white py-10" className='backgroundsection3'>

          <motion.div variants={fadeAnimations} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to header elemeent to allow animations and the fade animation is added to the componenets within this div, //This div is referenced from ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s*/}
          <Grid container direction="row" my={4} className='text2' spacing={2} columnSpacing={21}> {/*Grid component from Material UI is used here to align and organise content*/} 
          <Grid item> {/*These elements were produced by myself*/}
          <img src={aboutimg2} width="500" height="500"alt=''/>
          </Grid>
          <Grid item xs={12} sm={6}>{/*This Grid item is responsive for various devices. Tutorial referencel: https://www.youtube.com/watch?v=jrgiTFwvglw&t=158s */}
          <div className='text-white'>
          <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Who is the founder?</Typography>

            
              <br></br>
              </div>
            <div className="textColor">
          <Typography  fontSize="20px" sx={{mt: 2}} > 
          Hi, my name is Adam Mirreh and I am the founder and creator of The Undercover Project. I am a final year student at the University of West of England Bristol (UWE) . This online resource was a part of my final year project. 
          </Typography>
          <Typography  fontSize="20px" sx={{mt: 2}} > 
          I am an aspiring Digital Creative. The ability to be unique and tell a story through visual concepts has always been an interest of mine. 
          I’m a diligent and motivated individual, with a passion to produce creative and exciting video productions and web developments at industry standard. 
          </Typography>
          <br></br>
          </div>
          </Grid>


          </Grid>
          </motion.div>
          </motion.div>
       <Footer /> {/*The Footer function is placed here. The contents from  the Footer.js is added here*/}
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

