let somaParametro = function(parametro1, parametro2)
{
    console.log("\nParametro 1: " + parametro1);
    console.log("Parametro 2: " + parametro2);

    let resultado = parametro1 + parametro2;

    return resultado;
}


let resultado = somaParametro(2,2);

console.log("O resultado da chamada função anonima é: " + resultado);

function executar(fucao, param1, param2)
{
    console.log("\nExecutando função")
    return fucao(param1,param2);
    
};

let resultadoExecutar = executar(somaParametro, 10,20) 

console.log("\nO resultado da execução do metodo é: "+ resultadoExecutar);

// chamada imediatamente

let resultadoresultadoImediatoJoao = (function(a,b) {return a*b;})(6,4);

console.log("\nResultado da função imediata: " + resultadoresultadoImediatoJoao);

// Definindo e chamando uma função anônima imediatamente
let resultadoImediatoProfessora = (function(a,b){return a*b;})(4,6);
console.log("Resultado da função anônima chamada imediatamente: " + resultadoImediatoProfessora);