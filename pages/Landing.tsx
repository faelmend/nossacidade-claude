
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Search, ChevronRight, Briefcase } from 'lucide-react';
import { CITIES } from '../services/mockData';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Filter and sort cities alphabetically
  const filteredCities = useMemo(() => {
    return CITIES
      .filter(city => 
        city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        city.state.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [searchTerm]);

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background elements (Blobs) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
         <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-200/40 blur-[100px]"></div>
         <div className="absolute top-[60%] -right-[5%] w-[40%] h-[40%] rounded-full bg-indigo-200/40 blur-[100px]"></div>
      </div>

      <div className="max-w-3xl w-full text-center space-y-10 relative z-10">
        
        {/* Logo Section - Optimized for Mobile */}
        <div className="flex flex-col items-center justify-center mb-8 animate-fade-in-up">
          {/* Changed to flex-col on mobile, md:flex-row on desktop */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 transition-transform duration-500 hover:scale-105">
            <div className="relative">
               {/* Glow effect behind logo */}
               <div className="absolute inset-0 bg-blue-400 blur-2xl opacity-20 rounded-full"></div>
               {/* Adjusted SVG size: smaller on mobile, larger on desktop */}
               <svg className="h-16 w-16 md:h-24 md:w-24 relative z-10 drop-shadow-md" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 92C50 92 88 72 88 48C88 27.0132 70.9868 10 50 10C29.0132 10 12 27.0132 12 48C12 72 50 92 50 92Z" stroke="#1d4ed8" strokeWidth="6" fill="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M30 70V50L42 42V70H30Z" fill="#bfdbfe"/>
                <path d="M42 70V35L58 28V70H42Z" fill="#2563eb"/>
                <path d="M58 70V45L70 52V70H58Z" fill="#60a5fa"/>
              </svg>
            </div>
            {/* Adjusted font size: text-4xl on mobile, text-7xl on desktop */}
            <span className="font-extrabold text-4xl sm:text-5xl md:text-7xl text-blue-900 tracking-tighter drop-shadow-sm leading-none">
              nossa<span className="text-blue-600">cidade</span>.com
            </span>
          </div>
          <p className="text-blue-600/80 mt-6 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-medium px-4">
            O guia oficial da sua região. Conecte-se com o melhor do comércio local.
          </p>
        </div>

        {/* Search / Selector Section - Blue Theme */}
        <div className="w-full max-w-xl mx-auto transform transition-all duration-300 hover:scale-[1.02]" ref={wrapperRef}>
          <div className={`relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-[0_20px_50px_rgba(59,130,246,0.15)] border border-blue-100 transition-all duration-300 ${isFocused ? 'ring-4 ring-blue-200 shadow-blue-200/50' : ''}`}>
            <div className="flex items-center px-6 py-5">
              <div className={`p-2 rounded-full ${isFocused ? 'bg-blue-100 text-blue-600' : 'bg-blue-50 text-blue-400'} transition-colors`}>
                <Search className="w-6 h-6" />
              </div>
              <input
                type="text"
                className="w-full ml-4 text-lg text-blue-900 placeholder-blue-300/80 focus:outline-none font-semibold bg-transparent"
                placeholder="Digite o nome da sua cidade..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setIsFocused(true);
                }}
                onFocus={() => setIsFocused(true)}
              />
            </div>

            {/* Dropdown List */}
            {isFocused && (
              <div className="absolute top-[110%] left-0 right-0 bg-white rounded-2xl shadow-2xl shadow-blue-900/10 border border-blue-100 max-h-80 overflow-y-auto z-50 animate-in fade-in slide-in-from-top-4 duration-200 scrollbar-thin scrollbar-thumb-blue-100 scrollbar-track-transparent">
                <div className="sticky top-0 bg-blue-50/90 backdrop-blur-sm px-4 py-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                  Selecione sua cidade
                </div>
                {filteredCities.length > 0 ? (
                  <ul className="py-2">
                    {filteredCities.map((city) => (
                      <li key={city.slug}>
                        <button
                          onClick={() => navigate(`/${city.slug}`)}
                          className="w-full text-left px-6 py-4 hover:bg-blue-50 transition-colors flex items-center justify-between group border-b border-blue-50 last:border-0"
                        >
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <MapPin className="w-4 h-4" />
                            </div>
                            <span className="text-lg text-slate-700 group-hover:text-blue-800 font-bold">
                              {city.name}
                            </span>
                            <span className="ml-2 text-xs font-bold text-blue-400 border border-blue-100 px-2 py-0.5 rounded-full bg-white">
                              {city.state}
                            </span>
                          </div>
                          <ChevronRight className="w-5 h-5 text-blue-200 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all" />
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-6 py-10 text-center text-blue-400">
                    <p className="font-medium">Sua cidade não está na lista?</p>
                    <p className="text-sm mt-1 opacity-70 mb-4">Seja o pioneiro em sua região.</p>
                    <Link 
                        to="/seja-licenciado"
                        className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold text-sm hover:bg-blue-200"
                    >
                        Licenciar minha cidade agora
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="pt-8 px-4">
           <Link 
            to="/seja-licenciado" 
            className="inline-flex items-center justify-center gap-2 px-6 py-4 md:px-8 rounded-full bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 transition-all shadow-lg shadow-orange-500/30 font-bold text-base md:text-lg w-full md:w-auto"
           >
             <Briefcase className="w-5 h-5 flex-shrink-0" />
             <span>Seja um Licenciado na sua região</span>
           </Link>
           <p className="mt-4 text-blue-900/60 text-sm font-medium px-4">
             Tenha um portal de negócios da sua cidade com faturamento recorrente!
           </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
