import promptSync from 'prompt-sync';
import { suma, resta, multiplicacion, division } from './operaciones.js';
const prompt = promptSync();
let i;
class Calculadora {
    arrayNums;
    constructor() {
        this.arrayNums = [];
    }
    numeros() {
        let operando = 0, op = 1;
        do {
            console.log(`Ingrese el operando número ${operando + 1}`);
            let num = parseFloat(prompt("Numero: "));
            while (isNaN(num)) {
                console.log("Ingreso un numero incorrecto, vuelva a ingresarlo.");
                num = parseFloat(prompt("Numero: "));
            }
            this.arrayNums.push(num);
            operando++;
            if (operando > 1) {
                console.log("Desea seguir ingresando operandos? 1.(SI) o 2.(NO)");
                op = parseInt(prompt("Ingrese la opcion que desee: "));
                while (op !== 1 && op !== 2) {
                    console.log("Ingreso una opcion incorrecta, vuelva a ingresar.");
                    op = parseInt(prompt("Ingrese la opcion correcta: "));
                }
            }
        } while (op !== 2);
        return this.arrayNums;
    }
    getArrayNums() {
        return this.arrayNums;
    }
}
function menu() {
    let opcion;
    const array = calculadora.getArrayNums();
    do {
        console.log("1.Sumar ");
        console.log("2.Restar ");
        console.log("3.Multiplicar ");
        console.log("4.Dividir ");
        console.log("5.Salir ");
        opcion = parseInt(prompt("Ingrese el operador que desee: "));
        switch (opcion) {
            case 1:
                console.log("El resultado es: ", suma(array));
                break;
            case 2:
                console.log("El resultado es: ", resta(array));
                break;
            case 3:
                console.log("El resultado es: ", multiplicacion(array));
                break;
            case 4:
                console.log("El resultado es: ", division(array));
                break;
            case 5:
                console.log("Gracias por utilizar el programa ");
                break;
            default:
                console.log("ERROR, opcion incorrecta ");
                break;
        }
    } while (opcion !== 5);
}
//MAIN
const calculadora = new Calculadora();
//calculadora.numeros();
menu();
