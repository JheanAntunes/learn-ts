//object
const pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: "jhean",
  idade: 25,
};

console.log(pessoa.nome);
console.log(pessoa.idade);

//object com funcao
const soma: (x: number, y: number) => number = (x: number, y: number) => {
  return x + y;
};

console.log(soma(2, 2));

//object com propriedade
const humano: {
  nome: string;
  idade: number;
  [prop: string]: any;
  saudar(sobrenome: string): void;
} = {
  nome: "jhean",
  idade: 25,
  saudar(sobrenome: string) {
    console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
  },
};

console.log(humano.nome);
console.log(humano.idade);
humano.saudar("silva");
humano.idade = 26;
console.log(humano.idade);
