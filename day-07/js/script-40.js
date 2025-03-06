
let randomNumber;
const btnGuess = document.querySelector('.btn-guess');
const btnStart = document.querySelector('.btn-start');
let txtNumber = document.querySelector('#txtNumber');
const lblResult = document.querySelector('#lblResult');

const start = () => {
   
    randomNumber = generateRandomNumber(1,100);
    console.log(randomNumber);
    btnGuess.style.display = "inline";
    btnStart.style.display = "none";
    txtNumber.focus();
    txtNumber.pointerEvents = "all";
}

const guess = () => {
    let num = txtNumber.value;
     num = num || 0;
    if ( num>randomNumber){
        lblResult.innerHTML = "Go down!"

    } else if (num < randomNumber){
        lblResult.innerHTML = "Go up!"
    
    } else {
        lblResult.innerHTML = "Congrats! you guessed the number."
        btnGuess.style.display = "none";
        btnStart.style.display = "inline";
        txtNumber.pointerEvents = "none";
    }

    

    txtNumber.value = "";
    txtNumber.focus();


}   

const generateRandomNumber = (min,max) => 
    Math.floor(Math.random() * (max- min + 1) + min);

    
   
