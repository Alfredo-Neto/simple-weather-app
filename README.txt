objetivo: Criar um weather app

objetivos menores:
    Estudar javascript básico: procurar um curso gratuito no Youtube
    consumir a API openweathermap utilizando fetch do javascript:
        estudar consumo de apis, conceitos como endpoints, rotas/recursos, query params, verbos HTTP
        se acostumar a ler documentação de API's e documentação das linguagens(MDN, w3schools)
        estudar javascript assíncrono: callbacks, promises, async await
        estudar como lidar com JSON(response.json(), JSON.parse(), JSON.stringify())
    manipulação de DOM:
        criar elementos no HTML dinamicamente,
        escutar eventos e disparar métodos, 
        lidar com forms...
    estudar localStorage:
        métodos getItem e setItem e objetivo do localStorage

Linha de raciocínio básica para construir um weather app:
   1) escolher uma API e utilizar seus endpoints para pegar os dados que a API retorna em JSON e transformar em objeto javascript para manipular

   2) pegar esse objeto javascript com os dados retornados da API para mostrar no HTML, mostrando na DOM apenas o que quiser mostrar
      também salvar a string da pesquisa do usuario(nome da cidade) no localStorage e buscar sempre do localStorage a ultima cidade pesquisada ao abrir a aplicação
    
   3) estilizar com CSS/bootstrap


