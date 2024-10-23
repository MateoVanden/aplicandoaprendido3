export function suma(array:any) {
    let resultado = 0;
    for (let i = 0; i < array.length; i++) {
        resultado += array[i];
    }
    return resultado;
}

export function resta(array:any) {
    let resultado = array[0];
    for (let i = 1; i < array.length; i++) {
        resultado -= array[i];
    }
    return resultado;
}

export function multiplicacion(array:any) {
    let resultado = 0;
    for (let i = 0; i < array.length; i++) {
        resultado *= array[i];
    }
    return resultado;
}

export function division(array:any) {
    let resultado = array[0], bandera = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("No se puede dividir por 0");
            bandera = 1;
        }
    }
    if (bandera === 0) {
        for (let i = 1; i < array.length; i++) {
            resultado /= array[i];
        }
    }
    return resultado;
}