import {Typography, Box, Paper} from '@mui/material';
import NavBar from './NavBar';
import './App.css';
import {motion} from 'framer-motion';

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
       <motion.div className="container2" animate={{ opacity: 1}} initial={{ opacity:0}} transition={{duration: 1, ease: "easeOut"}}>
        

        <Typography variant="h1">Our Goal</Typography>
       </motion.div>
       <motion.div className='mainBody' variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>
        <div className='wrapper'>

       
        <Box >
        <Paper elevation={16} square={false} style={{ width: {xs: 1, md:500}, padding: 30 }}>
      <Typography variant='h2' sx={{my: 1, mt: 2}}>We want to provide more awareness</Typography>
      <Typography variant='h3'>
          *Prototype Version*
        </Typography>

        <Typography variant= 'body2' sx={{my: 4, mt: 2, whiteSpace: 'pre-line'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
          <Typography variant= 'body2'  sx={{my: 4, mt: 2}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
         </Paper>
          </Box>
          </div>
        </motion.div>
        
       <footer>
        <Typography>
          ©The Undercover Project - 2024
          </Typography>
        </footer>
    </div>
        
   );
}

