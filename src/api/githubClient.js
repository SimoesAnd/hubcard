// src/api/githubClient.js
import axios from 'axios';

const githubClient = axios.create({
  baseURL: 'https://api.github.com',
  // Se você tiver um token (opcional para começar), coloque aqui:
  // headers: { Authorization: `token ${SEU_TOKEN}` }
});

export default githubClient;