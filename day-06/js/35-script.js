function isPrime(num) {

    let result = true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            result = false;
            break;
        }
    }
    return result;
}
function onIsPrimeClick() {
    const txtNum = document.querySelector(`#txtNum`);
    const num = txtNum.value;
    const txtResult = document.querySelector(`#result`);

    if (isPrime(num) == true) {
        txtResult.innerHTML = `${num} Asal Sayıdır.`;
    } else {
        txtResult.innerHTML = `${num} Asal Sayı <u>değildir.`;

    }

}

