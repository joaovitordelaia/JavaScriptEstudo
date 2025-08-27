
function calculadora(num1,num2)
{

let adicao = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let modulo = num1 % num2;
let exponencial = num1 ** num2;


let incrementar = num1;
incrementar++;

let decrementar = num2;
decrementar--;


console.log(`Adição (${num1} + ${num2}) = ${adicao}`);
console.log(`Subtração (${num1} - ${num2}) = ${subtracao}`);
console.log(`Multiplicação (${num1} * ${num2}) = ${multiplicacao}`);
console.log(`Divisão (${num1} / ${num2}) = ${divisao}`);
console.log(`Módulo (${num1} % ${num2}) = ${modulo}`);
console.log(`Exponencial (${num1} ** ${num2}) = ${exponencial}`);
console.log(`Incrementar (${num1}++) = ${incrementar}`);
console.log(`Decrementar (${num2}--) = ${decrementar}`);
}

calculadora(10,6);