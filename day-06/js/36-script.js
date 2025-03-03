const getLastPrice = (price, tax, discount) => {
    price ??= 0; // price = price ?? 0;
    tax ??= 0;
    discount ??= 0;
    if (discount <= 0) tax = 0;
    if (price >= 1500) discount += 10;

    const totalTax = price * tax / 100;
    const totalDiscount = price * discount / 100;

    const result = price + tax - discount;

    return result;
}

const onGetLastPriceClick = () => {
    const txtNum = document.querySelector(`#txtNum`);
    const txtTax = document.querySelector(`#txtTax`);
    const txtDiscount = document.querySelector(`#txtDiscount`);
    const numValue = txtNum.value;
    const taxValue = txtTax.value;
    const discountValue = txtDiscount.value;
    const lastPrice = getLastPrice(numValue, taxValue, discountValue);
    console.log(lastPrice);
}