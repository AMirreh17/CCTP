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
       <Button color='inherit' href="/CCTP">Home</Button>
       <Button color='inherit' href="/CCTP/#about">About</Button>
       <Button color='inherit' href="/CCTP/#test">Background</Button>
       <Button color='inherit' href="/CCTP/#aware">Recommendations</Button>
       <Button color='inherit' href="/CCTP/#showcase">Showcase</Button>
    </Stack>
 </Toolbar>
</AppBar>
)
}