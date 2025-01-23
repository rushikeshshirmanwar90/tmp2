import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-300">Your company description here...</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Email: info@example.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: Your Address Here</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Add social media icons/links here */}
                <a href="#" className="hover:text-purple-400">
                  Twitter
                </a>
                <a href="#" className="hover:text-purple-400">
                  Facebook
                </a>
                <a href="#" className="hover:text-purple-400">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
