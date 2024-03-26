import {Typography, Grid } from '@mui/material';
import NavBar from './NavBar';
import './App.css';
import Footer from './footer';
import {motion, useMotionValueEvent, useScroll, useSpring, useMotionValue} from 'framer-motion';
import { useRef } from 'react';
import img1 from '../src/assets/aiexample1.png';
import img2 from '../src/assets/metaexample.png';
import Card1 from './Cards';
import img3 from '../src/assets/researchexample.png'
import img4 from '../src/assets/newsexample2.avif'
import img5 from '../src/assets/fakenews.avif'


export default function Awareness2() {

  const container = useRef(null);
      const yScroll = useMotionValue(0);
      const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', '0.7 0.21']
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
        <Typography  fontSize="55px" variant='h1' sx={{my: 4, }}>Awareness</Typography>
        <motion.p  class="font-light  max-w-xl">How to be more aware of AI based social media content</motion.p>
        <br></br>
        
      </motion.div>
      </motion.header>

      <motion.div class="text-white py-10" className='backgroundsection2'>

        <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>
      <Grid container direction="row" my={4} className='text' spacing={2} columnSpacing={21}>
      
        <Grid item xs={12} md={6} sm={7}>
        <div className='text-black'>
        <Typography fontSize="40px"variant='h2' sx={{my: 1, mt: 2}}> AI Misinformation</Typography>
        
          
            <br></br>
            </div>
          <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        Social media content is one of the most popular forms of media for information and news in recent times. As mentioned throughout our website, AI is becoming more prominent within social media platforms and media.
         Unfortunately, AI generative tools are now being used by social media users and companies to spread misinformation for a specific goal or agenda.  
        </Typography>
        <br></br>
        </div>
        </Grid>
        <Grid item>
      <img style={{boxShadow: "5px 20px 40px black", borderRadius: "5%"}}  src={img5} width="500" height="500"alt=''/>
      </Grid>
        
      </Grid>
      </motion.div>
      </motion.div>

      <motion.div className="backgroundsection2" class="py-10" >
      <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>
      <Grid container direction="row" my={4} className='text2' spacing={2} columnSpacing={15}>
      <Grid item>
      <img style={{boxShadow: "5px 20px 40px black", borderRadius: "5%"}}  src={img1} width="500" height="500"alt=''/>
      </Grid>
        <Grid item xs={11} sm={7} md={6}>
        <Typography fontSize="40px"variant='h2' sx={{my: 1, mt: 2}}>Examples of AI Misinformation</Typography>
            <br></br>
          <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        A recent example of AI misinformation occurring is with the current US presidential election campaigns. AI generated political advertisements were created to highlight a potential future if the current US president, Joe Biden, was to continue for a second presidential term. This generated content consisted of doomsday events, potential world wars, soldiers patrolling the streets, etc. These advertisements are to mislead the public for political gain.   
        </Typography>
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        Another example of AI misinformation was when pictures circulated on social media of the Pope wearing a popular piece of clothing, a puffer jacket. This sparked curiosity as the pictures were very realistic and many social media users believed it to be real. 
        </Typography>
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        AI generative tools are powerful technologies which can influence many social media users; however, are there methods available to protect yourself from AI misinformation on social media?  
        </Typography>
        <br></br>
        <br></br>
        </div>
        </Grid>
      </Grid>
      </motion.div>
      </motion.div>

      <motion.div  class="text-white py-10" className='welcome'>

        <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to this div elemeent to allow aniamtions and the fade up animation is added to the componenets within this div*/}
      <Grid container direction="row" my={4} className='text' spacing={2} columnSpacing={21}> {/*Grid component from Material UI is used here to align and organise content*/}
      
        <Grid item xs={12} sm={8} md={6}>
        <div className='text-black'>
        <Typography fontSize="40px"variant='h2' sx={{my: 1, mt: 2}}> Methods of Prevention </Typography>
        </div>
        <div className="textColor">
        <Typography  fontSize="30px" sx={{mt: 2}} > Utilise built in features within social media applications </Typography>
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        Social media applications are now implementing features to mitigate misinformation and fake news within their platforms. For example, X have created community notes to help allow users to add further context to content posted, to stop the spread of misinformation. 
        Other applications such as Instagram and Facebook have similar features (potential false content on Instagram and Facebook is censored before viewing) to combat false and misleading content.   
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
      <motion.div  class="text-white py-10" className='welcome'>

        <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to this div elemeent to allow aniamtions and the fade up animation is added to the componenets within this div*/}
      <Grid container direction="row" my={4} className='text2' spacing={2} columnSpacing={21}> {/*Grid component from Material UI is used here to align and organise content*/}
      <Grid item>
        <img src={img3} width="500" height="500"alt=''/>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <div className="textColor">
          <Typography  fontSize="30px" sx={{mt: 2}} > Keep up to date with generative AI developments</Typography>
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        Keeping up to date and understanding the developments on generative AI tools can be beneficial in learning how AI misinformation is created to gain further awareness. Common AI generated tools used on social media consist of ChatGPT, Stable Diffusion, DALL-E and many more. 
        If you want to find out more information about AI generated tools, check out our page dedicated to AI tools for social media.   
        </Typography>
        <br></br>
        </div>
        </Grid>
      </Grid>
      </motion.div>
      </motion.div>
      
      <motion.div  class="text-white py-10" className='welcome'>

        <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to this div elemeent to allow aniamtions and the fade up animation is added to the componenets within this div*/}
      <Grid container direction="row" my={4} className='text' spacing={2} columnSpacing={21}> {/*Grid component from Material UI is used here to align and organise content*/}
      
        <Grid item xs={12} sm={8} md={6}>
        <div className="textColor">
        <Typography  fontSize="30px" sx={{mt: 2}} >Conducting your own research</Typography>
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        Researching into the context of the AI misinformation you have encountered can be useful in finding out the truth and protecting yourself. 
        Utilising reliable sources and media are essential when encountering AI content that you are unsure of. A simple google search can solve minor AI misinformation as most reliable sources might have an answer to the context of the content posted. 
        However, more difficult, and widespread AI misinformation on social media will require other methods for protection. 
        </Typography>
        <br></br>
        </div>
        </Grid>
        <Grid item>
        <img src={img4} width="500" height="500"alt=''/>
        </Grid>
      </Grid>
      </motion.div>
      </motion.div>

      
      <motion.div class="text-white py-10" className='backgroundsection3'>

        <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>
        <Grid container direction="row" my={4} className='text3' spacing={2} >

            <Grid item xs={12} sm={7}>
            <div className='text-white'>
            <Typography fontSize="40px"variant='h2' sx={{my: 1, mt: 2}}>Want to find out more?</Typography>
                <br></br>
                </div>
              <div className="textColor">
            <Typography  fontSize="20px" sx={{mt: 2}} > 
            AI misinformation and false content is a growing issue within the world of social media and hopefully the information provided on this page gives you useful advice and insights into how AI can negatively impact social media content. 
            If you want to find out the background behind AI and how it is used within social media content and platforms, check out our dedicated page on the context behind AI. 
            </Typography>
            <br></br>
            </div>
            <a href='/CCTP/#background'>
         <motion.button whileHover={{scale: 1.2}}class=" uppercase bg-amber-50 px-7 py-4 text-xl text-black rounded-full" > Learn More</motion.button>
         </a>
            </Grid>
            </Grid>
        </motion.div>
        </motion.div>
        
        <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>

        <Card1 />
      </motion.div>
        <Footer />
      
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