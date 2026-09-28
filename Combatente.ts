export abstract class Combatente {
  private nome: string;
  private vida: number;
  private poderDeFogo: number;

  constructor(nome: string, vida: number, poderDeFogo: number) {
    this.nome = nome;
    this.vida = Math.max(vida, 0);
    this.poderDeFogo = Math.max(poderDeFogo, 0);
  }

  public getNome(): string { return this.nome; }
  public setNome(nome: string): void { this.nome = nome; }

  public getVida(): number { return this.vida; }
  public setVida(vida: number): void { this.vida = Math.max(vida, 0); }

  public getPoderDeFogo(): number { return this.poderDeFogo; }
  public setPoderDeFogo(poderDeFogo: number): void {
    this.poderDeFogo = Math.max(poderDeFogo, 0);
  }

  public receberDano(dano: number): void {
    this.setVida(this.vida - dano);
  }

  public estaVivo(): boolean {
    return this.vida > 0;
  }
}