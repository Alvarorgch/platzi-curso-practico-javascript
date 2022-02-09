function CalculoPAgoMensual(){

    console.log("CalculoPAgoMensual" );

    const inputvalorDeuda = document.getElementById("valorDeuda");
    const valorDeudaValue = inputvalorDeuda.value;

    const inputPagarEn = document.getElementById("PagarEn");
    const PagarEnValue = inputPagarEn.value;

    const inputIngreso = document.getElementById("Ingreso");
    const PagarIngreso = inputIngreso.value;

    const valorMensualDePAgo = valorDeudaValue / PagarEnValue;

    console.log("El valor mensual a pagar es: $" + valorMensualDePAgo);

    const PagoMensual = document.getElementById("PagoMensual");
    PagoMensual.innerText = "El valor mensual a pagar es: $" + valorMensualDePAgo;
  
}