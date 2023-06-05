# Pokedex

## 📑 Descrição

Este é um repositório para a Pokédex, uma aplicação web que exibe informações sobre Pokémons da 1ª geração. A aplicação utiliza a Fetch API para obter dados da [PokeAPI](https://pokeapi.co/) e exibi-los de forma interativa para o usuário. Esta Pokédex foi baseada nos cursos 'Criando um Projeto com HTML/CSS para Listagem de Pokémon' e 'Dominando o Protocolo HTTP e Integrando com a PokeAPI' da DIO, esses cursos fazem parte da Formação JavaScript Developer.

## 🖼 Pré-visualização

- Modo claro

![image](https://github.com/livnascimento/pokedex/assets/51425339/8bb839e9-b8d1-47e9-8c1a-c1ef86b05581)

- Modo escuro

![image](https://github.com/livnascimento/pokedex/assets/51425339/bdf4115c-4fdf-4087-8d53-866cad5c77bd)

## 💻 Informações técnicas

- O projeto foi construindo seguindo o conceito de `Mobile First` e utiliza o `normalize CSS` 
- Como citado anteriormente, as requisições são feitas com `Fetch API`

## 🗂 Estrutura do projeto

`index.html`: O arquivo HTML principal que contém a estrutura da página.

`styles.css`: O arquivo CSS responsável pelo estilo e layout da aplicação.

`dark-mode.js`: Aqui estão as alterações de classList que fazem o dark mode funcionar.

`main.js`: O arquivo JavaScript que contém a lógica da aplicação.

`poke-api.js`: Contém a manipulação da Fetch API, incluindo a lógica da paginação.

`pokemon-model.js`: Cria um novo modelo de Pokémon para facilitar o acesso aos dados durante as chamadas.

## 🖥 Pré-requisitos

- Navegador web moderno com suporte a JavaScript.

## 👩🏿‍💻 Como executar a aplicação

1. Clone o repositório em sua máquina local:

   ```bash
   git clone https://github.com/livnascimento/pokedex.git
   ```
   
2. Navegue até o diretório do projeto:

    ```bash
     cd pokedex
    ```
  
3. Abra o arquivo index.html em seu navegador web.

<p style="text-align: center;">ou</p>

1. Acesse https://livnascimento-pokedex.netlify.app/

## ➕ Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma "issue" ou enviar um "pull request".

Certifique-se de seguir as diretrizes de contribuição do projeto e tratar todos com respeito.

## 📋 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais informações.

## 🔗 Links

- [DIO](dio.me)
- [Documentção da Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [CDN Normalize CSS](https://cdnjs.com/libraries/normalize)

