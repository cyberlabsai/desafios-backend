# Teste para vaga de Junior

Primeiramente gostaria de agradecer a oportunidade e ressaltar minha vontade de fazer parte da CyberLabs! Fiz o melhor que pude, espero fazer parte desse time :) e saibam que mesmo não sabendo de tudo, tenho uma skill mais importante que isso: vontade!


<br />
<br />
<br />

## Para rodar o projeto: 


1. Clone o repositório
2. Construa a imagem docker
   ```docker image build -t app_image . ```
3. Utilize o comando abaixo para rodar o container
   <br />
   ```docker container run --name db_postgres  -e POSTGRES_USER=docker -e  POSTGRES_PASSWORD=docker -d postgres ```
4. Execute o projeto com o comando : 
   <br />

   ```npm run dev```
5. Execute os testes com o comando: 
   <br />
   
   ```npm run test```
## Documentação

* Basta acessar: https://documenter.getpostman.com/view/13113773/Tzm2HxYb

* **Não foi inserido nenhum script para rodar seeds, portanto é interessante começar a testar pela rota /post** 


   <br />
   <br />

```
Structure folder
.
├── src
│   ├── config                  # Database config
│   │   
│   │
│   └── controllers                    
│   │       └── RecipeController.js # Controller for CRUD Recipe
│   └── database                    # Database Connection
│           └── migrations          # Migrations Folder
│
│   └── models                      # Models
│           └── Recipe.js           # Entity Model
│   └── services                    # Services
│           └── RecipeService.js          # Entity Service
│   └── services                    # Tests
│           └── recipe.spec.js      # Routes tests
│
│
├── package.json
├── Dockerfile                  # Dockerimage
├── .sequelizerc                # Sequelize config 

```

