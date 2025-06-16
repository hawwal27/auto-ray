import React from 'react';
import { Link } from 'react-scroll';
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser
} from "@clerk/clerk-react";
import logo from '../assets/car3.jpg'

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <div className="flex items-center space-x-2 ">
          <img src={logo} alt="Autoray" className="h-10 w-10 rounded-full" />
          <span className="text-xl font-bold text-blue-600">Autoray</span>
        </div>

         <nav className="hidden md:flex space-x-5 text-sm text-blue-600 font-large ml-60 font-bold">

          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">About Us</Link>
          <Link to="services" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">Services</Link>
          <Link to="parts" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">Parts</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">Contact</Link>
          <Link to="testimonial" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">Testimonial</Link>
          <Link to="faq" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">FAQ</Link>


        </nav>

        <div className="flex items-center space-x-4">
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
    </header>
  );
};

export default Navbar;
