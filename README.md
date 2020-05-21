<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/otenbr/teste-responsividade?color=%2304D361">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/otenbr/teste-responsividade?color=%2304D361">

  <img alt="Made by José Antonio" src="https://img.shields.io/badge/made%20by-José%20Antonio-%2304D361">

  <img alt="GitHub" src="https://img.shields.io/github/license/otenbr/teste-responsividade?color=%2304D361">

</p>

# Teste de Site Responsivo

Este é um projeto de criação de um site resposivo. Ele tem como ideia de funcionamento a distribuição de lucros para funcionários.

O aplicativo realiza a consulta de uma API para obter uma lista de nomes de funcionários. Este dados serão carregados na tela principal, onde será montado um card para cada funcionário. Quando o usuário clicar no link exibido na parte inferior do card, será aberto um diálogo modal para que ele selecione o valor que será adicionado ao funcionário. Após clicar no botão, o diálogo é fechado e na tela principal são atualizadas as barra de progresso e a badge com o total já atribuído.
O sistema executa uma validação não permitindo que seja atribuído um valor total maior que R\$200,00.

## Iniciando

### Pré-requisitos

- Node.js
- Yarn (_opcional_)

### Instalação

Clonar o repositório para máquina local.

```sh
git clone https://github.com/otenbr/teste-responsividade.git
```

Alterar para o diretório do projeto.

```sh
$ cd teste-responsividade
```

Executar o comando `npm` ou `yarn` para instalar as dependências de pacotes.

```sh
$ yarn
```

### Executando

Executar o comando `npm run start` ou `yarn start`.

```sh
$ yarn start
```

O site ficará disponível no endereço: http://localhost:3000

### Publicando

Para gerar um pacote de distribuição do site, execute o comando `npm run build` ou `yarn build`.
Os arquivos serão encontrados no diretório `build/`.

```sh
$ yarn build
```

## Créditos

Tecnologias e pacotes utilizados no projeto:

- [Node.js](https://nodejs.org/)
- [reactjs](reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [styled-components](https://styled-components.com/)
- [axios](https://github.com/axios/axios)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Licença

[MIT](.github/LICENSE.md)
