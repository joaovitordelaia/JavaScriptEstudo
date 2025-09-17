let frutas = ["maçã", "banana", "laranja", "uva"];

console.log("Array inicial: " + frutas);
console.log("Comprimento do array: " + frutas.length);


let novoComprimento = frutas.push("Manga", "Pitanga");
console.log("\nArray atualizado push: "+ frutas)
console.log("Comprimento da array: "+ novoComprimento)


let usandoPop = frutas.pop();
console.log("\nArray atualizada usando pop: "+ frutas);
console.log("Ultimo Elemento removido da array: "+ usandoPop);

let usandoShift = frutas.shift();
console.log("\nArray atualizada usando shift: "+ frutas);
console.log("Primeiro Elemento removido da array: "+ usandoShift);
