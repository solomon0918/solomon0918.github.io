import { useState, useEffect } from "react"

const useDarkMode = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "dark"
      : "dark",
  )

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
