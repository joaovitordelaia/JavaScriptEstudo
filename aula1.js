//Variaveis

/* Constantes e variáveis em JavaScript são declaradas com var, let e const. O uso de var é desencorajado, enquanto let e const são preferidos por suas melhores práticas de escopo e segurança. Let é usado para escopos de bloco, enquanto const define valores fixos.*/

function exemplovar(){
    if (true){
        // no Js as variavel declarada como o VAR funciona na função mas nao em blocos de if/for e etc.
        // se essa função for chamada, ela tera o valor de dentro da função. mas fora a variavel pode ter outro valor ou nem existir
        var mensagem = "Olá, Sou uma Var local.";}console.log(mensagem);}

exemplovar();


// Aqui fora da função, essa variavel pode ter outro valor ou se não tiver ela não existe pois estamos fora da função
// Se ela não for declarada fora também, esse console.log vai gerar um erro.

//var mensagem = "Olá, Sou uma Var global.";
//console.log(mensagem);


// DECLARAÇÃO DE LET
// let e const respeita o bloco de if/for e etc. se for chamada fora deles ira apresentar erros como na função abaixo

function exemploLet(params) {
    if (true) {
        let mensagem = "Olá, Sou uma let dentro de uma função.";
        console.log(mensagem);}}

exemploLet();

let mensagem1 = "Olá, Sou uma let externo da função anterior.";
console.log(mensagem1);


// EXEMPLO CONST
// variavel const não pode ter seu valor alterado, apenas os outros tipos

// variavel global
const mensagem = "Oi João, como vai?";

function exemploConst() {
    //variavel local
    const mensagem = "Olá João, tudo bem?";
    console.log(mensagem);    
}
// chamando a variavel local
exemploConst();

// chamando a variavel global
console.log(mensagem);




/**
 * Subtrai o segundo número do primeiro.
 *
 * @param {number} a - O número do qual subtrair.
 * @param {number} b - O número a ser subtraído.
 * @return {number} O resultado da subtração.
 *
 * @example
 * let resultado = subtrair(10, 4);
 * console.log(resultado); // 6
 */
function subtrair(a, b) {
    return a - b;
}