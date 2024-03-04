import {Typography, Box, Paper } from '@mui/material';
import NavBar from './NavBar';
import './App.css';
import Footer from './footer';
import {motion} from 'framer-motion';


export default function Awareness() {

    return (
        <div className='App'>
        <NavBar />
        <motion.header className="container2" animate={{ opacity: 1}} initial={{ opacity:0}} transition={{duration: 3, ease: "easeOut"}}> 
      <motion.div animate={{y: -50, opacity: 1}} initial={{ opacity:0}} transition={{duration: 1, ease: "easeOut"}}>
        <Typography  fontSize="50px" variant='h1' sx={{my: 4, }}>AI Tools</Typography>
        <motion.p  class="font-light  max-w-xl">Most popular and effective AI tools for social media content creators and enthusiasts</motion.p>
        <br></br>
        
      </motion.div>
      </motion.header>



        <div className='mainBody'>
        <div className='wrapper'>

        
        <Box >
        <Paper elevation={16} square={false} style={{ width: {xs: 1, md:500}, padding: 30 }}>
      <Typography variant='h2' sx={{my: 1, mt: 2}}>Useful AI tools for your creative artworks on social media</Typography>
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
        </div>
        
       
       <Footer />
    </div>

    );

}