function checkTrafficLight(LightColor) 
{
    switch (LightColor) 
    {

        case "Green":
            console.log("Pode Atravessar a rua!");
            break;
            
        case "Red":
            console.log("Pare!");
            break;

        case "Yellow":
            console.log("Cuidado, Atenção!");
            break;
    
        default:
            console.log("Cor Inválida!");
    }
}

checkTrafficLight("Purple");