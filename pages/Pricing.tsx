
import React from 'react';
import { Check, Store, TrendingUp, Rocket, Crown, MessageCircle } from 'lucide-react';
import { getCityName, PLANS } from '../services/mockData';
import { PlanType } from '../types';
import { Link, useParams } from 'react-router-dom';

const Pricing: React.FC = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const cityName = getCityName(citySlug);

  const getPlanIcon = (iconName: string) => {
    switch (iconName) {
      case 'Store': return <Store className="w-8 h-8" />;
      case 'TrendingUp': return <TrendingUp className="w-8 h-8" />;
      case 'Rocket': return <Rocket className="w-8 h-8" />;
      case 'Crown': return <Crown className="w-8 h-8" />;
      default: return <Store className="w-8 h-8" />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            Destaque seu negócio em {cityName}
          </h1>
          <p className="text-xl text-slate-600">
            Escolha o plano ideal para atrair mais clientes e modernizar sua presença digital.
          </p>
        </div>

        {/* Grid modified for 4 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-6 max-w-full mx-auto">
          {PLANS.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative bg-white rounded-2xl flex flex-col w-full transition-all duration-300 h-full ${
                plan.isRecommended 
                  ? 'border-2 border-primary-500 shadow-2xl transform md:-translate-y-4 z-10' 
                  : plan.id === PlanType.EXCLUSIVE 
                    ? 'border-2 border-yellow-400 shadow-xl hover:shadow-2xl' 
                    : 'border border-slate-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.isRecommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-max">
                  <span className="bg-primary-600 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide shadow-md">
                    Mais Vendido
                  </span>
                </div>
              )}
              
              {plan.id === PlanType.EXCLUSIVE && (
                 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-max">
                  <span className="bg-yellow-400 text-yellow-900 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide shadow-md">
                    VIP
                  </span>
                </div>
              )}

              {/* Top Section - Fixed height for alignment */}
              <div className="p-8 border-b border-slate-100 text-center flex flex-col justify-center h-auto lg:h-[320px]">
                <div className={`inline-flex p-4 rounded-2xl mb-6 shadow-sm mx-auto ${
                    plan.id === PlanType.FREE ? 'bg-slate-100 text-slate-600' :
                    plan.id === PlanType.BASIC ? 'bg-blue-100 text-blue-600' :
                    plan.id === PlanType.ESSENTIAL ? 'bg-primary-100 text-primary-600' :
                    'bg-yellow-100 text-yellow-600'
                }`}>
                    {getPlanIcon(plan.iconName)}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                
                {plan.id !== PlanType.EXCLUSIVE ? (
                    <div className="flex items-baseline justify-center gap-1 mb-2">
                      <span className="text-base text-slate-500 font-medium">R$</span>
                      <span className="text-5xl font-extrabold text-slate-900 tracking-tight">{plan.price.toFixed(0)}</span>
                      <span className="text-slate-500 font-medium">/{plan.period}</span>
                    </div>
                ) : (
                    <div className="h-16 flex items-center justify-center">
                        <span className="text-2xl font-bold text-slate-900">Sob Consulta</span>
                    </div>
                )}

                {plan.price > 0 && plan.id !== PlanType.EXCLUSIVE && (
                    <div className="mt-2">
                        <p className="text-[11px] text-slate-400 font-medium leading-tight">
                            Referente 2º mês adiante.<br />Consulte taxa de adesão.
                        </p>
                    </div>
                )}
                
                {plan.price === 0 && <p className="text-sm text-slate-500 mt-4 font-medium">Presença digital básica.</p>}
              </div>

              <div className="p-8 flex-grow bg-white rounded-b-2xl flex flex-col">
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-left">
                      <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.id === PlanType.EXCLUSIVE ? 'text-yellow-500' : 'text-green-500'}`} />
                      <span className={`text-sm leading-relaxed ${feature.includes('Meta Ads') ? 'font-bold text-primary-700' : 'text-slate-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                    {/* Setup Fee Box - Moved Here */}
                    {plan.price > 0 && plan.id !== PlanType.EXCLUSIVE && (
                        <div className="mb-6">
                             <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Taxa de Adesão Única</p>
                                <p className="text-lg font-black text-slate-700">
                                    R$ {plan.id === PlanType.BASIC ? '100' : '400'}
                                </p>
                            </div>
                        </div>
                    )}

                    {plan.id === PlanType.EXCLUSIVE ? (
                        <a 
                        href="https://wa.me/5538999999999?text=Olá, gostaria de saber mais sobre o Plano Exclusivo para minha empresa."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 px-6 rounded-xl font-bold transition-all text-center flex items-center justify-center gap-2 bg-yellow-400 text-yellow-900 hover:bg-yellow-500 hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                        <MessageCircle className="w-5 h-5" /> Falar com Diretor
                        </a>
                    ) : (
                        <Link 
                        to={`/${citySlug}/checkout?plan=${plan.id}`}
                        className={`w-full py-4 px-6 rounded-xl font-bold transition-all text-center block transform hover:-translate-y-0.5 ${
                            plan.id === PlanType.ESSENTIAL 
                            ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-primary-600/30' 
                            : plan.id === PlanType.BASIC 
                                ? 'bg-slate-800 text-white hover:bg-slate-900 shadow-md' 
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                        }`}
                        >
                        {plan.price === 0 ? 'Cadastrar Grátis' : 'Assinar Agora'}
                        </Link>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Precisa de ajuda para escolher?</h3>
                    <p className="text-slate-600 text-lg">Nossa equipe local pode visitar seu estabelecimento e explicar os detalhes pessoalmente.</p>
                </div>
                <a 
                    href="https://wa.me/5538999999999" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="whitespace-nowrap inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-primary-700 bg-primary-50 hover:bg-primary-100 transition-colors"
                >
                    Falar com Consultor
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
