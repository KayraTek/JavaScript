import {countries} from "../data/countries.js";

const loadData = () => {

    let options = '<option value =" " disabled selected>Choose one</option>';

  for(let country of countries){
    options += `<option value ="${country.ccn3}">${country.name}</option>`;
  }
  
  const ddlCountries = document.querySelector("#ddlCountries");
  ddlCountries.innerHTML = options;
}

const loadTable = (country) => {

}

const getCountry = (countryCode)=>{
    const filteredCountries = countries.filter((country)=>country.ccn3 === countryCode);
   return filteredCountries[0];
}
const cnt = getCountry("840")
console.log(cnt);
loadTable(cnt)
const getTotalArea = ()=>{
    // reduce methodunu öğrenince yapacağız.
}

loadData();