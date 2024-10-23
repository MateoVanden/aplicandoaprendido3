import PromptSync from "prompt-sync";
const prompt = PromptSync();

export function menu(){
    console.log("--------------------------------------------------------");
    console.log("1.Ver mis tareas");
    console.log("2.Buscar tarea");
    console.log("3.Agregar una tarea");
    console.log("4.Salir");
    console.log("--------------------------------------------------------");
    let opcion = parseInt(prompt("Ingrese la opcion que desea realizar: "));

    return opcion;
}