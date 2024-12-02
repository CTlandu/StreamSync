import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="w-full bg-gray-200 p-4">
        <div className="container mx-auto">
          <h1 className="text-center text-gray-800">Navbar</h1>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Left Image Placeholder */}
          <div className="w-full md:w-1/3">
            <div className="bg-gray-300 aspect-square"></div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Hero Page Content</h2>
            <p className="text-lg mb-2">Join StreamSync!</p>
            <p className="text-gray-600 mb-6">
              A place to synchronize all your subscribed channels/creators
            </p>

            {/* Buttons */}
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                to="/register"
                className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">Support</h3>
          <div className="flex justify-center gap-6">
            {/* Social Media Icons */}
            <a
              href="#"
              className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:opacity-80 transition"
            >
              <span className="text-white">YT</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:opacity-80 transition"
            >
              <span className="text-white">TT</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:opacity-80 transition"
            >
              <span className="text-white">IG</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:opacity-80 transition"
            >
              <span className="text-white">X</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center hover:opacity-80 transition"
            >
              <span className="text-white">BL</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
