import { useState, useRef } from 'react';
import { Github, Download, Link as LinkIcon, FileCode, Check, ArrowLeft } from 'lucide-react';
import html2canvas from 'html2canvas';
import DevCard from './DevCard';

const ResultScreen = ({ userData, reposData, loadingRepos, onBack }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMd, setCopiedMd] = useState(false);
  const resultsRef = useRef(null);

  const handleDownload = async () => {
    if (!resultsRef.current) return;
    setIsDownloading(true);
    try {
      const canvas = await html2canvas(resultsRef.current, {
        backgroundColor: '#020617',
        scale: 2,
        logging: false,
        useCORS: true 
      });
      const link = document.createElement('a');
      link.download = `hub-card-${userData.login}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error("Erro:", err);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyMarkdown = () => {
    const markdown = `[![HubCard Profile](https://img.shields.io/badge/HubCard-View_Profile-3b82f6?style=for-the-badge&logo=github&logoColor=white)](${window.location.href})`;
    navigator.clipboard.writeText(markdown);
    setCopiedMd(true);
    setTimeout(() => setCopiedMd(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col items-center py-8 px-4 font-sans selection:bg-blue-500/30">
        
        {/* Navbar */}
        <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center mb-10 gap-4 animate-fade-in-up">
            <div className="flex items-center gap-4 w-full sm:w-auto">
                <button 
                    onClick={onBack}
                    className="p-2 hover:bg-slate-900 rounded-full transition-colors text-slate-400 hover:text-white"
                    title="Voltar para busca"
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-slate-900 rounded-lg border border-slate-800">
                        <Github className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-white">
                        Hub<span className="text-blue-500">Card</span>
                    </span>
                </div>
            </div>

            {/* Ações */}
            <div className="flex gap-2 w-full sm:w-auto justify-end">
                 <button 
                    onClick={handleShareLink}
                    className="flex-1 sm:flex-none justify-center flex p-2 bg-slate-900 text-slate-400 hover:text-white rounded-lg border border-slate-800 hover:border-slate-600 transition-all"
                    title="Copiar Link"
                >
                    {copiedLink ? <Check className="w-5 h-5 text-green-400" /> : <LinkIcon className="w-5 h-5" />}
                </button>
                <button 
                    onClick={handleCopyMarkdown}
                    className="flex-1 sm:flex-none justify-center flex p-2 bg-slate-900 text-slate-400 hover:text-white rounded-lg border border-slate-800 hover:border-slate-600 transition-all"
                    title="Copiar Markdown"
                >
                    {copiedMd ? <Check className="w-5 h-5 text-green-400" /> : <FileCode className="w-5 h-5" />}
                </button>
                <button 
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="flex-1 sm:flex-none justify-center flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-lg hover:shadow-blue-500/20 whitespace-nowrap"
                >
                    {isDownloading ? <span className="animate-pulse">...</span> : <><Download className="w-4 h-4" /> Baixar</>}
                </button>
            </div>
        </div>

        {/* Card */}
        <div className="w-full flex justify-center animate-fade-in-up">
            <DevCard 
                ref={resultsRef}
                user={userData}
                repos={reposData}
                loadingRepos={loadingRepos}
            />
        </div>

        <footer className="mt-auto pt-10 pb-6 text-slate-600 text-sm text-center">
            <p>Gerado para <strong>{userData.name || userData.login}</strong></p>
        </footer>
    </div>
  );
};

export default ResultScreen;