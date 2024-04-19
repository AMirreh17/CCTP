import {Typography, Grid } from '@mui/material';  //importing functions/variables, Typography and Grid from react library called Material UI. This is referenced from Material Ui documentsation: https://mui.com/components/
import NavBar from './NavBar'; // importing the function NavBar from NavBar.js file
import './App.css'; // Importing css file called app.css onto this page
import Footer from './footer'; // importing the function Footer from Footer.js file
import {motion, useMotionValueEvent, useScroll, useSpring, useMotionValue} from 'framer-motion'; // importing functions/variables from react library called Framer Motion. The is referenced from framer motiion documentation:https://www.framer.com/motion/component/ 
import { useRef } from 'react'; // importing the function useRef from react
import img1 from '../src/assets/codeimage.jpeg'; // importing a image from assets folder
import img2 from '../src/assets/socialmediacontent.webp'; // importing a image from assets folder
import img3 from '../src/assets/background3.png'; // importing a image from assets folder
import img4 from '../src/assets/whatisai.jpeg'; // importing a image from assets folder


export default function Test() {

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

    return (
      
      <div className="App">

      <NavBar /> {/*The NavBar function is added to the top of the page*/}
  
      <div ref={container}> {/*The container function uis added here*/}
      <motion.header className="container2" animate={{ opacity: 1}} initial={{ opacity:0}} transition={{duration: 3, ease: "easeOut"}}> {/*motion is added to header elemeent to allow animations and the fade animation is added to the componenets within this div, //This div is referenced from ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s*/}
        <motion.div animate={{y: -50, opacity: 1}} initial={{ opacity:0}} transition={{duration: 1, ease: "easeOut"}}> {/*motion is added to this div elemeent to allow animations and the fade animation is added to the componenets within this div. //This div is referenced from ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s*/}
        <Typography  fontSize="55px" variant='h1' sx={{my: 4, }}>Background</Typography>{/*These elements were produced by myself*/}
        <motion.p  class="font-light  max-w-xl">The context behind Artificial intelligence and how it has impacted social media content and platforms</motion.p>
        <br></br>
        
      </motion.div>
      </motion.header>

      <motion.div class="text-white py-10" className='backgroundsection2'> 

      <motion.div variants={fadeAnimations} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to header elemeent to allow animations and the fade animation is added to the componenets within this div, //This div is referenced from ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s*/}
      <Grid container direction="row" my={4} className='text' spacing={2} columnSpacing={21}> {/*Grid component from Material UI is used here to align and organise content*/}
      
        <Grid item xs={12} sm={8} md={6}> {/*This Grid item is responsive for various devices. Tutorial referencel: https://www.youtube.com/watch?v=jrgiTFwvglw&t=158s */}
        <div className='text-black'> {/*These elements were produced by myself*/}
        <Typography fontSize="40px"variant='h2' sx={{my: 1, mt: 2}}>What is Artificial Intelligence?</Typography>
        
          
            <br></br>
            </div>
          <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        Artificial Intelligence (AI) is a technology developed to complete complex tasks, which are normally achieved by human intelligence. These complex tasks can consist of decision-making, the accumulation of data and machine learning.  
        In recent times, this has led to AI systems being utilised within many different industries to improve productivity and automation such as Ecommerce, Health Care, Travel, Education, and Entertainment. 
        </Typography>
        <br></br>
        </div>
        </Grid>
        <Grid item>
      <img style={{boxShadow: "5px 20px 40px black", borderRadius: "5%"}}  src={img4} width="500" height="500"alt=''/>
      </Grid>
        
      </Grid>
      </motion.div>
      </motion.div>

      <motion.div className="backgroundsection2" class="py-10" >
      <motion.div variants={fadeAnimations} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to header elemeent to allow animations and the fade animation is added to the componenets within this div, //This div is referenced from ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s*/}
      <Grid container direction="row" my={4} className='text2' spacing={2} columnSpacing={21}> {/*Grid component from Material UI is used here to align and organise content*/}
      <Grid item> {/*These elements were produced by myself*/}
      <img style={{boxShadow: "5px 20px 40px black", borderRadius: "5%"}}  src={img1} width="500" height="500"alt=''/>
      </Grid>
        <Grid item xs={11} sm={8} md={6}> {/*This Grid item is responsive for various devices. Tutorial referencel: https://www.youtube.com/watch?v=jrgiTFwvglw&t=158s */}
        <Typography fontSize="40px"variant='h2' sx={{my: 1, mt: 2}}>How is AI used within social media applications?</Typography> {/*These elements were produced by myself*/}
            <br></br>
          <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        AI systems have been implemented into most social media platforms to improve their user experiences. Some of these platforms consist of Instagram, YouTube, X (Twitter), Facebook, Snapchat and TikTok. 
        AI algorithms allows social media platforms to understand their users better by collecting user data such as likes, comments, trends, watch time, profile viewing and purchasing choices.  
        </Typography>
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        An example of AI algorithms being used within social media platforms, is the use of Natural Language Processing (NLP). NLP is a subtype of AI which allows systems to understand and alter human language. This is used within social media platforms to capture user interactions and filter content. 
        Other AI algorithms/systems that are used within social media platforms consist of Support Vector Machines (SVM) and Linear Regression   
        </Typography>
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        This process in theory can be viewed as invasive to many users but in order for social media users to have an more personalised experience, their user data and interactions will need to be tracked and collected by most social media applications. 
        However, is this process ethically correct?  
        </Typography>
        <br></br>
        <br></br>
        </div>
        </Grid>
      </Grid>
      </motion.div>
      </motion.div>

      <motion.div class="text-white py-10" className='backgroundsection2'>

      <motion.div variants={fadeAnimations} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to header elemeent to allow animations and the fade animation is added to the componenets within this div, //This div is referenced from ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s*/}
      <Grid container direction="row" my={4} className='text' spacing={2} columnSpacing={21}> {/*Grid component from Material UI is used here to align and organise content*/}
      <Grid item xs={12} sm={8} md={6}> {/*This Grid item is responsive for various devices. Tutorial referencel: https://www.youtube.com/watch?v=jrgiTFwvglw&t=158s */}
      <div className='text-black'> {/*These elements were produced by myself*/}
      <Typography fontSize="40px"variant='h2' sx={{my: 1, mt: 2}}>How is AI implemented within social media content?</Typography>
          <br></br>
          </div>
        <div className="textColor">
      <Typography  fontSize="20px" sx={{mt: 2}} > 
      With the rise of generative AI and AI tools in recent years, this has made content creation on social media platforms a lot easier.
      There are many tools available which can speed the process of producing content such as generating  ideas, video editing, thumbnails, tags, 
      generating artwork and video descriptions/titles.  
      </Typography>
      <Typography  fontSize="20px" sx={{mt: 2}} > 
      Some of the most popular AI tools used consist of Midjourney, ChatGPT, Vidyo AI, TimeBolt, TubeBuddy and many more. 
      If you want to find out more information about AI tools for social media or you are interested in using some of the tools mentioned above, 
      check out our AI Resources page for our current recommendations.  
      </Typography>
      <br></br>
      </div>
      <a href='/CCTP/#AIResources'> {/*Button is added here with custom styling through tailwind css. Tutorial reference: https://www.youtube.com/watch?v=z1EqQft4VsM&t */}
      <motion.button whileHover={{scale: 1.2}}class=" uppercase bg-black px-7 py-4 text-xl text-white rounded-full" > Find out more</motion.button>
      </a>
      </Grid>     
       <Grid item>
      <img src={img2} width="500" height="500"alt=''/>
      </Grid>
      </Grid>
      </motion.div>
      </motion.div>

      <motion.div className="background-section-3" class="py-10">
      <motion.div variants={fadeAnimations} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to header elemeent to allow animations and the fade animation is added to the componenets within this div, //This div is referenced from ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s*/}
      <Grid container direction="row" my={4} className='text2' spacing={2} columnSpacing={21}> {/*Grid component from Material UI is used here to align and organise content*/}
      <Grid item> {/*These elements were produced by myself*/}
      <img style={{boxShadow: "5px 20px 40px black", borderRadius: "5%"}} src={img3} width="500" height="500"alt=''/>
      </Grid>
        <Grid item xs={11} sm={8} md={6}> {/*This Grid item is responsive for various devices. Tutorial referencel: https://www.youtube.com/watch?v=jrgiTFwvglw&t=158s */}
          
        <Typography fontSize="40px"variant='h2' sx={{my: 1, mt: 2}}> The Dangers and Implications of using AI tools for social media content? </Typography>
            <br></br>
          <div className="textColor"> {/*These elements were produced by myself*/}
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        AI related tools can benefit many content creators within content production, however, there are some social media users that utilise AI tools to mislead others. Generative AI tools such as Stable Diffusion (an open-source software) are commonly used to produce fake and misleading content, which tends to widely spread across social media platforms. 
        Social media is the main source of information for many of their users, therefore, it is important to be aware of what content you are posting.  
        </Typography>
        <br></br>
        </div>
        <a href='/CCTP/#Awareness'> {/*Button is added here with custom styling through tailwind css. Tutorial reference: https://www.youtube.com/watch?v=z1EqQft4VsM&t */}
      <motion.button whileHover={{scale: 1.2}}class=" uppercase bg-amber-50 px-7 py-4 text-xl text-black rounded-full" > Find out more</motion.button>
      </a>
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