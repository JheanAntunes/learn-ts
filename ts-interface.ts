//interface
interface PessoaInterface {
  nome: string;
  idade: number;
  adulto?: boolean;
}

const pessoa3: PessoaInterface = {
  nome: "jhean",
  idade: 25,
};

//interface com funcao
interface Soma {
  (x: number, y: number): number;
}

const soma2: Soma = (x: number, y: number) => {
  return x + y;
};

//interface com propriedade
interface Humano {
  nome: string;
  idade: number;
  [prop: string]: any;
  saudar(sobrenome: string): void;
}

function saudarComOla(pessoa: Humano) {
  console.log("Olá, " + pessoa.nome);
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = "joana";
}
