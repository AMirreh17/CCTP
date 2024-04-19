import './App.css'; // Importing css file called app.css onto this page
import { Typography, Card, Box, Grid } from '@mui/material'; //importing functions/variables, Typography, Box, Card and Grid  from react library called Material UI. This is referenced the from Material Ui documentsation: https://mui.com/components/
import cardimg from '../src/assets/Insta.avif'; // importing a image from assets folder
import cardimg2 from '../src/assets/X.avif'; // importing a image from assets folder
import cardimg3 from '../src/assets/yt.avif';// importing a image from assets folder
import CardActions from '@mui/material/CardActions'; // Importing CardActions component from the Material UI Icons library. Reference: https://mui.com/material-ui/react-card/
import CardContent from '@mui/material/CardContent'; // Importing CardContent component from the Material UI Icons library. Reference: https://mui.com/material-ui/react-card/
import CardMedia from '@mui/material/CardMedia'; // Importing CardMedia component from the Material UI Icons library. Reference: https://mui.com/material-ui/react-card/ 
import {motion} from 'framer-motion'; // Importing motion component from Framer Motion. he is referenced from framer motiion documentation:https://www.framer.com/motion/component/ 


export default function Card1() {
  
  return (
    
    <div className='mainBody'>
      
    <Grid container direction="row" className='text3' spacing={2} columnSpacing={21}> {/*Grid component from Material UI is used here to align and organise content*/} 
      
    <Grid item xs={11} sm={9} md={6}> {/*This Grid item is responsive for various devices. Tutorial referencel: https://www.youtube.com/watch?v=jrgiTFwvglw&t=158s */}
      <div className='text-black'> {/*These elements were produced by myself*/}
      <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>External Resources</Typography>
          <br></br></div>
          <div className="textColor">
      <Typography  fontSize="20px" sx={{mt: 2}} > 
      Here are some useful resources relating to how AI misinformation is mitigated between different social media platforms.
      </Typography>
      <br></br>
      </div>
      </Grid>
      </Grid>

    {/* This card component is based on the card media documentation template from Matrial UI. This was then edited and altered from the original. Reference: https://mui.com/material-ui/react-card/ */}
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
        <div className="textColor"> {/*This element was produced by myself*/}
        <Typography variant="body2" > 
          Instagram Help Centre, why are some Instagram posts marked as false information. Find out more information about how Instagram tackles false information.
        </Typography>
        </div>
      </CardContent>
      
      <CardActions class="align-middle py-2">
      <a href='https://help.instagram.com/388534952086572' > {/*Button is added here with custom styling through tailwind css. Tutorial reference: https://www.youtube.com/watch?v=z1EqQft4VsM&t */}
         <motion.button whileHover={{scale: 1.2}}class=" uppercase bg-amber-50 px-5 py-3  text-black rounded-full" > View Source</motion.button>
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
          X Help Centre (Twitter)
        </Typography>
        <div className="textColor"> {/*This element was produced by myself*/}
        <Typography variant="body2" > 
          X Help Centre, what are Community Notes. Find out more information about how X solves false information and context on their platform.
        </Typography>
        </div>
      </CardContent>
      
      <CardActions class="align-middle py-2">
      <a href='https://help.twitter.com/en/using-x/community-notes' > {/*Button is added here with custom styling through tailwind css. Tutorial reference: https://www.youtube.com/watch?v=z1EqQft4VsM&t */}
         <motion.button whileHover={{scale: 1.2}}class=" uppercase bg-amber-50 px-5 py-3  text-black rounded-full" > View Source</motion.button>
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
        <div className="textColor"> {/*This element was produced by myself*/}
        <Typography variant="body2" > 
        YouTube Official Blog, Our approach to Responsible Innovation. Find out more information about how YouTube tackles different AI usage on their platform. 
          </Typography>
        </div>
      </CardContent>
      
      <CardActions class="align-middle py-2">
      <a href='https://blog.youtube/inside-youtube/our-approach-to-responsible-ai-innovation/' > {/*Button is added here with custom styling through tailwind css. Tutorial reference: https://www.youtube.com/watch?v=z1EqQft4VsM&t */}
         <motion.button whileHover={{scale: 1.2}}class=" uppercase bg-amber-50 px-5 py-3  text-black rounded-full" > View Source</motion.button>
         </a>
      </CardActions>
    </Card>
    </Box>
    </div>
  );
}