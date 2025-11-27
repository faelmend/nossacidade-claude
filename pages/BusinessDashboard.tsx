import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
    Home,
    User,
    Image as ImageIcon,
    BarChart2,
    CreditCard,
    LogOut,
    Edit,
    Eye,
    MousePointer,
    Phone,
    CheckCircle,
    Plus,
    Trash2,
    ArrowLeft
} from 'lucide-react';

const BusinessDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [backLink, setBackLink] = useState('/');

  useEffect(() => {
     const lastCity = localStorage.getItem('nossaCidade_lastCity');
     if (lastCity) {
         setBackLink(`/${lastCity}`);
     }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Top Navigation for Client Area */}
      <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
               <Link to={backLink} className="flex items-center gap-2 mr-4 text-slate-400 hover:text-slate-700 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
               </Link>
               <Link to="/" className="flex items-center gap-2">
                  <svg className="h-8 w-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 92C50 92 88 72 88 48C88 27.0132 70.9868 10 50 10C29.0132 10 12 27.0132 12 48C12 72 50 92 50 92Z" stroke="#1d4ed8" strokeWidth="6" fill="white" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M30 70V50L42 42V70H30Z" fill="#bfdbfe"/>
                        <path d="M42 70V35L58 28V70H42Z" fill="#2563eb"/>
                  </svg>
                  <span className="font-bold text-xl text-blue-900">Área do Cliente</span>
               </Link>
            </div>
            <div className="flex items-center gap-4">
               <div className="text-right hidden sm:block">
                  <p className="text-sm font-bold text-slate-800">Churrascaria Boi na Brasa</p>
                  <p className="text-xs text-green-600 flex items-center justify-end gap-1"><CheckCircle className="w-3 h-3"/> Plano Essencial Ativo</p>
               </div>
               <div className="h-9 w-9 rounded-full bg-slate-200 overflow-hidden">
                  <img src="https://picsum.photos/200" alt="Profile" className="h-full w-full object-cover" />
               </div>
               <Link to="/admin/login" className="text-slate-400 hover:text-slate-600">
                  <LogOut className="w-5 h-5" />
               </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
           
           {/* Sidebar */}
           <aside className="w-full md:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                 <div className="p-4 space-y-1">
                    <button 
                       onClick={() => setActiveTab('dashboard')}
                       className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'dashboard' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
                    >
                       <Home className="w-4 h-4" /> Resumo
                    </button>
                    <button 
                       onClick={() => setActiveTab('profile')}
                       className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'profile' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
                    >
                       <User className="w-4 h-4" /> Editar Dados
                    </button>
                    <button 
                       onClick={() => setActiveTab('photos')}
                       className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'photos' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
                    >
                       <ImageIcon className="w-4 h-4" /> Galeria de Fotos
                    </button>
                    <button 
                       onClick={() => setActiveTab('stats')}
                       className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'stats' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
                    >
                       <BarChart2 className="w-4 h-4" /> Estatísticas
                    </button>
                    <button 
                       onClick={() => setActiveTab('billing')}
                       className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'billing' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
                    >
                       <CreditCard className="w-4 h-4" /> Assinatura
                    </button>
                 </div>
              </div>

              <div className="mt-6 bg-blue-600 rounded-xl p-6 text-white shadow-lg">
                 <h4 className="font-bold text-lg mb-2">Precisa de ajuda?</h4>
                 <p className="text-blue-100 text-sm mb-4">Fale com seu consultor dedicado em João Pinheiro.</p>
                 <button className="w-full bg-white text-blue-600 font-bold py-2 rounded-lg text-sm hover:bg-blue-50 transition-colors">
                    Chamar no WhatsApp
                 </button>
              </div>
           </aside>

           {/* Content Area */}
           <main className="flex-grow">
              {activeTab === 'dashboard' && (
                  <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-slate-800">Olá, Boi na Brasa!</h2>
                      
                      {/* Stats Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                              <div className="flex items-center justify-between mb-4">
                                  <h3 className="text-slate-500 font-medium text-sm">Visualizações (30 dias)</h3>
                                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Eye className="w-5 h-5" /></div>
                              </div>
                              <p className="text-3xl font-bold text-slate-800">1.245</p>
                              <p className="text-xs text-green-600 mt-1 font-bold">+12% vs mês passado</p>
                          </div>
                          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                              <div className="flex items-center justify-between mb-4">
                                  <h3 className="text-slate-500 font-medium text-sm">Cliques no WhatsApp</h3>
                                  <div className="p-2 bg-green-100 rounded-lg text-green-600"><Phone className="w-5 h-5" /></div>
                              </div>
                              <p className="text-3xl font-bold text-slate-800">84</p>
                              <p className="text-xs text-green-600 mt-1 font-bold">+5 novos hoje</p>
                          </div>
                          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                              <div className="flex items-center justify-between mb-4">
                                  <h3 className="text-slate-500 font-medium text-sm">Acessos ao Site</h3>
                                  <div className="p-2 bg-purple-100 rounded-lg text-purple-600"><MousePointer className="w-5 h-5" /></div>
                              </div>
                              <p className="text-3xl font-bold text-slate-800">42</p>
                          </div>
                      </div>

                      {/* Profile Preview Action */}
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div>
                              <h3 className="font-bold text-slate-800 text-lg">Seu perfil está ótimo!</h3>
                              <p className="text-slate-500 text-sm">Você preencheu 90% das informações. Que tal adicionar fotos novas?</p>
                          </div>
                          <div className="flex gap-3">
                              <button className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50">Ver Perfil Público</button>
                              <button onClick={() => setActiveTab('photos')} className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">Adicionar Fotos</button>
                          </div>
                      </div>
                  </div>
              )}

              {activeTab === 'profile' && (
                  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                      <h3 className="text-lg font-bold text-slate-800 mb-6 pb-4 border-b border-slate-100">Dados da Empresa</h3>
                      <form className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                  <label className="block text-sm font-medium text-slate-700 mb-1">Nome do Estabelecimento</label>
                                  <input type="text" defaultValue="Churrascaria Boi na Brasa" className="w-full bg-white text-slate-900 border border-slate-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2" />
                              </div>
                              <div>
                                  <label className="block text-sm font-medium text-slate-700 mb-1">Categoria</label>
                                  <select className="w-full bg-white text-slate-900 border border-slate-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2">
                                      <option>Alimentação</option>
                                      <option>Automotivo</option>
                                      <option>Saúde</option>
                                      <option>Serviços</option>
                                  </select>
                              </div>
                              <div className="md:col-span-2">
                                  <label className="block text-sm font-medium text-slate-700 mb-1">Descrição Curta</label>
                                  <input type="text" defaultValue="Rodízio completo e cortes nobres no centro da cidade." className="w-full bg-white text-slate-900 border border-slate-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2" />
                              </div>
                              <div className="md:col-span-2">
                                  <label className="block text-sm font-medium text-slate-700 mb-1">Descrição Completa</label>
                                  <textarea rows={4} defaultValue="A melhor carne da cidade..." className="w-full bg-white text-slate-900 border border-slate-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2" />
                              </div>
                              <div>
                                  <label className="block text-sm font-medium text-slate-700 mb-1">Telefone</label>
                                  <input type="text" defaultValue="(38) 3561-0000" className="w-full bg-white text-slate-900 border border-slate-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2" />
                              </div>
                              <div>
                                  <label className="block text-sm font-medium text-slate-700 mb-1">WhatsApp</label>
                                  <input type="text" defaultValue="5538999999999" className="w-full bg-white text-slate-900 border border-slate-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2" />
                              </div>
                              <div className="md:col-span-2">
                                  <label className="block text-sm font-medium text-slate-700 mb-1">Endereço</label>
                                  <input type="text" defaultValue="Av. Gerson Rios, 450, Centro" className="w-full bg-white text-slate-900 border border-slate-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2" />
                              </div>
                          </div>
                          <div className="flex justify-end pt-4">
                              <button type="button" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 shadow-sm">Salvar Alterações</button>
                          </div>
                      </form>
                  </div>
              )}

              {activeTab === 'photos' && (
                 <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                      <div className="flex justify-between items-center mb-6">
                          <h3 className="text-lg font-bold text-slate-800">Galeria de Imagens</h3>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 flex items-center gap-2">
                              <Plus className="w-4 h-4" /> Adicionar Nova
                          </button>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {[1, 2, 3].map((i) => (
                              <div key={i} className="relative group rounded-lg overflow-hidden aspect-video bg-slate-100">
                                  <img src={`https://picsum.photos/500/300?random=${i}`} alt="Gallery" className="w-full h-full object-cover" />
                                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                      <button className="p-2 bg-white rounded-full text-slate-800 hover:bg-slate-100"><Edit className="w-4 h-4"/></button>
                                      <button className="p-2 bg-red-500 rounded-full text-white hover:bg-red-600"><Trash2 className="w-4 h-4" /></button>
                                  </div>
                              </div>
                          ))}
                      </div>
                 </div>
              )}
           </main>
        </div>
      </div>
    </div>
  );
};

export default BusinessDashboard;