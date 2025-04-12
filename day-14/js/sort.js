

/*
SORTING
Eger negatif bir sayi donerse a, b den once siralanir.
Eger pozitif bir sayi donerse b, a dan once siralanir.
Eger sifir donerse degisilik olmaz. 
*/




const numberSortASC = (arr) => {

    return arr.sort((a, b) => a - b);
}


const numberSortDESC = (arr) => {
 
    return arr.sort((a, b) => b - a);
}

// arr = ["Ali","Veli","Selin","Sener","Asli"]

const stringSortASC = (arr) =>{
    return arr.sort( (a,b)=> a.localeCompare(b));
}

const stringSortDESC = (arr) =>{
    return arr.sort((a,b)=> b.localeCompare(a));}

export {numberSortASC, numberSortDESC, stringSortASC, stringSortDESC};  //export ediyoruz.  //