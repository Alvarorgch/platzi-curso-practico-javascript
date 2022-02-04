//Codigo del cuadrado

console.group("Cuadrados");

    function perimetroCuadrado (lado){
        return lado * 4;
    } 

    function areaCuadrado (lado) {
        return lado * lado;
    }

console.groupEnd();

//Codigo del triangulo

console.group("Triangulos");

    function perimetroTriangulo(lado1,lado2,base){
        return lado1 + lado2 + base;
    } 

    function areaTriangulo(base,altura){
        return (base * altura)/2;
    }


console.groupEnd();

//Codigo del circulo

console.group("Circulos");

    function diametroCirculo(radio){
        return radio * 2;
    }

    function perimetroCirculo(radio){
        const diametro = diametroCirculo(radio);
        return (diametro ) * Math.PI;
    }

    function areaCirculo(radio){
        return (radio * radio) * Math.PI;
    }

console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input =document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input =document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area); 
}

function alturaTrianguloIsoceles(){
    const inputlado1 = document.getElementById("InputTrianguloLado1");
    const valueInputlado1 = inputlado1.value;

    const inputlado2 = document.getElementById("InputTrianguloLado2");
    const valueInputlado2= inputlado2.value;

    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = inputBase.value;

    if(valueInputlado1 != valueInputlado2){
        console.error('No es un triángulo isósceles El lado 1 y lado 2 deben ser iguales');
    }
    else{
        const altura = Math.sqrt(valueInputlado1**2 - valueBase**2/ 4);
        console.log(" la altura es: "+altura);
    }

}