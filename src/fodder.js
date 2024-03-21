<div className='mainBody'>
<div className='wrapper1'>
<Box sx={{display: 'flex', flexDirection: {xs: "column", md: "row"}, justifyContent:'space-between' }}>
<Paper elevation={16} square={false} style={{ width: {xs: 1, md:500}, padding: 30 }}>

<div className='text'>
<Typography variant='h2' sx={{my: 1, mt: 2}}>Welcome our website</Typography>
<Typography variant='h3'>
  *Prototype Version*
</Typography>

<Typography variant= 'body2' sx={{my: 4, mt: 2, whiteSpace: 'pre-line'}} > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
  <Typography variant= 'body2'  sx={{my: 4, mt: 2}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
    <br></br>
  {

    //<img src={welcomeimg} width="500" height="500"alt=''/>
  }  
</div>
</Paper>
</Box>
</div>
</div> 

{
  /*
<motion.div className="welcome3" >
<motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>
<Grid container direction="row" my={4} className='text3' spacing={2} columnSpacing={21}>

  <Grid item xs={11} sm={8} md={6}>
  <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Can I use AI to improve my social media content?</Typography>
      <br></br>
    <div className="textColor">
  <Typography  fontSize="20px" sx={{mt: 2}} > 
  There are various AI related tools which can improve the productivity and creation of social media content. 
  Some AI tools available can aid in content ideation, video editing, content distribution and many more.
  </Typography>
  <br></br>
  </div>
  </Grid>
</Grid>
</motion.div>
</motion.div>
*/
}

{
  /*
  <motion.div className="welcome3" class="text-white">
  <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>
  
  <Grid container direction="row" my={4} className='text3' spacing={2} columnSpacing={21}>
  
  <Grid item xs={11} sm={8} md={4}>
    <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>About </Typography>
        <br></br>
      <div className="textColor">
    <Typography  fontSize="20px" sx={{mt: 2}} > 
    Do you want to find out the background behind our aims as well as the purpose of this project and why it was created? Find out more on About 
    </Typography>
    <br></br>
    </div>
    <a href='/CCTP/#about'>
    <motion.button whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} class=" bg-white px-7 py-5 text- uppercase tracking-widest text-black rounded-full" href="/CCTP/#about"> Learn More</motion.button>
    </a>
    </Grid>
    <Grid item xs={11} sm={8} md={4}>
    <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Background</Typography>
        <br></br>
      <div className="textColor">
    <Typography  fontSize="20px" sx={{mt: 2}} > 
    What is AI and why is it used within social media platforms, and does it have an impact? Find out more about the background of AI within social media.  
    </Typography>
    <br></br>
    </div>
    <a href='/CCTP/#background'>
    <motion.button whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} class=" bg-white px-7 py-5 text- uppercase tracking-widest text-black rounded-full" href="/CCTP/#about"> Learn More</motion.button>
    </a>
    </Grid>
    <Grid item xs={11} sm={8} md={4}>
    <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Tools</Typography>
        <br></br>
      <div className="textColor">
    <Typography  fontSize="20px" sx={{mt: 2}} > 
    Are you a content creator or social media enthusiast? There are AI tools available which can improve your productivity and artwork. 
    Find out more on our AI Tools page
    </Typography>
    <br></br>
    </div>
    <a href='/CCTP/#recommendations'>
    <motion.button whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}class=" bg-white px-7 py-5 text- uppercase tracking-widest text-black rounded-full" href="/CCTP/#about"> Learn More</motion.button>
    </a>
    </Grid>
  </Grid>
  </motion.div>
  </motion.div>
  <br></br> */
  }




    {
      /*
  <motion.div className='mainBody'>
  <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>
    <Box sx={{display: 'flex', flexDirection: {xs: "column", md: "row"},  justifyContent:'space-between', gap:3, m: 3,  }}>
   
  <Paper  elevation={16} square={false} style={{ width: {xs: 1, md:500}, padding: 10 }}>
    <br></br>
    <Typography variant='h3'>About us</Typography>
    <Typography sx={{mt: 2}}> 
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    </Typography>
    {
      //<Button variant='outlined' sx={{mt: 2}} href="/CCTP/#about">Learn More</Button>
    }
    <br></br>
    <a href='/CCTP/#about'>
    <motion.button whileHover={{scale: 1.2}}class=" bg-white px-10 py-5 text- uppercase tracking-widest text-black rounded-full" href="/CCTP/#about"> Learn More</motion.button>
    </a>
    
  </Paper>
  <Paper  elevation={12} square={false} style={{ width: {xs: 1, md:500}, padding: 10 }}>
    <br></br>
    <Typography variant='h3'>What is AI?</Typography>
    <Typography sx={{mt: 2}}> 
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    </Typography>
    {
      //<Button variant='outlined' sx={{mt: 2}} href="/CCTP/#background">Learn More</Button>
    }
    <br></br>
    <a href='/CCTP/#background'>
    <motion.button whileHover={{scale: 1.2}}class=" bg-white px-10 py-5 text- uppercase tracking-widest text-black rounded-full" href="/CCTP/#about"> Learn More</motion.button>
    </a>
  </Paper>
  <Paper  elevation={12} square={false} style={{ width: {xs: 1, md:500}, padding: 10 }}>
    <br></br>
    <Typography variant='h3'>Popular AI tools</Typography>
    <Typography sx={{mt: 2}}> 
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    </Typography>
    {
      //<Button variant='outlined' sx={{mt: 2}} href="/CCTP/#recommendations">Learn More</Button>
    }
    <br></br>
    <a href='/CCTP/#recommendations'>
    <motion.button whileHover={{scale: 1.2}}class=" bg-white px-10 py-5 text- uppercase tracking-widest text-black rounded-full" href="/CCTP/#about"> Learn More</motion.button>
    </a>
    
  </Paper>
  </Box>
  </motion.div>
  </motion.div>
  */
  
}
{
  //<Button variant='contained' sx={{mt: 2}} href="/CCTP/#about">Learn More</Button>
  //<Button  class="bg-white px-10 py-5 text-xl uppercase tracking-widest text-black hover:bg-black hover:text-white rounded-full" href="/CCTP/#about">Learn More</Button>
}
{
  /* <motion.h1  class="text-7xl font-bold leading-normal"> The Undecover Project</motion.h1>
    <Typography variant='h6'>
   Revealing the truth behind Artificial Intelligence within social media content and platforms
 </Typography>*/
 }
 {
  //<img src={logo} className="App-logo" alt="logo" />
  }
  {
    /*
     <motion.div class="text-white py-10" className='backgroundsection2'>

        <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>
        <Grid container direction="row" my={4} className='text3' spacing={2} >

            <Grid item xs={12} sm={7}>
            <div className='text-black'>
            <Typography fontSize="40px"variant='h2' sx={{my: 1, mt: 2}}>Check out this video</Typography>

              
                <br></br>
                </div>
              <div className="textColor">
            <Typography  fontSize="20px" sx={{mt: 2}} > 
            This video summarises the topics of AI and social media further with some addition information about AI tools for social media 
            </Typography>
            <br></br>
            </div>
            </Grid>
            </Grid>
        </motion.div>
        </motion.div>
      
    */
  }
  {
    /*
 <motion.div  class="text-white py-10" className='welcome'>

        <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}> 
        <Grid container direction="row" my={4} className='text' spacing={2} columnSpacing={21}> 
      
        <Grid item xs={12} sm={8} md={6}>
        <div className='text-black'>
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Utilise Built in features within social media applications </Typography>
        </div>
        <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        Social media applications are now implementing features to mitigate misinformation and fake news within their platforms. For example, X have created community notes to help allow users to add further context to content posted, to stop the spread of misinformation. 
        Other applications such as Instagram have similar features (potential false content on Instagram is censored before viewing) to combat false and misleading content.   
        </Typography>
        <br></br>
        </div>
        </Grid>
        <Grid item>
        <img src={img2} width="500" height="500"alt=''/>
        </Grid>
        
      </Grid>
      </motion.div>
      </motion.div>
      <motion.div  class="text-white py-10" className='welcome'>

        <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}> 
      <Grid container direction="row" my={4} className='text2' spacing={2} columnSpacing={21}> 
      <Grid item>
        <img src={img3} width="500" height="500"alt=''/>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
        <div className='text-black'>
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Keep up to date with AI generated developments</Typography>
        </div>
          <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        Keeping up to date and understanding the developments on generative AI tools can be beneficial in learning how AI misinformation is created to gain further awareness. Common AI generated tools used on social media consist of ChatGPT, Stable Diffusion, DALL-E and many more. 
        If you want to find out more information about AI generated tools, check out our page dedicated to AI tools for social media.   
        </Typography>
        <br></br>
        </div>
        </Grid>
      </Grid>
      </motion.div>
      </motion.div>
      
      <motion.div  class="text-white py-10" className='welcome'>

        <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}> 
      <Grid container direction="row" my={4} className='text' spacing={2} columnSpacing={21}> 
      
        <Grid item xs={12} sm={8} md={6}>
        <div className='text-black'>
        <Typography fontSize="50px"variant='h2' sx={{my: 1, mt: 2}}>Conducting your own research </Typography>
          </div>
        <div className="textColor">
        <Typography  fontSize="20px" sx={{mt: 2}} > 
        Researching into the context of the AI misinformation you have encountered can be useful in finding out the truth and protecting yourself. 
        Utilizing reliable sources and media are essential when encountering AI content that you are unsure of. A simple google search can solve minor AI misinformation as most reliable sources might have an answer to the context of the content posted. 
        However, more difficult, and widespread AI misinformation on social media will require other methods for protection. 
        </Typography>
        <br></br>
        </div>
        </Grid>
        <Grid item>
        <img src={img4} width="500" height="500"alt=''/>
        </Grid>
      </Grid>
      </motion.div>
      </motion.div>

<Typography  fontSize="30px" sx={{mt: 2}} > Utilise built in features within social media applications 
</Typography>
     */
  }
  {
    /*<motion.div class="text-white py-10" className='backgroundsection2'>

      <motion.div variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true,}}>
      <Grid container direction="row" my={4} className='text' spacing={2} columnSpacing={21}>
     
      <Grid item xs={12} sm={8} md={7}>
      <div className='text-black'>
      <Typography fontSize="40px"variant='h2' sx={{my: 1, mt: 2}}>Methods of Prevention</Typography>
          <br></br>
          </div>
        <div className="textColor">
      
     <Typography  fontSize="30px" sx={{mt: 2}} > Utilise built in features within social media applications 
      </Typography>
      <Typography  fontSize="20px" sx={{mt: 2}} > 
      Social media applications are now implementing features to mitigate misinformation and fake news within their platforms. For example, X have created community notes to help allow users to add further context to content posted, to stop the spread of misinformation. 
      Other applications such as Instagram have similar features (potential false content on Instagram is censored before viewing) to combat false and misleading content.  
      </Typography>

      <Typography  fontSize="30px" sx={{mt: 2}} > Keep up to date with generative AI developments 
      </Typography>
      <Typography  fontSize="20px" sx={{mt: 2}} > 
      Keeping up to date and understanding the developments on generative AI tools can be beneficial in learning how AI misinformation is created to gain further awareness. Common AI generated tools used on social media consist of ChatGPT, Stable Diffusion, DALL-E and many more. 
      If you want to find out more information about AI generated tools, check out our page dedicated to AI tools for social media. 
      </Typography>

      <Typography  fontSize="30px" sx={{mt: 2}} > Conducting your own research 
      </Typography>
      <Typography  fontSize="20px" sx={{mt: 2}} > 
      Researching into the context of the AI misinformation you have encountered can be useful in finding out the truth and protecting yourself. Utilising reliable sources and media are essential when encountering AI content that you are unsure of. A simple google search can solve minor AI misinformation as most reliable sources might have an answer to the context of the content you have encountered.
      However, more difficult and widespread AI misinformation on social media will require other methods for protection. 
      </Typography>
      <br></br>
      </div>

      </Grid>     
       <Grid item>
      <img src={img2} width="400" height="500"alt=''/>
      </Grid>
      </Grid>
      </motion.div>
      </motion.div> */
  }