# ⚡️ Currículo Digital Interativo — Ricardo Sousa

> **Projeto Desenvolvido para a Trilha de Preparação do Hackathon Proenergia Summit 2026**  
> Single Page Application (SPA) moderna, reativa e de alta performance construída em **Angular 22**.

---

## 🚀 Tecnologias e Arquitetura

* **Framework:** [Angular 22](https://angular.dev/) (Standalone Components, sem necessidade de `NgModule`)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Tipagem estrita com interfaces e union types)
* **Reatividade:** Angular **Signals** & **computed()** (Reatividade granular e síncrona sem overhead de RxJS)
* **Estilização:** **SCSS Modular** com Design Tokens em CSS Custom Properties (`:root`), mixins responsivos (`@include tablet`, `@include desktop`) e CSS Grid / Flexbox
* **Layout:** Light Mode tecnológico com paleta azul institucional (`#2563eb`), cartões brancos com sombras suaves e microinterações táteis
* **Acessibilidade & Semântica:** HTML5 semântico (`<main>`, `<section>`, `<article>`, `<header>`, `<footer>`), suporte a leitores de tela e contraste WCAG

---

## 🧩 Estrutura dos Componentes

1. **Hero Section (`app-hero`):** Apresentação com foto de perfil enquadrada com anel gradiente, badge de *Desenvolvedor Full-Stack*, nome e bio.
2. **Skills Reativo (`app-skills`):** Catálogo de habilidades filtrável por categorias (*Todos*, *Frontend*, *Ferramentas*) em tempo real usando `computed()`.
3. **Trajetória & Timeline (`app-experiencia`):** Linha do tempo vertical cronológica com nós circulares iluminados e cards com animação ao passar o mouse.
4. **Contato (`app-contato`):** Seção de contato com botão interativo de **Copiar E-mail** via Clipboard API nativa com feedback visual dinâmico e links sociais.

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
* **Node.js:** v22 ou v24+
* **npm:** v10 ou v11+
* **Angular CLI:** `npm install -g @angular/cli@latest`

### Passos
```bash
# 1. Clone o repositório
git clone <URL_DO_SEU_REPOSITORIO>

# 2. Acesse a pasta do projeto
cd curriculo-ricardo-sousa

# 3. Instale as dependências
npm install

# 4. Inicie o servidor local de desenvolvimento
ng serve
```

Abra o navegador em `http://localhost:4200/`.

---

## 📦 Build de Produção

```bash
ng build
```
Os artefatos otimizados serão gerados na pasta `dist/curriculo-ricardo-sousa/`.

---

Desenvolvido por **Ricardo Sousa** • Hackathon Proenergia Summit 2026.
