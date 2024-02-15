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
      Explore our website and find out the context behind how AI has revolutionised the social media world
      </Typography>
      <br></br>
      </div>
      </Grid>
      </Grid>
        <Box sx={{display: 'flex', flexDirection: {xs: "column", md: "row"},  justifyContent:'space-between', gap:3, m: 3,  }}>
       
       <Paper  elevation={3} square={false} style={{ width: {xs: 1, md:500}, padding: 10 }}>
         
         <Typography fontSize="40px" variant='h2'>About</Typography>
         <div className="textColor">
         <Typography sx={{mt: 2}}> 
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
           when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
           It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
         </Typography>
       </div>
         <br></br>
         <a href='/CCTP/#about'>
         <motion.button whileHover={{scale: 1.2}}class=" bg-white px-5 py-3  text-black rounded-full" href="/CCTP/#about"> Learn More</motion.button>
         </a>
         
       </Paper>
       <Paper  elevation={3} square={false} style={{ width: {xs: 1, md:500}, padding: 10 }}>
         
         <Typography  fontSize="40px"variant='h2'>Background</Typography>
         <div className="textColor">
         <Typography sx={{mt: 2}}> 
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
           when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
           It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
         </Typography>
         </div>
        
         <br></br>
         <a href='/CCTP/#background'>
         <motion.button whileHover={{scale: 1.2}}class=" bg-white px-5 py-3   text-black rounded-full" href="/CCTP/#about"> Learn More</motion.button>
         </a>
       </Paper>
       <Paper  elevation={3} square={false} style={{ width: {xs: 1, md:500}, padding: 10 }}>
         
         <Typography  fontSize="40px"variant='h3'> Tools</Typography>
         <div className="textColor">
         <Typography sx={{mt: 2}}> 
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
           when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
           It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
         </Typography>
         </div>
       
         <br></br>
         <a href='/CCTP/#recommendations'>
         <motion.button whileHover={{scale: 1.2}}class=" bg-white px-5 py-3  text-black rounded-full" href="/CCTP/#about"> Learn More</motion.button>
         </a>
         
       </Paper>
       </Box>
       
        </div>
             
    )
}