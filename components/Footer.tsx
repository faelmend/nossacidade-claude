
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle, Briefcase, Youtube, Mail, Megaphone } from 'lucide-react';
import { getCityName } from '../services/mockData';

const Footer: React.FC = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const cityName = getCityName(citySlug);

  if (!citySlug) return null;

  const normalizedCityName = cityName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") 
    .replace(/\s+/g, ""); 
  
  // Removed "suporte." prefix as requested
  const supportEmail = `${normalizedCityName}@nossacidade.com`;

  // Standard Button Classes for Perfect Uniformity
  const btnBaseClass = "w-full h-12 flex items-center justify-center gap-2 rounded-xl text-sm font-bold text-white shadow-lg transition-all transform hover:-translate-y-1";

  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-center md:text-left items-stretch">
          
          {/* Col 1: Brand */}
          <div className="flex flex-col items-center md:items-start h-full">
            <Link to={`/${citySlug}`} className="flex items-center gap-3 mb-6 group">
               <div className="bg-white p-1.5 rounded-lg">
                <svg className="h-8 w-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 92C50 92 88 72 88 48C88 27.0132 70.9868 10 50 10C29.0132 10 12 27.0132 12 48C12 72 50 92 50 92Z" stroke="#1d4ed8" strokeWidth="6" fill="white" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M30 70V50L42 42V70H30Z" fill="#bfdbfe"/>
                    <path d="M42 70V35L58 28V70H42Z" fill="#2563eb"/>
                    <path d="M58 70V45L70 52V70H58Z" fill="#60a5fa"/>
                </svg>
               </div>
              <div className="flex flex-col justify-center text-left">
                <span className="font-extrabold text-2xl text-white leading-none tracking-tighter">nossa<span className="text-blue-400">cidade</span>.com</span>
                <span className="text-[10px] text-blue-300 font-bold uppercase tracking-widest truncate max-w-[150px]">{cityName}</span>
              </div>
            </Link>
            <p className="text-blue-200 text-sm mb-6 leading-relaxed">
              A ponte digital entre você e o comércio de {cityName}. Valorizando o local, conectando pessoas e impulsionando negócios.
            </p>
            
            {/* Social Grid: 2 lines of 3 buttons */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-[200px] md:max-w-none justify-center md:justify-start mt-auto">
              <a href="#" className="bg-blue-900 hover:bg-pink-600 p-2 rounded-lg transition-colors flex items-center justify-center group" title="Instagram">
                  <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="bg-blue-900 hover:bg-blue-600 p-2 rounded-lg transition-colors flex items-center justify-center group" title="Facebook">
                  <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="bg-blue-900 hover:bg-black p-2 rounded-lg transition-colors flex items-center justify-center group" title="TikTok">
                  {/* TikTok SVG */}
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white group-hover:scale-110 transition-transform">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
              </a>
              <a href="#" className="bg-blue-900 hover:bg-[#0077b5] p-2 rounded-lg transition-colors flex items-center justify-center group" title="LinkedIn">
                  {/* LinkedIn SVG */}
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white group-hover:scale-110 transition-transform">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
              </a>
              <a href="#" className="bg-blue-900 hover:bg-red-600 p-2 rounded-lg transition-colors flex items-center justify-center group" title="YouTube">
                  <Youtube className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="bg-blue-900 hover:bg-black p-2 rounded-lg transition-colors flex items-center justify-center group" title="X (Twitter)">
                   {/* X Logo */}
                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white group-hover:scale-110 transition-transform">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                   </svg>
              </a>
            </div>
          </div>
          
          {/* Col 2: Discover */}
          <div className="flex flex-col h-full">
            <h3 className="font-bold text-lg mb-6 text-white border-b border-blue-800 pb-2 inline-block">Descubra</h3>
            <ul className="space-y-3 text-sm text-blue-200 flex-grow">
                <li><Link to={`/${citySlug}/explore?category=alimentacao`} className="hover:text-white hover:translate-x-1 transition-transform block">Alimentação</Link></li>
                <li><Link to={`/${citySlug}/explore?category=servicos`} className="hover:text-white hover:translate-x-1 transition-transform block">Serviços</Link></li>
                <li><Link to={`/${citySlug}/jobs`} className="hover:text-white hover:translate-x-1 transition-transform block">Vagas de Emprego</Link></li>
                <li><Link to={`/${citySlug}/categories`} className="hover:text-white hover:translate-x-1 transition-transform block">Todas as Categorias</Link></li>
            </ul>
             {/* Button 1: Media Partner - Bottom Aligned */}
            <div className="mt-auto pt-4">
                <Link 
                    to={`/${citySlug}/media-partners`} 
                    className={`${btnBaseClass} bg-purple-600 hover:bg-purple-700 shadow-purple-900/20`}
                >
                    <Megaphone className="w-5 h-5" />
                    Parceiro de Mídia
                </Link>
            </div>
          </div>

          {/* Col 3: Business */}
          <div className="flex flex-col h-full">
            <h3 className="font-bold text-lg mb-6 text-white border-b border-blue-800 pb-2 inline-block">Para Empresas</h3>
            <ul className="space-y-3 text-sm text-blue-200 flex-grow">
                <li><Link to={`/${citySlug}/pricing`} className="hover:text-white hover:translate-x-1 transition-transform block">Anuncie Conosco</Link></li>
                <li><Link to="/admin/login" className="hover:text-white hover:translate-x-1 transition-transform block">Área do Cliente</Link></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-transform block">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-transform block">Política de Privacidade</a></li>
            </ul>
            {/* Button 2: Licensee - Bottom Aligned - Points to Sales Page */}
            <div className="mt-auto pt-4">
                <Link 
                    to="/seja-licenciado" 
                    className={`${btnBaseClass} bg-orange-500 hover:bg-orange-600 shadow-orange-900/20`}
                >
                    <Briefcase className="w-5 h-5" />
                    Seja um Licenciado
                </Link>
            </div>
          </div>

          {/* Col 4: Contact */}
          <div className="flex flex-col h-full">
            <h3 className="font-bold text-lg mb-6 text-white border-b border-blue-800 pb-2 inline-block">Fale Conosco</h3>
            
            <div className="flex flex-col gap-3 text-sm text-blue-200 mb-4 flex-grow">
                {/* Email */}
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href={`mailto:${supportEmail}`} className="hover:text-white transition-colors truncate">{supportEmail}</a>
                </div>
                
                {/* Phrase */}
                <p className="text-blue-300 text-xs font-bold mt-2">Siga-nos no Instagram:</p>

                {/* Instagram */}
                <div className="flex items-center justify-center md:justify-start gap-2">
                     <Instagram className="w-4 h-4 flex-shrink-0" />
                     <a href={`https://instagram.com/${normalizedCityName}.nossacidade`} target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-pink-400 transition-colors">
                        {normalizedCityName}.nossacidade
                     </a>
                </div>
            </div>

            {/* Support Button */}
            <div className="mt-auto">
                <a 
                    href="https://wa.me/5538999999999" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${btnBaseClass} bg-green-500 hover:bg-green-600 shadow-green-500/20`}
                >
                    <MessageCircle className="w-5 h-5" />
                    Suporte via WhatsApp
                </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-400 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} NossaCidade.com. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0 flex items-center justify-center">Feito com <span className="text-red-500 mx-1">❤</span> em Minas Gerais.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;