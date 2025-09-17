let pessoa = {
  "nome": "João",
  "idade": 30,
  "endereco": {
    "rua": "Rua Principal",
    "numero": 123
  },
  "sabugada": {
  },
  "telefones": ["1234-5678", "8765-4321"]
};

    console.log(pessoa);

//acessando dados
    console.log("\n Acessando Dados:");
    //Notação de ponto (.)
    console.log(pessoa.nome);
    //Notação de colchetes ([])
    console.log(pessoa["idade"]);
    //Notação de ponto (.)
    console.log(pessoa.endereco.rua);
    //índice do array
    console.log(pessoa["telefones"][0]);

//adicionar dados
    console.log("\nAdicionar Dados:");

    pessoa.email = "teste@gmail.com";
    pessoa.sabugada.tamanho = "20cm";
    pessoa.sabugada.cor = "Rosa";
    pessoa.sabugada.duracao = "5min";
    pessoa["estadoCivil"] = "Solteiro";

        console.log(pessoa);

//modificar dados
    console.log("\n Modificar Dados:");

    pessoa.endereco.rua = "Centro da cidade";
    pessoa.endereco.numero = 456;
    pessoa["estadoCivil"] = "casada";
    pessoa.telefones[1] = "2222-2222";
    pessoa.telefones[0] = "1111-1111"; 

        console.log(pessoa);

// Remover
    console.log("\n Remover Dados:");
    delete pessoa.idade;
    delete pessoa["email"];
    delete pessoa.endereco.cep;
        console.log(pessoa);
    
    //Remover elementos de um array
        console.log("\n Remover Dados de array:");

        pessoa.telefones.splice(1, 1); 

        pessoa.telefones.pop(); //remove o último

        pessoa.telefones.shift(); //remove o primeiro: 

        console.log(pessoa);


// operacao com array
    console.log("\n operacao com array:");
    pessoa.jogos = ["gta5", "Dark Soul 4"];
    pessoa.jogos.push("tarkov");

    console.log(pessoa);

//iteracao sobre as propriedades do objeto
    console.log("\n iteracao");

    for (const chave in pessoa) {

        console.log(chave +": " + pessoa[chave]);

    }

// converter de json para texto
    console.log("\n converter para texto:");

    let jsonTexto = JSON.stringify(pessoa);
    console.log(jsonTexto);

// converter de texto para json
    console.log("\n converter para json de volta:");

    let objetoJson = JSON.parse(jsonTexto);
    console.log(objetoJson);