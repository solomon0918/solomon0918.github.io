import { useState, useEffect } from "react"

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedTheme = localStorage.getItem("theme")
    return storedTheme ? storedTheme : "dark" // Default to 'dark' if no theme is stored
  }
  return "dark" // Fallback for SSR or when localStorage is not available
}

const useDarkMode = () => {
  const [theme, setTheme] = useState(getInitialTheme())

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("theme")
      setTheme(storedData)
    }
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("tw-dark", "tw-light")
    root.classList.add(`tw-${theme}`)
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))
  }

  return [theme, toggleTheme]
}

export default useDarkMode
