import PromptSync from "prompt-sync";
const prompt = PromptSync();

export function Tarea(titulo,descripcion,estado,dificultad){
    this.titulo = titulo;
    this.descripcion =  descripcion;
    this.estado = estado;
    this.dificultad = dificultad;
}

//let nuevaTarea = new Tarea("titulo","descripcion","estado","dificultad")


export function agregarTitulo() {

    let titulo = prompt("Designe el título de la tarea: ");
    while (titulo === "") {
        titulo = prompt("El titulo es OBLIGATORIO ingrese nuevamente: ");
    }
    return titulo;
}

export function agregarDescripcion(){
    let descripcion = prompt("Designe la descripción de la tarea: ");
    while (descripcion === "") {
        descripcion = prompt("La descripcion es OBLIGATORIO ingrese nuevamente: ");
    }
    return descripcion;
}

export function agregarEstado(){
    let estado = prompt("Designe el estado de la tarea (P)pendiente,(E)en curso,(T)terminado,(C)cancelado: ").toUpperCase();
    while (estado != "P" && estado != "E" && estado != "T" && estado != "C") {
        estado = prompt("ERROR: el estado ingresado es inválido, ingrese nuevamente: ").toUpperCase();
    }
    return estado;
}

export function agregarDificultad(){
    let dificultad = prompt("Designe la dificultad de la tarea (F)facil,(M)media,(D)dificil: ").toUpperCase();
    while (dificultad != "F" && dificultad != "M" && dificultad != "D") {
        dificultad = prompt("ERROR: la dificultad ingresada es inválida, ingrese nuevamente: ").toUpperCase();
    }
    return dificultad;
}