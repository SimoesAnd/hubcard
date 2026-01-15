// src/components/ProfileCard.jsx
import { MapPin, Link as LinkIcon, Users, Calendar } from "lucide-react";

const ProfileCard = ({ user }) => {
  if (!user) return null;

  return (
    <div className="w-full max-w-5xl mx-auto bg-slate-900 ring-1 ring-slate-800/60 rounded-2xl p-6 md:p-8 shadow-2xl mb-10">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">

        {/* AVATAR */}
        <div className="relative shrink-0">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 opacity-60 blur"></div>
          <img
            src={user.avatar_url}
            alt={user.name}
            crossOrigin="anonymous"
            className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-slate-900 object-cover bg-slate-900"
          />
        </div>

        {/* INFO */}
        <div className="flex-1 w-full min-w-0 text-center md:text-left">

          {/* NOME */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">
            {user.name || user.login}
          </h2>

          {/* USER + DATA */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mb-5">
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300 font-mono font-bold"
            >
              @{user.login}
            </a>

            <span className="text-slate-600">•</span>

            <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-950 px-3 py-1.5 rounded-full">
              <Calendar className="w-3.5 h-3.5 text-blue-500" />
              <span>{new Date(user.created_at).getFullYear()}</span>
            </div>
          </div>

          {/* BIO */}
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
            {user.bio || "Este desenvolvedor prefere codar a escrever biografias."}
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 bg-slate-950/60 rounded-xl p-4 mb-6">
            {[
              ["Projetos", user.public_repos],
              ["Seguidores", user.followers],
              ["Seguindo", user.following],
            ].map(([label, value]) => (
              <div key={label} className="text-center">
                <div className="text-[11px] uppercase tracking-widest text-slate-500 mb-1">
                  {label}
                </div>
                <div className="text-xl font-bold text-white">
                  {value}
                </div>
              </div>
            ))}
          </div>

          {/* FOOTER */}
          <div className="flex flex-wrap gap-6 justify-center md:justify-start text-sm text-slate-400">
            {user.location && (
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>{user.location}</span>
              </div>
            )}

            {user.blog && (
              <a
                href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-400 transition"
              >
                <LinkIcon className="w-4 h-4 text-blue-500" />
                <span className="truncate max-w-[200px]">Website</span>
              </a>
            )}

            {user.company && (
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-blue-500" />
                <span>{user.company}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
