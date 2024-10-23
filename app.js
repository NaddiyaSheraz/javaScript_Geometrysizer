 function calculate() {
    var numberRadius = parseFloat(document.getElementById('radius').value);
    if (!isNaN(numberRadius)) {
        let Circumference = 2 * 3.142 * numberRadius;
        document.getElementById('result').innerHTML = `The Circumference is: ${Circumference}`;
    } else {
        document.getElementById('result').innerHTML = 'Please enter a valid number for radius';
    }
}


