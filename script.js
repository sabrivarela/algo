const sumar = (num1, num2)=>{
    return parseInt(num1) + parseInt (num2);
}

const restar = (num1, num2)=>{
    return parseInt(num1) - parseInt (num2);
}

const multiplicar = (num1, num2)=>{
    return parseInt(num1) * parseInt (num2);
}

const dividir = (num1, num2)=>{
    return parseInt(num1) / parseInt (num2);
}

alert ("Que operacion queres realizar? ");

let operacion = prompt("1: Sumar  2: Restar 3:  Multiplicar 4: Dividir " );

if (operacion == 1) {
    let numero1 = prompt("Primer número para sumar: ");
    let numero2 = prompt("Segundo  número para sumar: ");
    resultado = sumar (numero1,numero2);
    document.write (`Tu resultado es ${resultado}`);
}
    
if (operacion == 4) {
    let num1 = prompt("Primer número para dividir: ");
    let num2 = prompt("Segundo número para dividir: ");
    resultado = dividir (num1,num2);
    document.write (`Tu resultado es ${resultado}`);
}
if (operacion == 3) {
    let num1 = prompt("Primer número para multiplicar: ");
    let num2 = prompt("Segundo número para multiplicar: ");
    resultado = multiplicar (num1,num2);
    document.write (`Tu resultado es ${resultado}`);
}
    
if (operacion == 2) {
    let num1 = prompt("Primer número para restar: ");
    let num2 = prompt("Segundo número para restar: ");
    resultado = restar (num1,num2);
    document.write (`Tu resultado es ${resultado}`);
}

