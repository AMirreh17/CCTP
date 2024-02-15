import './App.css';
import {  Typography, Grid } from '@mui/material';


export default function Card(){
    return(
        <div className='welcome3'>
              <Grid container direction="row" className='text3' spacing={2} columnSpacing={21}>
      
                <Grid item xs={11} sm={9} md={6}>
                <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Explore AI</Typography>
                    <br></br>
                    <div className="textColor">
                <Typography  fontSize="20px" sx={{mt: 2}} > 
                Explore our website and find out about how AI has revolutionised the social media world
                </Typography>
                <br></br>
                </div>
                </Grid>
                </Grid>
                
            <Grid container direction="row" my={4} className='text3' spacing={2} columnSpacing={21} alignItems="center">
           

            <Grid item xs={11} sm={9} md={4}>
            <div class="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-6">
            <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>About </Typography>
            
            <div className="textColor">
            <Typography  fontSize="20px" sx={{mt: 2}} > 
             Do you want to find out the background behind our aims as well as the purpose of this project and why it was created? Find out more on About 
            </Typography>
            </div>
            </div>
            </Grid>
            <Grid item xs={11} sm={9} md={4}>
            <div class="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-6">
            <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Background </Typography>
            
            <div className="textColor">
            <Typography  fontSize="20px" sx={{mt: 2}} > 
             Do you want to find out the background behind our aims as well as the purpose of this project and why it was created? Find out more on About 
            </Typography>
            </div>
            </div>
             

            </Grid>
            <Grid item xs={11} sm={9} md={4}>
            <div class="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-6">
            <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Tools </Typography>
            
            <div className="textColor">
            <Typography  fontSize="20px" sx={{mt: 2}} > 
             Do you want to find out the background behind our aims as well as the purpose of this project and why it was created? Find out more on About 
            </Typography>
            </div>
          
            
            </div>
            
            </Grid>
            

            </Grid>
            </div>
    )
}