import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Menu, X, MapPin, Briefcase, Megaphone, LayoutList, LogIn } from 'lucide-react';
import { getCityName } from '../services/mockData';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { citySlug } = useParams<{ citySlug: string }>();
  const cityName = getCityName(citySlug);

  // Track last visited city for "Back" buttons in Login/Dashboards
  useEffect(() => {
    if (citySlug) {
      localStorage.setItem('nossaCidade_lastCity', citySlug);
    }
  }, [citySlug]);

  if (!citySlug) return null;

  const isActive = (path: string) => location.pathname === `/${citySlug}${path}`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20 items-center">
          <div className="flex items-center">
            <Link to={`/${citySlug}`} className="flex-shrink-0 flex items-center gap-2 md:gap-3 group">
              <svg className="h-8 w-8 md:h-10 md:w-10 group-hover:scale-105 transition-transform duration-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 92C50 92 88 72 88 48C88 27.0132 70.9868 10 50 10C29.0132 10 12 27.0132 12 48C12 72 50 92 50 92Z" stroke="#1d4ed8" strokeWidth="6" fill="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M30 70V50L42 42V70H30Z" fill="#bfdbfe"/>
                <path d="M42 70V35L58 28V70H42Z" fill="#2563eb"/>
                <path d="M58 70V45L70 52V70H58Z" fill="#60a5fa"/>
              </svg>
              <div className="flex flex-col justify-center">
                <span className="font-extrabold text-lg md:text-2xl text-[#1e3a8a] leading-none tracking-tighter">nossa<span className="text-blue-600">cidade</span>.com</span>
                <div className="flex items-center gap-1">
                  <span className="text-[9px] md:text-[10px] text-slate-500 font-bold uppercase tracking-widest truncate max-w-[80px] md:max-w-none">{cityName}</span>
                  <Link to="/" className="text-[9px] md:text-[10px] text-primary-500 hover:text-primary-700 font-semibold bg-slate-100 px-1 rounded ml-1" title="Trocar cidade">
                     (Trocar)
                  </Link>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link 
              to={`/${citySlug}`} 
              className={`${isActive('') ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'} font-medium text-sm transition-colors`}
            >
              Início
            </Link>
            <Link 
              to={`/${citySlug}/categories`} 
              className={`${isActive('/categories') ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'} font-medium text-sm transition-colors`}
            >
              Categorias
            </Link>
            <Link 
              to={`/${citySlug}/explore`} 
              className={`${isActive('/explore') ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'} font-medium text-sm transition-colors`}
            >
              Empresas
            </Link>
             <Link 
              to={`/${citySlug}/jobs`} 
              className={`${isActive('/jobs') ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'} font-medium text-sm transition-colors`}
            >
              Empregos
            </Link>
            
            <Link 
              to={`/${citySlug}/pricing`} 
              className={`${isActive('/pricing') ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'} font-medium text-sm transition-colors`}
            >
              Planos
            </Link>

            {/* Media Partners */}
            <Link 
              to={`/${citySlug}/media-partners`} 
              className="text-sm font-bold text-purple-700 bg-purple-100 hover:bg-purple-200 border border-purple-200 px-3 py-1.5 rounded-lg flex items-center gap-1 whitespace-nowrap transition-colors"
            >
              <Megaphone className="w-4 h-4" /> Parceiros de Mídia
            </Link>
            
            {/* Licensee Button - Now points to Sales Page */}
            <Link 
              to="/seja-licenciado"
              className="text-sm font-bold text-orange-700 bg-orange-100 hover:bg-orange-200 border border-orange-200 px-3 py-1.5 rounded-lg flex items-center gap-1 whitespace-nowrap transition-colors"
            >
              <Briefcase className="w-4 h-4" />
              Licenciado
            </Link>

            {/* Login Button */}
            <Link 
              to="/admin/login"
              className="bg-primary-600 text-white hover:bg-primary-700 px-5 py-2 rounded-full text-sm font-medium shadow-md transition-transform hover:scale-105 whitespace-nowrap flex items-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              Entrar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to={`/${citySlug}`}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              Início
            </Link>
            <Link
              to={`/${citySlug}/categories`}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              Categorias
            </Link>
            <Link
              to={`/${citySlug}/explore`}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              Empresas
            </Link>
             <Link
              to={`/${citySlug}/jobs`}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              Empregos
            </Link>
            <Link
              to={`/${citySlug}/pricing`}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              Planos
            </Link>
            
            {/* Mobile Buttons */}
            <div className="space-y-2 mt-2 px-3">
                 <Link
                to={`/${citySlug}/media-partners`}
                className="flex items-center gap-2 w-full px-3 py-2 rounded-md text-base font-bold text-purple-700 bg-purple-100"
                onClick={() => setIsOpen(false)}
                >
                <Megaphone className="w-4 h-4" /> Parceiros de Mídia
                </Link>
                <Link
                to="/seja-licenciado"
                className="flex items-center gap-2 w-full px-3 py-2 rounded-md text-base font-bold text-orange-700 bg-orange-100"
                onClick={() => setIsOpen(false)}
                >
                <Briefcase className="w-4 h-4" /> Seja um Licenciado
                </Link>
            </div>

            <div className="pt-4 pb-2 border-t border-slate-100 mt-2">
              <Link
                to="/admin/login"
                className="flex items-center justify-center gap-2 w-full text-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-primary-600 hover:bg-primary-700"
                onClick={() => setIsOpen(false)}
              >
                <LogIn className="w-5 h-5" />
                Entrar no Sistema
              </Link>
            </div>
            <Link
                to="/"
                className="block w-full text-center px-4 py-4 text-sm text-slate-400 hover:text-slate-600 border-t border-slate-100"
                onClick={() => setIsOpen(false)}
            >
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-3 h-3" />
                  Trocar de Cidade
                </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;