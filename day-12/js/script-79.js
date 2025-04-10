import { countries } from "../data/countries.js";

let timeout = null;

const filterData = (value) => {

    if (!value) return [];

    const filteredData = countries.filter((country) =>
        country.name.toLowerCase().includes(value.toLowerCase())
    );

    return filteredData;
};

const setResultList = (items) => {
    const results = document.getElementById("results");
    results.innerHTML = "";

    items.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item.name;
        results.appendChild(li)
    });
}

// console.log(filterData("Ar")); 
const searchBar = document.getElementById("txtSearch");
searchBar.focus();
document.getElementById("txtSearch").addEventListener("input", (e) => {    

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
        const filteredData = filterData(e.target.value);
        setResultList(filteredData)
    }, 500)

});