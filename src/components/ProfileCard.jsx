// src/components/ProfileCard.jsx
import { MapPin, Link as LinkIcon, Users, Calendar } from 'lucide-react';

const ProfileCard = ({ user }) => {
  if (!user) return null;

  return (
    // MUDANÇA: Bordas mais claras (slate-700/50) e sombra colorida sutil para dar "vida"
    <div className="w-full bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 md:p-8 shadow-2xl shadow-blue-900/10 animate-fade-in-up mb-8">
      
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
        
        {/* --- ÁREA DO AVATAR CORRIGIDA --- */}
        <div className="relative group shrink-0 font-sans">
          {/* O brilho fica ATRÁS (sem z-index alto) */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-70 group-hover:opacity-100 blur-md transition-all duration-300"></div>
          
          {/* CORREÇÃO CRÍTICA: z-10 para garantir que a foto fique NA FRENTE do brilho azul */}
          <img 
            src={user.avatar_url} 
            alt={user.name} 
            crossOrigin="anonymous"
            className="relative z-10 w-28 h-28 md:w-36 md:h-36 rounded-full border-[5px] border-slate-900 object-cover shadow-lg"
          />
        </div>
        
        {/* Informações */}
        <div className="flex-1 w-full min-w-0">
          
          {/* Nome: Mais destaque (extrabold) e espaçamento */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-normal py-1 mb-3 drop-shadow-sm">
            {user.name || user.login}
          </h2>
          
          {/* Username + Ano: Cores mais vivas */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-5">
            <a 
                href={user.html_url} 
                target="_blank" 
                rel="noreferrer" 
                // MUDANÇA: Azul mais vibrante (blue-400)
                className="text-blue-400 hover:text-blue-300 transition-colors font-mono text-sm md:text-base inline-block py-0.5 font-bold tracking-wide"
            >
                @{user.login}
            </a>

            <span className="hidden sm:inline text-slate-500/50">•</span>

            {/* Badge mais destacada */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700/50 shrink-0 shadow-sm">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>{new Date(user.created_at).getFullYear()}</span>
            </div>
          </div>

          {/* Bio: Texto mais claro (slate-200) para leitura fácil */}
          <p className="text-slate-200 leading-relaxed text-sm md:text-base mb-6 font-medium">
            {user.bio || "Este desenvolvedor prefere codar a escrever biografias."}
          </p>

          {/* Stats: Fundo mais claro e números brancos */}
          <div className="grid grid-cols-3 gap-2 bg-slate-800/40 p-4 rounded-2xl border border-slate-700/40 w-full mb-6 shadow-inner">
            <div className="text-center">
              <div className="text-[10px] uppercase tracking-wider text-blue-300/70 font-bold mb-1">Projetos</div>
              <div className="font-extrabold text-white text-xl md:text-2xl leading-normal">{user.public_repos}</div>
            </div>
            <div className="text-center border-l border-slate-700/50">
              <div className="text-[10px] uppercase tracking-wider text-blue-300/70 font-bold mb-1">Seguidores</div>
              <div className="font-extrabold text-white text-xl md:text-2xl leading-normal">{user.followers}</div>
            </div>
            <div className="text-center border-l border-slate-700/50">
              <div className="text-[10px] uppercase tracking-wider text-blue-300/70 font-bold mb-1">Seguindo</div>
              <div className="font-extrabold text-white text-xl md:text-2xl leading-normal">{user.following}</div>
            </div>
          </div>

          {/* Footer Infos: Ícones vibrantes e texto claro */}
          <div className="flex flex-wrap justify-center md:justify-start gap-5 text-sm font-medium text-slate-300">
            {user.location && (
              <div className="flex items-center gap-2 py-1">
                <MapPin className="w-4.5 h-4.5 text-blue-400 shrink-0" /> <span className="drop-shadow-sm">{user.location}</span>
              </div>
            )}
            {user.blog && (
              <div className="flex items-center gap-2 py-1">
                <LinkIcon className="w-4.5 h-4.5 text-blue-400 shrink-0" /> 
                <a 
                  href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-blue-300 transition-colors border-b-2 border-transparent hover:border-blue-400/50 max-w-[200px] truncate leading-normal"
                >
                  Website
                </a>
              </div>
            )}
            {user.company && (
               <div className="flex items-center gap-2 py-1">
                <Users className="w-4.5 h-4.5 text-blue-400 shrink-0" /> <span className="drop-shadow-sm">{user.company}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;