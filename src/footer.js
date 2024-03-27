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
      
        <a href="/CCTP/#background">
        <Typography align="left" fontSize="15px" sx={{mt: 2}} > 
        Background
        </Typography>
        </a>
        <a href="/CCTP/#AIResources">
        <Typography align="left" fontSize="15px" sx={{mt: 2}} > 
        AI Resources
        </Typography>
        </a>
        <a href="/CCTP/#Awareness">
        <Typography align="left" fontSize="15px" sx={{mt: 2}} > 
        Awareness
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
        <a href="https://openai.com/research/overview">
        <Typography align="left" fontSize="15px" sx={{mt: 2}} > 
        Open AI Research 
        </Typography>
        </a>
        <a href="https://help.instagram.com/975917226081685">
        <Typography align="left" fontSize="15px" sx={{mt: 2}} > 
        Instagram - Tips for identifying false information
        </Typography>
        </a>
        <a href="https://www.marketingaiinstitute.com/blog/what-is-artificial-intelligence-for-social-media#:~:text=Today%2C%20social%20media%20AI%20tools,in%20some%20way%20to%20function">
        <Typography align="left" fontSize="15px" sx={{mt: 2}} > 
        What is Artificial Intelligence for social media
        </Typography>
        </a>
        
        
       </div>
        </Grid>
      
      </Grid>
      <Typography align="center" sx={{mt: 2}} >
          ©The Undercover Project - 2024 | This website is a part of a University final year project at the University of West of England (UWE)
          </Typography>
            </footer>
        </div>
    )

}

