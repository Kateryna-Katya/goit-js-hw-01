function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}
/* ========================================================================================================================================================
console.log(getShippingMessage("Australia", 120, 50));
VM74:1 Shipping to Australia will cost 170 credits
undefined
console.log(getShippingMessage("Germany", 80, 20));
VM78:1 Shipping to Germany will cost 100 credits
undefined
console.log(getShippingMessage("Sweden", 100, 20));
VM82:1 Shipping to Sweden will cost 120 credits
======================================================================================================================================================== */