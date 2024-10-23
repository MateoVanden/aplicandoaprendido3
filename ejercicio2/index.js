import PromptSync from "prompt-sync";
const prompt = PromptSync();
import { menu } from "./menu.js";
import { Tarea, agregarTitulo, agregarDescripcion, agregarEstado, agregarDificultad } from "./Tarea.js";
import { esperarTeclaParaContinuar, limpiarPantalla } from "./PausayLimpiar.js";
import { buscarTarea } from "./Buscar.js";
import { verTarea } from "./Ver.js";
export let Tareas = [];
let opcion;

do {
    opcion = menu();
    switch (opcion) {
        case 1:
            verTarea();
            esperarTeclaParaContinuar();
            limpiarPantalla();
            break;
        case 2:
            let nombre;
            if (Tareas.length === 0) {
                console.log("No hay tareas cargadas por el momento ");
            }
            else {  
                nombre = prompt("Ingrese el titulo de la tarea que desea buscar: ");
                while (nombre === "") {
                    nombre = prompt("ERROR, ingrese el titulo porfavor: ");
                }
            }
            buscarTarea(nombre);
            esperarTeclaParaContinuar();
            limpiarPantalla();
            break;  
        case 3:
            let titulo = agregarTitulo();
            let descripcion = agregarDescripcion();
            let estado = agregarEstado();
            let dificultad = agregarDificultad();

            let nuevaTarea = new Tarea(titulo, descripcion, estado, dificultad);

            Tareas.push(nuevaTarea);
            console.log("Tarea agregada ");
            limpiarPantalla();
            esperarTeclaParaContinuar();
            break;
        case 4:
            console.log("Gracias por usar el programa ");
            break;
        default:
            console.log("ERROR, opcion incorrecta ");
            break;
    }

} while (opcion != 4);