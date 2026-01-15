// src/components/ProfileCard.jsx
import { MapPin, Calendar } from "lucide-react";

const ProfileCard = ({ user }) => {
  if (!user) return null;

  return (
    <section className="w-full max-w-6xl mx-auto px-4">
      <div className="bg-slate-900/95 rounded-2xl shadow-2xl ring-1 ring-slate-800/60 p-5 sm:p-7 md:p-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">

          {/* AVATAR */}
          <div className="relative shrink-0">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 opacity-50 blur-sm hidden sm:block" />
            <img
              src={user.avatar_url}
              alt={user.name}
              crossOrigin="anonymous"
              className="
                relative
                w-20 h-20
                sm:w-24 sm:h-24
                md:w-28 md:h-28
                rounded-full
                object-cover
                border-4 border-slate-900
                bg-slate-900
              "
            />
          </div>

          {/* INFO */}
          <div className="flex-1 w-full text-center md:text-left">

            {/* NOME */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              {user.name || user.login}
            </h1>

            {/* USERNAME + ANO */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mt-2">
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 font-mono font-semibold text-sm"
              >
                @{user.login}
              </a>

              {/* Ano só aparece a partir de sm */}
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-300 bg-slate-950 px-3 py-1.5 rounded-full">
                <Calendar className="w-3.5 h-3.5 text-blue-500" />
                <span>{new Date(user.created_at).getFullYear()}</span>
              </div>
            </div>

            {/* BIO */}
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
              {user.bio ||
                "Desenvolvedor focado em criar soluções eficientes e bem estruturadas."}
            </p>

            {/* STATS */}
            <div className="mt-6 grid grid-cols-3 bg-slate-950/70 rounded-xl divide-x divide-slate-800">
              <Stat label="Projetos" value={user.public_repos} />
              <Stat label="Seguidores" value={user.followers} />
              <Stat label="Seguindo" value={user.following} />
            </div>

            {/* LOCAL */}
            {user.location && (
              <div className="mt-5 flex justify-center md:justify-start items-center gap-2 text-sm text-slate-300">
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

const Stat = ({ label, value }) => (
  <div className="py-4 text-center">
    <div className="text-[11px] uppercase tracking-widest text-slate-500">
      {label}
    </div>
    <div className="text-lg sm:text-xl font-bold text-white mt-1">
      {value}
    </div>
  </div>
);

export default ProfileCard;
