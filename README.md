🛒 Vitrine de Produtos - Econverse - Projeto de Entrevista
Projeto desenvolvido para o processo seletivo de Desenvolvedor Front-End Junior

📋 Descrição do Projeto
Este projeto é uma vitrine de produtos interativa desenvolvida em React + TypeScript que consome uma API REST para exibir produtos, com funcionalidade de modal para detalhes. A aplicação foi desenvolvida seguindo rigorosamente o layout do Figma fornecido, implementando boas práticas de desenvolvimento e SEO.

✨ Funcionalidades
✅ Vitrine de produtos responsiva

✅ Modal de detalhes do produto ao clicar

✅ Consumo de API REST para dados dinâmicos

✅ Fallback com dados mock quando a API está indisponível

✅ Design pixel-perfect baseado no Figma

✅ SEO otimizado com HTML semântico

✅ Código limpo e bem estruturado em TypeScript

🚀 Pré-requisitos
Node.js (versão 14 ou superior)

npm ou yarn

📦 Instalação
Clone o repositório

text
git clone <url-do-repositorio>
cd projeto-pronto
Instale as dependências

text
npm install
ou
yarn install
🏃 Executando o Projeto
Modo Desenvolvimento
text
npm start
ou
yarn start
A aplicação estará disponível em: http://localhost:3000

Build para Produção
text
npm run build
ou
yarn build
O build será gerado na pasta build/ otimizado para produção.

Testes
text
npm test
ou
yarn test
🏗️ Estrutura do Projeto
projeto-pronto/
├── public/
│ ├── index.html # Template HTML principal
│ └── logo-econverse.png # Assets estáticos
├── src/
│ ├── components/
│ │ ├── Header/ # Componente do cabeçalho
│ │ │ ├── Header.tsx
│ │ │ └── Header.scss
│ │ ├── ProductCard/ # Card de produto individual
│ │ │ ├── ProductCard.tsx
│ │ │ └── ProductCard.scss
│ │ └── ProductModal/ # Modal de detalhes
│ │ ├── ProductModal.tsx
│ │ └── ProductModal.scss
│ ├── services/
│ │ └── api.ts # Serviço de API e fallback
│ ├── types/
│ │ └── products.ts # Tipos TypeScript
│ ├── App.tsx # Componente raiz
│ ├── App.scss # Estilos globais
│ └── index.tsx # Ponto de entrada
├── package.json
├── tsconfig.json
└── README.md

🎨 Especificações Técnicas Implementadas
1. Tecnologias Utilizadas
React 18 com TypeScript

Sass/SCSS para estilização

Fetch API para requisições HTTP

CSS Modules para escopo de estilos

2. Integração com API
Endpoint: https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json

Sistema de fallback com dados mock quando offline

Tratamento de erros e timeout

3. Layout e Design
Implementação fiel ao layout do Figma: https://www.figma.com/design/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr

Responsividade para mobile e desktop

Cores, fontes e espaçamentos idênticos ao design

4. SEO e Acessibilidade
HTML semântico (header, main, section, article, button)

Meta tags otimizadas

Atributos alt em imagens

ARIA labels para elementos interativos

Títulos hierárquicos (h1, h2, h3)

5. Boas Práticas
Componentes reutilizáveis

Tipagem estática com TypeScript

Código modular e organizado

Comentários e documentação interna

Performance otimizada (lazy loading, imagens otimizadas)

🔧 Dependências Principais
{
"react": "^18.2.0",
"react-dom": "^18.2.0",
"typescript": "^4.9.0",
"sass": "^1.58.0",
"@types/react": "^18.0.0",
"@types/react-dom": "^18.0.0"
}

📱 Compatibilidade
Chrome (últimas 2 versões)

Firefox (últimas 2 versões)

Safari (últimas 2 versões)

Edge (últimas 2 versões)

Mobile responsivo

🔍 Pontos de Destaque do Código
1. Tratamento de Erros na API
// Implementação de fallback automático
export async function fetchProducts(): Promise<Product[]> {
try {
// Tentativa de conexão com API
const response = await fetch(API_URL);
if (!response.ok) throw new Error(Status ${response.status});
return await response.json();
} catch (error) {
console.warn('API offline, usando dados locais');
return getMockProducts(); // Fallback para dados mock
}
}

2. SEO Otimizado
// Exemplo de HTML semântico

<main role="main"> <section aria-label="Vitrine de produtos"> <h1 className="visually-hidden">Produtos em Destaque</h1> {products.map(product => ( <article key={product.id} className="product-card"> <img src={product.photo} alt={product.productName} loading="lazy" /> <h2>{product.productName}</h2> <p>{product.descriptionShort}</p> </article> ))} </section> </main>
3. Acessibilidade no Modal
<div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title" > <div className="modal-content"> <button className="close-button" aria-label="Fechar modal" onClick={onClose} > × </button> {/* Conteúdo do modal */} </div> </div>
🧪 Testes
A aplicação inclui testes para:

Renderização dos componentes principais

Funcionalidade do modal

Integração com API

Responsividade

Para executar os testes:

text
npm test -- --watchAll