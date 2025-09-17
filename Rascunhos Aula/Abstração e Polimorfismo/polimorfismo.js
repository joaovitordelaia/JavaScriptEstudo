class Imovel 
{
    constructor(endereco, tamanho)
    {
    this.endereco = endereco;
    this.tamanho = tamanho;
    }



    descrever()
    {
         throw new Error("Este método deve ser implementado por subclasses"); I
    };

}


class Casa extends Imovel 
{
    constructor(endereco, tamanho, cor, numeroDeQuartos, temGaragem)
    {
        super(endereco, tamanho);
        this.cor = cor;
        this.numeroDeQuartos = numeroDeQuartos;
        this.temGaragem = temGaragem;
    }


    descrever()
    {
    
         let descricao = `Casa localizada em ${this.endereco}, de cor ${this.cor}, com ${this.numeroDeQuartos} quartos, de tamanho ${this. tamanho}m2`;

         descricao += this.temGaragem ? " e possui garagem" : " e não possui garagem";

         return descricao;
         
    }

}
class Apartamento extends Imovel 
{
    constructor(endereco, tamanho, numeroDoAndar, possuiElevador)
    {
        super(endereco, tamanho);
        this.numeroDoAndar = numeroDoAndar;
        this.possuiElevador = possuiElevador;
    }


    descrever()
    {
    
         let descricao = `Apartamento localizado em ${this.endereco}, no ${this.numeroDoAndar} ºandar, de tamanho ${this. tamanho}m2 `;

         descricao += this.possuiElevador ? " e possui elevador" : " e não possui elevador";

         return descricao;
         
    }

}

function descreverImovel(Imovel)
{
    console.log(Imovel.descrever());
}


let minhaCasa = new Casa("rua seila", 30,"branca",4,true);
let meuApartamento = new Apartamento("Rua Central", 400,10,true);

descreverImovel(minhaCasa);
descreverImovel(meuApartamento);