let tempoDeAndar = 0;
let caiu = false;

do 
{
    
    tempoDeAndar++;
    console.log("Andando por: ", tempoDeAndar, " minutos!")

    if (tempoDeAndar === 10) 
    {
        caiu = true;
        console.log("Caiu!!")
    }

} while (!caiu && tempoDeAndar < 11);