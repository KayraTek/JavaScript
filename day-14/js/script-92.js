import showAlert, {showConfirm} from "./message.js";

document.getElementById("btnAlert").addEventListener("click",() =>{
    showAlert("Hello, World! alert");
});

document.getElementById("btnConfirm").addEventListener("click", ()=>{
    showConfirm("hello module");
});