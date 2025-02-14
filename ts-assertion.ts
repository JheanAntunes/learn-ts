//type assertion
const minhaIdade: any = 25;
(minhaIdade as number).toString();
(<number>minhaIdade).toString();

//const input = document.getElementById('input') as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById("input");
console.log(input.value);
