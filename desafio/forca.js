
export class Forca {
  letrasChutadas = [];
  palavraUnderline; 
  vidas = 6;
  situacao;
  palavraForca;

  constructor(palavraForca) {
    this.palavraForca = palavraForca;
    this.palavraUnderline = "_".repeat(palavraForca.length);
    this.letrasChutadas = [];
    this.situacao = "aguardando chute"
  }

  chutar(letra) {
    for (var i = 0; i <= this.vidas; i++) {
      if (this.verificaLetra(letra)) {
        this.letrasChutadas.push(letra);

        if (this.palavraForca.includes(letra)) {
          /*let index = this.palavraForca.indexOf(letra)
          this.palavraUnderline = this.palavraUnderline(index) */// não consegui fazer esta parte
        } else {
          this.vidas--;
        }
        
        if (!this.palavraUnderline.includes("_")) {
          this.situacao = "ganhou";
        } else if (this.vidas == 0) {
          this.situacao = "perdeu";
        } else {
          this.situacao = "aguardando chute";
        }
      }
    }
  }

  buscarEstado() {
    return this.situacao;
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    console.log(""
      + "\t---Dados---"
      + "\nLetras Chutadas: " + this.letrasChutadas 
      + "\nVidas: " + this.vidas 
      + "\nPalavra: " + this.palavraUnderline
    );
  }

  verificaLetra(letra) {
    return !this.letrasChutadas.includes(letra)
  }
}
