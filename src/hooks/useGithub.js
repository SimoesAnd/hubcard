// src/hooks/useGithub.js
import { useQuery } from '@tanstack/react-query';
import githubClient from '../api/githubClient';

// Função auxiliar para buscar dados do usuário
const fetchUser = async (username) => {
  const { data } = await githubClient.get(`/users/${username}`);
  return data;
};

// Função auxiliar para buscar repositórios
const fetchRepos = async (username) => {
  const { data } = await githubClient.get(`/users/${username}/repos?sort=updated&per_page=5`);
  return data;
};

// Hook Principal que exportamos
export const useGithubUser = (username) => {
  // Query do Usuário
  const userQuery = useQuery({
    queryKey: ['github-user', username],
    queryFn: () => fetchUser(username),
    enabled: !!username, // Só roda se tiver algo escrito
    retry: 1, // Se der erro, tenta mais 1 vez só
  });

  // Query dos Repositórios (só roda se o usuário for encontrado)
  const reposQuery = useQuery({
    queryKey: ['github-repos', username],
    queryFn: () => fetchRepos(username),
    enabled: !!username && !!userQuery.data, // Só busca repo se tiver usuário
  });

  return { userQuery, reposQuery };
};