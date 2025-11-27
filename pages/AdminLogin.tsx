import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, AlertCircle, LogIn } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [lastCity, setLastCity] = useState('/');

  useEffect(() => {
    // Retrieve the last visited city to handle "Back" navigation correctly
    const savedCity = localStorage.getItem('nossaCidade_lastCity');
    if (savedCity) {
      setLastCity(`/${savedCity}`);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Super Admin Logic (Specific Credentials)
    if(email === 'rafaelmendoncaal@gmail.com' && password === 'VYuj8@7%6') {
        navigate('/admin/super');
        return;
    }

    // Mock Logic for other roles based on email keywords
    if (email.includes('business')) {
        navigate('/panel/business');
    } else if (email.includes('admin')) {
        navigate('/admin/dashboard');
    } else {
        // Default Fallback for demo if not matching specific rules
        // In production, this would be an API call failure
        if(email && password) {
             // Assume Business Login for generic entries
             navigate('/panel/business'); 
        } else {
             setError('Credenciais inválidas.');
        }
    }
  };

  const handleSocialLogin = (provider: string) => {
      // Mock social login - In production this would use OAuth
      console.log(`Login with ${provider}`);
      navigate('/panel/business');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-slate-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-6">
             <svg className="h-12 w-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 92C50 92 88 72 88 48C88 27.0132 70.9868 10 50 10C29.0132 10 12 27.0132 12 48C12 72 50 92 50 92Z" stroke="#1d4ed8" strokeWidth="6" fill="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M30 70V50L42 42V70H30Z" fill="#bfdbfe"/>
                <path d="M42 70V35L58 28V70H42Z" fill="#2563eb"/>
                <path d="M58 70V45L70 52V70H58Z" fill="#60a5fa"/>
            </svg>
            <span className="font-extrabold text-3xl text-[#1e3a8a]">nossa<span className="text-blue-600">cidade</span></span>
        </div>
        {/* Removed specific titles as requested */}
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl rounded-xl sm:px-10 border border-slate-100">
          
          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
             <button 
                type="button" 
                onClick={() => handleSocialLogin('Google')}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-slate-300 rounded-lg shadow-sm bg-white text-slate-700 font-bold hover:bg-slate-50 transition-colors"
             >
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                Entrar com Google
             </button>
             <button 
                type="button" 
                onClick={() => handleSocialLogin('Apple')}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-slate-300 rounded-lg shadow-sm bg-black text-white font-bold hover:bg-slate-800 transition-colors"
             >
                <img src="https://www.svgrepo.com/show/512317/apple-173.svg" alt="Apple" className="w-5 h-5 invert" />
                Entrar com Apple ID
             </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-500">
                Ou utilize suas credenciais
              </span>
            </div>
          </div>

          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm flex items-center gap-2">
               <AlertCircle className="w-4 h-4" /> {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Email Corporativo / Pessoal
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-3 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                Senha
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-3 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="********"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
               <div className="flex items-center">
                 <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded" />
                 <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-900">Lembrar de mim</label>
               </div>
               <div className="text-sm">
                 <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Esqueceu a senha?</a>
               </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none transition-colors"
              >
                <LogIn className="w-4 h-4" />
                Acessar Painel
              </button>
            </div>
          </form>
        </div>
        
        <div className="text-center mt-6">
             <Link to={lastCity} className="text-slate-500 hover:text-slate-900 text-sm flex items-center justify-center gap-1">
                <ArrowRight className="w-4 h-4 rotate-180" /> Voltar para a cidade
             </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;