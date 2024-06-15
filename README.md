# Grand Finale

|                                                  Aplicação Web                                                  |                                                Aplicação Mobile                                                 |
| :-------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: |
| ![image](https://github.com/gabrielvictorweb/grand-finale/assets/42915445/040e7792-aa76-43f1-aafb-94a90646c460) | ![image](https://github.com/gabrielvictorweb/grand-finale/assets/42915445/a346a946-b5aa-464c-a4e8-54065e987b68) |

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

**Endereço Aplicação Web**: http://localhost:5173/

**Endereço Aplicação Mobile**: http://localhost:8081/

- Utilizando o Docker, o Aplicativo será compilado para executar em seu navegador, para facilitar a visualização. Por esse motivo, alguns recursos nativos não funcionam corretamente, como por exemplo, a **_seleção de data limite de uma tarefa_**. Caso queira executa-lo em um Dispotivo Virtual (Android Studio ou Genymotion), execute o aplicativo utilizando o NPM, o passo a passo se encontra-se na sessão abaixo.

**Endereço Api**: http://localhost:8000/api

### Opção 2: NPM

Obs: Ao executar a aplicação com NPM, será necessário alterar os arquivos `grand-finale/web/.env` e `grand-finale/app/.env`, as variáveis **_VITE_URL_API_** e **_EXPO_PUBLIC_API_URL_** devem possuir seu **_IP LOCAL_**.

Em seu terminal de comando, faça os seguintes processos:

#### Executando a API

```
$ cd pasta-de-downloads/grand-finale/api
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

Recomendamos o uso da virtualização do Android Studio para a execução do aplicativo.Caso contrário (utilizando a opção seguinte), será necessário alterar a variável de ambiente EXPO_PUBLIC_API_URL presente em `grand-finale/app/.env` para o endereço IP LOCAL de seu computador.

No Android Studio, execute os seguintes passos:

- 1° Vá em More Action
- 2° Virtual Device Manager
- 3° Crie um dispositivo virtual
- 4° Execute o dispositivo virtual
- 5° Execute os seguintes comandos em seu Terminal/Prompt de comando:

```
$ cd pasta-de-downloads/grand-finale/app
$ npm install
$ npm start
```

### Com Expo App

```
$ cd pasta-de-downloads/grand-finale/app
$ npm install
$ npm start

---- Leia o código QR utilizando o aplicativo 'Expo App' ----
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
- Prisma ORM
- Swagger
- React Native
- React
- Docker
- SQLite
