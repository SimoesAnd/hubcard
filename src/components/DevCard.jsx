// src/components/DevCard.jsx
import { forwardRef } from 'react';
import ProfileCard from './ProfileCard';
import RepoList from './RepoList';
import LanguageChart from './LanguageChart';

const DevCard = forwardRef(({ user, repos, loadingRepos }, ref) => {
  return (
    <div 
      ref={ref} 
      className="w-full max-w-4xl flex flex-col items-center bg-slate-950 p-4 sm:p-8 md:p-12 rounded-xl md:rounded-[2rem] mx-auto shadow-2xl border border-slate-900/50 box-border"
    >
        
        {/* Cabeçalho */}
        <div className="w-full text-center mb-8 md:mb-12 opacity-30 text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase font-mono border-b border-slate-800/50 pb-4 md:pb-6 select-none">
              HubCard • Seu passaporte dev {new Date().getFullYear()}
        </div>

        {/* 1. PROFILE WRAPPER */}
        {/* AUMENTO: Adicionei mb-10 (40px) e md:mb-16 (64px) para afastar do gráfico */}
        <div className="w-full max-w-3xl mb-10 md:mb-16">
           <ProfileCard user={user} />
        </div>
        
        {repos && repos.length > 0 && (
            /* 2. CHART WRAPPER */
            /* AUMENTO: Antes era mb-4. Agora é mb-10/mb-16 para manter o ritmo igual ao de cima */
            <div className="w-full max-w-3xl mb-10 md:mb-16">
                <LanguageChart repos={repos} />
            </div>
        )}

        {/* 3. REPO LIST WRAPPER */}
        <div className="w-full max-w-3xl">
            <RepoList repos={repos} isLoading={loadingRepos} />
        </div>
        
        {/* Footer */}
        <div className="mt-12 md:mt-16 text-slate-700 text-[10px] uppercase tracking-widest select-none opacity-50">
            Gerado via HubCard
        </div>
    </div>
  );
});

DevCard.displayName = 'DevCard';

export default DevCard;