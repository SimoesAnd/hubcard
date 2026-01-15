import { forwardRef } from 'react';
import ProfileCard from './ProfileCard';
import RepoList from './RepoList';
import LanguageChart from './LanguageChart';

const DevCard = forwardRef(({ user, repos, loadingRepos }, ref) => {
  return (
    <div 
      ref={ref} 
      // Mudança: p-4 (mobile) -> p-8 (tablet) -> p-12 (notebook)
      // Mudança: rounded-xl (mobile) -> rounded-[2rem] (notebook)
      className="w-full max-w-4xl flex flex-col items-center bg-slate-950 p-4 sm:p-8 md:p-12 rounded-xl md:rounded-[2rem] mx-auto shadow-2xl border border-slate-900/50 box-border"
    >
        
        <div className="w-full text-center mb-6 md:mb-10 opacity-30 text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase font-mono border-b border-slate-800/50 pb-4 md:pb-6 select-none">
             HubCard • Seu passaporte dev {new Date().getFullYear()}
        </div>

        {/* Wrappers para garantir largura máxima consistente */}
        <div className="w-full max-w-3xl">
           <ProfileCard user={user} />
        </div>
        
        {repos && repos.length > 0 && (
            <div className="w-full max-w-3xl mb-4">
                <LanguageChart repos={repos} />
            </div>
        )}

        <div className="w-full max-w-3xl">
            <RepoList repos={repos} isLoading={loadingRepos} />
        </div>
        
        <div className="mt-8 md:mt-12 text-slate-700 text-[10px] uppercase tracking-widest select-none opacity-50">
            Gerado via HubCard
        </div>
    </div>
  );
});

DevCard.displayName = 'DevCard';

export default DevCard;