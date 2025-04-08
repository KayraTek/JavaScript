import { countries } from "../data/countries.js";

const filterData = (value) => {

    const filteredData = countries.filter((country) => 
        country.name.toLowerCase().includes(value.toLowerCase()))

    return filteredData;
};

document.getElementById("txtSearch").addEventListener("input",()=>{

});