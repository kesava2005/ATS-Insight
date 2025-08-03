import React from 'react';
import { FaInstagram, FaFacebook, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-[170px]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex items-center md:items-start mb-4 md:mb-0 gap-[30px]">
          <span className="font-semibold text-xl mb-2">About</span>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-2xl hover:text-pink-400 transition" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="text-2xl hover:text-blue-400 transition" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <FaXTwitter className="text-2xl hover:text-slate-400 transition" />
            </a>
          </div>
        </div>
        {/* Copyright section */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} YourCompany. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
