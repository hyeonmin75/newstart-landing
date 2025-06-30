import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { NavItem } from '../types';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="https://www.realnewstart.ecnomini.com" className={`flex items-center gap-2 text-2xl font-black transition-colors duration-300 ${isScrolled ? 'text-indigo-600' : 'text-white'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z"></path>
              <path d="M12 6L7 11h2v6h2v-4h2v4h2v-6h2L12 6z"></path>
            </svg>
            <span>새출발기금</span>
          </a>
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item: NavItem) => (
              <a key={item.name} href={item.href} className={`transition-colors ${isScrolled ? 'text-gray-600 hover:text-indigo-600' : 'text-white/80 hover:text-white'} font-medium`}>
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <a href="https://www.realnewstart.ecnomini.com" className={`hidden sm:block px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 ${isScrolled ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'}`}>
              온라인 신청
            </a>
            <button className="lg:hidden text-gray-700 focus:outline-none">
              <svg className={`w-6 h-6 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;