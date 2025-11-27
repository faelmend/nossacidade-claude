import React, { useState, useMemo } from 'react';
import { useSearchParams, useParams, Link } from 'react-router-dom';
import { Search, Filter, Layers, Tag } from 'lucide-react';
import BusinessCard from '../components/BusinessCard';
import { BUSINESSES, CATEGORIES, getCityName } from '../services/mockData';
import { PlanType } from '../types';

const Explore: React.FC = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const cityName = getCityName(citySlug);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialCategory = searchParams.get('category') || '';
  const initialSubcategory = searchParams.get('subcategory') || '';

  const [searchTerm, setSearchTerm] = useState(initialQuery);
  
  const selectedCategory = initialCategory; 
  const selectedSubcategory = initialSubcategory;

  const filteredBusinesses = useMemo(() => {
    return BUSINESSES.filter(business => {
      const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            business.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Category matching
      const categoryObj = CATEGORIES.find(c => c.slug === selectedCategory);
      const matchesCategory = selectedCategory === '' || 
                              business.categoryId === selectedCategory || 
                              (categoryObj && business.categoryId === categoryObj.id);

      // Subcategory matching (Strict)
      // Note: In real app, you might want normalize string for comparison (remove accents/lowercase)
      const matchesSubcategory = selectedSubcategory === '' ||
                                 (business.subcategory && business.subcategory.toLowerCase() === selectedSubcategory.toLowerCase()) ||
                                 // Fallback if subcategory field isn't perfectly aligned, check description
                                 business.description.toLowerCase().includes(selectedSubcategory.toLowerCase());

      return matchesSearch && matchesCategory && matchesSubcategory;
    }).sort((a, b) => {
        // Ranking Logic: Paid plans first
        const scoreA = a.plan === PlanType.FREE ? 0 : 10;
        const scoreB = b.plan === PlanType.FREE ? 0 : 10;
        
        if (scoreA === scoreB) return 0; 
        return scoreB - scoreA; 
    });

  }, [searchTerm, selectedCategory, selectedSubcategory]);

  const clearFilters = () => {
      setSearchTerm('');
      searchParams.delete('category');
      searchParams.delete('subcategory');
      searchParams.delete('q');
      setSearchParams(searchParams);
  };

  const removeSubcategory = () => {
      searchParams.delete('subcategory');
      setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search */}
        <div className="mb-10">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Lista de Empresas</h1>
            <p className="text-slate-500">Pesquise e encontre serviços em {cityName}.</p>
          </div>
          
          <div className="relative max-w-2xl mx-auto shadow-lg rounded-xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 border-none rounded-xl bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-primary-500 text-lg"
              placeholder="Buscar por nome, serviço ou produto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Filter Status / Navigation to Categories */}
        <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-bold text-xl text-slate-900 mr-2">Filtros:</h3>
                
                {selectedCategory ? (
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                        <Filter className="w-4 h-4 text-primary-600" />
                        <span className="text-sm font-bold text-slate-700">
                            {CATEGORIES.find(c => c.slug === selectedCategory)?.name}
                        </span>
                        <button onClick={clearFilters} className="ml-2 text-slate-400 hover:text-red-500" title="Limpar Filtros">
                            &times;
                        </button>
                    </div>
                ) : (
                     <span className="text-slate-500 text-sm italic">Nenhuma categoria selecionada</span>
                )}

                {selectedSubcategory && (
                    <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100 shadow-sm">
                        <Tag className="w-3 h-3 text-blue-600" />
                        <span className="text-sm font-bold text-blue-800">
                            {selectedSubcategory}
                        </span>
                         <button onClick={removeSubcategory} className="ml-2 text-blue-400 hover:text-blue-700" title="Remover Subcategoria">
                            &times;
                        </button>
                    </div>
                )}
            </div>
            
            <Link 
                to={`/${citySlug}/categories`}
                className="flex items-center gap-2 text-primary-600 font-bold hover:bg-primary-50 px-4 py-2 rounded-lg transition-colors"
            >
                <Layers className="w-4 h-4" />
                Ver lista de Categorias
            </Link>
        </div>

        {/* Business List */}
        <div>
            {filteredBusinesses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredBusinesses.map(business => (
                  <div key={business.id} className="w-full">
                     <BusinessCard business={business} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-16 text-center border border-slate-200 border-dashed">
                <Search className="w-16 h-16 text-slate-200 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900">Nenhum resultado encontrado</h3>
                <p className="text-slate-500 mt-2 max-w-md mx-auto">
                    Não encontramos empresas com os filtros atuais. Tente buscar por termos mais gerais ou remova a subcategoria.
                </p>
                <button 
                    onClick={clearFilters}
                    className="mt-8 px-6 py-3 bg-primary-600 text-white rounded-full font-bold hover:bg-primary-700 transition-colors shadow-lg"
                >
                    Limpar filtros e ver tudo
                </button>
              </div>
            )}
            
            {/* Free Plan Disclaimer */}
            {filteredBusinesses.length > 0 && (
                <div className="mt-12 text-center text-xs text-slate-400">
                    <p>A ordem de exibição prioriza empresas parceiras do NossaCidade.com.</p>
                </div>
            )}
          </div>
      </div>
    </div>
  );
};

export default Explore;