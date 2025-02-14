// ts properties are optional by default
interface Person {
  name: string;
  age?: number;
}

const person: Person = { name: "Daniel" };
console.log(person); // { name: 'Daniel' }
// The age property is optional, so we don't need to set it
// { name: 'Daniel' }

// type alias properties are optional by default
type Person2 = {
  name: string;
  age?: number;
};

const person2: Person2 = { name: "Daniel" };
console.log(person2); // { name: 'Daniel' }
// The age property is optional, so we don't need to set it
// { name: 'Daniel' }

const person3: Person2 = { name: "Daniel", age: 26 };
console.log(person3); // { name: 'Daniel', age: 26 }
// The age property is optional, so we can set it
// { name: 'Daniel', age: 26 }
