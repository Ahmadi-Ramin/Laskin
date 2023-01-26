function summa() {
    let n1 = Number(document.calculator.Number1.value);
    let n2 = Number(document.calculator.Number2.value);
    let t = n1 + n2;
    document.calculator.tulos.value = t;
}
function erotus() {
    let n1 = Number(document.calculator.Number1.value);
    let n2 = Number(document.calculator.Number2.value);
    let t = n1 - n2;
    document.calculator.tulos.value = t;
}
function tulo() {
    let n1 = Number(document.calculator.Number1.value);
    let n2 = Number(document.calculator.Number2.value);
    let t = n1 * n2;
    document.calculator.tulos.value = t;
}
function jako() {
    let n1 = Number(document.calculator.Number1.value);
    let n2 = Number(document.calculator.Number2.value);
    let t = n1 / n2;
    document.calculator.tulos.value = t;
}
function tyhjennä() {
    document.calculator.tulos.value = "";
    document.calculator.Number1.value = "";
    document.calculator.Number2.value = "";
}