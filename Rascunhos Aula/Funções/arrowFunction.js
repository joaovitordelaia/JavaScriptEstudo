
//arrow function padrão

let somar = (a,b) =>{ return a+b;};

console.log("A soma usando arrow é: " + somar(2,2));

let dobrar = n => n*2;

console.log("a dobra é: " + dobrar(4));

//callback: Um callback é simplesmente uma função que você passa como argumento para outra função para que ela seja executada depois de algum momento ou evento.

let numero = [1,2,3,4,5];


let numeroDobrado = numero.map(dobrar);

console.log("A dobra da array é: " + numeroDobrado);
