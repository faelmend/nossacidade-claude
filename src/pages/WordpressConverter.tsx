import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Code, Copy, Check, HelpCircle, FileJson } from 'lucide-react';

const WordpressConverter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'guide' | 'extractor' | 'faq'>('guide');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeSnippets = {
    structure: `
/wp-content
  /themes
    /nossacidade-theme
      /assets
        /css (Tailwind build)
        /js (React bundle)
      /inc (PHP functions)
      /template-parts
      style.css
      index.php
      functions.php
      header.php
      footer.php
    `,
    reactIntegration: `
// No arquivo functions.php do WordPress
function enqueue_react_app() {
    wp_enqueue_script(
        'nossacidade-react', 
        get_template_directory_uri() . '/assets/js/index.js', 
        array(), 
        '1.0', 
        true
    );
}
add_action('wp_enqueue_scripts', 'enqueue_react_app');

// No arquivo index.php
<div id="root"></div>
    `
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      {/* Header */}
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para o Site
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <FileJson className="w-10 h-10 text-orange-400" />
            Migração para WordPress
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Ferramenta interna para auxiliar desenvolvedores a transformar este projeto React em um tema WordPress profissional.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-8">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
          <div className="flex border-b border-slate-200">
            <button 
              onClick={() => setActiveTab('guide')}
              className={`flex-1 py-4 text-center font-bold text-sm uppercase tracking-wider ${activeTab === 'guide' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <BookOpen className="w-4 h-4 inline mr-2" /> Guia de Estrutura
            </button>
            <button 
              onClick={() => setActiveTab('extractor')}
              className={`flex-1 py-4 text-center font-bold text-sm uppercase tracking-wider ${activeTab === 'extractor' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <Code className="w-4 h-4 inline mr-2" /> Codes & Prompts
            </button>
            <button 
              onClick={() => setActiveTab('faq')}
              className={`flex-1 py-4 text-center font-bold text-sm uppercase tracking-wider ${activeTab === 'faq' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <HelpCircle className="w-4 h-4 inline mr-2" /> Tutor IA
            </button>
          </div>

          <div className="p-8">
            {/* GUIDE TAB */}
            {activeTab === 'guide' && (
              <div className="space-y-8">
                <div className="prose max-w-none text-slate-600">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Como transformar React em WordPress?</h3>
                  <p>Existem duas abordagens principais para utilizar este projeto no ecossistema WordPress:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                      <h4 className="font-bold text-blue-900 mb-2">1. Headless WordPress (Recomendado)</h4>
                      <p className="text-sm">O WordPress atua apenas como API (Backend). O React continua rodando separado (Vercel/Netlify) e consome os dados via JSON.</p>
                      <ul className="mt-4 space-y-2 text-sm list-disc pl-5">
                        <li>Mantém a velocidade extrema do React.</li>
                        <li>Experiência de app (SPA).</li>
                        <li>Hospedagem Frontend Grátis (Vercel).</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
                      <h4 className="font-bold text-orange-900 mb-2">2. Tema Híbrido</h4>
                      <p className="text-sm">O React roda "dentro" das páginas PHP do tema. O build gera arquivos JS que são carregados pelo functions.php.</p>
                      <ul className="mt-4 space-y-2 text-sm list-disc pl-5">
                        <li>Instalação fácil para o cliente final (apenas 1 zip).</li>
                        <li>Melhor para SEO tradicional se não usar SSR.</li>
                        <li>Requer configuração de build específica (Vite).</li>
                      </ul>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-slate-800 mt-8 mb-4">Estrutura de Pastas Sugerida</h4>
                  <div className="bg-slate-900 text-slate-300 p-6 rounded-lg font-mono text-sm relative">
                    <button 
                      onClick={() => copyToClipboard(codeSnippets.structure)}
                      className="absolute top-4 right-4 text-slate-500 hover:text-white"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <pre>{codeSnippets.structure}</pre>
                  </div>
                </div>
              </div>
            )}

            {/* EXTRACTOR TAB */}
            {activeTab === 'extractor' && (
              <div className="space-y-6">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <div className="flex">
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        Use os prompts abaixo no Google IA Studio ou ChatGPT para converter componentes React em PHP/WordPress.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-slate-800">Prompt de Conversão (Componente -> PHP)</h4>
                  <div className="bg-slate-100 p-4 rounded-lg border border-slate-200">
                    <p className="font-mono text-xs text-slate-600 mb-2">Copie e cole na sua IA:</p>
                    <div className="bg-white p-3 rounded border border-slate-200 text-sm text-slate-700 select-all">
                      "Atue como um Desenvolvedor WordPress Sênior. Converta o seguinte componente React (TypeScript/Tailwind) para um arquivo PHP de template WordPress. 
                      Substitua as variáveis dinâmicas (como {`{business.name}`}) por funções PHP do WordPress (como `the_title()`). 
                      Mantenha todas as classes do Tailwind CSS intactas."
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-slate-800">Snippet de Integração (functions.php)</h4>
                  <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm relative">
                     <button 
                      onClick={() => copyToClipboard(codeSnippets.reactIntegration)}
                      className="absolute top-4 right-4 text-slate-500 hover:text-white"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <pre>{codeSnippets.reactIntegration}</pre>
                  </div>
                </div>
              </div>
            )}

            {/* FAQ TAB */}
            {activeTab === 'faq' && (
              <div className="space-y-6">
                <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
                  <summary className="flex justify-between items-center font-bold text-slate-800 list-none">
                    <span>O que faço com o `mockData.ts`?</span>
                    <span className="transition group-open:rotate-180">
                      <ArrowLeft className="w-4 h-4 -rotate-90" />
                    </span>
                  </summary>
                  <p className="text-slate-600 mt-4 text-sm leading-relaxed">
                    No WordPress, o `mockData` deve ser substituído por <strong>Custom Post Types (CPT)</strong>. 
                    Você criará um CPT chamado 'Empresas' (businesses) e outro 'Vagas' (jobs). 
                    Use o plugin ACF (Advanced Custom Fields) para criar os campos extras como 'telefone', 'plano', 'whatsapp'.
                  </p>
                </details>

                <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
                  <summary className="flex justify-between items-center font-bold text-slate-800 list-none">
                    <span>Como fica o roteamento (React Router)?</span>
                    <span className="transition group-open:rotate-180">
                      <ArrowLeft className="w-4 h-4 -rotate-90" />
                    </span>
                  </summary>
                  <p className="text-slate-600 mt-4 text-sm leading-relaxed">
                    Se for um tema clássico, o roteamento é feito pelo próprio WordPress (hierarquia de templates: single.php, archive.php). 
                    Se for Headless, você mantém o React Router e ele consome a API do WP baseada no slug da URL.
                  </p>
                </details>

                <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
                  <summary className="flex justify-between items-center font-bold text-slate-800 list-none">
                    <span>Posso usar o Tailwind no WordPress?</span>
                    <span className="transition group-open:rotate-180">
                      <ArrowLeft className="w-4 h-4 -rotate-90" />
                    </span>
                  </summary>
                  <p className="text-slate-600 mt-4 text-sm leading-relaxed">
                    Sim! Você deve configurar o processo de build para compilar o Tailwind em um arquivo `style.css` final que o WordPress possa ler. 
                    Não use CDN em produção no WordPress por questões de performance.
                  </p>
                </details>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordpressConverter;