import { students } from "../data/student.js";


document.getElementById("btnShowLowScores").addEventListener("click", () => {

    const pointEls = document.querySelectorAll("#tblStudents tbody tr td:last-child");
    console.log(pointEls);

    pointEls.forEach((pointEl,index) => {
        if(pointEl.innerText<50){
            document.querySelector(`#tblStudents tbody tr:nth-child(${index+1})`).classList.add("table-danger");
            // pointEl.closest("tr").classList.add("table-danger");
        }

    })
});
 
let strStudentRows = "";

const loadStudents = () => {
    students.forEach((student, index) => {
        strStudentRows += `
          <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${student.name}</td>
                    <td>${student.point}</td>
                </tr> `;
    });
    document.querySelector("#tblStudents tbody").innerHTML = strStudentRows;
};

loadStudents();