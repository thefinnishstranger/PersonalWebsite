import { useEffect, useRef } from "react"
import '../main.css'

const ScrollFadeIn: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        })
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.observe(elementRef.current)
      }
    }
  }, [])

  return (
    <div ref={elementRef} className="fade-in">
      {children}
    </div>
  )
}

export default ScrollFadeIn;
