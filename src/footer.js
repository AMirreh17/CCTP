import './App.css';
import { Typography, Grid } from '@mui/material';

export default function Footer() {

    return(
        <div>
            <footer  class="text-"className="Footer1"style={{backgroundColor: "#0e0d0d"}}>
            <Grid container direction="row" my={4} className='text3' spacing={2} >
      
      <Grid item xs={11} sm={8} md={4}>
        <Typography align="left" fontSize="15px"variant='h4' sx={{my: 1, mt: 2}}>The Undercover Project</Typography>  
          <div className="textColor">
      
        <a href="/CCTP/#about">
        <Typography align="left" fontSize="15px" sx={{mt: 2}} > 
        About
        </Typography>
        </a>
        <a href="/CCTP/#background">
        <Typography align="left" fontSize="15px" sx={{mt: 2}} > 
        Background
        </Typography>
        </a>
        <a href="/CCTP/#recommendations">
        <Typography align="left" fontSize="15px" sx={{mt: 2}} > 
        Tools
        </Typography>
        </a>
       </div>
        </Grid>
        <Grid item xs={11} sm={8} md={4}>
        <Typography  align="left"fontSize="15px"variant='h4' sx={{my: 1, mt: 2}}>Contact Us</Typography>  
          <div className="textColor">
        <Typography  align="left" fontSize="15px" sx={{mt: 2}}> Email: admin@theundercoverproject.com</Typography>
        <Typography  align="left"fontSize="15px" sx={{mt: 2}}> Tel: </Typography>
        <Typography  align="left" fontSize="15px"sx={{mt: 2}}> Location: </Typography>
        
       </div>
        </Grid>
        <Grid item xs={11} sm={8} md={4}>
        <Typography  align="left" fontSize="15px"variant='h4' sx={{my: 1, mt: 2}}>Useful External Resources</Typography>  
          <div className="textColor">
        <a href="/CCTP">
        <Typography align="left" fontSize="15px" sx={{mt: 2}} > 
        Link 1 
        </Typography>
        </a>
        <a href="/CCTP/#about">
        <Typography align="left" fontSize="15px" sx={{mt: 2}} > 
        Link 2
        </Typography>
        </a>
        <a href="/CCTP/#background">
        <Typography align="left" fontSize="15px" sx={{mt: 2}} > 
        Link 3
        </Typography>
        </a>
        
        
       </div>
        </Grid>
      
      </Grid>
      <Typography align="left" sx={{mt: 2}} >
          ©The Undercover Project - 2024 | This website is a part of a University final year project at the University of West of England (UWE)
          </Typography>
            </footer>
        </div>
    )

}