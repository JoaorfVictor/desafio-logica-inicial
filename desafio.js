const heroi = "Superman";
let xp = 10500;
let danos = [100, 250, 1000, 1500, 360];

let resultado = 0;

for (let i = 0; i < danos.length; i++) {
  resultado += danos[i];
}

const resultadoFinal = xp - resultado;

switch (true) {
  case resultadoFinal <= 1000:
    console.log("O Herói de nome " + heroi + " está no nível de Ferro");
    break;
  case resultadoFinal >= 1001 && resultadoFinal <= 2000:
    console.log("O Herói de nome " + heroi + " está no nível de Bronze");
    break;
  case resultadoFinal >= 2001 && resultadoFinal <= 5000:
    console.log("O Herói de nome " + heroi + " está no nível de Prata");
    break;
  case resultadoFinal >= 6001 && resultadoFinal <= 7000:
    console.log("O Herói de nome " + heroi + " está no nível de Ouro");
    break;
  case resultadoFinal >= 7001 && resultadoFinal <= 8000:
    console.log("O Herói de nome " + heroi + " está no nível de Platina diamante");
    break;
  case resultadoFinal >= 8001 && resultadoFinal <= 9000:
    console.log("O Herói de nome " + heroi + " está no nível de Ascendente");
    break;
  default:
    console.log("O Herói de nome " + heroi + " está no nível de Platina Radiante");
}


