class Casa 
{

    constructor(cor, numQuarto,temGaragem)
     {

        this.cor = cor;
        this.numQuarto = numQuarto;
        this.temGaragem = temGaragem;
    }


    descrever() {
        let descricao = `Essa casa é de cor ${this.cor}, tem ${this.numQuarto} quartos...`;
        if (this.temGaragem) 
            descricao += `e tem garagem.`
        else
            descricao += `e não tem garagem.`

        return descricao;
    }

}

const minhaCasa = new Casa("Cinza",3,true);
const suaCasa = new Casa("Rosa",7,false);

console.log(minhaCasa.descrever());
console.log(suaCasa.descrever());