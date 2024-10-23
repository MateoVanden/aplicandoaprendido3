import PromptSync from "prompt-sync";
const prompt = PromptSync();
import { Tareas} from "./index.js";
import { esperarTeclaParaContinuar,limpiarPantalla } from "./PausayLimpiar.js";
import { menu } from "./menu.js";
let opcion;
export function verTarea() {
    do {
        console.log("Que tareas desea ver??? ");
        console.log("1.Todas ");
        console.log("2.Pendientes ");
        console.log("3.En curso ");
        console.log("4.Terminadas ");
        console.log("0.Volver al menu");
        opcion = parseInt(prompt("Ingrese la opcion que desee: "));

        switch (opcion) {
            case 1:
                if (Tareas.length === 0) {
                    console.log("No hay ninguna tarea ");
                }
                else {
                    console.log("Estas son todas tus tareas: ");
                    for (let i = 0; i < Tareas.length; i++) {
                        console.log(`[${i + 1}] ${Tareas[i].titulo}.`);
                    }
                }
                esperarTeclaParaContinuar();
                limpiarPantalla();
                break;
            case 2:
                let band = 0;
                for (let i = 0; i < Tareas.length; i++) {
                    if (Tareas[i].estado === "P") {
                        band = 1;
                        console.log("Estas son tus tareas con estado pendiente: ");
                        console.log(`[${i + 1}] ${Tareas[i].titulo}.`);
                    }
                }
                if (band == 0) {
                    console.log("No tienes tareas con estado pendiente ");
                }
                esperarTeclaParaContinuar();
                limpiarPantalla();
                break;
            case 3:
                let band1 = 0;
                for (let i = 0; i < Tareas.length; i++) {
                    if (Tareas[i].estado === "E") {
                        band1 = 1;
                        console.log("Estas son tus tareas con estado en curso: ");
                        console.log(`[${i + 1}] ${Tareas[i].titulo}.`);
                    }
                }
                if (band1 == 0) {
                    console.log("No tienes tareas con estado en curso ");
                }
                esperarTeclaParaContinuar();
                limpiarPantalla();
                break;
            case 4:
                let band2 = 0;
                for (let i = 0; i < Tareas.length; i++) {
                    if (Tareas[i].estado === "T") {
                        band2 = 1;
                        console.log("Estas son tus tareas con estado terminado: ");
                        console.log(`[${i + 1}] ${Tareas[i].titulo}.`);
                    }
                }
                if (band2 == 0) {
                    console.log("No tienes tareas con estado terminada ");
                }
                esperarTeclaParaContinuar();
                limpiarPantalla();
                break;
            case 0:
                limpiarPantalla();
                console.log("Volviendo al menu ");
                menu();
            default:
                console.log("ERROR, opcion incorrecta ");
                break;
        }

    } while (opcion != "0")
}
