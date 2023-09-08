import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="bg-[rgb(10,4,22)] text-white py-2.5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center md:text-left">
            <h3>Designed and Developed by Dev Designs</h3>
          </div>
          <div className="text-center">
            <h3>Copyright © {year} ZOYLE</h3>
          </div>
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="https://github.com/Facutorress" target="_blank" rel="noopener noreferrer">
              <AiFillGithub className="text-white" />
            </a>
            <a href="https://twitter.com/Facutorreslt" target="_blank" rel="noopener noreferrer">
              <AiOutlineTwitter className="text-white" />
            </a>
            <a href="https://www.linkedin.com/in/facundo-torres-b17871247/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-white" />
            </a>
            <a href="https://www.instagram.com/devdesigns.ok" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
