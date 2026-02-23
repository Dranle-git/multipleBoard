const form = document.getElementById("numbers");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let myFirstArray = [];

    for (let i = 1; i <= 10; i++) {
        let value = document.getElementById(`input${i}`).value;
        myFirstArray.push(Number(value));
    }

    const result = document.getElementById("result");
    result.value = "";

    for (let i = 0; i < 10; i++) {
        for (let j = 1; j <= 10; j++) {
            result.value += myFirstArray[i] * j + "\t";
        }
        result.value += "\n";
    }
});