import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Angad Singh</h3>
          <p className="text-sm text-gray-400">
            Turning ideas into real-world experiences. <br />
            Built with React, Tailwind & passion.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect</h3>
          <div className="flex justify-center md:justify-start gap-4 text-gray-400">
            <a href="https://github.com/angadsxngh" target="_blank" rel="noopener noreferrer">
              <Github className="hover:text-white transition" />
            </a>
            <a href="https://linkedin.com/in/angadsxngh" target="_blank" rel="noopener noreferrer">
              <Linkedin className="hover:text-white transition" />
            </a>
            <a href="mailto:angadshanpal05@gmail.com">
              <Mail className="hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Angad Singh. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
