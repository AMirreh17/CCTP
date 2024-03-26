import {Typography, Grid } from '@mui/material';
import NavBar from './NavBar';
import './App.css';
import Footer from './footer';
import { useRef } from 'react';
import {motion, useSpring, useScroll} from 'framer-motion';
import toolimg from '../src/assets/chatgpt.avif'; // importing a image from assets folder
import toolimg2 from '../src/assets/midjourney.avif'; // importing a image from assets folder
import toolimg3 from '../src/assets/Dall.png'; // importing a image from assets folder
import toolimg4 from '../src/assets/sora.png'; // importing a image from assets folder
import toolimg5 from '../src/assets/vidyo.png'; // importing a image from assets folder
import toolimg6 from '../src/assets/tubebuddy.png'; // importing a image from assets folder
import toolimg7 from '../src/assets/magicstudio.png'; // importing a image from assets folder
import toolimg8 from '../src/assets/timebolt.png'; // importing a image from assets folder

import logoimg from '../src/assets/gptlogo.jpg'; // importing a image from assets folder
import logoimg2 from '../src/assets/Midjourneylogo.png'; // importing a image from assets folder
import logoimg3 from '../src/assets/vidyoailogo.jpg'; // importing a image from assets folder
import logoimg4 from '../src/assets/tubebuddylogo.png'; // importing a image from assets folder


