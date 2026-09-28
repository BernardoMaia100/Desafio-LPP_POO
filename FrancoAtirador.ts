import { Combatente } from "./Combatente";
import { AcaoTatica } from "./AcaoTatica";

export class FrancoAtirador extends Combatente implements AcaoTatica {
  private municaoEspecial: number;

  constructor(
    nome: string,
    vida: number,
    poderDeFogo: number,
    municaoEspecial: number
  ) {
    super(nome, vida, poderDeFogo);
    this.municaoEspecial = Math.max(municaoEspecial, 0);
  }

  public getMunicaoEspecial(): number {
    return this.municaoEspecial;
  }

  public setMunicaoEspecial(valor: number): void {
    this.municaoEspecial = Math.max(valor, 0);
  }

  public atacar(alvo: Combatente): void {
    let dano: number;

    if (this.municaoEspecial >= 1) {
      this.municaoEspecial--;
      dano = this.getPoderDeFogo() * 2;
      console.log(
        this.getNome() + " fez um tiro de precisão em " + alvo.getNome() +
          " causando " + dano + " de dano!"
      );
    } else {
      dano = Math.floor(this.getPoderDeFogo() / 2);
      console.log(
        this.getNome() + " está sem munição especial! Causou " +
          dano + " de dano em " + alvo.getNome() + "."
      );
    }

    alvo.receberDano(dano);
  }

  public defender(): void {
    this.setVida(this.getVida() + 15);
    console.log(
      this.getNome() + " usou Kit de Primeiros Socorros! Vida: " + this.getVida()
    );
  }
}