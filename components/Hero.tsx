import React, { useState } from 'react';
import { Search, PlusCircle } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCityName } from '../services/mockData';

const Hero: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { citySlug } = useParams<{ citySlug: string }>();
  const cityName = getCityName(citySlug);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/${citySlug}/explore?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="relative bg-primary-900 h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="City Life" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
          O melhor de <span className="text-primary-400">{cityName}</span> está aqui.
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
          Encontre telefones, endereços e promoções das melhores empresas, indústrias e prestadores de serviço da cidade.
        </p>

        <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row shadow-2xl rounded-xl overflow-hidden">
            <div className="flex-grow relative bg-white">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-slate-400" />
              </div>
              <input
                type="text"
                className="w-full pl-12 pr-4 py-4 bg-white text-slate-900 placeholder-slate-500 focus:outline-none text-lg"
                placeholder="O que você procura? Ex: Pizza, Mecânico..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button 
              type="submit"
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 text-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Buscar
            </button>
          </div>
        </form>

        <div className="mt-8 flex justify-center">
            <button
                onClick={() => navigate(`/${citySlug}/pricing`)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
                <PlusCircle className="w-5 h-5" />
                Cadastre sua empresa grátis!
            </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;