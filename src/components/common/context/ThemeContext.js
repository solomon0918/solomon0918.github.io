import React, { createContext, useEffect, useReducer } from "react"
import { useCookies } from "react-cookie"

export const ThemeContext = createContext()

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state === "light" ? "dark" : "light"
    case "SET_THEME":
      return action.payload
    default:
      return state
  }
}

const ThemeProvider = ({ children }) => {
  const [cookies, setCookie] = useCookies(["theme"])
  const [theme, dispatch] = useReducer(themeReducer, cookies.theme || "dark")

  useEffect(() => {
    if (cookies.theme) {
      dispatch({ type: "SET_THEME", payload: cookies.theme })
    }
  }, [cookies.theme])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("tw-dark", "tw-light")
    root.classList.add(`tw-${theme}`)
    setCookie("theme", theme, {
      path: "/",
      expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
    })
  }, [theme, setCookie])

  const toggleTheme = () => {
    // setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))
    dispatch({ type: "TOGGLE_THEME" })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
