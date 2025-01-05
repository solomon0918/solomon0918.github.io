import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {
  AppBar,
  IconButton,
  Drawer,
  List,
  ListItemText,
  Toolbar,
  Box,
  ListItemButton,
  Divider,
} from "@mui/material"
import { useLocation } from "@reach/router"
import MenuIcon from "@mui/icons-material/Menu"
import logo from "../../images/logo.png"
import darkLogo from "../../images/dark-logo.png"

import DarkModeSwitch from "../DarkModeSwitch"
import { useContext } from "react"
import { ThemeContext } from "../common/context/ThemeContext"

const Header = ({ siteTitle }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { pathname } = useLocation()
  const { theme } = useContext(ThemeContext)

  const isCurrent = path => {
    return path === pathname
  }

  const isActive = path => {
    return isCurrent(path)
      ? "tw-border-b-black dark:tw-border-b-white tw-border-b-0 md:tw-border-b-2"
      : undefined
  }

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setDrawerOpen(open)
  }

  const navLinks = (
    <>
      <AniLink
        paintDrip
        hex="#024950"
        to="/"
        className={`tw-text-black tw-transition tw-duration-300 tw-ease-in-out hover:tw--translate-y-1 dark:tw-text-white ${isActive("/")}`}
      >
        Home
      </AniLink>
      <AniLink
        paintDrip
        hex="#024950"
        to="/about"
        className={`tw-text-black tw-transition tw-duration-300 tw-ease-in-out hover:tw--translate-y-1 dark:tw-text-white ${isActive("/about/")}`}
      >
        About
      </AniLink>
      <AniLink
        paintDrip
        hex="#024950"
        to="/blog"
        className={`tw-text-black tw-transition tw-duration-300 tw-ease-in-out hover:tw--translate-y-1 dark:tw-text-white ${isActive("/blog/")}`}
      >
        Blog
      </AniLink>
      <AniLink
        paintDrip
        hex="#024950"
        to="/projects"
        className={`tw-text-black tw-transition tw-duration-300 tw-ease-in-out hover:tw--translate-y-1 dark:tw-text-white ${isActive("/projects/")}`}
      >
        Projects
      </AniLink>
      <a
        href="https://drive.google.com/file/d/1tcaPceCD3gMgM89YUhsbHph0ZCMrQCZv/view?usp=sharing"
        rel="noreferrer"
        target="_blank"
        className={`tw-rounded-md tw-border-2 tw-border-accent tw-bg-accent tw-px-3 tw-py-2 tw-text-white tw-transition tw-duration-300 tw-ease-in-out hover:tw--translate-y-1`}
      >
        Resume
      </a>
    </>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position={"static"}
        style={{
          background: "transparent",
          boxShadow: "none",
        }}
        className={`tw-py-4 tw-text-black tw-transition-transform tw-duration-300 tw-ease-in-out dark:tw-text-white`}
      >
        <Toolbar>
          <div className="tw-flex-grow">
            <a href="/" alt="Go Home">
              <div className="tw-flex tw-cursor-pointer tw-items-center">
                <img
                  src={theme === "dark" ? logo : darkLogo}
                  alt={siteTitle}
                  className="tw-mr-2"
                  style={{ width: "65px" }}
                />
                <h6 className="tw-text-lg tw-font-bold tw-uppercase tw-text-black dark:tw-text-white">
                  Erwin Mark
                </h6>
              </div>
            </a>
          </div>

          <div className="tw-px-2 md:tw-px-7">
            <DarkModeSwitch />
          </div>

          {/* Mobile Navbar */}
          <div className="tw-block md:tw-hidden">
            <IconButton
              edge="end"
              color="inherit"
              className="!tw-text-black dark:!tw-text-white"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <List
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <ListItemButton>
                  <ListItemText
                    primary={
                      <AniLink
                        paintDrip
                        hex="#024950"
                        to="/"
                        className={`tw-px-[100px] ${isActive("/")}`}
                      >
                        Home
                      </AniLink>
                    }
                  />
                </ListItemButton>
                <Divider />
                <ListItemButton>
                  <ListItemText
                    primary={
                      <AniLink
                        paintDrip
                        hex="#024950"
                        to="/about"
                        className={`tw-px-[100px] ${isActive("/about/")}`}
                      >
                        About
                      </AniLink>
                    }
                  />
                </ListItemButton>
                <Divider />
                <ListItemButton>
                  <ListItemText
                    primary={
                      <AniLink
                        paintDrip
                        hex="#024950"
                        to="/blog"
                        className={`tw-px-[100px] ${isActive("/blog/")}`}
                      >
                        Blog
                      </AniLink>
                    }
                  />
                </ListItemButton>
                <Divider />
                <ListItemButton>
                  <ListItemText
                    primary={
                      <AniLink
                        paintDrip
                        hex="#024950"
                        to="/projects"
                        className={`tw-px-[100px] ${isActive("/projects/")}`}
                      >
                        Projects
                      </AniLink>
                    }
                  />
                </ListItemButton>
                <Divider />
                <ListItemButton>
                  <ListItemText
                    primary={
                      <a
                        href="https://drive.google.com/file/d/1tcaPceCD3gMgM89YUhsbHph0ZCMrQCZv/view?usp=sharing"
                        rel="noreferrer"
                        target="_blank"
                        className="py-2 tw-px-[100px]"
                      >
                        Resume
                      </a>
                    }
                  />
                </ListItemButton>
                <Divider />
              </List>
            </Drawer>
          </div>

          {/* Default Navbar */}
          <div className="tw-hidden tw-items-center tw-space-x-16 tw-uppercase md:tw-flex">
            {navLinks}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
