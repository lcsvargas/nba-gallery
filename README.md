# 🏀 NBA Gallery

Uma aplicação web desenvolvida com **React** para praticar conceitos fundamentais de desenvolvimento Front-end, como **componentização, reutilização de componentes, props, estado, renderização de listas e CSS Modules**.

O projeto apresenta uma galeria de jogadores da NBA em uma interface simples e responsiva, servindo também como exemplo prático de organização de componentes em uma aplicação React.

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![CSS Modules](https://img.shields.io/badge/CSS%20Modules-000000?style=flat&logo=css3&logoColor=white)](https://github.com/css-modules/css-modules)

---

## 📖 Sobre o Projeto

O **NBA Gallery** foi desenvolvido como um projeto prático e didático para explorar os principais conceitos de **React**.

A aplicação utiliza componentes reutilizáveis para estruturar a interface e dados dinâmicos para gerar os cards dos jogadores.

### 🎯 Conceitos praticados

- **Componentização** com componentes funcionais.
- **Reutilização de componentes** por meio de `<Header />` e `<Card />`.
- **Props** para comunicação entre componentes.
- **`useState`** para gerenciamento de estado.
- **Renderização dinâmica** de listas utilizando `.map()`.
- **CSS Modules** para isolamento e organização dos estilos.
- **CSS Grid e Flexbox** para construção do layout.
- **Organização de arquivos e componentes** em uma aplicação React.

---

## ✨ Funcionalidades

- 🏀 Exibição de jogadores da NBA em formato de cards.
- 🧩 Componentes reutilizáveis e independentes.
- 🔄 Renderização dinâmica dos dados.
- 🎨 Estilos encapsulados com CSS Modules.
- 📱 Layout organizado e adaptável a diferentes tamanhos de tela.

---

## 🛠️ Tecnologias

| Tecnologia | Utilização |
|---|---|
| **React** | Construção da interface e criação dos componentes |
| **Vite** | Ambiente de desenvolvimento e build da aplicação |
| **CSS Modules** | Estilização com escopo isolado por componente |
| **JavaScript** | Lógica, manipulação de dados e interatividade |
| **CSS Grid / Flexbox** | Estrutura e organização do layout |

---

## 📂 Estrutura do Projeto

```text
src/
├── assets/
│   └── ...                  # Imagens e recursos estáticos
│
├── components/
│   ├── Card/
│   │   ├── Card.jsx         # Componente responsável pelo card do jogador
│   │   └── Card.module.css  # Estilos encapsulados do Card
│   │
│   └── Header/
│       ├── Header.jsx       # Componente do cabeçalho
│       └── Header.module.css# Estilos encapsulados do Header
│
├── App.jsx                  # Componente principal da aplicação
├── App.module.css           # Estilos do layout principal
└── main.jsx                 # Ponto de entrada da aplicação React
