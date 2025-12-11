import Logo from '../assets/genomac.svg'
import Arrow from '../assets/arrow.svg'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <img src={Logo} alt="Genomac" className="h-8 w-auto" />
          </div>

          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <li><a href="#why-join" className="hover:text-gray-900">Why Join</a></li>
            <li><a href="#who-should-join" className="hover:text-gray-900">Who should Join</a></li>
            <li><a href="#what-you-receive" className="hover:text-gray-900">What you Recieve</a></li>
            <li><a href="#process" className="hover:text-gray-900">Process</a></li>
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="https://forms.gle/6ZJwvAsb4f3qUh3Q9"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
            >
              Contact Us
              <img src={Arrow} alt="arrow" className="w-4 h-4" />
            </a>

            <button className="md:hidden inline-flex items-center justify-center w-10 h-10 bg-white/60 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
