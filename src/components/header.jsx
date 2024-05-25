import * as React from "react"
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useLocation } from "@reach/router";
import logo from '../assets/Erwin-logo.png';

const Header = ({ siteTitle }) => {
  const { pathname } = useLocation();

  const isCurrent = (path) => {
    return path === pathname;
  }

  const isActive = (path) => {
    return isCurrent(path) ? 'border-b-white border-b-2' : undefined;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <div className="flex-grow">
            <img src={logo} height={48} width={84} />
          </div>
          
          <div className="flex items-center space-x-16 uppercase">
            <AniLink paintDrip hex="#004AAD" to="/" className={isActive("/")}>
              Home
            </AniLink>
            <AniLink paintDrip hex="#004AAD" to="/about" className={isActive("/about/")}>
              About
            </AniLink>
            <AniLink paintDrip hex="#004AAD" to="/blog" className={isActive("/blog/")}>
              Blog
            </AniLink>
            <AniLink paintDrip hex="#004AAD" to="/projects" className={isActive("/projects/")}>
              Projects
            </AniLink>
            <Link
              to="https://drive.google.com/file/d/1ShWFHPyZQJ4lFAu_AdO2oXgmeiRgYOKD/view?usp=sharing" 
              target="_blank"
              className="transition ease-in-out border-secondary hover:bg-white hover:border-white  hover:text-black hover:font-bold hover:-translate-y-1 rounded-md border-2 px-3 py-2 duration-300"
            >Resume</Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
