"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      name: "Products",
      submenu: [
        { name: "AR Cards", href: "/Reality/Cards" },
        { name: "VR Experiences", href: "/Reality/VR-Experience" },
        {
          name: "Digital Collectibles",
          href: "/products/digital-collectibles",
        },
      ],
    },
    {
      name: "Solutions",
      submenu: [
        { name: "Gaming", href: "/solutions/gaming" },
        { name: "Education", href: "/solutions/education" },
        { name: "Enterprise", href: "/solutions/enterprise" },
      ],
    },
    { name: "Pricing", href: "/pricing" },
    { name: "Community", href: "/community" },
    { name: "Support", href: "/support" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 p-[1%] transition-all duration-300
      ${isScrolled ? "bg-black/80" : "bg-black/80"}`}
      style={{
        isolation: "isolate", // Creates a new stacking context
        zIndex: 100, // Ensure it's always on top
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">RealityCards</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.submenu ? (
                  <div className="flex items-center space-x-1">
                    <button className="text-gray-300 group-hover:text-white transition-colors flex items-center">
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    {/* Dropdown */}
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link key={subIndex} href={subItem.href}>
                          <div className="block px-4 py-2 text-gray-800 hover:bg-purple-50 hover:text-purple-600">
                            {subItem.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link href={item.href}>
                    <div className="text-gray-300 hover:text-white transition-colors">
                      {item.name}
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-purple-200 transition-colors">
              Sign In
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        style={{ zIndex: 101 }} // Ensure dropdown is above navbar
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-lg">
          {menuItems.map((item, index) => (
            <div key={index} className="px-3 py-2">
              {item.submenu ? (
                <div className="space-y-2">
                  <div className="text-gray-300">{item.name}</div>
                  <div className="pl-4 space-y-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link key={subIndex} href={subItem.href}>
                        <div className="text-gray-400 hover:text-white block">
                          {subItem.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link href={item.href}>
                  <div className="text-gray-300 hover:text-white block">
                    {item.name}
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
