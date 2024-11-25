'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">À Propos de Moi</h2>
          <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 space-y-6">
            <p>
              Je suis licencié en science informatique à l'université de Kinshasa, passionné par le développement logiciel
              et l'architecture des systèmes.
            </p>
            <p>
              Mon parcours professionnel m'a permis de travailler comme développeur chez Evolve Sarl et GBH en tant
              qu'analyste programmeur et développeur. J'ai également renforcé mes compétences en tant que Software Engineer
              à la KDA (Kinshasa Digital Académie) avec un back +2.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}