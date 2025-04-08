import { students } from "../data/student.js";


document.getElementById("btnShowLowScores").addEventListener("click", () => {

    const pointEls = document.querySelectorAll("#tblStudents tbody tr td:last-child");
    console.log(pointEls);

    pointEls.forEach((pointEl, index) => {
        if (pointEl.innerText < 50) {
            document.querySelector(`#tblStudents tbody tr:nth-child(${index + 1})`).classList.add("table-danger");
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
                    <td><button class = "btn btn-warning btn-sm btn-delete">❌</button></td>
                </tr> `;
    });
    document.querySelector("#tblStudents tbody").innerHTML = strStudentRows;

};

const createEventsForDeleteButtons = () => {
    const btns = document.querySelectorAll(".btn-delete").forEach((btnDel) => {
        btnDel.addEventListener("click", (e) => {
            e.stopPropagation();
            const parentTr = e.target.closest("tr")
            const name = parentTr.querySelector("td").innerText;
            console.log(name);

            const result = confirm(`Are you sure to delete ${name}?`);

            if (result) {
                parentTr.remove();
            }

        });
    });
    console.log(btns);
}

const createEventsForTbodyRows = () => {
    document.querySelectorAll("#tblStudents tbody tr").forEach((row) => {
        row.addEventListener("click", (e) => {
            e.target.closest("tr").classList.toggle("table-danger");
        });
    })
}

loadStudents();
createEventsForDeleteButtons();
createEventsForTbodyRows();

