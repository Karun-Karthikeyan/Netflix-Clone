import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
      <footer className="bg-zinc-900 text-gray-400 text-sm py-8 px-6 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
            <div>
              <h4 className="text-red-600 font-semibold mb-2">Browse</h4>
              <ul className="space-y-1 ">
                <li className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer">Home</li>
                <li className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer">Movies</li>
                <li className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer">TV Shows</li>
                <li className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer">My List</li>
              </ul>
            </div>
            <div>
              <h4 className="text-red-600 font-semibold mb-2">Help</h4>
              <ul className="space-y-1">
                <li className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer">Account</li>
                <li className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer">Support</li>
                <li className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer">FAQ</li>
                <li className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-red-600 font-semibold mb-2">Legal</h4>
              <ul className="space-y-1">
                <li className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer">Privacy</li>
                <li className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer">Terms</li>
                <li className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer">Cookies</li>
              </ul>
            </div>
            <div>
              <h4 className="text-red-600 font-semibold mb-2">Follow</h4>
              <ul className="flex gap-4 mt-2">
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer text-xl">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer text-xl">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer text-xl">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer text-xl">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Netflix Clone. Built with Next.js + Tailwind CSS.
          </p>
        </div>
      </footer>
    );
  }
  