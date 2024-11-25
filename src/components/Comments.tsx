'use client'

import { motion } from 'framer-motion'

export default function Comments() {
  return (
    <section id="comments" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Commentaires</h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
              <form className="space-y-4">
                <div>
                  <label htmlFor="comment-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="comment-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="comment-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="comment-email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="comment-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Commentaire
                  </label>
                  <textarea
                    id="comment-message"
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Publier le commentaire
                </button>
              </form>
            </div>

            <div className="space-y-6">
              {/* Les commentaires seront affichés ici */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}