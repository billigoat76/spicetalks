import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 sm:px-12 pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Branding */}
        <div>
          <Link to="/" className="text-2xl font-bold text-white mb-4 inline-block">
            SpiceTalks 🍽️
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed mt-2">
            Bringing delicious food from your favorite restaurants straight to your door.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-orange-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-400 transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-orange-400 transition">Contact Us</Link></li>
            <li><Link to="/grocery" className="hover:text-orange-400 transition">Grocery</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-400 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">FAQs</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Info & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-sm mb-1">📧 support@spicetalks.com</p>
          <p className="text-sm mb-4">📞 +91-9876543210</p>
          <div className="flex gap-4 text-xl text-gray-400 mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-orange-400"><FaFacebook /></a>
            <a href="#" aria-label="Instagram" className="hover:text-orange-400"><FaInstagram /></a>
            <a href="#" aria-label="Twitter" className="hover:text-orange-400"><FaTwitter /></a>
            <a href="#" aria-label="YouTube" className="hover:text-orange-400"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SpiceTalks. All rights reserved.
      </div>
    </footer>
  );
}
