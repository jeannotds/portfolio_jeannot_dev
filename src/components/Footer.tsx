export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Diambu Jeannot. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}