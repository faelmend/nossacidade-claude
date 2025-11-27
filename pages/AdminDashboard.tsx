import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
    LayoutDashboard, 
    Store, 
    Settings, 
    LogOut, 
    Plus, 
    Search,
    CheckCircle,
    MoreVertical,
    Users,
    CreditCard,
    Phone,
    TrendingUp,
    ArrowLeft
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [backLink, setBackLink] = useState('/');

  useEffect(() => {
     const lastCity = localStorage.getItem('nossaCidade_lastCity');
     if (lastCity) {
         setBackLink(`/${lastCity}`);
     }
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 flex font-sans">
      {/* Sidebar - Licensee Theme */}
      <aside className="w-64 bg-blue-900 text-white flex-shrink-0 hidden md:flex flex-col">
        <div className="p-6 border-b border-blue-800">
           <div className="flex items-center gap-2">
                <svg className="h-8 w-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 92C50 92 88 72 88 48C88 27.0132 70.9868 10 50 10C29.0132 10 12 27.0132 12 48C12 72 50 92 50 92Z" stroke="white" strokeWidth="6" fill="#1e3a8a" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M30 70V50L42 42V70H30Z" fill="#bfdbfe"/>
                    <path d="M42 70V35L58 28V70H42Z" fill="white"/>
                    <path d="M58 70V45L70 52V70H58Z" fill="#60a5fa"/>
                </svg>
                <span className="font-bold text-xl tracking-tight">Admin</span>
           </div>
           <p className="text-xs text-blue-300 mt-2 uppercase tracking-wider">Licenciado: João Pinheiro</p>
        </div>

        <nav className="flex-grow p-4 space-y-2">
           <button 
             onClick={() => setActiveTab('overview')}
             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'overview' ? 'bg-blue-800 text-white' : 'text-blue-300 hover:bg-blue-800/50 hover:text-white'}`}
           >
             <LayoutDashboard className="w-5 h-5" />
             <span>Visão Geral</span>
           </button>
           <button 
             onClick={() => setActiveTab('businesses')}
             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'businesses' ? 'bg-blue-800 text-white' : 'text-blue-300 hover:bg-blue-800/50 hover:text-white'}`}
           >
             <Store className="w-5 h-5" />
             <span>Empresas</span>
           </button>
           <button 
             onClick={() => setActiveTab('crm')}
             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'crm' ? 'bg-blue-800 text-white' : 'text-blue-300 hover:bg-blue-800/50 hover:text-white'}`}
           >
             <Users className="w-5 h-5" />
             <span>CRM / Leads</span>
           </button>
           <button 
             onClick={() => setActiveTab('financial')}
             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'financial' ? 'bg-blue-800 text-white' : 'text-blue-300 hover:bg-blue-800/50 hover:text-white'}`}
           >
             <CreditCard className="w-5 h-5" />
             <span>Financeiro</span>
           </button>
           <button 
             onClick={() => setActiveTab('city_settings')}
             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'city_settings' ? 'bg-blue-800 text-white' : 'text-blue-300 hover:bg-blue-800/50 hover:text-white'}`}
           >
             <Settings className="w-5 h-5" />
             <span>Configurar Cidade</span>
           </button>
        </nav>

        <div className="p-4 border-t border-blue-800 space-y-2">
           <Link to={backLink} className="flex items-center gap-2 text-blue-300 hover:text-white text-sm transition-colors px-4 py-2">
              <ArrowLeft className="w-4 h-4" /> Voltar para Cidade
           </Link>
           <Link to="/admin/login" className="flex items-center gap-2 text-red-300 hover:text-red-100 text-sm transition-colors px-4 py-2">
              <LogOut className="w-4 h-4" /> Sair
           </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 overflow-y-auto h-screen">
        <header className="flex justify-between items-center mb-8">
           <div>
              <h1 className="text-2xl font-bold text-slate-800">
                {activeTab === 'overview' && 'Visão Geral da Cidade'}
                {activeTab === 'businesses' && 'Gestão de Empresas Locais'}
                {activeTab === 'crm' && 'Gestão de Leads e Vendas'}
                {activeTab === 'financial' && 'Financeiro Local'}
                {activeTab === 'city_settings' && 'Configurações do Portal'}
              </h1>
              <p className="text-slate-500">Bem-vindo de volta, Parceiro.</p>
           </div>
           <div className="flex items-center gap-3">
              <div className="hidden md:flex flex-col items-end mr-2">
                  <span className="text-sm font-bold text-slate-700">Licenciado JP</span>
                  <span className="text-xs text-slate-500">Plano Pro</span>
              </div>
              <div className="h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold border border-orange-200">
                JP
              </div>
           </div>
        </header>

        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-slate-500 font-medium">Faturamento Mensal</h3>
                        <div className="p-2 bg-green-100 rounded-lg text-green-600"><span className="text-xl font-bold">R$</span></div>
                    </div>
                    <p className="text-3xl font-bold text-slate-800">R$ 12.450,00</p>
                    <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" /> <span className="font-bold">+15%</span> vs mês anterior
                    </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-slate-500 font-medium">Empresas Ativas</h3>
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Store className="w-5 h-5" /></div>
                    </div>
                    <p className="text-3xl font-bold text-slate-800">156</p>
                    <p className="text-sm text-blue-600 mt-2">
                        12 novas este mês
                    </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-slate-500 font-medium">Leads Pendentes</h3>
                        <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><Users className="w-5 h-5" /></div>
                    </div>
                    <p className="text-3xl font-bold text-slate-800">8</p>
                    <p className="text-sm text-orange-600 mt-2 font-bold">
                        Ação necessária
                    </p>
                </div>
            </div>
        )}

        {/* CRM TAB */}
        {activeTab === 'crm' && (
             <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                 <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                     <h3 className="font-bold text-slate-700">Funil de Vendas</h3>
                     <button className="text-blue-600 text-sm font-bold hover:underline">Ver todos</button>
                 </div>
                 <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                     {/* Column 1: New Leads */}
                     <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                         <div className="flex justify-between items-center mb-4">
                             <h4 className="font-bold text-slate-700">Novos Contatos</h4>
                             <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full">3</span>
                         </div>
                         <div className="space-y-3">
                             <div className="bg-white p-3 rounded shadow-sm border border-slate-100 cursor-pointer hover:shadow-md transition-shadow">
                                 <div className="flex justify-between items-start">
                                    <p className="font-bold text-sm text-slate-800">Padaria Doce Sabor</p>
                                    <span className="text-[10px] text-slate-400">2h atrás</span>
                                 </div>
                                 <p className="text-xs text-slate-500 mt-1">Interesse no Plano Essencial</p>
                                 <div className="mt-2 flex gap-2">
                                     <button className="p-1 bg-green-100 text-green-600 rounded hover:bg-green-200"><Phone className="w-3 h-3"/></button>
                                     <button className="p-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200">Detalhes</button>
                                 </div>
                             </div>
                             <div className="bg-white p-3 rounded shadow-sm border border-slate-100 cursor-pointer hover:shadow-md transition-shadow">
                                 <div className="flex justify-between items-start">
                                    <p className="font-bold text-sm text-slate-800">Mecânica Veloz</p>
                                    <span className="text-[10px] text-slate-400">Ontem</span>
                                 </div>
                                 <p className="text-xs text-slate-500 mt-1">Dúvida sobre preços</p>
                             </div>
                         </div>
                     </div>

                     {/* Column 2: In Negotiation */}
                     <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                         <div className="flex justify-between items-center mb-4">
                             <h4 className="font-bold text-slate-700">Em Negociação</h4>
                             <span className="bg-orange-100 text-orange-800 text-xs font-bold px-2 py-1 rounded-full">2</span>
                         </div>
                         <div className="space-y-3">
                             <div className="bg-white p-3 rounded shadow-sm border border-slate-100 border-l-4 border-l-orange-400">
                                 <p className="font-bold text-sm text-slate-800">Dr. Silva Advogados</p>
                                 <p className="text-xs text-slate-500 mt-1">Aguardando aprovação do sócio</p>
                                 <p className="text-xs font-bold text-slate-900 mt-2">Valor: R$ 249,90/mês</p>
                             </div>
                         </div>
                     </div>

                     {/* Column 3: Won */}
                     <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                         <div className="flex justify-between items-center mb-4">
                             <h4 className="font-bold text-slate-700">Fechados (Este mês)</h4>
                             <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">5</span>
                         </div>
                         <div className="space-y-3">
                             <div className="bg-white p-3 rounded shadow-sm border border-slate-100 border-l-4 border-l-green-500 opacity-75">
                                 <p className="font-bold text-sm text-slate-800">Academia Fit</p>
                                 <p className="text-xs text-slate-500 mt-1">Plano Básico - Pago</p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
        )}

        {/* BUSINESSES TAB */}
        {activeTab === 'businesses' && (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                 <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                     <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <input 
                            type="text" 
                            placeholder="Buscar empresa..." 
                            className="w-full pl-10 pr-4 py-2 bg-white text-slate-900 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                     </div>
                     <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2 shadow-sm">
                        <Plus className="w-4 h-4" /> Nova Empresa
                     </button>
                 </div>

                 <div className="border rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-slate-200">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Empresa</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Plano</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Vencimento</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider"></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-slate-200">
                            {/* Mock Data Rows */}
                            {[1, 2, 3, 4, 5].map((i) => (
                                <tr key={i} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 rounded-lg bg-slate-200 flex-shrink-0 flex items-center justify-center font-bold text-slate-500">
                                                E{i}
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-slate-900">Empresa Exemplo {i}</div>
                                                <div className="text-sm text-slate-500">Alimentação</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${i % 2 === 0 ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-800'}`}>
                                            {i % 2 === 0 ? 'Essencial' : 'Básico'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                                        Dia 15/03
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                                            <CheckCircle className="w-4 h-4" /> Ativo
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button className="text-slate-400 hover:text-blue-600 transition-colors">
                                            <MoreVertical className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                 </div>
            </div>
        )}

      </main>
    </div>
  );
};

export default AdminDashboard;