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

alert ("Que operacion queres realizar ");

let operacion = prompt("1: Sumar  2: Restar 3:  Multiplicar 4: Dividir " )
