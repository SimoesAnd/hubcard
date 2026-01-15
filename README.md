<div align="center">
  
  <img src="https://img.shields.io/badge/Hub-Card-3b82f6?style=for-the-badge&logo=github&logoColor=white" alt="HubCard Logo">

  <h1>Hub<span style="color: #3b82f6">Card</span></h1>

  <p>
    <strong>Seu passaporte dev. Transforme seu perfil do GitHub em um card visual de alto nível.</strong>
  </p>

  <p>
    <a href="#-sobre">Sobre</a> •
    <a href="#-features">Funcionalidades</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-como-rodar">Como Rodar</a> •
    <a href="#-autor">Autor</a>
  </p>

  <img src="https://via.placeholder.com/800x400/020617/3b82f6?text=Preview+do+HubCard" alt="HubCard Preview" width="100%">

</div>

<br />

## 🃏 Sobre o Projeto

Sabe aquela sensação de passar horas codando, subindo commit atrás de commit, deixando o GitHub todo verdinho... mas na hora de compartilhar seu perfil, você só manda aquele link seco e sem graça? 😴

O **HubCard** nasceu para mudar isso. A ideia é simples: transformar seu perfil de desenvolvedor em algo visual, compartilhável e cheio de personalidade. Pense nele como o seu **"Card Colecionável"** do mundo dev (tipo um Pokémon ou Super Trunfo, só que com *commits* e *linguagens*).

Não é só sobre dados. É sobre **valorizar a sua jornada**.

---

## 🚀 Features

O HubCard vai muito além de um simples buscador. Ele é uma ferramenta completa para Personal Branding:

- 🔍 **Busca Inteligente:** Encontre qualquer usuário do GitHub instantaneamente.
- 📊 **Visualização de Dados:**
  - Stats de Batalha (Repos, Seguidores, Seguindo).
  - Gráfico de Top Linguagens (Donut Chart).
  - Lista dos últimos projetos com badges de visibilidade e stars.
- 📸 **Gerador de Imagem:** Baixe seu card em alta resolução (PNG) para postar no LinkedIn ou Instagram.
- 🔗 **Link Compartilhável:** Gere uma URL única (`?username=seu-nome`) para enviar para recrutadores.
- 📝 **Badge para README:** Copie um código Markdown pronto para colar no seu perfil do GitHub e linkar para o seu card.
- 🕰️ **Histórico Local:** O app lembra suas últimas buscas para facilitar o acesso.

---

## 🛠️ Tech Stack (Sob o Capô)

O projeto foi arquitetado seguindo os padrões modernos de 2026, focando em performance e UX.

| Tecnologia | Função |
| ---------- | ------ |
| **⚛️ React + Vite** | Core da aplicação. Performance absurda e carregamento instantâneo. |
| **🎨 TailwindCSS** | Estilização "utility-first" para um visual Dark Mode elegante e responsivo. |
| **🧠 TanStack Query** | Gerenciamento de estado assíncrono, cache e requisições inteligentes. |
| **📡 Axios** | Camada de serviço para consumo da API do GitHub. |
| **📊 Recharts** | Visualização de dados (Gráficos) declarativa e animada. |
| **📸 html2canvas** | Engine para renderizar o DOM em imagem (Canvas/PNG). |
| **⚡ Lucide React** | Ícones leves e modernos. |

---

## 📦 Como Rodar

Gostou e quer rodar no seu computador? É fácil.

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina o [Git](https://git-scm.com) e o [Node.js](https://nodejs.org/en/).

### Passo a passo

```bash
# Clone este repositório
$ git clone [https://github.com/SEU_USUARIO/hub-card.git](https://github.com/SEU_USUARIO/hub-card.git)

# Acesse a pasta do projeto no terminal/cmd
$ cd hub-card

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev