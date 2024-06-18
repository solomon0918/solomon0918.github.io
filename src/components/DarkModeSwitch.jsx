import * as React from "react"

import { Switch, ThemeProvider, createTheme } from "@mui/material"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"

const theme = createTheme({
  components: {
    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: "5px",
        },
        track: {
          borderRadius: "20px",
          backgroundColor: "#0FA4AF",
        },
      },
    },
  },
})

const DarkModeSwitch = ({ colorTheme, toggle }) => {
  return (
    <div className="tw-flex tw-items-center">
      <ThemeProvider theme={theme}>
        <Switch
          color="default"
          icon={<LightModeIcon className="!tw-text-[22px]" />}
          checkedIcon={
            <DarkModeIcon className="!tw-text-[22px] tw-text-black" />
          }
          checked={colorTheme === "dark"}
          onChange={toggle}
          inputProps={{ "aria-label": "toggle dark mode" }}
        />
      </ThemeProvider>
    </div>
  )
}

export default DarkModeSwitch
