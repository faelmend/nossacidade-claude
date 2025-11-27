import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowRight, Star, Briefcase, PlusCircle, MapPin, Clock, Megaphone } from 'lucide-react';
import * as Icons from 'lucide-react';
import Hero from '../components/Hero';
import BusinessCard from '../components/BusinessCard';
import { BUSINESSES, CATEGORIES, JOBS, getCityName } from '../services/mockData';
import { PlanType } from '../types';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { citySlug } = useParams<{ citySlug: string }>();
  const cityName = getCityName(citySlug);
  
  // Ensure we only show paid plans on home page featured section
  const featuredBusinesses = BUSINESSES
    .filter(b => (b.plan === PlanType.ESSENTIAL || b.plan === PlanType.BASIC) && !b.isMediaPartner)
    .slice(0, 4);

  // Featured Jobs for Home Page
  const featuredJobs = JOBS.slice(0, 3);

  // Get 3 Media Partners for preview
  const mediaPartners = BUSINESSES.filter(b => b.isMediaPartner).slice(0, 3);

  const getIcon = (iconName: string) => {
    // @ts-ignore
    const Icon = Icons[iconName];
    return Icon ? <Icon className="w-8 h-8" /> : null;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Hero />

      {/* Categories Section - Summarized (Only 3) */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">O que você procura hoje?</h2>
              <p className="text-slate-500 mt-1">Explore os principais setores de {cityName}</p>
            </div>
          </div>

          {/* Grid Layout: 4 items (3 categories + 1 View All) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
            {CATEGORIES.slice(0, 3).map((category) => (
              <div 
                key={category.id}
                onClick={() => navigate(`/${citySlug}/explore?category=${category.slug}`)}
                className="cursor-pointer group bg-white border border-slate-200 rounded-xl p-4 hover:shadow-lg hover:border-primary-200 transition-all duration-300 flex flex-col items-center text-center h-full"
              >
                <div className={`p-3 rounded-xl ${category.bg} ${category.color} mb-3 transition-transform group-hover:scale-110 duration-300`}>
                    {getIcon(category.icon)}
                </div>
                
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-primary-700 transition-colors mb-2">{category.name}</h3>
                
                {/* Summarized Subcategories - Only 3 */}
                {category.subcategories && (
                    <div className="hidden md:block w-full">
                        <ul className="text-sm text-slate-500 space-y-1 mb-2">
                            {category.subcategories.slice(0, 3).map((sub, index) => (
                                <li key={index} className="truncate px-2">{sub}</li>
                            ))}
                        </ul>
                    </div>
                )}
              </div>
            ))}

            {/* View All Card */}
            <div 
                onClick={() => navigate(`/${citySlug}/categories`)}
                className="cursor-pointer group bg-slate-50 border border-slate-200 rounded-xl p-4 hover:shadow-lg hover:bg-primary-50 hover:border-primary-200 transition-all duration-300 flex flex-col items-center justify-center text-center h-full"
            >
                 <div className="p-3 rounded-xl bg-white text-slate-400 mb-3 group-hover:text-primary-600 group-hover:scale-110 transition-all">
                    <ArrowRight className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg text-slate-600 group-hover:text-primary-700 transition-colors">Ver Todas as Categorias</h3>
                <p className="text-xs text-slate-400 mt-1">Mais de {CATEGORIES.length} setores</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Businesses Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10 justify-center md:justify-start">
            <div className="bg-yellow-400 p-2 rounded-lg shadow-lg shadow-yellow-200">
               <Star className="w-6 h-6 text-white fill-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Destaques em {cityName}</h2>
              <p className="text-slate-500 text-lg">Empresas recomendadas pela comunidade.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredBusinesses.map((business) => (
              <div key={business.id} className="w-full h-full">
                  <BusinessCard business={business} />
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <Link to={`/${citySlug}/explore`} className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white border border-slate-300 rounded-full text-slate-700 font-bold hover:bg-slate-50 hover:border-slate-400 transition-all">
                 <PlusCircle className="w-5 h-5" /> Ver mais empresas
             </Link>
          </div>
        </div>
      </section>

      {/* NEW: Media Partners Section */}
      {mediaPartners.length > 0 && (
        <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900 relative overflow-hidden text-white">
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
                     <div>
                        <div className="inline-flex items-center gap-2 bg-purple-700/50 border border-purple-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                            <Megaphone className="w-4 h-4 text-yellow-400" /> Alcance Extra
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Parceiros de Mídia</h2>
                        <p className="text-purple-200 text-lg max-w-xl">
                            Amplie sua divulgação. Conheça os influenciadores, rádios e veículos de comunicação que são parceiros oficiais do NossaCidade.
                        </p>
                     </div>
                     {/* Button removed here as requested */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {mediaPartners.map(partner => (
                        <div key={partner.id} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-white rounded-full flex-shrink-0 overflow-hidden border-2 border-white/50">
                                    {partner.logo ? (
                                        <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
                                    ) : (
                                        <span className="w-full h-full flex items-center justify-center text-purple-900 font-bold">{partner.name[0]}</span>
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg">{partner.name}</h3>
                                    <span className="text-purple-200 text-sm">{partner.subcategory}</span>
                                </div>
                            </div>
                            <p className="mt-4 text-sm text-purple-100 line-clamp-2">
                                {partner.shortDescription}
                            </p>
                            <Link to={`/${citySlug}/business/${partner.id}`} className="mt-4 block text-center w-full bg-white/20 hover:bg-white/30 py-2 rounded-lg text-sm font-bold transition-colors">
                                Ver Perfil
                            </Link>
                        </div>
                    ))}
                </div>

                {/* New Button Position */}
                <div className="mt-10 text-center">
                    <Link 
                        to={`/${citySlug}/media-partners`} 
                        className="inline-flex items-center gap-2 bg-white text-purple-900 font-bold px-8 py-3 rounded-full hover:bg-purple-50 hover:scale-105 transition-all shadow-lg"
                    >
                        Conhecer mais empresas de publicidade <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
             </div>
        </section>
      )}

      {/* Jobs Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                   <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Oportunidades de Emprego</h2>
                  <p className="text-slate-500">Vagas recentes anunciadas na cidade.</p>
                </div>
            </div>
            <Link to={`/${citySlug}/jobs`} className="text-primary-600 font-bold hover:text-primary-700 flex items-center gap-2">
               Ver todas as vagas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {featuredJobs.map((job) => (
                 <Link 
                    key={job.id} 
                    to={`/${citySlug}/jobs`}
                    className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-blue-300 transition-all"
                 >
                     <div className="flex justify-between items-start mb-4">
                         <div>
                             <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-700 transition-colors">{job.title}</h3>
                             <p className="text-slate-500 text-sm font-medium">{job.companyName}</p>
                         </div>
                         <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Nova</span>
                     </div>
                     
                     <div className="space-y-2 text-sm text-slate-500 mb-4">
                        <div className="flex items-center gap-2">
                           <MapPin className="w-4 h-4 text-slate-400" /> {cityName}
                        </div>
                        <div className="flex items-center gap-2">
                           <Clock className="w-4 h-4 text-slate-400" /> {job.type}
                        </div>
                     </div>
                     
                     <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                        <span className="text-slate-400 text-xs">Publicado {job.postedAt}</span>
                        <span className="text-blue-600 text-sm font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                            Detalhes <ArrowRight className="w-3 h-3" />
                        </span>
                     </div>
                 </Link>
             ))}
          </div>
        </div>
      </section>

      {/* Become a Licensee Banner - UPDATED STYLE */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        {/* Decorative blobs to match media partners scheme */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-800 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
              <div className="relative z-10 max-w-2xl text-center md:text-left">
                 <div className="inline-flex items-center gap-2 bg-orange-500/50 text-orange-100 border border-orange-400/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                    <Briefcase className="w-4 h-4" /> Oportunidade de Negócio
                 </div>
                 <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                    Leve o NossaCidade para sua região
                 </h2>
                 <p className="text-orange-100 text-lg">
                    Torne-se um licenciado exclusivo e fature alto digitalizando o comércio da sua cidade. Tenha acesso ao nosso portal administrativo completo para gestão de empresas e criação de novas praças.
                 </p>
              </div>
              <div className="relative z-10 flex-shrink-0">
                 <Link 
                    to="/admin/login" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-700 hover:bg-orange-50 font-bold text-lg rounded-full shadow-lg transition-all transform hover:scale-105"
                 >
                    Seja um Licenciado
                 </Link>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        {/* Colorful blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Você tem um negócio em {cityName}?
          </h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Não perca vendas. Seja encontrado por clientes que estão procurando seus serviços agora mesmo. 
            <span className="block mt-2 font-bold text-yellow-400">Junte-se às principais empresas da sua região!</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to={`/${citySlug}/pricing`} 
              className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-10 rounded-full shadow-xl shadow-blue-900/50 transition-all hover:scale-105 hover:shadow-2xl"
            >
              Cadastrar Minha Empresa
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;