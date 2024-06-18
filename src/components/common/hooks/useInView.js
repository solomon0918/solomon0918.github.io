import { useState, useRef, useEffect } from "react"

const useInView = () => {
  const elementRef = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const [wasInView, setWasInView] = useState(false)

  const checkInView = () => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect()
      setIsInView(rect.top < window.innerHeight && rect.bottom >= 0)
    }
  }

  useEffect(() => {
    checkInView() // Initial check
    document.addEventListener("scroll", checkInView)
    window.addEventListener("resize", checkInView)
    return () => {
      document.removeEventListener("scroll", checkInView)
      window.removeEventListener("resize", checkInView)
    }
  }, [])

  useEffect(() => {
    if (!wasInView && isInView) {
      // Element has come into view
      if (elementRef.current) {
        elementRef.current.classList.add("tw-faded")
      }
    }
    setWasInView(isInView) // Update wasInView state
  }, [isInView])

  return elementRef
}

export default useInView
