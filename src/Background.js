import {Typography, Grid } from '@mui/material';
import NavBar from './NavBar';
import './App.css';
import Footer from './footer';
import {motion, useMotionValueEvent, useScroll, useSpring, useMotionValue} from 'framer-motion';
import { useRef } from 'react';
import img1 from '../src/assets/AI.png';
import img2 from '../src/assets/background2.png';
import img3 from '../src/assets/background3.png';


export default function Test() {

  const container = useRef(null);
      const yScroll = useMotionValue(0);
      const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', '0.8 0.21']
      }

      )
      
      
     
      const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      });
      

      useMotionValueEvent(scrollYProgress, "change", (latest) => {
        yScroll.set(latest);
        console.log(latest)
      })

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

    return (
      
      <div className="App">

      <NavBar />
  
      <div ref={container}>
      <motion.header className="container2" animate={{ opacity: 1}} initial={{ opacity:0}} transition={{duration: 3, ease: "easeOut"}}> 
      <motion.div animate={{y: -50, opacity: 1}} initial={{ opacity:0}} transition={{duration: 1, ease: "easeOut"}}>
        <Typography  fontSize="60px" variant='h1' sx={{my: 4, }}>Background</Typography>
        <motion.p  class="font-light  max-w-xl">The context behind Artificial intelligence and how it has impacted social media content and platforms</motion.p>
        <br></br>
        
      </motion.div>
      </motion.header>

      <motion.div class="text-white py-10" className='backgroundsection2'>

        <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>
      <Grid container direction="row" my={4} className='text3' spacing={2} columnSpacing={21}>
      
        <Grid item xs={9} sm={7}>
        <div className='text-black'>
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
       
        
      </Grid>
      </motion.div>
      </motion.div>

      <motion.div className="backgroundsection2" class="py-10" >
      <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>
      <Grid container direction="row" my={4} className='text2' spacing={2} columnSpacing={15}>
      <Grid item>
      <img style={{boxShadow: "5px 20px 40px black", borderRadius: "5%"}}  src={img1} width="600" height="500"alt=''/>
      </Grid>
        <Grid item xs={11} sm={8} md={6}>
        <Typography fontSize="40px"variant='h2' sx={{my: 1, mt: 2}}>How is AI used within social media applications?</Typography>
            <br></br>
          <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        AI systems have been implemented into most social media platforms to improve their user experiences. Some of these platforms consist of Instagram, YouTube, X, Facebook, Snapchat and TikTok. 
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

      <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>
      <Grid container direction="row" my={4} className='text' spacing={2} columnSpacing={21}>
     
      <Grid item xs={11} sm={8} md={6}>
      <div className='text-black'>
      <Typography fontSize="40px"variant='h2' sx={{my: 1, mt: 2}}>How is AI implemented within social media content?</Typography>
          <br></br>
          </div>
        <div className="textColor">
      <Typography  fontSize="20px" sx={{mt: 2}} > 
      With the rise of generative AI and AI tools in the recent years, this has made content creation on social media platforms a lot easier.
      There are many tools available which can speed the process of producing content such as generating content ideas, video editing, thumbnails, tags, 
      generating artwork and video descriptions/titles.  
      </Typography>
      <Typography  fontSize="20px" sx={{mt: 2}} > 
      Some of the popular AI tools used consist of Midjourney, ChatGPT, Video AI, Rapid Tags, Tube Buddy and many more. 
      If you want to find out more information about AI tools for social media or you are interested in using some of the tools mentioned above, 
      check out our AI tools page for our current recommendations.  
      </Typography>
      <br></br>
      </div>

      </Grid>     
       <Grid item>
      <img src={img2} width="500" height="500"alt=''/>
      </Grid>
      </Grid>
      </motion.div>
      </motion.div>

      <motion.div className="background-section-3" class="py-10">
      <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>
      <Grid container direction="row" my={4} className='text2' spacing={2} columnSpacing={21}>
      <Grid item>
      <img style={{boxShadow: "5px 20px 40px black", borderRadius: "5%"}} src={img3} width="500" height="500"alt=''/>
      </Grid>
        <Grid item xs={11} sm={8} md={6}>
          
        <Typography fontSize="40px"variant='h2' sx={{my: 1, mt: 2}}> The Dangers and Implications of using AI tools for social media content? </Typography>
            <br></br>
          <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        AI related tools can benefit many content creators within the creation processes, however, there are some social media users that utilise these AI tools to mislead others. Generative AI tools such as Stable Diffusion (an open-source software) are commonly used to produce fake and inappropriate content which could widely spread across social media platforms. 
        Social media is the main source of information for many of their users, therefore, it is important to be aware of what content you post.  
        </Typography>
        <br></br>
        </div>
        </Grid>
      </Grid>
      </motion.div>
      </motion.div>
      
      <motion.div class="text-white py-10" className='backgroundsection2'>

        <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>
        <Grid container direction="row" my={4} className='text3' spacing={2} >

            <Grid item xs={9} sm={7}>
            <div className='text-black'>
            <Typography fontSize="40px"variant='h2' sx={{my: 1, mt: 2}}>Check out this video</Typography>

              
                <br></br>
                </div>
              <div className="textColor">
            <Typography  fontSize="20px" sx={{mt: 2}} > 
            This video summarises the topics of AI and social media further with some addition information about AI tools for social media 
            </Typography>
            <br></br>
            </div>
            </Grid>
            </Grid>
        </motion.div>
        </motion.div>
      
      
        <Footer />
      
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