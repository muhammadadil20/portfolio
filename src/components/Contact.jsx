export default function Contact() {
  return (
    <section id="contact" className="text-center">
      <div className="section">
        <h3 className="heading text-2xl mb-8">Contact Me</h3>
        <div className="flex items-center justify-center gap-8 sm:gap-12">
        {/* Email */}
        <a
          href="mailto:muhammadadil20@ymail.com"
          aria-label="Email"
          title="Email"
          className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 dark:border-gray-700 dark:bg-neutral-900 dark:text-gray-300"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-600 dark:group-hover:text-blue-300">
            <path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 20.25 19.5H3.75a2.25 2.25 0 0 1-2.25-2.25V6.75Zm2.36-.75a.75.75 0 0 0-.61 1.2l7.13 8.92a1.5 1.5 0 0 0 2.37 0l7.13-8.92a.75.75 0 0 0-.61-1.2H3.86Z"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/muhammadadil20"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
          className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 dark:border-gray-700 dark:bg-neutral-900 dark:text-gray-300"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-600 dark:group-hover:text-blue-300">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zM8.5 8h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V23h-4V8z" />
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/muhammadadil20"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          title="GitHub"
          className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 dark:border-gray-700 dark:bg-neutral-900 dark:text-gray-300"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-600 dark:group-hover:text-blue-300">
            <path fillRule="evenodd" d="M12 .5C5.73.5.99 5.24.99 11.51c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.06.66-3.71-1.31-3.71-1.31-.5-1.27-1.22-1.6-1.22-1.6-.99-.68.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.57 1.19 3.19.91.1-.71.38-1.19.68-1.47-2.44-.28-5.01-1.22-5.01-5.44 0-1.2.43-2.17 1.13-2.94-.11-.28-.49-1.42.11-2.96 0 0 .93-.3 3.05 1.13.89-.25 1.84-.38 2.79-.38.95 0 1.9.13 2.79.38 2.12-1.43 3.05-1.13 3.05-1.13.6 1.54.22 2.68.11 2.96.71.77 1.13 1.74 1.13 2.94 0 4.22-2.57 5.15-5.02 5.43.39.33.73.97.73 1.96 0 1.41-.01 2.55-.01 2.89 0 .29.2.63.76.52 4.37-1.45 7.52-5.57 7.52-10.43C23.01 5.24 18.27.5 12 .5Z" clipRule="evenodd" />
          </svg>
        </a>
        </div>
      </div>
    </section>
  )
}
