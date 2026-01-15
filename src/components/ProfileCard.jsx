// src/components/ProfileCard.jsx
import { MapPin, Calendar } from "lucide-react";

const ProfileCard = ({ user, languages = [] }) => {
  if (!user) return null;

  const total = languages.reduce((acc, l) => acc + l.value, 0);

  return (
    <section className="w-full max-w-6xl mx-auto px-4">
      {/* AUMENTO: p-8 e md:p-12 (antes era p-5/p-10) para dar mais respiro interno */}
      <div className="bg-slate-900/95 rounded-2xl shadow-2xl ring-1 ring-slate-800/60 p-8 sm:p-10 md:p-14">

        {/* HEADER */}
        {/* AUMENTO: gap-8 e md:gap-12 (afastar avatar do texto) */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">

          {/* AVATAR */}
          <div className="relative shrink-0">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 opacity-50 blur-sm hidden sm:block" />
            <img
              src={user.avatar_url}
              alt={user.name}
              crossOrigin="anonymous"
              className="
                relative
                w-24 h-24
                sm:w-28 sm:h-28
                md:w-36 md:h-36 
                rounded-full
                object-cover
                border-4 border-slate-900
                bg-slate-900
              "
            />
          </div>

          {/* INFO */}
          <div className="flex-1 w-full text-center md:text-left">

            {/* NOME: Adicionado mb-3 para afastar do user */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
              {user.name || user.login}
            </h1>

            {/* USERNAME + ANO: Adicionado mb-6 para afastar da Bio */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-6">
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 font-mono font-semibold text-base"
              >
                @{user.login}
              </a>

              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300 bg-slate-950 px-3 py-1.5 rounded-full border border-slate-800/50">
                <Calendar className="w-3.5 h-3.5 text-blue-500" />
                <span>{new Date(user.created_at).getFullYear()}</span>
              </div>
            </div>

            {/* BIO: Aumentei o leading (relaxed) e margem superior */}
            <p className="text-slate-300 text-sm sm:text-base leading-loose max-w-2xl mx-auto md:mx-0">
              {user.bio || "Desenvolvedor focado em criar soluções eficientes e bem estruturadas."}
            </p>

            {/* STATS: Aumentei margem superior (mt-10) */}
            <div className="mt-10 grid grid-cols-3 bg-slate-950/70 rounded-2xl divide-x divide-slate-800 border border-slate-800/30">
              <Stat label="Projetos" value={user.public_repos} />
              <Stat label="Seguidores" value={user.followers} />
              <Stat label="Seguindo" value={user.following} />
            </div>

            {/* TOP LANGUAGES: Aumentei margem superior (mt-10) e padding (p-6) */}
            {languages.length > 0 && (
              <div className="mt-10 bg-slate-950/60 rounded-2xl p-6 ring-1 ring-slate-800">
                <h3 className="text-sm font-bold text-slate-400 mb-6 tracking-widest uppercase">
                  Top Languages
                </h3>

                {/* Aumentei o espaçamento entre as barras (space-y-5) */}
                <div className="space-y-5">
                  {languages.map((lang) => {
                    const percent = Math.round((lang.value / total) * 100);

                    return (
                      <div key={lang.name} className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex items-center gap-3 text-slate-200 font-medium">
                            <span
                              className="w-3 h-3 rounded-full shadow"
                              style={{
                                backgroundColor: lang.color,
                                boxShadow: `0 0 8px ${lang.color}`,
                              }}
                            />
                            {lang.name}
                          </div>
                          <span className="text-xs text-slate-400 font-mono">
                            {percent}%
                          </span>
                        </div>

                        {/* Barra um pouco mais grossa (h-3) */}
                        <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800/50">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{
                              width: `${percent}%`,
                              backgroundColor: lang.color,
                              boxShadow: `0 0 10px ${lang.color}40`,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* LOCAL: Aumentei margem superior (mt-8) */}
            {user.location && (
              <div className="mt-8 flex justify-center md:justify-start items-center gap-2 text-sm text-slate-400 font-medium">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>{user.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Aumentei o padding vertical (py-6) para os números não ficarem espremidos
const Stat = ({ label, value }) => (
  <div className="py-6 text-center">
    <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-500 font-bold mb-1">
      {label}
    </div>
    <div className="text-xl sm:text-2xl font-bold text-white">
      {value}
    </div>
  </div>
);

export default ProfileCard;