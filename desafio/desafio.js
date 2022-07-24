import { question } from 'readline-sync';
import { Forca } from "./forca.js"

const jogo = new Forca('visa');

while (!["perdeu", "ganhou"].includes(jogo.buscarEstado())) {
    const chute = question("Aguardando chute: \n");
    jogo.chutar(chute);
    jogo.buscarDadosDoJogo();
}

console.log("você " + jogo.buscarEstado());
