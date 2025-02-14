// Ts example predicate
function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function print(value: unknown) {
  if (isNumber(value)) {
    console.log("Is number: ", value.toFixed(2));
  } else if (isString(value)) {
    console.log("Is string: ", value.trim());
  } else {
    console.log("Is neither a number nor a string");
  }
}

print(1);
print("1");
print({});
//
