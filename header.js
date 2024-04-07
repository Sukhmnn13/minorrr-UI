import React , {useState} from 'react';
import {AppBar, Box, IconButton, Drawer, Toolbar, Typography } from "@mui/material";
import HouseIcon from '@mui/icons-material/House';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import "../../styles/HeaderStyles.css";


const Header = () => {
const [mobileOpen, setMobileOpen] = useState(false)
//handle menu click
const handleDrawerToggle = () => {
setMobileOpen(!mobileOpen)
}
//menu drawer
<Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
<Typography color={"greenyellow"} variant='h6'component="div" sx={{flexGrow:1}}> 
            <HouseIcon/>
            House Price Prediction 
            </Typography>
            
              <ul className='mobile-navigation'>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/login'}>Login</Link>
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                </li>
              </ul>
            </Box>



  return (
    <>
    <Box>
      <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
        <Toolbar>
        <IconButton
          color="inherit"
           aria-label="open drawer" 
           edge="start"
            sx={{
              mr:2,
              dispaly: { sm:"none"},
              }}
              onClick= { handleDrawerToggle }
              >

          
            <MenuIcon/>
            </IconButton>

          
          <Typography color={"greenyellow"} variant='h6'component="div" sx={{flexGrow:1}}> 
            <HouseIcon/>
            House Price Prediction 
            </Typography>
            <Box sx={{display:{xs:'none',sm:'block'}}}>
              <ul className='navigation-menu'>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/login'}>Login</Link>
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                </li>
              </ul>
            </Box>

          </Toolbar>
          </AppBar>
          <Box component="nav">
          <Drawer variant= "temporary" open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{display:{xs:'block', sm:'none'}} }
          >
          {Drawer}

          </Drawer>

          </Box>
          </Box>
      </>
        
    
  );
};
export default Header;