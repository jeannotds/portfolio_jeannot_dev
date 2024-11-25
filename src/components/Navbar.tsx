'use client'

import { useState } from 'react'
import { Link } from 'react-scroll'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from 'next-themes'

const navItems = [
  { name: 'Accueil', to: 'home' },
  { name: 'À propos', to: 'about' },
  { name: 'Compétences', to: 'skills' },
  { name: 'Projets', to: 'projects' },
  { name: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="home"
            smooth={true}
            duration={800}
            className="text-xl font-bold text-blue-600 dark:text-blue-400 cursor-pointer"
          >
            DJ
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={800}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}