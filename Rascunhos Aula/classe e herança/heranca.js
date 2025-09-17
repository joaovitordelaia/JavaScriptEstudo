//uma classe pode herdar atributos e métodos de outra classe



class Casa 
{

    constructor(cor, numQuarto,temGaragem) {

        // '_' underscore define como privada, apenas get e set manipula eles

        this._cor = cor;
        this._numQuarto = numQuarto;
        this._temGaragem = temGaragem;
    }

    //apenas get e set manipula os atributos privados
    get cor(){
        return this._cor;
    }
    //apenas get e set manipula os atributos privados
    set cor(novaCor){
        this._cor = novaCor;
    }


    descrever() {
        let descricao = `Essa casa é de cor ${this._cor}, tem ${this._numQuarto} quartos...`;
        if (this._temGaragem) 
            descricao += ` e tem garagem.`
        else
            descricao += ` e não tem garagem.`

        return descricao;
    }

}

class CasaLuxuosa extends Casa{
    constructor(cor,numQuarto,temGaragem,temPiscina)     
    {
        //chama o contrutor da classe base
        super(cor, numQuarto,temGaragem);
        //propriedade adicionarl
        this._temPiscina = temPiscina;
    }

    //apenas get e set manipula os atributos privados
    set temPiscina(temPiscina){
        this._temPiscina = temPiscina;
    }

    get temPiscina(){
        return this._temPiscina;
    }


    descrever() {

        let descricao = super.descrever();//chama o metodo da classe pai

        if (this._temPiscina) 
            descricao += ` E tem piscina.`
        else
            descricao += ` E não tem piscina.`

        return descricao;
    }

}


const minhaCasa = new CasaLuxuosa("Cinza",3,true,true);
const suaCasa = new Casa("Rosa",7,false);

console.log(minhaCasa.descrever());
console.log(suaCasa.descrever());