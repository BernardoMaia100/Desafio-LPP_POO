import { Infantaria } from "./Infantaria";
import { FrancoAtirador } from "./FrancoAtirador";

const capitaoPrice = new Infantaria("Capitão Price", 120, 25, 10);
const ghost = new FrancoAtirador("Ghost", 90, 40, 3);

console.log("INÍCIO DA OPERAÇÃO\n");

let turno = 1;
while (capitaoPrice.estaVivo() && ghost.estaVivo()) {
  console.log("TURNO " + turno);

  capitaoPrice.atacar(ghost);
  if (!ghost.estaVivo()) break;

  ghost.atacar(capitaoPrice);
  if (!capitaoPrice.estaVivo()) break;

  if (turno % 2 === 0) {
    capitaoPrice.defender();
  } else {
    ghost.defender();
  }

  console.log("Vida de " + capitaoPrice.getNome() + ": " + capitaoPrice.getVida());
  console.log("Vida de " + ghost.getNome() + ": " + ghost.getVida() + "\n");

  turno++;
}

console.log("FIM DA OPERAÇÃO");
if (capitaoPrice.estaVivo()) {
  console.log("SOBREVIVENTE: " + capitaoPrice.getNome());
} else {
  console.log("SOBREVIVENTE: " + ghost.getNome());
}