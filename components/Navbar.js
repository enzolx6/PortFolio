'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [hasScrolled, setHasScrolled] = useState(false)


  useEffect(() => {
    const sections = document.querySelectorAll('section')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.6,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  const navClass = hasScrolled
  ? 'bg-gray-900/80 backdrop-blur'
  : 'bg-transparent'


  const linkClass = (id) =>
    activeSection === id
      ? 'text-gray-300 hover:text-white font-semibold'
      : 'text-gray-300 hover:text-white font-semibold'

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${navClass}`}>
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        
        {/* LOGO */}
        <a href="#home" className="font-bold text-lg text-white hover:scale-105 transition">
          <img
            src="/favicon.ico"
            alt="Voir le site"
            className="w-13 h-13"
          />
        </a>

        {/* LIENS */}
        <ul className="flex gap-6">
          <li>
            <a href="#home" className={linkClass('home')}>
              Accueil
            </a>
          </li>
          <li>
            <a href="#projects" className={linkClass('projects')}>
              Projets
            </a>
          </li>
          <li>
            <a href="#contact" className={linkClass('contact')}>
              Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  )
}
