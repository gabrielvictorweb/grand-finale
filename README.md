# Grand Finale

O projeto Grand Finale é uma atividade realizada por Gabriel Victor e Leandro Almeida, alunos da FIAP. O projeto conta com uma aplicação web e mobile, de uma lista de tarefas. Também conta com uma API desenvolvida para integração das aplicações.

## Dependências

- Node 20.10

## Como executar

### Opção 1: Docker (Recomendado)

Em seu terminal/prompt de comando, execute:

```
$ cd pasta-de-downloads/grand-finale
$ docker-compose build
$ docker-compose up
```

### Opção 2: NPM

Em seu terminal de comando, faça os seguintes processos:

#### Executando a API

```
$ cd pasta-de-downloads/grand-finale
$ cd api
$ npm install
$ npx prisma generate
$ npx prisma db push
$ npm run build
$ npm run start
```

#### Executando o Front-end (Web)

```
$ cd pasta-de-downloads/grand-finale/web
$ npm install -g vite
$ npm install
$ npm run dev
```

## Executando o Aplicativo

### Com Android Studio (Recomendado)

Recomendamos o uso da virtualização do Android Studio para a execução do aplicativo. Para executar, é só ir em 'More Actions' na tela inicial do Android Studio e ir em 'Virtual Device Manager'. Caso contrário (utilizando a opção seguinte), será necessário alterar a variável de ambiente EXPO_PUBLIC_API_URL presente em app/.env para o endereço IP LOCAL de seu computador.

### Com Expo App

```
$ cd pasta-de-downloads/grand-finale/app
$ npm install
$ npm start

---- Leia o código QR utilizando o aplicativo 'Expo app' ----
```

## Documentação da API (Swagger)

Ao executar a aplicação presente no diretório `grand-finale/api`, a documentação da api se encontra no seguinte endereço:

- http://localhost:8000/api
- http://10.5.0.5:8000/api (Docker)

## Estrutura, escolha da linguagem e tecnologias utilizadas

### Estrutura

- API: Desenvolvida com o framework NestJS, que tem como linguagem o JavaScript e possui uma estrutura muito similar ao Angular. Trabalhando com camadas de Controller, Services e Modulos.

- Aplicação web: Uma aplicação em ReactJS, também tendo como base o JavaScript, utiliza uma estrutura padrão criada por meio da ferramenta Vite.

- Aplicação Mobile: Uma aplicação em React Native, também tendo como base o JavaScript, possui uma estrutura muito parecida com a aplicação web, já que se tratam de frameworks quase identicos.

### Linguagem escolhida

O motivo pela escolha do JavaScript como linguagem do projeto, foi principalmente, utilizar a mesma linguagem para todas as aplicações, possibitando uma menor curva de aprendizado ao desenvolver.

### Tecnologias/Bibliotecas utilizadas

- JavaScript
- NestJS
- React Native
- React
- Docker
- Swagger
