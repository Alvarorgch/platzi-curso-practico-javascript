// const precioOriginal = 120;
// const descuento = 18;

const coupons = [
    {
        name: "JuanDC_es_Batman",
        descuento: 15
    },
    {
        name: "pero_no_le_digas_a_nadie",
        descuento: 30
    },
    {
        name: "es_un_secreto",
        descuento: 25
    }
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    return precioConDescuento;
  }
  
function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const InputCoupon = document.getElementById("InputCoupon");
    const CouponValue = InputCoupon.value;

    const isCouponValueValid  = function (coupon){

        return coupon.name === CouponValue;
    }

    const userCoupon= coupons.find(isCouponValueValid);
    console.log("cupon encontrado es "+userCoupon);

    if(!userCoupon){
        alert("El cupón " + CouponValue + " no es válido");
    }
    else {
        const precioConDescuento = calcularPrecioConDescuento(priceValue, userCoupon.descuento);
  
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }

   
}




  // console.log({
  //   precioOriginal,
  //   descuento,
  //   porcentajePrecioConDescuento,
  //   precioConDescuento,
  // });