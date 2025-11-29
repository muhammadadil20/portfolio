export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-gray-600 dark:text-gray-400 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Mohammed Adil</p>
        <a className="hover:text-blue-600 dark:hover:text-blue-400" href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}
