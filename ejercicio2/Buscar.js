import PromptSync from "prompt-sync";
const prompt = PromptSync();
import { Tareas} from "./index.js";
import { esperarTeclaParaContinuar,limpiarPantalla } from "./PausayLimpiar.js";
import { Tarea } from "./Tarea.js";

export function buscarTarea(nombre) {
    let arrayCadena = [], band = 0;
    for (let i = 0; i < Tareas.length; i++) {
        if (Tareas[i].titulo.toLowerCase().includes(nombre.toLowerCase())) {
            arrayCadena.push(i);
            band++
        }
    }
    if (band === 0) {
        console.log("No hay tareas relacionadas con la búsqueda.");
        esperarTeclaParaContinuar();
    }
    else {
        console.log(`Hubieron ${band} coincidencias en la búsqueda: `);
        for (let i = 0; i < arrayCadena.length; i++) {
            console.log(`[${arrayCadena[i] + 1}] ${Tareas[arrayCadena[i]].titulo} `);
        }
    }
    mostrarDetalles();
}

function mostrarDetalles() {
    let i = parseInt(prompt("Desea ver los detalles de alguna tarea, ingrese el indice si no 0 para volver al menu: "));
    let tareaAux = new Tarea("Titulo","Descripcion","Estado","Dificultad");
    let editar;
    tareaAux = Tareas[i - 1];
    if (i === 0) {
        console.log("Volviendo al menu... ");
        //esperarTeclaParaContinuar();
    }
    else {
        console.log("---------------------------------");
        console.log("Esta es la tarea que elegiste: ");
        console.log(`Título: ${Tareas[i - 1].titulo}.`);
        console.log(`Descripcion: ${Tareas[i - 1].descripcion}.`);
        if (Tareas[i - 1].estado == "P") {
            console.log("Estado: Pendiente");
        }
        else {
            if (Tareas[i - 1].estado == "T") {
                console.log("Estado: Terminada");
            }
            else {
                if (Tareas[i - 1].estado == "E") {
                    console.log("Estado: En curso");
                }
                else {
                    console.log("Estado: Cancelada");
                }
            }
        }
        if (Tareas[i - 1].dificultad == "F") {
            console.log("Dificultad: 🔥");
        }
        else {
            if (Tareas[i - 1].dificultad == "M") {
                console.log("Dificultad: 🔥🔥");
            }
            else {
                console.log("Dificultad: 🔥🔥🔥");
            }
        }
        let op = prompt("Si desea editar la tarea, ingrese (E), o (0) para volver: ").toUpperCase();
        while (op != "E" && op != 0) {
            op = prompt("Ingreso una opcion invalida, vuelva a ingresar: ").toUpperCase();
        }
        if (op == 0) {
            limpiarPantalla();
            console.log("Volviendo al menu principal...");
        }
        else {
            do {
                console.log("-------------------------------------");
                console.log("1.Editar titulo ");
                console.log("2.Editar descripcion ");
                console.log("3.Editar estado ");
                console.log("4.Editar dificultad ");
                console.log("0.Terminar de editar y guardar los datos ");
                editar = parseInt(prompt("Ingrese una opcion: "));

                switch (editar) {
                    case 1:
                        let titulo = prompt("Designe el nuevo título de la tarea: ");
                        while (titulo === "") {
                            titulo = prompt("El titulo es OBLIGATORIO ingrese nuevamente: ");
                        }
                        tareaAux.titulo = titulo;
                        break;
                    case 2:
                        let descripcion = prompt("Designe la nueva descripción de la tarea: ");
                        tareaAux.descripcion = descripcion;
                        break;
                    case 3:
                        let estado = prompt("Designe el nuevo estado de la tarea (P)pendiente,(E)en curso,(T)terminado,(C)cancelado: ").toUpperCase();
                        while (estado != "P" && estado != "E" && estado != "T" && estado != "C") {
                            estado = prompt("ERROR: el estado ingresado es inválido, ingrese nuevamente: ").toUpperCase();
                        }
                        tareaAux.estado = estado;
                        break;
                    case 4:
                        let dificultad = prompt("Designe la nueva dificultad de la tarea (F)facil,(M)media,(D)dificil: ").toUpperCase();
                        while (dificultad != "F" && dificultad != "M" && dificultad != "D") {
                            dificultad = prompt("ERROR: la dificultad ingresada es inválida, ingrese nuevamente: ").toUpperCase();
                        }
                        tareaAux.dificultad = dificultad;
                        break;
                    case 0:
                        console.log("Datos guardados exitosamente, volviendo al menu anterior...");
                        break;
                    default:
                        console.log("ERROR, opcion incorrecta ");
                        break;
                }

            } while (editar != "0")
        }
    }
}


