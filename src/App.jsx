// src/App.jsx
import { useState, useEffect, useCallback } from 'react';
import { useGithubUser } from './hooks/useGithub';
import HomeScreen from './components/HomeScreen';
import ResultScreen from './components/ResultScreen';

function App() {
  const [search, setSearch] = useState('');
  
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('github-history');
    return saved ? JSON.parse(saved) : [];
  });
  
  const { userQuery, reposQuery } = useGithubUser(search);

  // 1. Funções estáveis com useCallback
  const updateUrl = useCallback((term) => {
    const url = new URL(window.location);
    if (term) {
        url.searchParams.set('username', term);
    } else {
        url.searchParams.delete('username');
    }
    window.history.pushState({}, '', url);
  }, []);

  const addToHistory = useCallback((name) => {
    const cleanName = name.trim().toLowerCase();
    
    setHistory(prevHistory => {
        const filteredHistory = prevHistory.filter(h => h !== cleanName);
        const newHistory = [cleanName, ...filteredHistory].slice(0, 5);
        localStorage.setItem('github-history', JSON.stringify(newHistory));
        return newHistory;
    });
  }, []);

  const handleSearchFlow = useCallback((term) => {
    if(!term.trim()) return;
    const cleanTerm = term.trim();
    
    setSearch(cleanTerm);
    updateUrl(cleanTerm);
    addToHistory(cleanTerm);
  }, [updateUrl, addToHistory]);

  const handleBack = () => {
    setSearch('');
    updateUrl(null);
    // userQuery.reset(); <--- REMOVIDO: Isso causava o erro. 
    // Apenas limpar a busca já reseta a visualização.
  };

  const clearHistory = () => {
      setHistory([]);
      localStorage.removeItem('github-history');
  };

  // 2. useEffect seguro
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userParam = params.get('username');
    if (userParam) {
      handleSearchFlow(userParam);
    }
  }, [handleSearchFlow]); 

  // --- RENDERIZAÇÃO ---
  
  // Só mostra resultado se tiver busca E dados carregados com sucesso
  if (search && userQuery.isSuccess && userQuery.data) {
    return (
      <ResultScreen 
        userData={userQuery.data}
        reposData={reposQuery.data}
        loadingRepos={reposQuery.isLoading}
        onBack={handleBack}
      />
    );
  }

  return (
    <HomeScreen 
      onSearch={handleSearchFlow}
      history={history}
      onHistoryClick={handleSearchFlow}
      onClearHistory={clearHistory}
      isLoading={userQuery.isLoading}
      isError={userQuery.isError}
    />
  );
}

export default App;