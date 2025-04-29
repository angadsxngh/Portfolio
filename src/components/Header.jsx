import React from 'react'
import { ScrollProgress } from './magicui/scroll-progress'

function Header() {
  return (
    <div className="fixed top-0 w-full backdrop-blur-lg z-50">
      <div className="flex justify-between items-center py-6 px-6 relative">
        
        <div className="z-10">
          <img src="/images/HeaderLogo" alt="LOGO" className="h-8 w-auto" />
        </div>

        <div className="absolute mb-3 left-1/2 transform -translate-x-1/2">
          <ul className="flex flex-row gap-6">
            <li className='cursor-pointer hover:text-black hover:bg-white text-white hover:rounded px-2 py-1 rounded-lg font-semibold'><a href="#about">About</a></li>
            <li className='cursor-pointer hover:text-black hover:bg-white text-white hover:rounded px-2 py-1 rounded-lg font-semibold'><a href="#projects">Projects</a></li>
            <li className='cursor-pointer hover:text-black hover:bg-white text-white hover:rounded px-2 py-1 rounded-lg font-semibold'><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <ScrollProgress className="top-[80px]" />
    </div>
  )
}

export default Header
