import { Combatente } from "./Combatente";

export interface AcaoTatica {
  atacar(alvo: Combatente): void;
  defender(): void;
}