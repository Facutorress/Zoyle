import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import logo from '../assets/Zoyle LOGOTIPO.png';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({
          top: document.getElementById(section).offsetTop,
          behavior: "smooth"
        });
      }, 100);
    }
  };

  return (
    <nav className="bg-white shadow-xl z-10 py-4"> {/* Aumentada la sombra */}
<div className="custom-navbar-width mx-auto px-4 flex justify-between items-center">

      <img src={logo} alt="Logo de la empresa" className="h-16 w-auto ml-12" />

        <div className="flex justify-center mr-8">
          <ScrollLink 
            className="text-black hover:text-gray-600 px-4 transition duration-300 font-semibold text-lg font-poppins"
            activeClass="text-gray-600 border-b-2 border-black"
            to="home"
            spy={true}
            smooth={true}
            offset={140}
            duration={500}
            onClick={() => handleNavigation('home')}
          >
            Home
          </ScrollLink>
          <ScrollLink 
            className="text-black hover:text-gray-600 px-4 transition duration-300 font-semibold text-lg font-poppins"
            activeClass="text-gray-600 border-b-2 border-black"
            to="aboutus"
            spy={true}
            smooth={true}
            offset={140}
            duration={500}
            onClick={() => handleNavigation('aboutus')}
          >
              About us
          </ScrollLink>
          <RouterLink 
            className="text-black hover:text-gray-600 px-4 transition duration-300 font-semibold text-lg font-poppins"
            to="/shop"
          >
            Shop
          </RouterLink>
          <ScrollLink 
            className="text-black hover:text-gray-600 px-4 transition duration-300 font-semibold text-lg font-poppins"
            activeClass="text-gray-600 border-b-2 border-black"
            to="contact"
            spy={true}
            smooth={true}
            offset={140}
            duration={500}
            onClick={() => handleNavigation('contact')}
          >
            Contact
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
