# Backend rest com postgres, autentificação e typeScript

Api desenvolvida com express que cadastra produtos e cupons de desconto no banco de dados postgresql.


## Setup

para instalar a api use o seguinte comando:

```bash
yarn install
```

para executar
```bash
yarn dev
```

para instalar as dependencias separadamente

-yarn add react-router-dom
-yarn add @types/react-router-dom -D
-yarn add axios


### Migrations

rode o comando abaixo para efetuar as migrations no Banco de Dados

```js
yarn typeorm migration:run
```

## uso

Api criada com TypeScript, autenticação jwt e banco de dados Postgresql, roda em localhost:3030
contem rotas de criação e visualização de usuários, cupons e produto. 
A sessão de login utiliza JWT e middlewares, sendo necessaria a criação de um usuario para cadastrar produtos e cupons.
Este backend é integrado com o front (https://github.com/cauecrb/front-prodEcupon)
 

Cauê Rafael Burgardt
