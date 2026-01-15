// src/components/ProfileCard.jsx
import { MapPin, Link as LinkIcon, Users, Calendar } from 'lucide-react';

const ProfileCard = ({ user }) => {
  if (!user) return null;

  return (
    // CARD: Fundo sólido (bg-slate-900) para evitar bugs de transparência no download
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl animate-fade-in-up mb-8">
      
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
        
        {/* --- ÁREA DO AVATAR (Blindada contra filtro azul) --- */}
        <div className="shrink-0">
          {/* TRUQUE: Usamos uma div com gradiente e padding (p-1) para simular a borda.
              Isso elimina o uso de 'absolute', que estava causando o filtro azul. */}
          <div className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 p-1">
            <img 
              src={user.avatar_url} 
              alt={user.name} 
              crossOrigin="anonymous"
              // Fundo slate-900 atrás da imagem para garantir que nada vaze
              className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-slate-900 bg-slate-900 object-cover"
            />
          </div>
        </div>
        
        {/* --- INFORMAÇÕES --- */}
        <div className="flex-1 w-full min-w-0">
          
          {/* 1. NOME: Branco puro para contraste máximo */}
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-normal py-1 mb-2">
            {user.name || user.login}
          </h2>
          
          {/* 2. USERNAME + DATA */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
            <a 
                href={user.html_url} 
                target="_blank" 
                rel="noreferrer" 
                className="text-blue-400 hover:text-blue-300 transition-colors font-mono text-sm md:text-base font-bold tracking-wide"
            >
                @{user.login}
            </a>

            <span className="hidden sm:inline text-slate-600">•</span>

            {/* Badge Sólida */}
            <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950 px-3 py-1.5 rounded-full border border-slate-800 shrink-0">
              <Calendar className="w-3.5 h-3.5 text-blue-500" />
              <span>{new Date(user.created_at).getFullYear()}</span>
            </div>
          </div>

          {/* BIO */}
          <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-6 font-medium">
            {user.bio || "Este desenvolvedor prefere codar a escrever biografias."}
          </p>

          {/* STATS: Fundo sólido escuro */}
          <div className="grid grid-cols-3 gap-2 bg-slate-950 p-4 rounded-xl border border-slate-800 w-full mb-6">
            <div className="text-center">
              <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">Projetos</div>
              <div className="font-bold text-white text-lg md:text-xl leading-normal">{user.public_repos}</div>
            </div>
            <div className="text-center border-l border-slate-800">
              <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">Seguidores</div>
              <div className="font-bold text-white text-lg md:text-xl leading-normal">{user.followers}</div>
            </div>
            <div className="text-center border-l border-slate-800">
              <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">Seguindo</div>
              <div className="font-bold text-white text-lg md:text-xl leading-normal">{user.following}</div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="flex flex-wrap justify-center md:justify-start gap-5 text-sm text-slate-400 font-medium">
            {user.location && (
              <div className="flex items-center gap-1.5 py-1">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0" /> <span className="text-slate-300">{user.location}</span>
              </div>
            )}
            {user.blog && (
              <div className="flex items-center gap-1.5 py-1">
                <LinkIcon className="w-4 h-4 text-blue-500 shrink-0" /> 
                <a 
                  href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-slate-300 hover:text-blue-400 transition-colors border-b border-transparent hover:border-blue-400 max-w-[200px] truncate leading-normal"
                >
                  Website
                </a>
              </div>
            )}
            {user.company && (
               <div className="flex items-center gap-1.5 py-1">
                <Users className="w-4 h-4 text-blue-500 shrink-0" /> <span className="text-slate-300">{user.company}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;