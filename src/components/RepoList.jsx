// src/components/RepoList.jsx
import { Star, GitFork, Code } from 'lucide-react';

const RepoList = ({ repos, isLoading }) => {
  if (isLoading) {
    return (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 animate-pulse">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-32 bg-slate-900 rounded-xl border border-slate-800"></div>
        ))}
      </div>
    );
  }

  if (!repos || repos.length === 0) return null;

  return (
    <div className="w-full animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      
      {/* Header da Seção */}
      <div className="px-2 md:px-6 mb-4">
        <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 border-b border-slate-800 pb-2 leading-normal">
            <Code className="w-5 h-5 text-blue-400" /> Últimos Projetos
        </h3>
      </div>
      
      {/* Grid Responsivo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-1">
        {repos.map((repo) => (
          <a 
            key={repo.id} 
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="group bg-slate-800/40 border border-slate-700/50 p-4 md:p-5 rounded-xl hover:border-blue-400 hover:bg-slate-800 transition-all duration-300 relative flex flex-col h-full"
          >
            {/* Header do Card */}
            <div className="flex justify-between items-start gap-3 mb-3">
              <h4 className="font-bold text-blue-300 group-hover:text-blue-200 text-sm md:text-base flex-1 leading-normal break-words py-0.5">
                {repo.name}
              </h4>
              
              {/* Badge Public */}
              <span className="shrink-0 text-[10px] font-mono uppercase bg-slate-900 text-slate-400 px-2 md:px-3 py-1 md:py-1.5 rounded border border-slate-700 flex items-center justify-center leading-normal tracking-wide h-fit mt-0.5 border-opacity-50">
                {repo.visibility}
              </span>
            </div>
            
            {/* Descrição */}
            <p className="text-sm text-slate-300 line-clamp-2 mb-4 leading-relaxed flex-grow py-0.5 font-medium">
              {repo.description || "Sem descrição disponível para este projeto."}
            </p>
            
            {/* Footer */}
            <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-700/50 mt-auto font-medium">
              
              {/* CORREÇÃO AQUI: Adicionado 'py-1' e 'inline-block' na linguagem */}
              <div className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full ${repo.language ? 'bg-yellow-400' : 'bg-slate-600'}`}></div>
                <span className="truncate max-w-[80px] leading-normal text-slate-300 py-1 inline-block">
                    {repo.language || "N/A"}
                </span>
              </div>
              
              <div className="flex items-center gap-3 md:gap-4">
                <span className="flex items-center gap-1 group-hover:text-yellow-400 transition-colors">
                  <Star className="w-3.5 h-3.5 text-yellow-500" /> <span className="leading-normal">{repo.stargazers_count}</span>
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3.5 h-3.5 text-slate-500" /> <span className="leading-normal">{repo.forks_count}</span>
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RepoList;