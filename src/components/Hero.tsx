'use client'

import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'
import { Link } from 'react-scroll'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-600 dark:text-blue-400 text-xl mb-2">Salut 👋</p>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Je suis Diambu Jeannot
          </h1>
          <h2 className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8">
            Développeur Full Stack & Architecte Logiciel
          </h2>
          <div className="flex gap-4">
            <Link
              to="contact"
              smooth={true}
              duration={800}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg cursor-pointer"
            >
              Me Contacter
            </Link>
            <a
              href="/resume.pdf"
              className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white"
            >
              Mon CV
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:block"
        >
          <img
            src="/developer-illustration.svg"
            alt="Developer Illustration"
            className="w-full max-w-lg mx-auto"
          />
        </motion.div>
      </div>
      
      <Link
        to="about"
        smooth={true}
        duration={800}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
      >
        <FaArrowDown className="text-3xl text-blue-600 dark:text-blue-400" />
      </Link>
    </section>
  )
}