import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Megaphone, Radio, Cast, Newspaper, ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';
import { BUSINESSES, getCityName } from '../services/mockData';
import BusinessCard from '../components/BusinessCard';

const MediaPartners: React.FC = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const cityName = getCityName(citySlug);

  // Filter only Media Partners
  const partners = BUSINESSES.filter(b => b.isMediaPartner);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-20 relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         {/* Blobs */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                <Megaphone className="w-4 h-4 text-yellow-400" /> Parceiros Oficiais
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                Potencialize sua Marca em {cityName}
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed mb-10">
                Não dependa de um único canal. Anuncie com nossos <span className="font-bold">Parceiros de Mídia</span> e alcance seu cliente onde ele estiver: no rádio, nas redes sociais, na rua ou lendo notícias.
            </p>
            
            <div className="flex flex-col items-center gap-4">
                <a 
                    href="https://wa.me/5538999999999?text=Olá, gostaria de conversar com um consultor sobre anunciar com parceiros de mídia e expandir minha publicidade."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-8 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2 text-lg"
                >
                    <MessageCircle className="w-6 h-6" />
                    Conversar com Consultor e Anunciar em Mais Locais
                </a>
                <p className="text-purple-200 text-sm font-medium max-w-lg bg-white/10 px-4 py-2 rounded-lg border border-white/10">
                    💡 Ganhe consultoria de marketing completa se já for cliente NossaCidade e quiser expandir suas publicidades.
                </p>
            </div>
         </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white border-b border-slate-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900">Por que investir em Mídia Cruzada?</h2>
                <p className="text-slate-500 mt-2">A união do digital (NossaCidade) com a mídia tradicional gera resultados explosivos.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                        <Radio className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Credibilidade & Alcance</h3>
                    <p className="text-slate-600">
                        Rádios e portais de notícias trazem autoridade para sua marca. Quando eles falam de você, a cidade escuta e confia.
                    </p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center mb-4">
                        <Cast className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Influência Digital</h3>
                    <p className="text-slate-600">
                        Influencers locais humanizam sua marca. Eles mostram seu produto na prática para milhares de seguidores engajados da região.
                    </p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
                        <Newspaper className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Onipresença</h3>
                    <p className="text-slate-600">
                        Esteja em todo lugar. Do carro de som no bairro ao banner no portal de notícias. A repetição constrói a lembrança de marca.
                    </p>
                </div>
            </div>
         </div>
      </div>

      {/* Partners Showcase */}
      <div id="partners" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex items-center justify-between mb-10">
            <div>
                <h2 className="text-3xl font-bold text-slate-900">Nossos Parceiros de Mídia</h2>
                <p className="text-slate-500">Empresas certificadas para impulsionar seu negócio.</p>
            </div>
            <div className="hidden md:block">
                <span className="text-sm text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                    {partners.length} Parceiros Ativos
                </span>
            </div>
         </div>

         {partners.length > 0 ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {partners.map(partner => (
                     <div key={partner.id} className="relative">
                         {/* Special Border for Media Partners */}
                         <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-30"></div>
                         <div className="relative h-full">
                             <BusinessCard business={partner} />
                         </div>
                     </div>
                 ))}
             </div>
         ) : (
             <div className="text-center py-20 bg-white rounded-xl border border-slate-200 border-dashed">
                 <Megaphone className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                 <h3 className="text-xl font-bold text-slate-900">Em breve</h3>
                 <p className="text-slate-500">Estamos cadastrando os melhores parceiros de mídia da cidade.</p>
             </div>
         )}

         <div className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden text-center md:text-left">
            <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-4">Você tem um veículo de comunicação?</h2>
                    <p className="text-slate-300 text-lg max-w-xl">
                        Faça parte da nossa rede de permuta e parcerias. Aumente sua visibilidade digital e receba novos anunciantes através do NossaCidade.
                    </p>
                    <ul className="mt-6 space-y-2 text-sm text-slate-400">
                        <li className="flex items-center gap-2 justify-center md:justify-start"><CheckCircle className="w-4 h-4 text-green-500"/> Vitrine Exclusiva no Portal</li>
                        <li className="flex items-center gap-2 justify-center md:justify-start"><CheckCircle className="w-4 h-4 text-green-500"/> Indicação Cruzada de Clientes</li>
                    </ul>
                </div>
                <a 
                    href="https://wa.me/5538999999999?text=Olá, tenho um veículo de comunicação e gostaria de ser um Parceiro de Mídia."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-8 py-4 rounded-xl shadow-lg transform transition-all hover:scale-105 whitespace-nowrap flex items-center gap-2"
                >
                    <MessageCircle className="w-5 h-5" />
                    Seja um Parceiro de Mídia
                </a>
            </div>
         </div>
      </div>
    </div>
  );
};

export default MediaPartners;