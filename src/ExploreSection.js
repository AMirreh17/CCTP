import './App.css';
import { Box, Typography, Grid, Paper} from '@mui/material';
import {motion} from 'framer-motion';


export default function Explore(){
    return(
        <div className='mainBody'>
        <Grid container direction="row" className='text3' spacing={2} columnSpacing={21}>
      
      <Grid item xs={11} sm={9} md={6}>
        <div className='text-black'>
      <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Learn more about AI and Social Media</Typography>
          <br></br></div>
          <div className="textColor">
      <Typography  fontSize="20px" sx={{mt: 2}} > 
      Explore our website and find out the context behind how AI has revolutionised the social media world.
      </Typography>
      <br></br>
      </div>
      </Grid>
      </Grid>
        <Box sx={{display: 'flex', flexDirection: {xs: "column", md: "row"},  justifyContent:'space-between', gap:3, m: 3,  }}>
       
       <Paper  elevation={3} square={false} style={{ width: {xs: 1, md:500}, padding: 40 }}>
         
         <Typography fontSize="40px" variant='h2'>Background</Typography>
         <div className="textColor">
         <Typography sx={{mt: 2}}> 
         What is Artificial Intelligence and why is it used within most social media platforms. 
         Does this have an impact on me? Find out more about the context behind AI and how it’s used by many users on social media.
         </Typography>
       </div>
         <br></br>
         <a href='/CCTP/#background'>
         <motion.button whileHover={{scale: 1.2}}class=" uppercase bg-amber-50 px-5 py-3  text-black rounded-full"> Find out More</motion.button>
         </a>
         
       </Paper>
       <Paper  elevation={3} square={false} style={{ width: {xs: 1, md:500}, padding: 40 }}>
         
         <Typography  fontSize="40px"variant='h2'>AI Resources</Typography>
         <div className="textColor">
         <Typography sx={{mt: 2}}> 
         Explore the vast world of AI resources for content creation and creative artwork. 
         View our selection of popular AI tools and resources best suited for you or any social media enthusiast who is interested in learning more about AI.
         </Typography>
         </div>
        
         <br></br>
         <a href='/CCTP/#AIResources'>
         <motion.button whileHover={{scale: 1.2}}class=" uppercase bg-amber-50 px-5 py-3 text-black rounded-full"> Find out More</motion.button>
         </a>
       </Paper>
       <Paper  elevation={3} square={false} style={{ width: {xs: 1, md:500}, padding: 40 }}>
         
         <Typography  fontSize="40px"variant='h3'> Awareness</Typography>
         <div className="textColor">
         <Typography sx={{mt: 2}}> 
         What are the dangers of AI and how does this have an impact on social media users? 
         Find out more about the dangers of AI and how to be more aware of AI misinformation along your social media journeys. 
         </Typography>
         </div>
       
         <br></br>
         <a href='/CCTP/#Awareness'>
         <motion.button whileHover={{scale: 1.2}}class=" uppercase bg-amber-50 px-5 py-3  text-black rounded-full"> Find out More</motion.button>
         </a>
         
       </Paper>
       </Box>
       
        </div>
             
    )
}