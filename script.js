const sumar = (num1, num2)=>{
    return parseInt(num1) + parseInt (num2)
}

const restar = (num1, num2)=>{
    return parseInt(num1) - parseInt (num2)
}

const multiplicar = (num1, num2)=>{
    return parseInt(num1) * parseInt (num2);
}

const dividr = (num1, num2)=>{
    return parseInt(num1) / parseInt (num2);
}

alert ("Que operacion queres realizar? ");

let operacion = prompt("1: Sumar  2: Restar 3:  Multiplicar 4: Dividir " )

if (operacion == 1) {
    let numero1 = prompt("Primer numero para sumar ");
    let numero2 = prompt("segundo  numero para sumar ");
    resultado = sumar (numero1,numero2);
    document.write (`tu resultado es ${resultado}`);
}
    
if (operacion == 4) {
    let numero1 = prompt("Primer número para sumar");
    let numero2 = prompt("Segundo número para sumar");
    resultado = dividir (numero1,numero2);
    document.write (`Tu resultado es ${resultado}`);
}
