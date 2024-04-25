import {Typography, Grid } from '@mui/material'; //importing functions/variables, Typography and Grid from the react library called Material UI. This is referenced from the Material Ui documentsation: https://mui.com/components/
import NavBar from './NavBar'; // importing the function NavBar from NavBar.js file
import './App.css'; // Importing css file called app.css onto this page
import Footer from './footer'; // importing the function Footer from Footer.js file
import {motion, useMotionValueEvent, useScroll, useSpring, useMotionValue} from 'framer-motion'; // importing functions/variables from the react library called Framer Motion. This is referenced from framer motiion documentation:https://www.framer.com/motion/component/ 
import { useRef } from 'react'; // importing the function useRef from react
import img1 from '../src/assets/aiexample1.png'; // importing a image from assets folder
import img2 from '../src/assets/metaexample.png'; // importing a image from assets folder
import Card1 from './Cards'; // importing the function Card1 from Cards.js file
import img3 from '../src/assets/researchexample.png' ;// importing a image from assets folder
import img4 from '../src/assets/newsexample2.avif' ;// importing a image from assets folder
import img5 from '../src/assets/fakenews.webp' ;// importing a image from assets folder


export default function Awareness2() {

   //The variables and functions below are referenced from Oliver Larose and Sakura Dev tutorials: https://www.youtube.com/watch?v=VhXemORYup8&t and https://www.youtube.com/watch?v=GMafliGL7Zs
 const container = useRef(null);// declaring the function container which is equal to the react function useRef. useRef is given a null value, so it can be later added to a element within the page
 const yScroll = useMotionValue(0);
 //Declaring the function ScrollYProgress, this captures the scroll progress of the user from the Y axis. This can be used for scroll animations on the Y axis
 const {scrollYProgress} = useScroll({
   target: container,
   offset: ['start end', '0.7 0.18']
 })
 
 
//Declaring the function scaleX which uses the useSpring function from framer motion. This function can give an element a spring effect while scrolling.
 const scaleX = useSpring(scrollYProgress, {
   stiffness: 100,
   damping: 30,
   restDelta: 0.001
 });
 
 // This is used for viewing the user scroll progress value from the Y axis within the console
 useMotionValueEvent(scrollYProgress, "change", (latest) => {
   yScroll.set(latest);
   console.log(latest)
 })

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

    return (
      
      <div className="App">

      <NavBar /> {/*The NavBar function is added to the top of the page*/}
  
      <div ref={container}> {/*The container function uis added here*/}
      <motion.header className="container2" animate={{ opacity: 1}} initial={{ opacity:0}} transition={{duration: 3, ease: "easeOut"}}> {/*motion is added to the header elemeent to allow animations. The fade animation is added to the components within this div. This div is referenced from the ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s*/}
        <motion.div animate={{y: -50, opacity: 1}} initial={{ opacity:0}} transition={{duration: 1, ease: "easeOut"}}>{/*motion is added to the header elemeent to allow animations. The fade animation is added to the components within this div. This div is referenced from the ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s*/}
        <Typography  fontSize="55px" variant='h1' sx={{my: 4, }}>Awareness</Typography> {/*These elements were produced by myself*/}
        <motion.p  class="font-light  max-w-xl">How to be more aware of AI based social media content</motion.p>
        <br></br>
        
      </motion.div>
      </motion.header>

      <motion.div class="text-white py-10" className='backgroundsection2'>

        <motion.div variants={fadeAnimations} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to this div elemeent to allow animations. The fade animation is added to the components within this div. This div is referenced from the ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s*/}
      <Grid container direction="row" my={4} className='text' spacing={2} columnSpacing={21}> {/*Grid component from Material UI is used here to align and organise content*/}
      
        <Grid item xs={12} md={6} sm={7}>{/*This Grid item is responsive for various devices. Tutorial reference: https://www.youtube.com/watch?v=jrgiTFwvglw&t=158s */}
        <div className='text-black'>
        <Typography fontSize="40px"variant='h2' sx={{my: 1, mt: 2}}> AI Misinformation</Typography>
        
          
            <br></br>
            </div>
          <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        Social media content is one of the most popular forms of media for information and news in recent times. As mentioned throughout our website, AI is becoming more prominent within social media platforms and media.
         Unfortunately, Generative AI tools are now being used by social media users and companies to spread misinformation for a specific goal or agenda.  
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
      <motion.div variants={fadeAnimations} initial="initial" whileInView="animate" viewport={{once: true,}}>  {/*motion is added to this div elemeent to allow animations. The fade animation is added to the components within this div. This div is referenced from the ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s*/}
      <Grid container direction="row" my={4} className='text2' spacing={2} columnSpacing={15}> {/*Grid component from Material UI is used here to align and organise content*/}
      <Grid item> {/*These elements were produced by myself*/}
      <img style={{boxShadow: "5px 20px 40px black", borderRadius: "5%"}}  src={img1} width="500" height="500"alt=''/>
      </Grid>
        <Grid item xs={11} sm={7} md={6}> {/*This Grid item is responsive for various devices. Tutorial reference: https://www.youtube.com/watch?v=jrgiTFwvglw&t=158s */}
        <Typography fontSize="40px"variant='h2' sx={{my: 1, mt: 2}}>Examples of AI Misinformation</Typography>
            <br></br>
          <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        A recent example of AI misinformation occurring was with the US presidential election campaigns. AI generated political advertisements were created to highlight a potential future if the current US president, Joe Biden, was to continue for a second presidential term. This generated content consisted of doomsday events, potential world wars, soldiers patrolling the streets, etc. These advertisements are used to mislead the public for political gain.   
        </Typography>
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        Another example of AI misinformation was when pictures circulated on social media of Pope Francis wearing a popular piece of clothing, a puffer jacket. This sparked curiosity as the pictures were very realistic and many social media users believed it to be real. 
        </Typography>
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        Generative AI tools are powerful technologies which can influence many social media users; however, are there methods available to protect yourself from AI misinformation on social media?  
        </Typography>
        <br></br>
        <br></br>
        </div>
        </Grid>
      </Grid>
      </motion.div>
      </motion.div>

      <motion.div  class="text-white py-10" className='welcome'>

        <motion.div variants={fadeAnimations} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to this div elemeent to allow animations. The fade animation is added to the components within this div. This div is referenced from the ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s*/}
      <Grid container direction="row" my={4} className='text' spacing={2} columnSpacing={21}> {/*Grid component from Material UI is used here to align and organise content*/}
        <Grid item xs={12} sm={8} md={6}> {/*This Grid item is responsive for various devices. Tutorial reference: https://www.youtube.com/watch?v=jrgiTFwvglw&t=158s */}
        <div className='text-black'>{/*These elements were produced by myself*/}
        <Typography fontSize="40px"variant='h2' sx={{my: 1, mt: 2}}> Methods of Prevention </Typography>
        </div>
        <div className="textColor">
        <Typography  fontSize="30px" sx={{mt: 2}} > Utilise built in features within social media applications </Typography>
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        Social media applications are now implementing features to mitigate misinformation and fake news within their platforms. For example, X (Twitter) have created community notes to help allow users to add further context to tweets and posts, to stop the spread of misinformation. 
        Other applications such as Instagram and Facebook have similar features (potential false content on Instagram/Facebook are censored before viewing) to combat false and misleading content.   
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

        <motion.div variants={fadeAnimations} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to this div elemeent to allow animations. The fade animation is added to the components within this div. This div is referenced from the ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s*/}
      <Grid container direction="row" my={4} className='text2' spacing={2} columnSpacing={21}> {/*Grid component from Material UI is used here to align and organise content*/}
      <Grid item> {/*These elements were produced by myself*/}
        <img src={img3} width="500" height="500"alt=''/>
        </Grid>
        <Grid item xs={12} sm={8} md={6}> {/*This Grid item is responsive for various devices. Tutorial reference: https://www.youtube.com/watch?v=jrgiTFwvglw&t=158s */}
          <div className="textColor">
          <Typography  fontSize="30px" sx={{mt: 2}} > Keep up to date with Generative AI developments</Typography>
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        Keeping up to date and understanding the developments within Generative AI tools can be beneficial in learning how AI misinformation is created to gain further awareness. Common Generative AI tools used on social media consists of ChatGPT, Stable Diffusion, DALL-E 2 and many more. 
        If you want to find out more information about Generative AI tools, feel free to visit our page dedicated to AI resources for social media. 
        </Typography>
        <br></br>
        </div>
        </Grid>
      </Grid>
      </motion.div>
      </motion.div>
      
      <motion.div  class="text-white py-10" className='welcome'>

        <motion.div variants={fadeAnimations} initial="initial" whileInView="animate" viewport={{once: true,}}> {/*motion is added to this div elemeent to allow animations. The fade animation is added to the components within this div. This div is referenced from the ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s*/}
      <Grid container direction="row" my={4} className='text' spacing={2} columnSpacing={21}> {/*Grid component from Material UI is used here to align and organise content*/}
      
        <Grid item xs={12} sm={8} md={6}> {/*This Grid item is responsive for various devices. Tutorial reference: https://www.youtube.com/watch?v=jrgiTFwvglw&t=158s */}
        <div className="textColor">{/*These elements were produced by myself*/}
        <Typography  fontSize="30px" sx={{mt: 2}} >Conducting your own research</Typography>
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        Researching into the context of the AI misinformation you have encountered can be useful in finding out the truth and protecting yourself. 
        Utilising reliable sources and media are essential when encountering AI content that could be false. A simple Google search can solve minor AI misinformation as most reliable sources might have an answer to the overall context. 
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

        <motion.div variants={fadeAnimations} initial="initial" whileInView="animate" viewport={{once: true,}}>  {/*motion is added to this div elemeent to allow animations. The fade animation is added to the components within this div. This div is referenced from the ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s*/}
        <Grid container direction="row" my={4} className='text3' spacing={2} > {/*Grid component from Material UI is used here to align and organise content*/}

            <Grid item xs={12} sm={7}> {/*This Grid item is responsive for various devices. Tutorial reference: https://www.youtube.com/watch?v=jrgiTFwvglw&t=158s */}
            <div className='text-white'> {/*These elements were produced by myself*/}
            <Typography fontSize="40px"variant='h2' sx={{my: 1, mt: 2}}>Want to find out more?</Typography>
                <br></br>
                </div>
              <div className="textColor">
            <Typography  fontSize="20px" sx={{mt: 2}} > 
            AI misinformation and false content is a growing issue within the world of social media and hopefully the information provided on this page, gave you useful advice and insights into how AI can negatively impact social media content. 
            If you want to find out more about the background behind AI and how it is used within social media content and platforms, check out our dedicated page on the context behind AI. 
            </Typography>
            <br></br>
            </div>
            <a href='/CCTP/#background'>
         <motion.button whileHover={{scale: 1.2}}class=" uppercase bg-amber-50 px-7 py-4 text-xl text-black rounded-full" > Background</motion.button>
         </a>
            </Grid>
            </Grid>
        </motion.div>
        </motion.div>
        
        <motion.div variants={fadeAnimations} initial="initial" whileInView="animate" viewport={{once: true,}}>  {/*motion is added to this div elemeent to allow animations. The fade animation is added to the components within this div. This div is referenced from the ByteGrad YouTube Tutorial: https://www.youtube.com/watch?v=ajPPgKTViX8&t=32s*/}

        <Card1 />{/*The Card function is placed here. The web content from the Cards.js file is added here*/}
      </motion.div>
        <Footer />{/*The Footer function is placed here. The web content from the Footer.js file is added here*/}
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