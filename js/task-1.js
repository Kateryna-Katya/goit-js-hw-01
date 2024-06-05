function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;

}
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
/* ========================================================================================================================================================
console.log(makeTransaction(5, 3000));
VM91:1 You ordered 5 droids worth 15000 credits!
undefined
console.log(makeTransaction(3, 1000));
VM95:1 You ordered 3 droids worth 3000 credits!
undefined
console.log(makeTransaction(10, 500));
VM99:1 You ordered 10 droids worth 5000 credits!
======================================================================================================================================================== */
