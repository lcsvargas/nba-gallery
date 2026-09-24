🏀 NBA Gallery

Uma aplicação web desenvolvida com React para praticar conceitos fundamentais de desenvolvimento Front-end, como componentização, reutilização de componentes, props, estado, renderização de listas e estilização com CSS Modules.





📌 Sobre o projeto

O NBA Gallery é um projeto prático e didático criado para explorar os principais fundamentos do React por meio de uma interface inspirada no universo da NBA.

A aplicação utiliza componentes reutilizáveis para organizar a interface e renderiza informações de jogadores de forma dinâmica a partir de dados definidos no projeto.

🎯 Conceitos praticados

Durante o desenvolvimento, são trabalhados conceitos como:

🧩 Componentização — criação de componentes reutilizáveis, como Header e Card.

🔄 Renderização dinâmica — utilização do .map() para gerar elementos a partir de uma lista de dados.

📦 Props — passagem de informações entre componentes pai e filho.

🎛️ Estado — utilização do useState para gerenciamento de dados no componente.

🎨 CSS Modules — estilização isolada para evitar conflitos entre componentes.

📐 CSS Grid e Flexbox — construção de layouts responsivos e organizados.

♻️ Reutilização de código — criação de componentes com responsabilidades bem definidas.

🛠️ Tecnologias utilizadas
Tecnologia	Descrição
React	Biblioteca para construção de interfaces de usuário
Vite	Ferramenta de desenvolvimento e build para aplicações web
CSS Modules	Sistema de estilização com escopo local por componente
JavaScript	Linguagem utilizada para lógica e comportamento da aplicação
📁 Estrutura do projeto
src/
├── assets/
│   └── # Imagens e outros recursos estáticos
│
├── components/
│   ├── Card/
│   │   ├── Card.jsx
│   │   └── Card.module.css
│   │
│   └── Header/
│       ├── Header.jsx
│       └── Header.module.css
│
├── App.jsx
├── App.module.css
└── main.jsx

🧱 Principais arquivos

App.jsx
Componente principal responsável por organizar e integrar os componentes da aplicação.

App.module.css
Contém os estilos relacionados ao layout principal da aplicação.

Header.jsx
Componente responsável pela estrutura do cabeçalho.

Header.module.css
Estilos específicos do componente Header.

Card.jsx
Componente reutilizável responsável pela apresentação das informações de cada jogador.

Card.module.css
Estilos específicos do componente Card.

main.jsx
Ponto de entrada da aplicação React.

🚀 Como executar o projeto
Pré-requisitos

Antes de começar, você precisa ter instalado:

Node.js

npm ou outro gerenciador de pacotes compatível

1. Clone o repositório
git clone <URL_DO_REPOSITORIO>

2. Acesse a pasta do projeto
cd nba-gallery

3. Instale as dependências
npm install

4. Inicie o servidor de desenvolvimento
npm run dev


Depois, acesse a URL exibida no terminal para visualizar a aplicação no navegador.

📜 Scripts disponíveis
Comando	Descrição
npm run dev	Inicia o servidor de desenvolvimento
npm run build	Gera a versão de produção
npm run preview	Executa uma prévia da build de produção
💡 Exemplo de componentização

Um dos objetivos do projeto é separar responsabilidades em componentes reutilizáveis.

Por exemplo, o componente Card pode receber informações por meio de props:

<Card
  name="LeBron James"
  team="Los Angeles Lakers"
  image={playerImage}
/>


Dessa forma, o mesmo componente pode ser utilizado para representar diferentes jogadores sem precisar duplicar a estrutura HTML.

📚 Objetivo educacional

O projeto foi desenvolvido como uma atividade prática para consolidar conhecimentos essenciais de React e servir como base para projetos futuros.

A partir deste projeto, é possível evoluir a aplicação adicionando funcionalidades como:

🔎 Busca por jogadores

🏀 Filtro por equipe

📊 Estatísticas dos jogadores

❤️ Sistema de favoritos

🌙 Tema claro/escuro

📱 Melhorias de responsividade

🔌 Integração com uma API externa

👨‍💻 Desenvolvido para estudos

Projeto desenvolvido com foco em aprendizado e prática de React, componentização e desenvolvimento de interfaces modernas.

📄 Licença

Este projeto pode ser utilizado para fins de estudo e aprendizado.