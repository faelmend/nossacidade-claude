
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  TrendingUp, 
  Smartphone, 
  ShieldCheck, 
  ArrowRight, 
  Briefcase,
  PieChart,
  Users,
  CreditCard,
  ArrowLeft,
  Calculator,
  Lock,
  Star,
  Map,
  Layers,
  Globe,
  Bot
} from 'lucide-react';

const LicenseeLanding: React.FC = () => {
  const [backLink, setBackLink] = useState('/');

  useEffect(() => {
     const lastCity = localStorage.getItem('nossaCidade_lastCity');
     if (lastCity) {
         setBackLink(`/${lastCity}`);
     }
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans relative selection:bg-orange-100 selection:text-orange-900">
      {/* Navigation */}
      <div className="absolute top-6 left-6 z-50">
        <Link 
            to={backLink} 
            className="flex items-center gap-2 text-slate-500 hover:text-blue-900 bg-white/80 hover:bg-white backdrop-blur-md px-4 py-2 rounded-full transition-all font-bold text-sm border border-slate-200 shadow-sm"
        >
            <ArrowLeft className="w-4 h-4" /> Voltar para o site
        </Link>
      </div>

      {/* HERO SECTION: The Hook */}
      <div className="relative bg-slate-900 text-white overflow-hidden pb-20 pt-32 lg:pt-40">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-600 rounded-full mix-blend-screen filter blur-[100px] opacity-10"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-800/50 border border-blue-700 text-blue-200 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-8 animate-fade-in-up">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> Oportunidade de Microfranquia Digital
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
                Pare de vender suas horas. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-orange-400">
                    Construa Renda Recorrente.
                </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                Torne-se dono do <strong>Portal Oficial de Comércio</strong> da sua cidade. Um modelo de negócio validado, sem estoque, sem funcionários e com <strong className="text-orange-400">margem de lucro estratosférica</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="#pricing" 
                  className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold py-5 px-10 rounded-full shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Verificar Disponibilidade na Minha Cidade <ArrowRight className="w-5 h-5" />
                </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">
                * Atenção: Licenças limitadas por blocos populacionais.
            </p>
        </div>
      </div>

      {/* REALITY CHECK: The Problem vs Solution */}
      <div className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">O problema dos negócios tradicionais</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-slate-600">
                            <div className="p-1 bg-red-100 rounded text-red-600 mt-1"><ArrowRight className="w-3 h-3 rotate-45"/></div>
                            <span>Altos custos fixos (aluguel, estoque, logística).</span>
                        </li>
                        <li className="flex items-start gap-3 text-slate-600">
                            <div className="p-1 bg-red-100 rounded text-red-600 mt-1"><ArrowRight className="w-3 h-3 rotate-45"/></div>
                            <span>Concorrência predatória e margens baixas.</span>
                        </li>
                        <li className="flex items-start gap-3 text-slate-600">
                            <div className="p-1 bg-red-100 rounded text-red-600 mt-1"><ArrowRight className="w-3 h-3 rotate-45"/></div>
                            <span>Se você para de trabalhar, o dinheiro para de entrar.</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 relative">
                    <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-1 rounded-lg font-bold text-sm shadow-lg transform rotate-3">
                        A Solução NossaCidade
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">O Modelo de Licenciamento</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-blue-800 font-medium">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"/>
                            {/* Fixed Syntax Error: Replaced > with &gt; */}
                            <span>Produto 100% Digital (Margem Líquida &gt; 90%).</span>
                        </li>
                        <li className="flex items-start gap-3 text-blue-800 font-medium">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"/>
                            <span>Venda uma vez, receba todos os meses (Assinatura).</span>
                        </li>
                        <li className="flex items-start gap-3 text-blue-800 font-medium">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"/>
                            <span>Você é o dono exclusivo na sua região.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>

      {/* REVENUE SIMULATOR: The "Math" */}
      <div className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider mb-2">
                    <Calculator className="w-5 h-5" /> A Matemática da Riqueza
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Quanto você pode ganhar?</h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                    Não prometemos dinheiro fácil. Prometemos um modelo matemático sólido. 
                    <br />Sua cidade tem milhares de empresas precisando de visibilidade. Veja o potencial <strong>por bloco de licença</strong>:
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Conservador */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-slate-300 hover:-translate-y-2 transition-transform duration-300">
                    <h3 className="text-lg font-bold text-slate-500 uppercase mb-2">Cenário Conservador</h3>
                    <p className="text-sm text-slate-400 mb-6">Trabalhando poucas horas/semana</p>
                    
                    <div className="flex justify-between items-end mb-4 border-b border-slate-100 pb-4">
                        <span className="text-slate-600 font-medium">Clientes Ativos</span>
                        <span className="text-2xl font-bold text-slate-900">50</span>
                    </div>
                    <div className="flex justify-between items-end mb-4 border-b border-slate-100 pb-4">
                        <span className="text-slate-600 font-medium">Ticket Médio</span>
                        <span className="text-xl font-bold text-slate-900">R$ 149,00</span>
                    </div>
                    
                    <div className="mt-6 pt-4 bg-slate-50 rounded-xl p-4 text-center">
                        <p className="text-xs font-bold text-slate-500 uppercase mb-1">Faturamento Mensal</p>
                        <p className="text-3xl font-extrabold text-slate-700">R$ 7.450,00</p>
                    </div>
                </div>

                {/* Realista */}
                <div className="bg-white p-8 rounded-2xl shadow-2xl border-t-4 border-blue-500 transform md:-translate-y-4 relative z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
                        Meta Recomendada
                    </div>
                    <h3 className="text-lg font-bold text-blue-600 uppercase mb-2">Cenário Realista</h3>
                    <p className="text-sm text-slate-400 mb-6">Dedicação padrão ao negócio</p>
                    
                    <div className="flex justify-between items-end mb-4 border-b border-slate-100 pb-4">
                        <span className="text-slate-600 font-medium">Clientes Ativos</span>
                        <span className="text-2xl font-bold text-slate-900">120</span>
                    </div>
                    <div className="flex justify-between items-end mb-4 border-b border-slate-100 pb-4">
                        <span className="text-slate-600 font-medium">Ticket Médio</span>
                        <span className="text-xl font-bold text-slate-900">R$ 149,00</span>
                    </div>
                    
                    <div className="mt-6 pt-4 bg-blue-50 rounded-xl p-4 text-center border border-blue-100">
                        <p className="text-xs font-bold text-blue-500 uppercase mb-1">Faturamento Mensal</p>
                        <p className="text-4xl font-extrabold text-blue-700">R$ 17.880,00</p>
                    </div>
                </div>

                {/* Otimista */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500 hover:-translate-y-2 transition-transform duration-300">
                    <h3 className="text-lg font-bold text-orange-500 uppercase mb-2">Cenário Expansão</h3>
                    <p className="text-sm text-slate-400 mb-6">Dominando o mercado local</p>
                    
                    <div className="flex justify-between items-end mb-4 border-b border-slate-100 pb-4">
                        <span className="text-slate-600 font-medium">Clientes Ativos</span>
                        <span className="text-2xl font-bold text-slate-900">250+</span>
                    </div>
                    <div className="flex justify-between items-end mb-4 border-b border-slate-100 pb-4">
                        <span className="text-slate-600 font-medium">Ticket Médio</span>
                        <span className="text-xl font-bold text-slate-900">R$ 149,00</span>
                    </div>
                    
                    <div className="mt-6 pt-4 bg-orange-50 rounded-xl p-4 text-center">
                        <p className="text-xs font-bold text-orange-500 uppercase mb-1">Faturamento Mensal</p>
                        <p className="text-3xl font-extrabold text-orange-600">R$ 37.250,00</p>
                    </div>
                </div>
            </div>
            
            {/* Scalability Section */}
            <div className="mt-16 bg-gradient-to-r from-blue-900 to-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
                <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                
                <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                        <TrendingUp className="w-8 h-8 text-green-400" /> Escalabilidade Infinita
                    </h3>
                    <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-8">
                        Não pare em uma única cidade. O sistema permite que você administre <strong>múltiplos blocos e regiões</strong> com o mesmo painel. 
                        Multiplique seu faturamento adquirindo cidades vizinhas e torne-se um magnata da mídia regional.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <p className="text-3xl font-bold text-white mb-1">1 Bloco</p>
                            <p className="text-sm text-blue-300">Faturamento ~15k/mês</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 ring-2 ring-green-400/50">
                            <p className="text-3xl font-bold text-green-400 mb-1">3 Blocos</p>
                            <p className="text-sm text-white">Faturamento ~45k/mês</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <p className="text-3xl font-bold text-white mb-1">10 Blocos</p>
                            <p className="text-sm text-blue-300">Faturamento ~150k/mês</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* PRODUCT SHOWCASE */}
      <div className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                  <div className="lg:w-1/2">
                      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                          Tecnologia com IA. <br />
                          <span className="text-blue-600">Do Início ao Fim.</span>
                      </h2>
                      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                          A barreira da programação não existe mais. Nossa plataforma utiliza <strong>Inteligência Artificial</strong> em cada etapa para garantir que seu foco seja 100% comercial.
                          <br/><br/>
                          <strong>Nós entregamos a máquina pronta.</strong> O portal da sua cidade vem hospedado, configurado e otimizado por algoritmos que trabalham 24/7 para você.
                      </p>
                      
                      <div className="space-y-6">
                          <div className="flex gap-4">
                              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-600">
                                  <Smartphone className="w-6 h-6" />
                              </div>
                              <div>
                                  <h4 className="font-bold text-slate-900 text-lg">App Web Progressivo (PWA)</h4>
                                  <p className="text-slate-500">Seu portal funciona como app no celular, sem downloads, rápido e inteligente.</p>
                              </div>
                          </div>
                          <div className="flex gap-4">
                              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 text-orange-600">
                                  <ShieldCheck className="w-6 h-6" />
                              </div>
                              <div>
                                  <h4 className="font-bold text-slate-900 text-lg">Gestão Automatizada</h4>
                                  <p className="text-slate-500">Painel financeiro e CRM que aprendem com o uso para facilitar suas vendas.</p>
                              </div>
                          </div>

                          {/* Teaser Box */}
                          <div className="mt-4 bg-gradient-to-br from-purple-50 to-indigo-50 p-5 rounded-2xl border border-purple-100 relative overflow-hidden">
                              <div className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg tracking-wider shadow-sm">
                                  ROADMAP SECRETO
                              </div>
                              <div className="flex gap-4 relative z-10 items-start">
                                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-purple-600 shadow-sm ring-2 ring-purple-100">
                                      <Bot className="w-5 h-5" />
                                  </div>
                                  <div>
                                      <h4 className="font-bold text-purple-900 text-base mb-1">O que vem por aí?</h4>
                                      <p className="text-slate-600 text-sm leading-snug">
                                          Estamos desenvolvendo novas ferramentas que serão liberadas em <strong>micro-lançamentos</strong> estratégicos. 
                                          Funcionalidades desenhadas para atrair multidões e tornar seu portal o centro das atenções.
                                          <span className="block mt-2 font-bold text-purple-700 italic text-xs">
                                            Não podemos revelar detalhes agora, mas o ouro está prestes a ser descoberto.
                                          </span>
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="lg:w-1/2 relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-lg opacity-30"></div>
                      <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                        alt="Admin Dashboard" 
                        className="relative rounded-2xl shadow-2xl border-4 border-slate-900/5"
                      />
                  </div>
              </div>
          </div>
      </div>

      {/* TERRITORY LOGIC SECTION */}
      <div className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full text-sm font-bold text-slate-600 mb-4 shadow-sm">
                    <Map className="w-4 h-4 text-blue-500" /> Entenda seu Território
                </div>
                <h2 className="text-3xl font-bold text-slate-900">A Regra dos Blocos de 50.000 Habitantes</h2>
                <p className="text-slate-600 mt-4 max-w-3xl mx-auto text-lg">
                    Para garantir a sustentabilidade e a lucratividade do licenciado, o valor da licença é referente a <strong>blocos populacionais</strong>. Veja como funciona:
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
                    <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                        <Layers className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Cidades Pequenas (Aglomeração)</h3>
                    <p className="text-slate-600 flex-grow">
                        Se sua cidade tem menos de 50k habitantes, você pode <strong>agrupar cidades vizinhas</strong> na mesma licença até atingir o teto.
                        <br/><br/>
                        <em className="text-sm text-slate-500">Exemplo: Você compra 1 licença e administra Cidade A + Cidade B + Cidade C.</em>
                    </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
                    <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
                        <Globe className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Cidades Grandes (Fracionamento)</h3>
                    <p className="text-slate-600 flex-grow">
                        Em cidades maiores, a região é dividida em blocos. Você começa comprando o primeiro bloco e tem <strong>prioridade exclusiva</strong> na compra dos próximos.
                        <br/><br/>
                        <em className="text-sm text-slate-500">Exemplo: Cidade A (150k habitantes) equivale a 3 blocos de licença.</em>
                    </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
                    <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6">
                        <Briefcase className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Pacote de Expansão (3+ Blocos)</h3>
                    <p className="text-slate-600 flex-grow">
                        Para investidores que desejam dominar uma macrorregião. O valor para aquisição de <strong>3 blocos ou mais</strong> é negociável com a diretoria.
                        <br/><br/>
                        <em className="text-sm text-slate-500">Ideal para quem quer garantir exclusividade total em aglomerados urbanos.</em>
                    </p>
                </div>
            </div>
        </div>
      </div>

      {/* THE OFFER: Black Friday Style */}
      <div id="pricing" className="py-24 bg-slate-900 text-white relative overflow-hidden">
          {/* Background FX */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
          
          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
              <div className="inline-block bg-red-600 text-white text-xl md:text-2xl font-bold px-8 py-3 rounded-full uppercase tracking-widest mb-8 animate-pulse">
                  Apenas 5 Vagas com este Preço
              </div>
              
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Comece seu Império Digital</h2>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                  O custo para desenvolver uma plataforma como esta do zero ultrapassa <strong>R$ 50.000,00</strong>. 
                  Hoje, você adquire a licença de uso por uma fração irrisória desse valor.
              </p>

              <div className="bg-white text-slate-900 rounded-3xl p-2 max-w-3xl mx-auto shadow-2xl shadow-orange-500/20">
                  <div className="border-2 border-dashed border-slate-200 rounded-[20px] p-8 md:p-12 relative overflow-hidden">
                      
                      {/* Ribbon */}
                      <div className="absolute top-0 right-0 bg-red-600 text-white text-lg font-black px-12 py-2 rotate-45 translate-x-12 translate-y-6 shadow-lg z-20">
                          90% OFF
                      </div>

                      <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                          <div>
                              <h3 className="text-2xl font-bold text-slate-800 mb-1">Licença de Uso Vitalícia (Bloco 50k)</h3>
                              <p className="text-slate-500 text-sm mb-4">Taxa única de adesão (Setup + Treinamento)</p>
                              
                              <div className="space-y-2">
                                  <div className="flex items-center gap-2 justify-center md:justify-start text-slate-400 line-through decoration-red-500 text-lg">
                                      <span>Valor Normal:</span>
                                      {/* Updated Normal Price */}
                                      <span>R$ 9.997,00</span>
                                  </div>
                                  <div className="flex items-center gap-3 justify-center md:justify-start">
                                      {/* Updated Promo Price */}
                                      <span className="text-5xl md:text-7xl font-black text-blue-900 tracking-tighter">R$ 2.497</span>
                                      <div className="flex flex-col items-start">
                                          <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded animate-pulse">LOTE 1</span>
                                          <span className="text-sm text-slate-500">à vista</span>
                                      </div>
                                  </div>
                              </div>
                              
                              <p className="text-xs text-slate-400 mt-4 flex items-center gap-1 justify-center md:justify-start">
                                  <CreditCard className="w-3 h-3"/> Parcelamento disponível em até 12x no cartão.
                              </p>
                          </div>

                          <div className="w-full md:w-auto flex flex-col gap-3">
                              <a 
                                href="https://wa.me/5538999999999?text=Quero aplicar para a licença gratuita inicial."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-orange-500/40 transform transition-all hover:scale-105 whitespace-nowrap flex items-center justify-center gap-2 text-lg"
                              >
                                  {/* Updated Button Text */}
                                  Aplicar para Licença Grátis <ArrowRight className="w-5 h-5" />
                              </a>
                              <p className="text-xs text-slate-400 text-center">
                                  <Lock className="w-3 h-3 inline mr-1"/> Processo Seletivo Sem Custo
                              </p>
                          </div>
                      </div>
                      
                      {/* Price Tiers Logic */}
                      <div className="mt-8 pt-6 border-t border-slate-100">
                          <p className="text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide text-center md:text-left">
                              Cronograma de Preços (Escassez Real)
                          </p>
                          <div className="space-y-3">
                              <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg opacity-100">
                                  <div className="flex items-center gap-2">
                                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                                      <span className="text-sm font-bold text-green-800">LOTE 1: Primeiras 5 Cidades</span>
                                  </div>
                                  <span className="text-lg font-black text-green-700">R$ 2.497,00</span>
                              </div>
                              <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-100 rounded-lg opacity-60">
                                  <div className="flex items-center gap-2">
                                      <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                                      <span className="text-sm font-medium text-slate-600">LOTE 2: Próximas 15 Cidades</span>
                                  </div>
                                  <span className="text-sm font-bold text-slate-500">R$ 14.997,00</span>
                              </div>
                              <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-100 rounded-lg opacity-60">
                                  <div className="flex items-center gap-2">
                                      <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                                      <span className="text-sm font-medium text-slate-600">LOTE 3: A partir da 21ª Cidade</span>
                                  </div>
                                  <span className="text-sm font-bold text-slate-500">R$ 29.997,00</span>
                              </div>
                          </div>
                      </div>

                      {/* REMOVED ROYALTIES SECTION HERE */}
                  </div>
              </div>
              
              <p className="mt-8 text-slate-500 text-sm max-w-xl mx-auto">
                  Ao clicar no botão, você falará diretamente com nosso time de expansão. Aproveite o <strong>Lote 1</strong> antes que as vagas sejam preenchidas.
              </p>
          </div>
      </div>
    </div>
  );
};

export default LicenseeLanding;
