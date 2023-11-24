import { AppBar, IconButton, Stack, Toolbar, Typography, Button} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
export default function NavBar() {
    return (
<AppBar position="static">
 <Toolbar>
    <IconButton size='large' edge='start' color='inherit' aria-label="logo">
        <MenuIcon/>
    </IconButton>
    <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
        
    </Typography>
    <Stack direction='row' spacing={2}>
       <Button color='inherit' href="/">Home</Button>
       <Button color='inherit' href="/#about">About Us</Button>
       <Button color='inherit' href="/#test">Usability of AI</Button>
       <Button color='inherit' href="/#aware">Awareness</Button>
    </Stack>
 </Toolbar>
</AppBar>
)
}