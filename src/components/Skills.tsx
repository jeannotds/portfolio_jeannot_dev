'use client'

import { motion } from 'framer-motion'

const skills = {
  frontend: ['HTML', 'CSS', 'Tailwind', 'Bootstrap', 'ReactJS', 'VueJS', 'NextJS', 'React Native', 'Flutter'],
  backend: ['NodeJS', 'NestJS', 'Express', 'SailsJS', 'PHP'],
  database: ['MongoDB', 'MySQL'],
  other: ['JavaScript', 'Dart', 'Git', 'RESTful APIs', 'GraphQL'],
  soft: ['Travail en équipe', 'Capacité d\'adaptation', 'Résolution de problèmes'],
  tools: ['Merise', 'UML', 'ASANA', 'Trello', 'Figma', 'SEO']
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Compétences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400 capitalize">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}