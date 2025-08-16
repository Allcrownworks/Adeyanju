import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import myImage from "./complete3.jpg";
import logo from "./logo.png";

export default function Hero() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsZoomed(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600">
            <img
              src={logo}
              alt="Company Logo"
              className="w-10 h-10 object-contain"
            /> 
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="#sensation" className="text-gray-700 hover:text-blue-600 transition">Sensation</Link>
            <Link to="#holyspirit" className="text-gray-700 hover:text-blue-600 transition">Holy Spirit</Link>
            <Link to="#newdate" className="text-gray-700 hover:text-blue-600 transition">New Date</Link>
            <Link to="#inspiration" className="text-gray-700 hover:text-blue-600 transition">Inspiration</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 py-4 px-6">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/sensation" 
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={toggleMenu}
              >
                Sensation
              </Link>
              <Link 
                to="/holyspirit" 
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={toggleMenu}
              >
                Holy Spirit
              </Link>
              <Link 
                to="/newdate" 
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={toggleMenu}
              >
                New Date
              </Link>
              <Link 
                to="/inspiration" 
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={toggleMenu}
              >
                Inspiration
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content with Zoom Effect */}
      <div className={`fixed inset-0 w-full h-full transform transition-all duration-500 ease-in-out ${
        isZoomed ? "scale-100 opacity-100" : "scale-50 opacity-0"
      }`}>
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src={myImage}
            alt="Background"
            className="w-full h-full object-center object-fill"
          /> 
        </div>

       
      </div>
    </main>
  );
}