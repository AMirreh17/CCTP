import './App.css'; // Importing css file called app.css onto this page
import { Box, Typography, Grid, Paper} from '@mui/material';  //importing functions/variables, Typography, Box, Card, Paper and Grid  from the react library called Material UI. This is referenced from the Material Ui documentsation: https://mui.com/components/
import {motion} from 'framer-motion'; // Importing motion component from  Framer Motion. This is referenced from the framer motiion documentation:https://www.framer.com/motion/component/ 


export default function Explore(){
    return(
      <div className='mainBody'> {/*This element was produced by myself*/}
       <Grid container direction="row" className='text3' spacing={2} columnSpacing={21}> {/*Grid component from Material UI is used here to align and organise content*/} 
      
      <Grid item xs={11} sm={9} md={6}> {/*This Grid item is responsive for various devices. Tutorial reference: https://www.youtube.com/watch?v=jrgiTFwvglw&t=158s */}
        <div className='text-black'> {/*These elements were produced by myself*/}
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

      {/*Some of these elements were based on tutorials from codeevolution and the Paper documentation from Material UI components. Reference: https://www.youtube.com/watch?v=Wd_oTDMtCjI&list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&index=18 , https://www.youtube.com/watch?v=JlI5j37sbIE&list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&index=14 , https://mui.com/material-ui/react-paper/   */}
      <Box sx={{display: 'flex', flexDirection: {xs: "column", md: "row"},  justifyContent:'space-between', gap:3, m: 3,  }}>
       
       <Paper  elevation={3} square={false} style={{ width: {xs: 1, md:500}, padding: 40 }}>
         
         <Typography fontSize="40px" variant='h2'>Background</Typography> {/*The text was produced by myself*/}
         <div className="textColor">{/*This element was produced by myself*/}
         <Typography sx={{mt: 2}}> {/*The text was produced by myself*/}
         What is Artificial Intelligence and why is it implemented within most social media platforms? 
         Does this have an impact on me? Find out more about the context behind AI and how it’s used by many users on social media.
         </Typography>
       </div>
         <br></br>
         <a href='/CCTP/#background'> {/*Button is added here with custom styling through tailwind css. Tutorial reference: https://www.youtube.com/watch?v=z1EqQft4VsM&t */}
         <motion.button whileHover={{scale: 1.2}}class=" uppercase bg-amber-50 px-5 py-3  text-black rounded-full"> Find out More</motion.button>
         </a>
         
       </Paper>
       <Paper  elevation={3} square={false} style={{ width: {xs: 1, md:500}, padding: 40 }}>
         
         <Typography  fontSize="40px"variant='h2'>AI Resources</Typography> {/*The text was produced by myself*/}
         <div className="textColor"> {/*This element was produced by myself*/}
         <Typography sx={{mt: 2}}>  {/*The text was produced by myself*/}
         Explore the vast world of AI resources for content creation and creative artwork. 
         View our selection of popular AI tools and resources best suited for you or any social media enthusiast who is interested in learning more about AI.
         </Typography>
         </div>
        
         <br></br>
         <a href='/CCTP/#AIResources'> {/*Button is added here with custom styling through tailwind css. Tutorial reference: https://www.youtube.com/watch?v=z1EqQft4VsM&t */}
         <motion.button whileHover={{scale: 1.2}}class=" uppercase bg-amber-50 px-5 py-3 text-black rounded-full"> Find out More</motion.button>
         </a>
       </Paper>
       <Paper  elevation={3} square={false} style={{ width: {xs: 1, md:500}, padding: 40 }}>
         
         <Typography  fontSize="40px"variant='h3'> Awareness</Typography> {/*The text was produced by myself*/}
         <div className="textColor"> {/*This element was produced by myself*/}
         <Typography sx={{mt: 2}}> {/*The text was produced by myself*/}
         What are the dangers of AI and how does this have an impact on social media users? 
         Find out more about the dangers relating to AI and how to be more aware of AI misinformation along your social media journeys. 
         </Typography>
         </div>
       
         <br></br>
         <a href='/CCTP/#Awareness'> {/*Button is added here with custom styling through tailwind css. Tutorial reference: https://www.youtube.com/watch?v=z1EqQft4VsM&t */}
         <motion.button whileHover={{scale: 1.2}}class=" uppercase bg-amber-50 px-5 py-3  text-black rounded-full"> Find out More</motion.button>
         </a>
         
       </Paper>
       </Box>
       
        </div>
             
    )
}