import PromptSync from "prompt-sync";
const prompt = PromptSync();

export function esperarTeclaParaContinuar() {
    prompt('Presiona Enter para continuar...');
}

export function limpiarPantalla() {
    process.stdout.write('\x1Bc'); // o '\033c'
}