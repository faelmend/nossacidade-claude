
import React, { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Briefcase, MapPin, Clock, DollarSign, MessageCircle, CheckCircle, Users, Search, Filter, X, ExternalLink, Building2, Linkedin, LayoutGrid, List } from 'lucide-react';
import { JOBS, getCityName, JOB_AREAS, JOB_TYPES, EXPERIENCE_LEVELS } from '../services/mockData';

const Jobs: React.FC = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const cityName = getCityName(citySlug);

  // Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedModality, setSelectedModality] = useState<string[]>([]);

  // Mobile Filter Drawer
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const toggleFilter = (state: string[], setState: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    if (state.includes(value)) {
      setState(state.filter(item => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  // Filter Logic
  const filteredJobs = useMemo(() => {
    return JOBS.filter(job => {
        const matchesSearch = 
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
            job.companyName.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesArea = selectedAreas.length === 0 || (job.category && selectedAreas.includes(job.category));
        const matchesType = selectedTypes.length === 0 || selectedTypes.includes(job.type);
        const matchesLevel = selectedLevels.length === 0 || (job.level && selectedLevels.includes(job.level));
        const matchesModality = selectedModality.length === 0 || (job.modality && selectedModality.includes(job.modality));

        return matchesSearch && matchesArea && matchesType && matchesLevel && matchesModality;
    });
  }, [searchTerm, selectedAreas, selectedTypes, selectedLevels, selectedModality]);

  const clearFilters = () => {
      setSearchTerm('');
      setSelectedAreas([]);
      setSelectedTypes([]);
      setSelectedLevels([]);
      setSelectedModality([]);
  };

  const getSourceIcon = (source: string | undefined) => {
      if (source === 'LinkedIn') return <Linkedin className="w-4 h-4 text-blue-700" />;
      if (source === 'Indeed') return <div className="w-4 h-4 bg-blue-600 rounded-full text-white text-[8px] flex items-center justify-center font-bold">I</div>;
      return <Building2 className="w-4 h-4 text-slate-400" />;
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans pb-16">
      
      {/* Header Compacto */}
      <div className="bg-white border-b border-slate-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-slate-900">Vagas em {cityName} e Região</h1>
            <p className="text-slate-500 mt-1">
                Conecte-se com as melhores oportunidades. Vagas locais e remotas.
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
            
            {/* --- LEFT SIDEBAR (FILTERS) --- */}
            <aside className={`lg:w-1/4 flex-shrink-0 ${showMobileFilters ? 'fixed inset-0 z-50 bg-white p-6 overflow-y-auto' : 'hidden lg:block'}`}>
                {showMobileFilters && (
                    <div className="flex justify-between items-center mb-6 lg:hidden">
                        <h2 className="text-xl font-bold text-slate-900">Filtros</h2>
                        <button onClick={() => setShowMobileFilters(false)} className="p-2 bg-slate-100 rounded-full">
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                )}

                <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5 space-y-8 sticky top-24">
                    
                    {/* Search */}
                    <div>
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">Buscar</h3>
                        <div className="relative">
                            <Search className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
                            <input 
                                type="text" 
                                placeholder="Cargo ou empresa..." 
                                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Area Filter */}
                    <div>
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">Área de Atuação</h3>
                        <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                            {JOB_AREAS.map(area => (
                                <label key={area} className="flex items-center gap-2 cursor-pointer group">
                                    <input 
                                        type="checkbox" 
                                        className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                        checked={selectedAreas.includes(area)}
                                        onChange={() => toggleFilter(selectedAreas, setSelectedAreas, area)}
                                    />
                                    <span className="text-sm text-slate-600 group-hover:text-blue-600">{area}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Level Filter */}
                    <div>
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">Nível de Experiência</h3>
                        <div className="space-y-2">
                            {EXPERIENCE_LEVELS.map(level => (
                                <label key={level} className="flex items-center gap-2 cursor-pointer group">
                                    <input 
                                        type="checkbox" 
                                        className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                        checked={selectedLevels.includes(level)}
                                        onChange={() => toggleFilter(selectedLevels, setSelectedLevels, level)}
                                    />
                                    <span className="text-sm text-slate-600 group-hover:text-blue-600">{level}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Modality Filter */}
                    <div>
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">Modalidade</h3>
                        <div className="space-y-2">
                            {['Presencial', 'Híbrido', 'Remoto'].map(mod => (
                                <label key={mod} className="flex items-center gap-2 cursor-pointer group">
                                    <input 
                                        type="checkbox" 
                                        className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                        checked={selectedModality.includes(mod)}
                                        onChange={() => toggleFilter(selectedModality, setSelectedModality, mod)}
                                    />
                                    <span className="text-sm text-slate-600 group-hover:text-blue-600">{mod}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                     {/* Type Filter */}
                     <div>
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">Tipo de Contrato</h3>
                        <div className="space-y-2">
                            {JOB_TYPES.map(type => (
                                <label key={type} className="flex items-center gap-2 cursor-pointer group">
                                    <input 
                                        type="checkbox" 
                                        className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                        checked={selectedTypes.includes(type)}
                                        onChange={() => toggleFilter(selectedTypes, setSelectedTypes, type)}
                                    />
                                    <span className="text-sm text-slate-600 group-hover:text-blue-600">{type}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <button 
                        onClick={clearFilters}
                        className="w-full py-2 text-sm text-red-600 font-bold hover:bg-red-50 rounded-md transition-colors"
                    >
                        Limpar Filtros
                    </button>
                </div>
            </aside>

            {/* --- RIGHT CONTENT (JOB LIST) --- */}
            <main className="flex-grow">
                
                {/* Mobile Filter Toggle */}
                <button 
                    onClick={() => setShowMobileFilters(true)}
                    className="lg:hidden w-full bg-white border border-slate-300 p-3 rounded-lg flex items-center justify-center gap-2 font-bold text-slate-700 mb-6 shadow-sm"
                >
                    <Filter className="w-4 h-4" /> Filtrar Vagas
                </button>

                <div className="flex justify-between items-center mb-4">
                    <p className="text-slate-500 text-sm">
                        Mostrando <strong>{filteredJobs.length}</strong> vagas disponíveis
                    </p>
                    <div className="hidden md:flex gap-2">
                        {/* Example of toggle view icons (inactive for now) */}
                        <button className="p-2 bg-white border border-slate-200 rounded text-slate-400 hover:text-blue-600"><List className="w-4 h-4"/></button>
                        <button className="p-2 bg-slate-100 border border-slate-200 rounded text-slate-400"><LayoutGrid className="w-4 h-4"/></button>
                    </div>
                </div>

                <div className="space-y-4">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map(job => (
                            <div key={job.id} className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 transition-all hover:shadow-md hover:border-blue-300 group relative">
                                {job.isVerified && (
                                    <div className="absolute top-4 right-4 text-green-500" title="Empresa Verificada">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                )}
                                
                                <div className="flex flex-col md:flex-row gap-5 items-start">
                                    {/* Logo */}
                                    <div className="w-14 h-14 rounded-lg bg-white border border-slate-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
                                        {job.logo ? (
                                            <img src={job.logo} alt={job.companyName} className="w-full h-full object-contain p-1" />
                                        ) : (
                                            <span className="text-xl font-bold text-slate-300">{job.companyName.charAt(0)}</span>
                                        )}
                                    </div>

                                    <div className="flex-grow">
                                        {/* Header Info */}
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                                {job.title}
                                            </h3>
                                            {job.source && job.source !== 'NossaCidade' && (
                                                 <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                                                    {getSourceIcon(job.source)} via {job.source}
                                                 </span>
                                            )}
                                        </div>
                                        
                                        <p className="text-sm font-medium text-slate-700 mb-3">{job.companyName}</p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 text-xs text-slate-500 mb-4">
                                            <span className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                                                <MapPin className="w-3 h-3" /> {job.modality || 'Presencial'}
                                            </span>
                                            <span className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                                                <Clock className="w-3 h-3" /> {job.type}
                                            </span>
                                            {job.salary && (
                                                <span className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded border border-green-100 font-bold">
                                                    <DollarSign className="w-3 h-3" /> {job.salary}
                                                </span>
                                            )}
                                            {job.level && (
                                                 <span className="flex items-center gap-1 bg-purple-50 text-purple-700 px-2 py-1 rounded border border-purple-100 font-medium">
                                                    {job.level}
                                                 </span>
                                            )}
                                        </div>

                                        {/* Description Snippet */}
                                        <p className="text-sm text-slate-500 line-clamp-2 mb-4">
                                            {job.description}
                                        </p>
                                        
                                        {/* Footer Actions */}
                                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                            <span className="text-xs text-slate-400">Publicado {job.postedAt}</span>
                                            
                                            {job.externalLink ? (
                                                <a 
                                                    href={job.externalLink}
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                                                >
                                                    Candidatar-se no Site <ExternalLink className="w-4 h-4" />
                                                </a>
                                            ) : (
                                                <a 
                                                    href={`https://wa.me/${job.whatsappContact}?text=Olá, vi a vaga de ${job.title} no NossaCidade.`}
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-sm font-bold text-green-600 hover:text-green-700 flex items-center gap-1 bg-green-50 px-3 py-1.5 rounded hover:bg-green-100 transition-colors"
                                                >
                                                    <MessageCircle className="w-4 h-4" /> Candidatura Simplificada
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-12 text-center">
                             <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                             <h3 className="text-lg font-bold text-slate-900">Nenhuma vaga encontrada</h3>
                             <p className="text-slate-500 mb-6">Tente remover alguns filtros para ver mais resultados.</p>
                             <button onClick={clearFilters} className="text-blue-600 font-bold hover:underline">Limpar Filtros</button>
                        </div>
                    )}
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 bg-blue-900 rounded-xl p-8 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <Users className="w-10 h-10 mb-4 text-blue-300" />
                        <h2 className="text-2xl font-bold mb-2">Para Recrutadores</h2>
                        <p className="text-blue-100 mb-6 max-w-lg">
                            Divulgue suas vagas para milhares de candidatos locais. O processo é simples e rápido.
                        </p>
                        <a 
                            href="https://wa.me/5538999999999?text=Quero divulgar uma vaga."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg"
                        >
                            Divulgar Suas Vagas Aqui!
                        </a>
                    </div>
                </div>
            </main>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
