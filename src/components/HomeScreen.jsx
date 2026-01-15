import { useState } from 'react';
import { Search, Github, Terminal, Clock, Trash2 } from 'lucide-react';

const HomeScreen = ({ onSearch, history, onHistoryClick, onClearHistory, isLoading, isError }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col items-center justify-center px-4 font-sans selection:bg-blue-500/30 relative overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[80px] md:blur-[120px]"></div>
      </div>

      <div className="w-full max-w-xl flex flex-col items-center relative z-10 -mt-10 md:-mt-20">
        
        {/* Logo */}
        <div className="mb-6 md:mb-10 text-center space-y-4 md:space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center justify-center p-4 md:p-6 bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl mb-2 md:mb-4 hover:scale-105 transition-transform duration-500 group">
                <Github className="w-12 h-12 md:w-16 md:h-16 text-white group-hover:text-blue-400 transition-colors" />
            </div>
            {/* Texto Responsivo: text-5xl (mobile) -> text-7xl (desktop) */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Hub<span className="text-blue-500">Card</span>
            </h1>
            <p className="text-slate-400 text-base md:text-xl max-w-xs md:max-w-md mx-auto">
                Seu perfil do GitHub agora em versão passaporte dev!
            </p>
        </div>

        {/* Input de Busca */}
        <div className="w-full relative mb-6 md:mb-8 group z-20">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-30 group-hover:opacity-50 transition duration-500 blur"></div>
            <div className="relative bg-slate-900 rounded-2xl flex items-center p-1.5 md:p-2 border border-slate-800 shadow-2xl focus-within:border-blue-500/50 transition-colors">
                <div className="pl-3 md:pl-4 pr-2 text-slate-500"><Search className="w-5 h-5 md:w-6 md:h-6" /></div>
                <form onSubmit={handleSubmit} className="flex-1">
                    <input 
                        type="text"
                        placeholder="Digite o username..." 
                        className="w-full bg-transparent outline-none text-white h-12 md:h-14 text-base md:text-lg placeholder-slate-600"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </form>
                <button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-500 text-white px-4 md:px-8 py-2 md:py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-blue-900/20 text-sm md:text-lg">
                    Buscar
                </button>
            </div>
        </div>

        {/* Histórico */}
        <div className="w-full h-24 flex flex-col items-center justify-start z-20">
            {isLoading ? (
                <div className="flex items-center gap-3 text-slate-400 animate-pulse text-sm md:text-base">
                    <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <span>Buscando dados...</span>
                </div>
            ) : isError ? (
                 <div className="flex items-center gap-2 text-red-400 bg-red-500/10 px-4 py-2 rounded-lg border border-red-500/20 animate-fade-in-up text-sm">
                    <Terminal className="w-4 h-4" /> <span>Usuário não encontrado.</span>
                 </div>
            ) : history.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 animate-fade-in-up delay-100">
                    <span className="text-xs text-slate-600 flex items-center gap-1 mr-1 mt-1">
                        <Clock className="w-3 h-3" /> Recentes:
                    </span>
                    {history.map((item) => (
                        <button
                            key={item}
                            onClick={() => { setInputValue(item); onHistoryClick(item); }}
                            className="text-xs bg-slate-900/50 border border-slate-800 text-slate-400 px-2 md:px-3 py-1 md:py-1.5 rounded-full hover:border-blue-500 hover:text-blue-400 hover:bg-slate-900 transition-all cursor-pointer capitalize"
                        >
                            {item}
                        </button>
                    ))}
                    <button onClick={onClearHistory} className="text-slate-700 hover:text-red-400 p-1 ml-1" title="Limpar">
                        <Trash2 className="w-3 h-3" />
                    </button>
                </div>
            )}
        </div>

      </div>

      <footer className="absolute bottom-4 md:bottom-6 text-slate-700 text-[10px] md:text-xs text-center w-full">
        <p>HubCard • Por Andrews Simões</p>
      </footer>
    </div>
  );
};

export default HomeScreen;