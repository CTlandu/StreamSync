import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faTiktok,
  faInstagram,
  faXTwitter,
  faBilibili,
} from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="w-full bg-gray-200 p-4">
        <div className="container mx-auto">
          <button>
            <Link to="/subscribe-test">Subscribe</Link>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
            StreamSync
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 font-light mb-6 leading-relaxed">
            A place to synchronize all your subscribed creators
          </p>
          <p className="text-gray-600 mb-12 text-lg">Join 143,232 users today</p>

          {/* Buttons */}
          <div className="flex gap-6 justify-center">
            <Link
              to="/register"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition shadow-lg text-lg"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg hover:from-purple-600 hover:to-purple-800 transition shadow-lg text-lg"
            >
              Log In
            </Link>
          </div>
        </div>

        {/* Support Section with new styling */}
        <div className="mt-20 py-12 bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl shadow-inner">
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">Support</h3>
          <div className="flex justify-center gap-8">
            <a
              href="#"
              className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:opacity-80 transition transform hover:scale-110 shadow-lg"
            >
              <FontAwesomeIcon icon={faYoutube} className="text-white text-2xl" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:opacity-80 transition transform hover:scale-110 shadow-lg"
            >
              <FontAwesomeIcon icon={faTiktok} className="text-white text-2xl" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center hover:opacity-80 transition transform hover:scale-110 shadow-lg"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:opacity-80 transition transform hover:scale-110 shadow-lg"
            >
              <FontAwesomeIcon icon={faXTwitter} className="text-white text-2xl" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center hover:opacity-80 transition transform hover:scale-110 shadow-lg"
            >
              <FontAwesomeIcon icon={faBilibili} className="text-white text-2xl" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
