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