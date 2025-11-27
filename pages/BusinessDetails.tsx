import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Globe, Instagram, CheckCircle, Share2, Clock, ArrowLeft, MessageCircle, Image as ImageIcon, Megaphone } from 'lucide-react';
import { BUSINESSES, getCityName } from '../services/mockData';
import { PlanType } from '../types';

const BusinessDetails: React.FC = () => {
  const { id, citySlug } = useParams<{ id: string; citySlug: string }>();
  const business = BUSINESSES.find(b => b.id === id);
  const cityName = getCityName(citySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!business) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Empresa não encontrada</h2>
        <Link to={`/${citySlug}/explore`} className="text-primary-600 hover:underline">Voltar para a lista</Link>
      </div>
    );
  }

  const isPaid = business.plan !== PlanType.FREE;
  
  // Logic for Media Partners
  const isMediaPartner = business.isMediaPartner;
  
  // Determine WhatsApp Link
  let whatsappLink = '#';
  let whatsappButtonText = 'Chamar no WhatsApp';
  
  if (isMediaPartner) {
      // Media Partners route to NossaCidade Support
      whatsappLink = `https://wa.me/5538999999999?text=Olá, vi o perfil de ${business.name} no NossaCidade e gostaria de contratar publicidade com esse parceiro.`;
      whatsappButtonText = 'Contratar via NossaCidade';
  } else if (business.whatsapp) {
      // Standard businesses route to their own number
      whatsappLink = `https://wa.me/${business.whatsapp.replace(/\D/g, '')}?text=Olá, vi sua empresa no NossaCidade.com`;
  }

  const mapQuery = encodeURIComponent(`${business.address}, ${cityName}, MG`);

  // FREE PLAN VIEW - Strictly Name, Address (Text), Category, Logo
  if (!isPaid) {
      return (
        <div className="bg-slate-50 min-h-screen pb-12">
            <div className="bg-white border-b border-slate-200">
                 <div className="max-w-3xl mx-auto px-4 py-4">
                    <Link to={`/${citySlug}/explore`} className="inline-flex items-center text-slate-500 hover:text-slate-800 mb-4">
                        <ArrowLeft className="w-4 h-4 mr-1" /> Voltar
                    </Link>
                 </div>
            </div>
            
            <div className="max-w-3xl mx-auto px-4 mt-8">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-visible p-8 text-center relative mt-16">
                    <div className="flex flex-col items-center justify-center">
                         {/* Logo or Placeholder - Overlapping */}
                        <div className="w-40 h-40 rounded-xl bg-white flex items-center justify-center mb-6 border-4 border-white shadow-xl p-2 z-10 absolute -top-20">
                            {business.logo ? (
                                <img src={business.logo} alt="Logo" className="w-full h-full object-contain" />
                            ) : (
                                <span className="text-4xl font-bold text-slate-300">{business.name.charAt(0)}</span>
                            )}
                        </div>
                        
                        <div className="mt-20">
                            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                                {business.subcategory || business.categoryName}
                            </span>

                            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">{business.name}</h1>

                            {/* Address - Text Only */}
                            <div className="inline-block text-slate-600 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
                                <span>{business.address}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 text-center">
                    <p className="text-sm text-slate-400 mb-2">Informações básicas de listagem gratuita.</p>
                    <Link to={`/${citySlug}/pricing`} className="text-sm text-primary-600 font-bold hover:underline">
                        É o dono deste negócio? Atualize seu plano.
                    </Link>
                </div>
            </div>
        </div>
      );
  }

  // PAID PLAN & MEDIA PARTNER VIEW
  return (
    <div className="bg-slate-50 min-h-screen pb-24 md:pb-12">
      {/* Header / Cover Image */}
      <div className="relative h-64 md:h-80 bg-slate-800 group">
        {business.images && business.images.length > 0 ? (
          <img 
            src={business.images[0]} 
            alt={business.name}
            className="w-full h-full object-cover opacity-80"
          />
        ) : (
           <div className="w-full h-full flex items-center justify-center">
             <ImageIcon className="w-20 h-20 text-slate-600" />
           </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

        <Link to={`/${citySlug}/explore`} className="absolute top-6 left-6 bg-white/20 hover:bg-white/30 backdrop-blur-md p-2 rounded-full text-white transition-colors z-50">
          <ArrowLeft className="w-6 h-6" />
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="bg-white rounded-xl shadow-xl overflow-visible relative">
          <div className="p-6 md:p-8 pt-24 md:pt-8"> {/* Added padding top for mobile to clear logo */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
                
                {/* Logo Box - Correctly Positioned */}
                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 md:static md:transform-none md:-mt-24 md:ml-0 w-40 h-40 bg-white rounded-xl shadow-2xl border-4 border-white flex-shrink-0 z-30 flex items-center justify-center">
                    {business.logo ? (
                        <img src={business.logo} alt="Logo" className="w-full h-full object-contain p-2" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400 font-bold text-4xl">
                            {business.name.charAt(0)}
                        </div>
                    )}
                </div>

                <div className="flex-grow text-center md:text-left mt-4 md:mt-2">
                    {/* Badge section */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
                        <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                            {business.subcategory || business.categoryName}
                        </span>
                        {isMediaPartner && (
                             <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                                <Megaphone className="w-3 h-3" /> Parceiro Oficial
                             </span>
                        )}
                        {business.isVerified && (
                            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" /> Verificado
                            </span>
                        )}
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">{business.name}</h1>
                </div>
            </div>

            <div className="mt-8">
                 <h3 className="text-lg font-bold text-slate-900 mb-3">Sobre</h3>
                 <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {business.description}
                 </p>
            </div>

            {/* Contact & Map Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-t border-slate-100 pt-8">
              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-6">
                    {isMediaPartner ? 'Como Anunciar' : 'Informações de Contato'}
                </h3>
                
                <div className="space-y-4 mb-8">
                  {/* If Media Partner, HIDE specific contact info, show benefits/general info */}
                  {isMediaPartner ? (
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                          <p className="text-slate-600 mb-2">
                              Para garantir a melhor negociação e segurança, toda contratação de publicidade com este parceiro é intermediada pelo NossaCidade.
                          </p>
                          <p className="text-sm text-slate-400 italic">
                              *Clique no botão abaixo para falar com nosso consultor.
                          </p>
                      </div>
                  ) : (
                      <>
                        <div className="flex items-start">
                            <MapPin className="w-5 h-5 text-slate-400 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-slate-600">{business.address}</span>
                        </div>
                        <div className="flex items-center">
                            <Phone className="w-5 h-5 text-slate-400 mr-3" />
                            <span className="text-slate-600">{business.phone}</span>
                        </div>
                        {business.instagram && (
                            <div className="flex items-center">
                            <Instagram className="w-5 h-5 text-slate-400 mr-3" />
                            <a href="#" className="text-primary-600 hover:underline">{business.instagram}</a>
                            </div>
                        )}
                      </>
                  )}
                </div>

                {/* Main CTA Button */}
                <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] shadow-md mb-6"
                >
                    <MessageCircle className="w-6 h-6" />
                    <span className="text-lg">{whatsappButtonText}</span>
                </a>
              </div>

              <div className="space-y-8">
                 {/* Hide Map for Media Partners if they don't have a physical location relevant to customers (often online/studio) */}
                 {!isMediaPartner && (
                     <>
                        <div>
                            <h3 className="font-bold text-xl text-slate-900 mb-4">Localização</h3>
                            <div className="w-full h-64 bg-slate-200 rounded-xl overflow-hidden shadow-sm border border-slate-200">
                                <iframe 
                                    width="100%" 
                                    height="100%" 
                                    frameBorder="0" 
                                    scrolling="no" 
                                    marginHeight={0} 
                                    marginWidth={0} 
                                    src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                                    title="Localização da Empresa"
                                ></iframe>
                            </div>
                            <div className="mt-3 flex items-center justify-between text-sm">
                                <span className="text-slate-500 flex items-center">
                                    <MapPin className="w-4 h-4 mr-1" /> {business.address}
                                </span>
                                <a 
                                    href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-primary-600 font-semibold hover:underline"
                                >
                                    Abrir no Maps
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-xl text-slate-900 mb-4">Horário de Funcionamento</h3>
                            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                                <div className="space-y-3 text-slate-600">
                                    <div className="flex justify-between border-b border-slate-200/50 pb-2">
                                    <span>Segunda a Sexta</span>
                                    <span className="font-medium">08:00 - 18:00</span>
                                    </div>
                                    <div className="flex justify-between border-b border-slate-200/50 pb-2">
                                    <span>Sábado</span>
                                    <span className="font-medium">08:00 - 12:00</span>
                                    </div>
                                    <div className="flex justify-between pt-1 text-slate-400">
                                    <span>Domingo</span>
                                    <span>Fechado</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </>
                 )}
                 
                 {/* Media Kit / Portfolio placeholder for Partners */}
                 {isMediaPartner && (
                      <div>
                          <h3 className="font-bold text-xl text-slate-900 mb-4">Portfólio & Mídia Kit</h3>
                          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 text-center">
                              <Megaphone className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                              <p className="text-slate-600 font-medium">Veja os resultados gerados.</p>
                              <p className="text-sm text-slate-500 mt-2">
                                  Solicite o Mídia Kit completo ao nosso consultor para ver números de alcance e engajamento atualizados.
                              </p>
                          </div>
                      </div>
                 )}
              </div>
            </div>
          </div>
          
          {/* Gallery */}
          {business.images.length > 1 && (
             <div className="p-6 md:p-8 bg-slate-50 border-t border-slate-100">
               <h3 className="font-bold text-xl text-slate-900 mb-6">
                   {isMediaPartner ? 'Trabalhos Realizados' : 'Galeria de Fotos'}
               </h3>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {business.images.map((img, idx) => (
                   <img 
                    key={idx} 
                    src={img} 
                    alt={`Gallery ${idx}`} 
                    className="rounded-lg shadow-sm h-32 w-full object-cover hover:opacity-90 transition-opacity cursor-pointer"
                   />
                 ))}
               </div>
             </div>
          )}
        </div>
      </div>

      {/* Sticky Mobile Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 md:hidden z-50 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        {/* Phone Button - Hide for Media Partners */}
        {!isMediaPartner && (
             <a 
             href={`tel:${business.phone.replace(/\D/g, '')}`}
             className="flex-1 bg-slate-100 text-slate-800 font-bold py-3 rounded-xl flex items-center justify-center gap-2"
             >
             <Phone className="w-5 h-5" /> Ligar
             </a>
        )}
        
        <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-[2] bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-colors"
        >
            <MessageCircle className="w-6 h-6" /> {isMediaPartner ? 'Contratar' : 'WhatsApp'}
        </a>
      </div>

      {/* Desktop Floating Action Button (Right side) */}
      <div className="hidden md:flex fixed bottom-8 right-8 flex-col gap-4 z-40">
           <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-xl flex items-center gap-2 transition-transform hover:scale-110 group"
           >
             <MessageCircle className="w-8 h-8" />
             <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-bold">
               {whatsappButtonText}
             </span>
           </a>
      </div>
    </div>
  );
};

export default BusinessDetails;