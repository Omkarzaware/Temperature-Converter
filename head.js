function convertTemperature() {
    let celInput = document.getElementById("celsius");
    let resultOutput = document.getElementById("result");
    let cel = celInput.value;

    if (cel !== "") {
        let f = (cel * 9/5) + 32;
        resultOutput.textContent = "Fahrenheit: " + f.toFixed(2);
    } else {
        resultOutput.textContent = "";
    }
}
