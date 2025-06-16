import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser
} from "@clerk/clerk-react";
import { Menu, X } from 'lucide-react';
import logo from '../assets/car3.jpg';

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Autoray" className="h-10 w-10 rounded-full" />
          <span className="text-xl font-bold text-blue-600">Autoray</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm text-blue-600 font-semibold ml-10">
          {['about', 'services', 'parts', 'contact', 'testimonial', 'faq'].map(section => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-800"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <>
              <SignInButton mode="modal">
                <button className="text-sm text-blue-600 border border-blue-600 px-4 py-1 rounded hover:bg-blue-50 transition">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="text-sm bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition">
                  Sign Up
                </button>
              </SignUpButton>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-600 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-4 shadow-md">
          <nav className="flex flex-col space-y-3 text-blue-600 font-medium">
            {['about', 'services', 'parts', 'contact', 'testimonial', 'faq'].map(section => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="cursor-pointer hover:text-blue-800"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col space-y-2 pt-4">
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <>
                <SignInButton mode="modal">
                  <button className="text-sm text-blue-600 border border-blue-600 px-4 py-1 rounded hover:bg-blue-50 transition">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="text-sm bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition">
                    Sign Up
                  </button>
                </SignUpButton>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
