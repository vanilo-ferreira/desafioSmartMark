# SmartMart Solutions

## Objetivo

A SmartMart Solutions é uma empresa varejista digital em expansão que atua com múltiplos produtos e categorias em um ambiente altamente competitivo. O time de operações comerciais busca um sistema interno para cadastro, visualização e análise de produtos e vendas, com um painel visual simples e eficiente para auxiliar na tomada de decisões.

O objetivo foi construir o primeiro protótipo funcional dessa aplicação, unindo a construção de APIs em Python e uma interface visual em React. O objetivo também é criar uma base sólida para visualização de dados de vendas e permitir a inserção de produtos manualmente ou via arquivos CSV, com filtros e edição.

Tecnologias utilizadas:

- React.js: Para a construção da interface de usuário, com foco na renderização eficiente.
- React Hooks: Para gerenciamento de estado e efeitos colaterais.
- Vite: Para uma experiência de desenvolvimento mais rápida e otimizada, garantindo build quase instantâneo e recarga automática.
- TailwindCSS: Para uma interface responsiva e moderna, com foco em personalização rápida.
- Python (FastAPI): Para a criação das APIs que gerenciam a inserção e consulta dos dados.
- PostgreSQL: Para o armazenamento persistente dos dados.

Funcionalidades Principais:

- Produtos (`"/"`): Exibe a listagem de todos os produtos cadastrados e permite a venda e edição de preços, além de possibilitar o filtro por categoria.
- Cadastro de Produtos (`"/register-products"`): Permite a inserção de novos produtos no banco de dados.
- Cadastro de Categorias (`"/categories"`): Exibe todas as categorias cadastradas, com a funcionalidade de adicionar novas categorias.
- Vendas (`"/sales"`): Exibe a lista de todos os produtos vendidos, com informações detalhadas sobre cada transação.
- Análise de Dados - Quantidade de Vendas (`"/sales-quantity"`): Apresenta um gráfico de barras que exibe a quantidade total de vendas por produto.
- Análise de Dados - Análise de Lucros(`"/profit-analysis"`): Exibe um gráfico de linhas que compara os lucros mensais de cada produto, permitindo ver em qual mês cada produto gerou mais lucro.

### Conhecendo o projeto

O projeto criado oferece uma interface intuitiva, com recursos que facilitam a gestão dos produtos e a análise das vendas. Abaixo, estão algumas imagens ilustrativas da aplicação em funcionamento:

<figure>
  <img align="center" alt="Products" src="./doc/assets/products.png" />
  <figcaption align="center">
    <span style="font-weight:bold">Figura 1.
    </span>
  Listagem dos Produtos.</figcaption>
</figure>

<figure>
  <img align="center" alt="Registro de Produtos" src="./doc/assets/registerProducts.png" />
  <figcaption align="center">
    <span style="font-weight:bold">Figura 2.
    </span>
  Cadastro de Produtos.</figcaption>
</figure>

<figure>
  <img align="center" alt="Categorias" src="./doc/assets/categories.png" />
  <figcaption align="center">
    <span style="font-weight:bold">Figura 3.
    </span>
  Categorias.</figcaption>
</figure>

<figure>
  <img align="center" alt="Listagem de Vendas" src="./doc/assets/sales.png" />
  <figcaption align="center">
    <span style="font-weight:bold">Figura 4.
    </span>
  Listagem de Vendas.</figcaption>
</figure>

<figure>
  <img align="center" alt="Categoria Sobremesas" src="./doc/assets/salesData.png" />
  <figcaption align="center">
    <span style="font-weight:bold">Figura 5.
    </span>
  Gráfico de Barras com Quantidade de Vendas.</figcaption>
</figure>

<figure>
  <img align="center" alt="Listagem de Vendas" src="./doc/assets/profitData.png" />
  <figcaption align="center">
    <span style="font-weight:bold">Figura 6.
    </span>
  Gráfico de Linhas com os Comparativo dos Lucros para Cada Produto.</figcaption>
</figure>

### `Checkpoint`

• [x] Painel com gráficos de vendas representando quantidade e lucro;
• [x] Formulário para registro de produtos;
• [ ] Possibilidade de enviar um arquivo CSV e inserir novos produtos a partir dele;
• [x] Filtros por categoria de produto.

###### `Extras:`

• [ ] Permitir que o usuário edite os valores, como número de vendas e preços, para cada mês do ano;
• [x] Inserção de novas categorias;
• [ ] Possibilidade de baixar um arquivo CSV do banco de dados produtos/vendas.

### `Rodando o Projeto Localmente`

Para rodar o projeto localmente, siga os seguintes passos:

1. Instale as dependência do projeto, executando o seguinte comando: `yarn install` ou `npm install`;
2. Após, execute o comando `yarn dev` ou `npm run dev`, para rodar o servidor de desenvolvimento;
3. Abra o link [http://localhost:5173/](http://localhost:5173/) no seu navegador para visualizar a aplicação em funcionamento.

### `deploy`

O deploy da aplicação foi realizado na plataforma [Vercel](https://vercel.com/).
E poderá ser acompanhado através do seguinte link: [SmartMart Solutions](https://desafio-smart-mark.vercel.app/).
