import React from 'react';
import { useSearchParams, useNavigate, useParams } from 'react-router-dom';
import { CheckCircle, Lock, ArrowLeft, ExternalLink, ShieldCheck } from 'lucide-react';
import { PLANS, getCityName } from '../services/mockData';
import { PlanType } from '../types';

const Checkout: React.FC = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const cityName = getCityName(citySlug);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const planId = searchParams.get('plan') as PlanType;
  const selectedPlan = PLANS.find(p => p.id === planId) || PLANS[1];

  const setupFee = selectedPlan.id === PlanType.BASIC ? 100 : selectedPlan.id === PlanType.ESSENTIAL ? 400 : 0;
  const totalNow = setupFee; 

  // Mock Payment Link
  const paymentLink = `https://checkout.nossacidade.com/plan/${selectedPlan.id}?city=${citySlug}`;

  return (
    <div className="min-h-screen bg-slate-50 py-12 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate(-1)} className="flex items-center text-slate-500 hover:text-slate-800 mb-6">
            <ArrowLeft className="w-4 h-4 mr-1" /> Voltar
        </button>

        <div className="text-center mb-10">
            <h1 className="text-3xl font-extrabold text-slate-900">Resumo do Pedido</h1>
            <p className="text-slate-600 mt-2">Confira os detalhes antes de prosseguir para o pagamento seguro.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Order Details */}
                <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-2">Item Selecionado</h3>
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <p className="font-bold text-xl text-primary-700">{selectedPlan.name}</p>
                            <p className="text-sm text-slate-500">Plano Mensal para {cityName}</p>
                        </div>
                        <p className="font-bold text-xl text-slate-900">R$ {selectedPlan.price.toFixed(2)}<span className="text-sm text-slate-400">/mês</span></p>
                    </div>
                    
                    <ul className="space-y-2 mb-6 bg-slate-50 p-4 rounded-lg">
                        {selectedPlan.features.slice(0, 4).map((feat, i) => (
                            <li key={i} className="flex items-center text-sm text-slate-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> {feat}
                            </li>
                        ))}
                        <li className="text-xs text-slate-400 mt-2 pt-2 border-t border-slate-200 italic">
                            + Todos os benefícios listados na página anterior.
                        </li>
                    </ul>

                    {selectedPlan.price > 0 && (
                        <div className="flex justify-between items-center py-4 border-t border-slate-100">
                             <span className="text-slate-600 font-medium">Taxa de Adesão (Única)</span>
                             <span className="font-bold text-slate-900">R$ {setupFee.toFixed(2)}</span>
                        </div>
                    )}
                    
                    <div className="mt-4 pt-4 border-t-2 border-slate-100 flex justify-between items-center">
                        <span className="text-lg font-bold text-slate-900">Total a Pagar Hoje:</span>
                        <span className="text-2xl font-extrabold text-green-600">
                            {selectedPlan.price === 0 ? 'Grátis' : `R$ ${totalNow.toFixed(2)}`}
                        </span>
                    </div>
                </div>

                {/* Payment Action */}
                <div className="flex flex-col justify-center bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Lock className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-slate-900">Pagamento Seguro</h3>
                        <p className="text-sm text-slate-500 mt-1">
                            Seu pagamento será processado em ambiente <strong>criptografado</strong>, garantindo total segurança dos seus dados.
                        </p>
                    </div>

                    {selectedPlan.price === 0 ? (
                         <button 
                            onClick={() => navigate('/panel/business')}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            Confirmar Cadastro Gratuito <CheckCircle className="w-5 h-5" />
                        </button>
                    ) : (
                        <a 
                            href={paymentLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg group"
                        >
                            Ir para Pagamento Seguro <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    )}

                    <div className="mt-6 flex items-center justify-center gap-4 text-slate-400 grayscale opacity-70">
                        {/* Mock Payment Icons */}
                        <div className="flex gap-2 text-xs items-center">
                            <ShieldCheck className="w-4 h-4" /> 256-bit SSL Encrypted
                        </div>
                        <span className="h-4 w-px bg-slate-300"></span>
                        <span className="text-xs font-bold">Secure Pay</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;