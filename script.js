function dwrite(num) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function cclear() {
    document.getElementById('resultado').innerHTML = "";
}

function calculate() {
    let calc = document.getElementById('resultado').innerHTML;
    if (calc) {
        document.getElementById('resultado').innerHTML = eval(calc);
    } else {
        document.getElementById('resultado').innerHTML = "-E";
    }
}
