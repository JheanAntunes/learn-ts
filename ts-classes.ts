interface Humano {
  nome: string;
  idade: number;
  [prop: string]: any;
  saudar(sobrenome: string): void;
}

//classes
class PessoaClass1 implements Humano {
  nome: string;
  idade: number = 0;
  saudar(sobrenome: string) {
    console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
  }
}

const pessoa6 = new PessoaClass1();
