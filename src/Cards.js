import './App.css';
import { Typography, Card, Box, Grid } from '@mui/material';
import cardimg from '../src/assets/Insta.avif';
import cardimg2 from '../src/assets/X.avif';
import cardimg3 from '../src/assets/yt.avif';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {motion} from 'framer-motion';


export default function Card1() {
  
  return (
    
    <div className='mainBody'>
      
        <Grid container direction="row" className='text3' spacing={2} columnSpacing={21}>
      
      <Grid item xs={11} sm={9} md={6}>
        <div className='text-black'>
      <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>External Resources</Typography>
          <br></br></div>
          <div className="textColor">
      <Typography  fontSize="20px" sx={{mt: 2}} > 
      Here are some useful resources relating to how AI misinformation is mitigated between different social media platforms
      </Typography>
      <br></br>
      </div>
      </Grid>
      </Grid>
    <Box sx={{display: 'flex', flexDirection: {xs: "column", md: "row"},  justifyContent:'space-between', gap:15, m: 3, alignItems: 'center' }}>
    <Card sx={{ maxWidth: 450 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {cardimg}
        title="Instagram"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Instagram Help Centre
        </Typography>
        <div className="textColor">
        <Typography variant="body2" >
          Instagram Help Centre, Why are some Instagram posts marked as false information. Find out more information about how Instagram tackles false information
        </Typography>
        </div>
      </CardContent>
      
      <CardActions class="align-middle py-2">
      <a href='https://help.instagram.com/388534952086572' >
         <motion.button whileHover={{scale: 1.2}}class=" bg-white px-5 py-3  text-black rounded-full" > View Source</motion.button>
         </a>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 450 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {cardimg2}
        title="Twitter"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          X (Twitter)
        </Typography>
        <div className="textColor">
        <Typography variant="body2" >
          X Help Centre, what are Community Notes. Find out more information about how X solves false information and context on their platform
        </Typography>
        </div>
      </CardContent>
      
      <CardActions class="align-middle py-2">
      <a href='https://help.twitter.com/en/using-x/community-notes' >
         <motion.button whileHover={{scale: 1.2}}class=" bg-white px-5 py-3  text-black rounded-full" > View Source</motion.button>
         </a>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 450 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {cardimg3}
        title="YouTube"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          YouTube Official Blog
        </Typography>
        <div className="textColor">
        <Typography variant="body2" >
        YouTube Official Blog, Our approach to Responsible innovation. Find out more information about how YouTube tackles different AI usage on their platform 
          </Typography>
        </div>
      </CardContent>
      
      <CardActions class="align-middle py-2">
      <a href='https://blog.youtube/inside-youtube/our-approach-to-responsible-ai-innovation/' >
         <motion.button whileHover={{scale: 1.2}}class=" bg-white px-5 py-3  text-black rounded-full" > View Source</motion.button>
         </a>
      </CardActions>
    </Card>
    </Box>
    </div>
  );
}