//generics
function echo<T>(objeto: T): T {
  return objeto;
}

console.log(echo("jhean").length);
console.log(echo({ nome: "jhean", idade: 27 }));

//generics array
function imprimir<T>(args: T[]) {
  args.forEach((element) => console.log(element));
}

const retorno = <T>(r: T): T => {
  return r;
};

const frutas = ["banana", "maça", "uva", "laranja", "pera"];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const firstFive = <T>(arr: T[]): T[] => {
  return arr.slice(0, 5);
};

console.log(firstFive(frutas));
console.log(firstFive(numeros));
console.log(retorno<string>("jhean"));

imprimir([1, 2, 3]);
imprimir<number>([1, 2, 3]);
imprimir<string>(["jhean", "silva"]);
imprimir<{ nome: string; idade: number }>([
  { nome: "jhean", idade: 25 },
  { nome: "silva", idade: 27 },
]);

type Aluno = { nome: string; idade: number };
imprimir<Aluno>([
  { nome: "jhean", idade: 25 },
  { nome: "silva", idade: 27 },
]);

//generics function
const chamarEcho: <T>(data: T) => T = echo;
console.log(chamarEcho<string>("alguma coisa"));

//generics class
class OperacaoBinaria<T, R> {
  constructor(public operando1: T, public operando2: R) {
    console.log(operando1, operando2);
  }
  executar(): R {
    return this.operando2;
  }
}

new OperacaoBinaria<number, number>(1, 2);
new OperacaoBinaria<string, string>("bom", "dia");
new OperacaoBinaria<number, string>(1, "dia");

//generics extends

abstract class OperacaoBinariaAbs<T, R> {
  constructor(public operando1: T, public operando2: R) {}
  abstract executar(): R;
}

class SomaBinaria extends OperacaoBinariaAbs<number, number> {
  executar(): number {
    return this.operando1 + this.operando2;
  }
}
