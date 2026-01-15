// src/components/ProfileCard.jsx
import { MapPin, Calendar } from "lucide-react";

const ProfileCard = ({ user, languages = [] }) => {
  if (!user) return null;

  // Calcula o total para as porcentagens (se houver linguagens)
  const total = languages.reduce((acc, l) => acc + l.value, 0);

  return (
    <section className="w-full max-w-5xl mx-auto">
      {/* CARD PRINCIPAL: Fundo sólido para garantir o download perfeito */}
      <div className="bg-slate-900 rounded-[2rem] shadow-2xl border border-slate-800 p-8 md:p-12 relative overflow-hidden">
        
        {/* Efeito de luz de fundo (decorativo) */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* HEADER: Avatar + Infos */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 relative z-10">

          {/* AVATAR */}
          <div className="relative shrink-0 group">
            {/* Glow atrás da foto */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full opacity-60 blur-lg group-hover:opacity-100 transition duration-500"></div>
            
            <img
              src={user.avatar_url}
              alt={user.name}
              crossOrigin="anonymous"
              className="
                relative z-10
                w-32 h-32
                md:w-40 md:h-40
                rounded-full
                object-cover
                border-[6px] border-slate-900
                bg-slate-900
                shadow-xl
              "
            />
          </div>

          {/* INFO TEXTUAL */}
          <div className="flex-1 w-full text-center md:text-left pt-2">

            {/* NOME: Fonte maior e mais pesada */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
              {user.name || user.login}
            </h1>

            {/* USERNAME + ANO */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-6">
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 font-mono text-lg font-bold transition-colors"
              >
                @{user.login}
              </a>

              <span className="hidden sm:block text-slate-600">•</span>

              <div className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-800/80 px-4 py-1.5 rounded-full border border-slate-700">
                <Calendar className="w-3.5 h-3.5 text-blue-500" />
                <span>{new Date(user.created_at).getFullYear()}</span>
              </div>
            </div>

            {/* BIO: Mais espaçada */}
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto md:mx-0 mb-8">
              {user.bio || "Desenvolvedor focado em criar soluções eficientes e bem estruturadas."}
            </p>

            {/* LOCALIZAÇÃO (Se existir) */}
            {user.location && (
              <div className="flex justify-center md:justify-start items-center gap-2 text-sm text-slate-400 mb-8">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>{user.location}</span>
              </div>
            )}
          </div>
        </div>

        {/* STATS: Grade mais separada */}
        <div className="mt-8 grid grid-cols-3 bg-slate-950 rounded-2xl border border-slate-800 relative z-10 overflow-hidden">
          <Stat label="Projetos" value={user.public_repos} />
          <Stat label="Seguidores" value={user.followers} hasBorder />
          <Stat label="Seguindo" value={user.following} hasBorder />
        </div>

        {/* TOP LANGUAGES: Só renderiza se tiver dados */}
        {languages.length > 0 && (
          <div className="mt-10 pt-8 border-t border-slate-800 relative z-10">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">
              Top Linguagens
            </h3>

            <div className="space-y-5">
              {languages.map((lang) => {
                const percent = Math.round((lang.value / total) * 100);

                return (
                  <div key={lang.name} className="group">
                    <div className="flex justify-between items-end mb-2">
                      <div className="flex items-center gap-2 text-white font-medium">
                        <span
                          className="w-3 h-3 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)]"
                          style={{ backgroundColor: lang.color }}
                        />
                        {lang.name}
                      </div>
                      <span className="text-sm font-mono text-slate-400 group-hover:text-white transition-colors">
                        {percent}%
                      </span>
                    </div>

                    <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${percent}%`,
                          backgroundColor: lang.color,
                          boxShadow: `0 0 12px ${lang.color}40`, // Glow suave na barra
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

// Componente auxiliar de Stat para limpar o código principal
const Stat = ({ label, value, hasBorder }) => (
  <div className={`py-6 text-center ${hasBorder ? 'border-l border-slate-800' : ''}`}>
    <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-500 font-bold mb-2">
      {label}
    </div>
    <div className="text-2xl md:text-3xl font-extrabold text-white">
      {value}
    </div>
  </div>
);

export default ProfileCard;