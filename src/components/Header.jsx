import React, { useState } from "react";
import { ScrollProgress } from "./magicui/scroll-progress";
import { Button } from "@heroui/react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-lg">
      <div className="flex justify-between items-center py-4 px-6 md:px-10 lg:px-16">
        
        {/* Logo */}
        <div className="z-10">
          <img
            src="https://raw.githubusercontent.com/angadsxngh/Portfolio/refs/heads/master/public/images/HeaderLogo.png"
            alt="LOGO"
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {["about", "projects", "contact"].map((item) => (
            <a key={item} href={`#${item}`}>
              <Button className="bg-transparent text-white hover:text-black hover:bg-white font-semibold px-2 py-1 rounded-lg">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Button>
            </a>
          ))}
        </nav>

        {/* Resume + Hamburger Menu */}
        <div className="flex items-center gap-4 z-10">
          {/* Desktop Resume */}
          <a
            href="https://drive.google.com/file/d/1BUWDcXWSnaQzPo9sb5YJccevdDCMwO4N/view"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <Button className="uppercase tracking-wide font-semibold bg-transparent text-white">
              Resume
            </Button>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col gap-4 text-white">
            {["about", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-black hover:bg-white px-3 py-2 rounded-lg font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1BUWDcXWSnaQzPo9sb5YJccevdDCMwO4N/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="uppercase tracking-wide font-semibold bg-transparent w-full text-left">
                Resume
              </Button>
            </a>
          </div>
        </div>
      )}

      {/* Scroll Progress */}
      <ScrollProgress className="hidden md:inline top-[72px]" />
    </header>
  );
}

export default Header;
