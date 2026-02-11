function createTable() {

    let container = document.getElementById("tableContainer");
    container.innerHTML = "";

    let table = document.createElement("table");
    table.border = "1";

    for (let i = 1; i <= 10; i++) {

        let num = document.getElementById("num" + i).value;

        if (num !== "") {

            let row = document.createElement("tr");

            for (let j = 1; j <= 10; j++) {

                let cell = document.createElement("td");
                cell.textContent = num * j;
                row.appendChild(cell);
            }

            table.appendChild(row);
        }
    }

    container.appendChild(table);
}
function createTable() { // יוצרת טבלה //
    let numbers = []; //

    for (let i = 1; i <= 10; i++) { // רצה על כל המספרים //
        let value = document.getElementById("num" + i).value; // לוקחת ערך //
        numbers.push(parseInt(value)); // המרה למספר, הוספה למערך //
    }

    buildMultiplicationTable(numbers); // קריאה לפונקציה שבונה את הטבלה //
}
"</table>"; // הצגת הטבלה בדף
document.getElementById("tableContainer").innerHTML = tableHTML;

