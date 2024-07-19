function addition(num1, num2) {
    return num1 + num2;
}

function soustraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

function displayResult(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let resultat;

    if (operation === 'addition') {
        resultat = addition(num1, num2);
    } else if (operation === 'soustraction') {
        resultat = soustraction(num1, num2);
    } else if (operation === 'multiplication') {
        resultat = multiplication(num1, num2);
    } else if (operation === 'division') {
        resultat = division(num1, num2);
    }

    document.getElementById("resultat").innerHTML = "Résultat : " + resultat;
}

// Exporting functions for testing
if (typeof module !== 'undefined') {
    module.exports = { addition, soustraction, multiplication, division };
}
