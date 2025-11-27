import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import * as Icons from 'lucide-react';
import { CATEGORIES, getCityName } from '../services/mockData';
import { Category } from '../types';

// Sub-component for individual category card to handle mobile toggle state
const CategoryCard: React.FC<{ category: Category & { color: string; bg: string }; citySlug: string }> = ({ category, citySlug }) => {
    const [isMobileExpanded, setIsMobileExpanded] = useState(false);

    const getIcon = (iconName: string) => {
        // @ts-ignore
        const Icon = Icons[iconName];
        return Icon ? <Icon className="w-6 h-6" /> : null;
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
            <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg ${category.bg} ${category.color}`}>
                        {getIcon(category.icon)}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">{category.name}</h3>
                        <span className="text-xs text-slate-400">{category.count} empresas</span>
                    </div>
                </div>

                {/* Desktop View: Always show all. Mobile: Toggle */}
                <div className={`space-y-2 mb-6 flex-grow ${isMobileExpanded ? 'block' : 'hidden md:block'}`}>
                    {category.subcategories?.map((sub, idx) => (
                        <Link 
                            key={idx} 
                            to={`/${citySlug}/explore?category=${category.slug}&subcategory=${encodeURIComponent(sub)}`}
                            className="block text-sm text-slate-600 hover:text-primary-600 hover:bg-slate-50 px-2 py-1 rounded transition-colors flex items-center gap-2"
                        >
                            <div className="w-1.5 h-1.5 bg-slate-300 rounded-full flex-shrink-0"></div>
                            {sub}
                        </Link>
                    ))}
                </div>
                
                {/* Mobile Toggle Button */}
                <button 
                    onClick={() => setIsMobileExpanded(!isMobileExpanded)}
                    className="md:hidden w-full py-2 text-xs font-bold text-slate-500 bg-slate-50 rounded-lg mb-4 flex items-center justify-center gap-1"
                >
                    {isMobileExpanded ? (
                        <>Fechar Subcategorias <ChevronUp className="w-3 h-3" /></>
                    ) : (
                        <>Ver {category.subcategories?.length} Subcategorias <ChevronDown className="w-3 h-3" /></>
                    )}
                </button>

                <Link 
                    to={`/${citySlug}/explore?category=${category.slug}`}
                    className="mt-auto block w-full py-3 text-center bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-900 transition-colors shadow-sm"
                >
                    Ver todas em {category.name}
                </Link>
            </div>
        </div>
    );
};

const Categories: React.FC = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const cityName = getCityName(citySlug);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = CATEGORIES.filter(cat => 
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.subcategories?.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-slate-50 py-8">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Categorias de Negócios</h1>
            <p className="text-slate-500 text-lg mb-8">Encontre o que você precisa navegando pelos setores de {cityName}.</p>
            
            <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
                </div>
                <input
                type="text"
                className="block w-full pl-10 pr-4 py-3 border border-slate-200 rounded-full bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-primary-500 focus:outline-none shadow-sm"
                placeholder="Filtrar categorias ou serviços..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {filteredCategories.map(category => (
                 <CategoryCard key={category.id} category={category} citySlug={citySlug!} />
             ))}
          </div>

          {filteredCategories.length === 0 && (
              <div className="text-center py-12">
                  <p className="text-slate-500">Nenhuma categoria encontrada para sua busca.</p>
              </div>
          )}
       </div>
    </div>
  );
};

export default Categories;