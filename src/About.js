import {Typography, Grid} from '@mui/material';
import NavBar from './NavBar';
import './App.css';
import {motion} from 'framer-motion';
import Footer from './footer';

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
export default function About() {
   return(
    <div className='App'>
        <NavBar />
        <motion.header className="container2" animate={{ opacity: 1}} initial={{ opacity:0}} transition={{duration: 3, ease: "easeOut"}}> 
      <motion.div animate={{y: -50, opacity: 1}} initial={{ opacity:0}} transition={{duration: 1, ease: "easeOut"}}>
        <Typography  fontSize="80px" variant='h1' sx={{my: 4, }}>About</Typography>
        <motion.p  class="font-light  max-w-xl">Find out more about our project aims and objectives</motion.p>
        <br></br>
        
      </motion.div>
      </motion.header>
      <motion.div class="text-white py-10" className='backgroundsection2'>

        <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>
        <Grid container direction="row" my={4} className='text3' spacing={2} columnSpacing={21}>

        <Grid item xs={9} sm={7}>
        <div className='text-black'>
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>What is The Undercover Project?</Typography>

          
            <br></br>
            </div>
          <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        The Undercover Project is an online resource to help educate social media users and enthusiasts on the impacts and benefits of AI within social media content and platforms. 
        </Typography>
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        This online resource is a part of a final year project on the BSc Digital Media course at the University of West of England (UWE). The objectives of this project are to bring more awareness to AI within social media and to provide advice on the usability of AI within social media content production. 
        For example, recommending AI tools which benefit social media content creators and enthusiasts.  
        </Typography>
        <br></br>
        </div>
        </Grid>


        </Grid>
        </motion.div>
        </motion.div>
        
       <Footer />
    </div>
        
   );
}

