# Grand Finale

## Dependências

- Node 20.10

## Como executar

### Opção 1: Docker

Em seu terminal de comando, execute:

```
$ cd pasta-de-downloads/grand-finale
$ docker-compose build
$ docker-compose up
```

### Opção 2: npm

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

#### Executando o Front-end

```
$ cd pasta-de-downloads/grand-finale
$ cd web
$ npm install -g vite
$ npm install
$ npm run dev
```

## API DOC

A documentação da api se encontra no seguinte endereço:

http://localhost:8000/api
