import { Combatente } from "./Combatente";
import { AcaoTatica } from "./AcaoTatica";

export class Infantaria extends Combatente implements AcaoTatica {
  private coleteBalistico: number;

  constructor(
    nome: string,
    vida: number,
    poderDeFogo: number,
    coleteBalistico: number
  ) {
    super(nome, vida, poderDeFogo);
    this.coleteBalistico = Math.max(coleteBalistico, 0);
  }

  public getColeteBalistico(): number {
    return this.coleteBalistico;
  }

  public setColeteBalistico(valor: number): void {
    this.coleteBalistico = Math.max(valor, 0);
  }

  public atacar(alvo: Combatente): void {
    const dano = this.getPoderDeFogo();
    console.log(
      "O soldado " + this.getNome() + " disparou rajadas de fuzil contra " +
        alvo.getNome() + " causando " + dano + " de dano!"
    );
    alvo.receberDano(dano);
  }

  public defender(): void {
    this.coleteBalistico += 5;
    console.log(
      this.getNome() + " buscou cobertura! Colete balístico: " + this.coleteBalistico
    );
  }

  public override receberDano(dano: number): void {
    let danoFinal = dano - this.coleteBalistico;
    if (danoFinal < 0) danoFinal = 0;
    super.receberDano(danoFinal);
  }
}