export default function Awareness() {
  const container = useRef(null);
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
   const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start end', '0.8 0.18']
  })
   const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


    return (
      
        <div className='App'>
        <NavBar />
        <div ref={container}>
        <motion.header className="container2" animate={{ opacity: 1}} initial={{ opacity:0}} transition={{duration: 3, ease: "easeOut"}}> 
      <motion.div animate={{y: -50, opacity: 1}} initial={{ opacity:0}} transition={{duration: 1, ease: "easeOut"}}>
        <Typography  fontSize="55px" variant='h1' sx={{my: 4, }}>AI Resources</Typography>
        <motion.p  class="font-light  max-w-xl">Most popular and effective AI tools for social media content creators and enthusiasts</motion.p>
        <br></br>
        
      </motion.div>
      </motion.header>
      
      <motion.div class="text-white py-10 align-middle" className='backgroundsection2'>

        <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>
        <Grid container direction="row" className='text3' spacing={2} columnSpacing={21}>
      
      <Grid item xs={11} sm={9} md={6}>
        <div className='text-black'>
      <Typography align="center" fontSize="40px"variant='h2' sx={{my: 1, mt: 2}}>Trendy AI Tools </Typography>
          <br></br>
          </div>
      <div className="textColor">
      <Typography  fontSize="20px" sx={{mt: 2}} > 
      Here are some useful AI tools utilised by many social media content creators and creatives across the world
      </Typography>
      </div>
      </Grid>
      </Grid>
      <Grid container direction="row" my={4} className='text3' spacing={2} columnSpacing={21}>
      
        
        <Grid item  xs={9} sm={5} md={3}>
          <motion.div whileHover={{scale: 1.1}}>
        <a href='https://chat.openai.com/auth/login'>
        <img src={logoimg} width="300" height="500"alt='ChatGPT'/>
        </a></motion.div>
        </Grid>
        <Grid item  xs={9} sm={5} md={3}>
        <motion.div whileHover={{scale: 1.1}}>
        <a href='https://discord.com/invite/midjourney'>
        <img src={logoimg2} width="300" height="500"alt='Midjourney'/>
        </a>
        </motion.div>
        </Grid>
        <Grid item  xs={9} sm={5}md={3}>
        <motion.div whileHover={{scale: 1.1}}>
        <a href='https://vidyo.ai/'>
        <img src={logoimg3} width="300" height="500"alt='Vidyo'/>
        </a></motion.div>
        </Grid>
        <Grid item  xs={9} sm={5} md={3}>
        <motion.div whileHover={{scale: 1.1}}>
        <a href='https://chromewebstore.google.com/detail/tubebuddy/mhkhmbddkmdggbhaaaodilponhnccicb'>
        <img src={logoimg4} width="300" height="500"alt='TubeBuddy'/>
        </a></motion.div>
        </Grid>
      </Grid>
      
      </motion.div>
      </motion.div>

      <motion.div className="backgroundsection3" class="py-10" > 
      <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to this div elemeent to allow aniamtions and the fade up animation is added to the componenets within this div*/}
      <Grid container direction="row" my={4} className='text3' spacing={2} columnSpacing={21}>
       
        <Grid item xs={11} sm={8} md={7}> {/*Grid component from Material UI is used here to align and organise content*/}
          <div className='text-white'>
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>What is Generative AI?</Typography>
            <br></br>
            </div>
          <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        AI is a technology/system which is designed to complete complex tasks. Generative AI in particular, is a type pf AI technology used to 
        produce different forms of content. These forms of content can range from video, images, illustrations, audio and text (such as ChatGPT). Below, we will be 
        our resource gallery for Generative AI tools, feel free to check it out.
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
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>ChatGPT</Typography>
        <div class="font-light text-lg">
          <p>Text-based, Automation, Free to use</p>
        </div>
        </div>
        <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        ChatGPT is a text-to-text generative AI tool which allows users to complete text-based tasks through commanding prompts. This is created by the company Open AI and this AI tool brings a more conversational style response compared to your regular AI tools. 
        ChatGPT is commonly used by social media users and content creators to generate content ideas, scripts, and to create video titles and descriptions.  
        </Typography>
        <br></br>
        </div>
        <a href='https://chat.openai.com/auth/login'>
         <motion.button whileHover={{scale: 1.2}}class=" uppercase bg-black px-7 py-5 text-xl text-white rounded-full" > View Source</motion.button>
         </a>
        </Grid>
        <Grid item>
        <img src={toolimg} width="500" height="500"alt=''/>
        </Grid>
        
      </Grid>
      </motion.div>
      </motion.div>
      <motion.div  class="text-white py-10" className='welcome'>

        <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to this div elemeent to allow aniamtions and the fade up animation is added to the componenets within this div*/}
      <Grid container direction="row" my={4} className='text2' spacing={2} columnSpacing={21}> {/*Grid component from Material UI is used here to align and organise content*/}
      <Grid item>
        <img src={toolimg2} width="500" height="500"alt=''/>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
        <div className='text-black'>
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Midjourney</Typography>
        <div class="font-light text-lg">
          <p>Image-based, Creative, Subscription</p>
        </div>
        </div>
          <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        Midjourney is a text-to image generative AI tool which allows users to produce AI generated images from commanding prompts. Midjourney is an independent research team which focuses on the innovation and expansion of AI and the human species. 
        This AI tool is commonly used to produce graphics and artwork which can be shared across social media platforms. Midjourney is one of the leading image-based AI tools available.  
        </Typography>
        <br></br>
        </div>
        <a href='https://discord.com/invite/midjourney'>
         <motion.button whileHover={{scale: 1.2}}class=" uppercase bg-black px-7 py-5 text-xl text-white rounded-full" > View Source</motion.button>
         </a>
        </Grid>
      </Grid>
      </motion.div>
      </motion.div>
      
      <motion.div  class="text-white py-10" className='welcome'>

        <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to this div elemeent to allow aniamtions and the fade up animation is added to the componenets within this div*/}
      <Grid container direction="row" my={4} className='text' spacing={2} columnSpacing={21}> {/*Grid component from Material UI is used here to align and organise content*/}
      
        <Grid item xs={12} sm={8} md={6}>
        <div className='text-black'>
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>DALL-E 2</Typography>
        <div class="font-light text-lg">
          <p>Image-based, Creative, Pay to use</p>
        </div>
          </div>
        <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        DALL-E 2 is a text to image generative AI tool which allows users to produce AI generated images through commanding prompts. 
        This AI tool was also created by the company, Open AI, which is one of the leading companies within generative AI. This AI tool is commonly used to produce graphics and artwork which can be shared across social media platforms. 
        Alongside Midjourney, DALL-E is one of the leading image-based AI tools available. 
        </Typography>
        <br></br>
        </div>
        <a href='https://openai.com/dall-e-2'>
         <motion.button whileHover={{scale: 1.2}}class=" uppercase bg-black px-7 py-5 text-xl text-white rounded-full" > View Source</motion.button>
         </a>
        </Grid>
        <Grid item>
        <img src={toolimg3} width="500" height="500"alt=''/>
        </Grid>
      </Grid>
      </motion.div>
      </motion.div>
       
      <motion.div  class="text-white py-10" className='welcome'>

      <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to this div elemeent to allow aniamtions and the fade up animation is added to the componenets within this div*/}
        <Grid container direction="row" my={4} className='text2' spacing={2} columnSpacing={21}> {/*Grid component from Material UI is used here to align and organise content*/}
        <Grid item>
        <img src={toolimg4} width="500" height="500"alt=''/>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
        <div className='text-black'>
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Sora AI <span class="font-light text-lg">(*New*)</span></Typography>
        <div class="font-light text-lg">
        <p>Video-based, Innovative, Recently added</p>
        </div>
        </div>
        <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        Sora AI is a newly text to video generative AI tool which allows users to produce AI generated one minute video clips through commanding prompts. This tool was also created by the company, Open AI, and this newly released AI tool innovates AI and motion. This tool could potentially be used for stock footage within video content on social media or potentially visual tutorials and demonstrations. 
        This tool has not been released to the public yet, but if you want to keep up to date with the developments or its public release, please follow the link below. 
        </Typography>
        <br></br>
        </div>
        <a href='https://openai.com/sora'>
        <motion.button whileHover={{scale: 1.2}}class=" uppercase bg-black px-7 py-5 text-xl text-white rounded-full" > View Source</motion.button>
        </a>
        </Grid>
        </Grid>
      </motion.div>
      </motion.div>
      <motion.div className="welcome3" class="py-10" > 
      <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to this div elemeent to allow aniamtions and the fade up animation is added to the componenets within this div*/}
      <Grid container direction="row" my={4} className='text3' spacing={2} columnSpacing={21}>
       
        <Grid item xs={11} sm={8} md={7}> {/*Grid component from Material UI is used here to align and organise content*/}
          <div className='text-white'>
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>AI tools for content creators</Typography>
            <br></br>
            </div>
          <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        Many social media content creators utilise AI tools to improve their content production and create outstanding artwork. 
        There are various AI tools available, which can benefit your social media experience and enhance your creativity when used in a positive light.
        Below, we will be 
        our resource gallery for social media content based AI tools, feel free to check it out.
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
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Vidyo AI</Typography>
        <div class="font-light text-lg">
          <p>Short form content, Content creation, Productivity</p>
        </div>
        </div>
        <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        VIdyo AI is a video-based AI tool which allows users to edit long form content into short form content which can be published onto social media platforms such as YouTube and TikTok. 
        This AI tool allows the ability to cut down podcast videos into many short form snippets which then can be uploaded onto TikTok or YouTube Shorts. 
        This tool allows content creators to improve their short-form content and produce content at a quicker rate.  
        </Typography>
        <br></br>
        </div>
        <a href='https://vidyo.ai/'>
         <motion.button whileHover={{scale: 1.2}}class=" uppercase bg-black px-7 py-5 text-xl text-white rounded-full" > View Source</motion.button>
         </a>
        </Grid>
        <Grid item>
        <img src={toolimg5} width="500" height="500"alt=''/>
        </Grid>
        
      </Grid>
      </motion.div>
      </motion.div>
      <motion.div  class="text-white py-10" className='welcome'>

        <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to this div elemeent to allow aniamtions and the fade up animation is added to the componenets within this div*/}
      <Grid container direction="row" my={4} className='text2' spacing={2} columnSpacing={21}> {/*Grid component from Material UI is used here to align and organise content*/}
      <Grid item>
        <img src={toolimg6} width="500" height="500"alt=''/>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
        <div className='text-black'>
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>TubeBuddy</Typography>
        <div class="font-light text-lg">
          <p>YouTube Analytics, SEO, Long form content</p>
        </div>
        </div>
        <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        TubeBuddy is a YouTube creation and strategy tool available to YouTubers who want to improve their content and exposure. 
        Tube Buddy utilizes AI features to generate titles for videos, suggest short form content ideas and analyze your potential thumbnails to see the potential virality it can bring to your videos. 
        Also, there are other beneficial features which can help your YouTube videos such as video analysis and ratings, tags, and SEO. 
        </Typography>
        <br></br>
        </div>
        <a href='https://chromewebstore.google.com/detail/tubebuddy/mhkhmbddkmdggbhaaaodilponhnccicb'>
         <motion.button whileHover={{scale: 1.2}}class=" uppercase bg-black px-7 py-5 text-xl text-white rounded-full" > View Source</motion.button>
         </a>
        </Grid>
      </Grid>
      </motion.div>
      </motion.div>
      <motion.div  class="text-white py-10" className='welcome'>

        <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to this div elemeent to allow aniamtions and the fade up animation is added to the componenets within this div*/}
      <Grid container direction="row" my={4} className='text' spacing={2} columnSpacing={21}> {/*Grid component from Material UI is used here to align and organise content*/}
      
        <Grid item xs={12} sm={8} md={6}>
        <div className='text-black'>
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Magic Studio</Typography>
        <div class="font-light text-lg">
          <p>Image-based, Photo editor, Content creation</p>
        </div>
        </div>
        <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        Magic Studio is an AI tool which allows users to edit parts of an image with the use of AI. 
        This tool offers users features such as removing unwanted objects within an image, AI image generation through text prompts, 
        background remover, image rescaling and many more. This tool can be beneficial to photo-based content creators, especially on social media applications such as Instagram.  
        </Typography>
        <br></br>
        </div>
        <a href='https://magicstudio.com/'>
         <motion.button whileHover={{scale: 1.2}}class=" uppercase bg-black px-7 py-5 text-xl text-white rounded-full" > View Source</motion.button>
         </a>
        </Grid>
        <Grid item>
        <img src={toolimg7} width="500" height="500"alt=''/>
        </Grid>
        
      </Grid>
      </motion.div>
      </motion.div>
      <motion.div  class="text-white py-10" className='welcome'>

        <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to this div elemeent to allow aniamtions and the fade up animation is added to the componenets within this div*/}
      <Grid container direction="row" my={4} className='text2' spacing={2} columnSpacing={21}> {/*Grid component from Material UI is used here to align and organise content*/}
      <Grid item>
        <img src={toolimg8} width="500" height="500"alt=''/>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
        <div className='text-black'>
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>TimeBolt</Typography>
        <div class="font-light text-lg">
          <p>Content creation, Video editing, Multi platform</p>
        </div>
        </div>
        <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        Time Bolt is a video and audio editing tool which uses AI to remove unwanted sounds and significantly cut down long form videos such as podcasts into shorter clips. 
        This tool brings many features such as audio removal, short form content editing, recording video meetings, live streaming highlights and many more. 
        This tool can benefit podcasters, live streamers (due to its compatibility with Twitch), or any video-based content creator.
        </Typography>
        <br></br>
        </div>
        <a href='https://www.timebolt.io/'>
         <motion.button whileHover={{scale: 1.2}}class=" uppercase bg-black px-7 py-5 text-xl text-white rounded-full" > View Source</motion.button>
         </a>
        </Grid>
      </Grid>
      </motion.div>
      </motion.div>
       <Footer />
       {/*This div displays the scroll line animation and sticks to the bottom of the browser view*/}
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