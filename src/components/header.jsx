import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { AppBar, IconButton, Drawer, List, ListItemText, Toolbar, Box, useMediaQuery, ListItemButton, Divider, useScrollTrigger } from '@mui/material';
import { useLocation } from "@reach/router";
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/Erwin-Mark-Logo.png';

const Header = ({ siteTitle }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery('(max-width:600px)');

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  const isCurrent = (path) => {
    return path === pathname;
  }

  const isActive = (path) => {
    return isCurrent(path) ? trigger ? 'border-b-primary border-b-2' : 'border-b-white border-b-2' : undefined;
  }

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const navLinks = (
    <>
      <AniLink paintDrip hex="#004AAD" to="/" className={`transition ease-in-out hover:-translate-y-1 duration-300 ${isActive("/")}`}>
        Home
      </AniLink>
      <AniLink paintDrip hex="#004AAD" to="/about" className={`transition ease-in-out hover:-translate-y-1 duration-300 ${isActive("/about/")}`}>
        About
      </AniLink>
      <AniLink paintDrip hex="#004AAD" to="/blog" className={`transition ease-in-out hover:-translate-y-1 duration-300 ${isActive("/blog/")}`}>
        Blog
      </AniLink>
      <AniLink paintDrip hex="#004AAD" to="/projects" className={`transition ease-in-out hover:-translate-y-1 duration-300 ${isActive("/projects/")}`}>
        Projects
      </AniLink>
      <a
        href="https://drive.google.com/file/d/1ShWFHPyZQJ4lFAu_AdO2oXgmeiRgYOKD/view?usp=sharing"
        rel="noreferrer"
        target="_blank"
        className={`transition ease-in-out ${trigger ? 'border-primary hover:border-primary' : 'border-secondary hover:border-white'} hover:bg-white  hover:text-blue-950 hover:font-bold hover:-translate-y-1 rounded-md border-2 px-3 py-2 duration-300`}
      >
        Resume
      </a>
    </>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      {trigger ? <div className="py-[40px]"></div> : undefined}
      <AppBar 
        position={trigger ? 'fixed' : 'static'} 
        style={{ 
          background: trigger ? 'white' : 'transparent', 
          boxShadow: 'none', 
          color: trigger ? '#004AAD' : '', 
        }}
        className={
          `transition-transform duration-300 ease-in-out 
          ${trigger ? "translate-y-0" : ""}`
        }
        >
        <Toolbar>
          <div className="flex-grow">
            <img src={logo} alt={siteTitle} className="cursor-pointer" style={{ width: '110px' }} />
          </div>
          
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                  <ListItemButton>
                    <ListItemText primary={
                      <AniLink paintDrip hex="#004AAD" to="/" className={`px-[100px] ${isActive("/")}`}>
                        Home
                      </AniLink>
                    } />
                  </ListItemButton>
                  <Divider />
                  <ListItemButton>
                    <ListItemText primary={
                      <AniLink paintDrip hex="#004AAD" to="/about" className={`px-[100px] ${isActive("/about/")}`}>
                        About
                      </AniLink>
                    } />
                  </ListItemButton>
                  <Divider />
                  <ListItemButton>
                    <ListItemText primary={
                      <AniLink paintDrip hex="#004AAD" to="/blog" className={`px-[100px] ${isActive("/blog/")}`}>
                        Blog
                      </AniLink>
                    } />
                  </ListItemButton>
                  <Divider />
                  <ListItemButton>
                    <ListItemText primary={
                      <AniLink paintDrip hex="#004AAD" to="/projects" className={`px-[100px] ${isActive("/projects/")}`}>
                        Projects
                      </AniLink>
                    } />
                  </ListItemButton>
                  <Divider />
                  <ListItemButton>
                    <ListItemText primary={
                      <a
                        href="https://drive.google.com/file/d/1ShWFHPyZQJ4lFAu_AdO2oXgmeiRgYOKD/view?usp=sharing"
                        rel="noreferrer"
                        target="_blank"
                        className=" px-[100px] py-2"
                      >
                        Resume
                      </a>
                    } />
                  </ListItemButton>
                  <Divider />
                </List>
              </Drawer>
            </>
          ) : (
            <div className="flex items-center space-x-16 uppercase">
              {navLinks}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
