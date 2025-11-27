import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
    LayoutDashboard, 
    MapPin, 
    Users, 
    Settings, 
    LogOut, 
    Plus, 
    Search,
    TrendingUp,
    DollarSign,
    X,
    Globe,
    Activity,
    Eye,
    Edit,
    ShieldAlert,
    ArrowLeft
} from 'lucide-react';

// Mock initial data
const INITIAL_LICENSEES = [
    { id: 1, name: 'João Silva', email: 'joao@pinheiro.com', city: 'João Pinheiro', state: 'MG', status: 'active', revenue: 'R$ 1.245,00', companies: 156 },
    { id: 2, name: 'Maria Souza', email: 'maria@patos.com', city: 'Patos de Minas', state: 'MG', status: 'late', revenue: 'R$ 0,00', companies: 89 },
    { id: 3, name: 'Pedro Santos', email: 'pedro@unai.com', city: 'Unaí', state: 'MG', status: 'active', revenue: 'R$ 3.450,00', companies: 210 }
];

const SuperAdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [licensees, setLicensees] = useState(INITIAL_LICENSEES);
  const [showAddForm, setShowAddForm] = useState(false);
  
  // Calculate totals for Overview
  const totalRevenue = 45000 + licensees.reduce((acc, curr) => acc + parseFloat(curr.revenue.replace('R$ ', '').replace('.', '').replace(',', '.')), 0);
  const totalCompanies = 15000 + licensees.reduce((acc, curr) => acc + curr.companies, 0);

  const handleLoginAs = (licenseeId: number) => {
      // Simulate logging in as a licensee
      alert(`Acessando painel do licenciado ${licenseeId}...`);
      navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex font-sans text-slate-900">
      {/* Sidebar - Dark Theme for Super Admin */}
      <aside className="w-64 bg-slate-900 text-white flex-shrink-0 hidden md:flex flex-col shadow-xl z-10">
        <div className="p-6 border-b border-slate-800">
           <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
                   <span className="font-bold text-lg">G</span>
                </div>
                <div>
                    <span className="font-bold text-lg tracking-tight block leading-none">Global</span>
                    <span className="text-xs text-slate-400 uppercase tracking-wider">Master Admin</span>
                </div>
           </div>
        </div>

        <nav className="flex-grow p-4 space-y-2">
           <button 
             onClick={() => setActiveTab('overview')}
             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${activeTab === 'overview' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
           >
             <LayoutDashboard className="w-5 h-5" />
             <span>Visão Global</span>
           </button>
           <button 
             onClick={() => setActiveTab('licensees')}
             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${activeTab === 'licensees' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
           >
             <Globe className="w-5 h-5" />
             <span>Gestão de Cidades</span>
           </button>
           <button 
             onClick={() => setActiveTab('financial')}
             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${activeTab === 'financial' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
           >
             <DollarSign className="w-5 h-5" />
             <span>Financeiro Rede</span>
           </button>
           <button 
             onClick={() => setActiveTab('settings')}
             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${activeTab === 'settings' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
           >
             <Settings className="w-5 h-5" />
             <span>Config. do Sistema</span>
           </button>
        </nav>

        <div className="p-4 border-t border-slate-800 space-y-2">
           <div className="flex items-center gap-3 px-4 py-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold">RM</div>
                <div>
                    <p className="text-sm font-bold">Rafael M.</p>
                    <p className="text-xs text-slate-500">Super Admin</p>
                </div>
           </div>
           <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors px-4 py-2">
              <ArrowLeft className="w-4 h-4" /> Voltar ao Início
           </Link>
           <Link to="/admin/login" className="flex items-center gap-2 text-slate-400 hover:text-red-400 text-sm transition-colors px-4 py-2">
              <LogOut className="w-4 h-4" /> Sair
           </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 overflow-y-auto h-screen bg-slate-50">
        <header className="flex justify-between items-center mb-8">
           <div>
              <h1 className="text-2xl font-bold text-slate-800">
                {activeTab === 'overview' && 'Command Center Global'}
                {activeTab === 'licensees' && 'Gestão de Licenciados e Praças'}
                {activeTab === 'financial' && 'Relatórios Financeiros da Rede'}
                {activeTab === 'settings' && 'Configurações Globais do Portal'}
              </h1>
              <p className="text-slate-500">Visão consolidada de todas as operações do NossaCidade.</p>
           </div>
           <div className="flex items-center gap-3">
              <div className="bg-white px-4 py-2 rounded-full border border-slate-200 flex items-center gap-2 shadow-sm">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-bold text-slate-600">Sistema Operacional</span>
              </div>
           </div>
        </header>

        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
            <div className="space-y-6">
                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative overflow-hidden group">
                        <div className="absolute right-0 top-0 w-24 h-24 bg-green-50 rounded-bl-full -mr-4 -mt-4 z-0 transition-transform group-hover:scale-110"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-2">
                                <DollarSign className="w-5 h-5 text-green-600" />
                                <span className="text-sm font-bold text-slate-500 uppercase">Receita Rede</span>
                            </div>
                            <p className="text-3xl font-extrabold text-slate-900">
                                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalRevenue)}
                            </p>
                            <p className="text-xs text-green-600 mt-2 font-bold flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" /> +12% vs mês anterior
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative overflow-hidden group">
                         <div className="absolute right-0 top-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 z-0 transition-transform group-hover:scale-110"></div>
                         <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-2">
                                <Globe className="w-5 h-5 text-blue-600" />
                                <span className="text-sm font-bold text-slate-500 uppercase">Cidades Ativas</span>
                            </div>
                            <p className="text-3xl font-extrabold text-slate-900">{licensees.length + 200}</p>
                            <p className="text-xs text-blue-600 mt-2 font-bold">
                                5 novas este mês
                            </p>
                         </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative overflow-hidden group">
                        <div className="absolute right-0 top-0 w-24 h-24 bg-orange-50 rounded-bl-full -mr-4 -mt-4 z-0 transition-transform group-hover:scale-110"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-2">
                                <Users className="w-5 h-5 text-orange-600" />
                                <span className="text-sm font-bold text-slate-500 uppercase">Empresas Total</span>
                            </div>
                            <p className="text-3xl font-extrabold text-slate-900">{totalCompanies.toLocaleString()}</p>
                            <p className="text-xs text-slate-400 mt-2">
                                Base de dados global
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative overflow-hidden group">
                         <div className="absolute right-0 top-0 w-24 h-24 bg-purple-50 rounded-bl-full -mr-4 -mt-4 z-0 transition-transform group-hover:scale-110"></div>
                         <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-2">
                                <Activity className="w-5 h-5 text-purple-600" />
                                <span className="text-sm font-bold text-slate-500 uppercase">Leads Licenciados</span>
                            </div>
                            <p className="text-3xl font-extrabold text-slate-900">45</p>
                            <p className="text-xs text-purple-600 mt-2 font-bold">
                                Aguardando aprovação
                            </p>
                         </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Action Panel */}
                    <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-slate-800">Ações Rápidas</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <button className="p-4 bg-slate-50 border border-slate-200 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition-all text-center group">
                                <Plus className="w-6 h-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-bold text-slate-700">Criar Nova Praça</span>
                            </button>
                            <button className="p-4 bg-slate-50 border border-slate-200 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition-all text-center group">
                                <ShieldAlert className="w-6 h-6 text-red-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-bold text-slate-700">Auditoria</span>
                            </button>
                            <button className="p-4 bg-slate-50 border border-slate-200 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition-all text-center group">
                                <DollarSign className="w-6 h-6 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-bold text-slate-700">Sacar Royalties</span>
                            </button>
                             <button className="p-4 bg-slate-50 border border-slate-200 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition-all text-center group">
                                <Users className="w-6 h-6 text-orange-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-bold text-slate-700">Usuários Admin</span>
                            </button>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-slate-200 p-0 overflow-hidden">
                        <div className="p-4 border-b border-slate-100 bg-slate-50">
                            <h3 className="font-bold text-slate-800 text-sm">Últimas Atividades</h3>
                        </div>
                        <div className="divide-y divide-slate-100 max-h-[250px] overflow-y-auto">
                            {licensees.map((licensee) => (
                                <div key={licensee.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs">
                                            {licensee.city.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-800">Novo Licenciado</p>
                                            <p className="text-xs text-slate-500">{licensee.city}</p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] text-slate-400">2h atrás</span>
                                </div>
                            ))}
                             <div className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xs">
                                            $
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-800">Pagamento Recebido</p>
                                            <p className="text-xs text-slate-500">R$ 497,00 - Adesão</p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] text-slate-400">5h atrás</span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* LICENSEES TAB */}
        {activeTab === 'licensees' && (
             <div className="bg-white rounded-xl shadow-sm border border-slate-200">
                 <div className="p-6 border-b border-slate-100">
                     <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                            <input 
                                type="text" 
                                placeholder="Buscar licenciado, email ou cidade..." 
                                className="w-full pl-10 pr-4 py-2 bg-white text-slate-900 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            />
                        </div>
                        <button 
                            onClick={() => setShowAddForm(!showAddForm)}
                            className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 shadow-sm transition-colors ${showAddForm ? 'bg-slate-200 text-slate-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                        >
                            {showAddForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            {showAddForm ? 'Cancelar' : 'Nova Licença'}
                        </button>
                     </div>
                 </div>

                 <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Parceiro</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Praça (Cidade/UF)</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Empresas</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Faturamento (Mês)</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Controle</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-slate-200">
                            {licensees.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600 text-xs">
                                                {item.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900">{item.name}</div>
                                                <div className="text-xs text-slate-500">{item.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-3 h-3 text-slate-400" />
                                            {item.city}, {item.state}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">
                                        <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-xs font-bold">{item.companies}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${
                                            item.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                        }`}>
                                            {item.status === 'active' ? 'Em dia' : 'Pendente'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 font-medium">{item.revenue}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button title="Editar" className="p-1 text-slate-400 hover:text-blue-600"><Edit className="w-4 h-4"/></button>
                                            <button 
                                                onClick={() => handleLoginAs(item.id)}
                                                title="Acessar como Licenciado (Simular)"
                                                className="flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs hover:bg-blue-200"
                                            >
                                                <Eye className="w-3 h-3" /> Acessar
                                            </button>
                                        </div>
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

export default SuperAdminDashboard;