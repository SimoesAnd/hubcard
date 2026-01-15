import { MapPin, Link as LinkIcon, Users, Calendar } from 'lucide-react';

const ProfileCard = ({ user }) => {
  if (!user) return null;

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl animate-fade-in-up mb-8">
      
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
        
        {/* Avatar */}
        <div className="relative group shrink-0">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 blur"></div>
          <img 
            src={user.avatar_url} 
            alt={user.name} 
            className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-slate-900 object-cover"
          />
        </div>
        
        {/* Informações */}
        <div className="flex-1 w-full min-w-0">
          
          {/* Header do Nome */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
            {/* CORREÇÃO: leading-normal e py-1 para não cortar acentos */}
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-normal py-1">
              {user.name || user.login}
            </h2>
            
            <div className="flex items-center gap-1 text-xs text-slate-500 bg-slate-950 px-3 py-1.5 rounded-full border border-slate-800 shrink-0 mt-1">
              <Calendar className="w-3 h-3" />
              <span>{new Date(user.created_at).getFullYear()}</span>
            </div>
          </div>

          {/* Username */}
          <div className="mb-4">
            <a 
                href={user.html_url} 
                target="_blank" 
                rel="noreferrer" 
                className="text-blue-400 hover:text-blue-300 transition-colors font-mono text-sm md:text-base inline-block py-0.5"
            >
                @{user.login}
            </a>
          </div>

          {/* Bio: leading-relaxed para as linhas não ficarem grudadas */}
          <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-6">
            {user.bio || "Este desenvolvedor prefere codar a escrever biografias."}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 bg-slate-950/50 p-4 rounded-xl border border-slate-800/50 w-full mb-6">
            <div className="text-center">
              <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-1">Projetos</div>
              <div className="font-bold text-white text-lg md:text-xl leading-normal">{user.public_repos}</div>
            </div>
            <div className="text-center border-l border-slate-800">
              <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-1">Seguidores</div>
              <div className="font-bold text-white text-lg md:text-xl leading-normal">{user.followers}</div>
            </div>
            <div className="text-center border-l border-slate-800">
              <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-1">Seguindo</div>
              <div className="font-bold text-white text-lg md:text-xl leading-normal">{user.following}</div>
            </div>
          </div>

          {/* Footer Infos */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-400">
            {user.location && (
              <div className="flex items-center gap-1.5 py-1">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0" /> <span>{user.location}</span>
              </div>
            )}
            {user.blog && (
              <div className="flex items-center gap-1.5 py-1">
                <LinkIcon className="w-4 h-4 text-blue-500 shrink-0" /> 
                <a 
                  href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-blue-400 transition-colors border-b border-transparent hover:border-blue-400 max-w-[200px] truncate leading-normal"
                >
                  Website
                </a>
              </div>
            )}
            {user.company && (
               <div className="flex items-center gap-1.5 py-1">
                <Users className="w-4 h-4 text-blue-500 shrink-0" /> <span>{user.company}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;