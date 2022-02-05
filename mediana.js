const lista1 = [
    500,
    200,
    100,
    40,
];



function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(

        function(valorAcumulado =0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }

    );

    const promedio= sumaLista/lista.length;
    return promedio;
    
}

function CalcularMediana (lista){
    
    
    lista.sort((a,b)=> a-b);
    console.log("la lista ordenada ascendentemente es = [" + lista+"]");
    
    const mitadlista = parseInt(lista.length /2);

    function esPAr(numerito){
        if(numerito %2 == 0){    

            return true; 
        }
        else {
            return false;
        }  
    }
    
    let mediana;

    if(esPAr(lista.length)){    
        const elemento1 = lista[mitadlista - 1];
        const elemento2 = lista[mitadlista];
        const promedioElemento1y2 = calcularMediaAritmetica ([elemento1,elemento2]);
        mediana = promedioElemento1y2;
    }
    else {
        mediana = lista[mitadlista];
    }

    console.log("la mediana es: " + mediana);
    return mediana;

}

