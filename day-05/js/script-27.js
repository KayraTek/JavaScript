function showSalary() {
    const txtSalary = document.querySelector('#txtSalary');
    const txtResult = document.querySelector('#result');
    const elStatus = document.querySelector('input[name="status"]:checked');
    let salary = Number(txtSalary.value);
    const status = elStatus.value;
    
    salary = status == "retired" ? salary * 0.9 : salary * 0.95;

    txtResult.innerHTML = `Your salary is <u>${salary}</u>`
}