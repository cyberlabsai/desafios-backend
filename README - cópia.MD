Nome: Saulo José de Melo Cunha
e-mail: saulojmc@id.uff.br
gosto de viajar, jogar videogames, estudar e de interagir com as pessoas.

Sou uma pessoa que preciso me dedicar muito para aprender, mas mesmo assim busco forças dentro de min e de inspirações de pessoas para conseguir.

Para esse desafio fiz da seguinte forma:

- Um sisteminha onde consiga ver alguns desenvolvedores, usando a API do Github para visualizar o Avatar, Nome e Bio dos desenvolvedores e curtir ou descurtir cada um deles.

- Utilizei o Visual Studio como Editor.

- Utilizei um banco de dados não relacional para este caso, o MONGODB, pois ela disponibiliza um banco de dados gratuito de até 500MB. Como a aplicação é pequena e não irá escalonar tanto, então usarei assim, mas se fosse algo escalonável e maior, faria em banco de dados relacional, embora o banco de dados relacional seria  mais difícil do que o banco não relacional para ser criado. Neste caso, será apenas o Javascript para se comunicar ao banco de dados.

- Depois de criar uma conta no banco de dados MONGODB, no link: https://www.mongodb.com/cloud/atlas/lp/try3?utm_source=google&utm_campaign=gs_americas_brazil_search_brand_atlas_desktop&utm_term=atlas%20mongo%20db&utm_medium=cpc_paid_search&utm_ad=e&gclid=EAIaIQobChMI1Jby_9iU6AIVAgiRCh3JZAlSEAAYASAAEgJBF_D_BwE, depois de criar a conta, eu selecionei a opção para acessar o banco de dados de qualquer lugar.

- no server.js criei a comunicação do banco de dados MONGDB, para isso com o perfil criado no ATLAS, você insere seu usuário e senha para que a comunicação possa ser feita. Ele mesmo cria o banco de dados caso não exista.

- Baixe o aplicativo da MONGODB o MONGODB COMPASS
Assim, poderá fazer a comunicação dentro da base do banco de dados para a aplicação que foi criada.

**Exemplo:

mongodb+srv://<users>:<password>@clustersaulo-7snvo.mongodb.net/test
O test será o nome do banco de dados criado automaticamente.
**


- Usei o Insomnia para criar os desenvolvedores, utilizando o método POST com o nome de usuário de cada amigo da minha lista de seguidores no github.
**Exemplo: 
{
    "name":"saulojmc"
}

e depois clicar em SEND para assim ser criado o usuário dev dentro do banco de dados
**



