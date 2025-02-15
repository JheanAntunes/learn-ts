// typescript: Keyof

// keyof operator returns the type of the keys of a given type
type Point = { x: number; y: number };
type PointKeys = keyof Point; // 'x' | 'y'

const point: Point = { x: 10, y: 20 };
const getPoint = (key: PointKeys) => point[key];
getPoint("x"); // 10
getPoint("y"); // 20
// getPoint('z'); // Error: Argument of type '"z"' is not assignable to parameter of type 'PointKeys'.
// getPoint(10); // Error: Argument of type '10' is not assignable to parameter of type 'PointKeys'.
// getPoint('x', 'y'); // Error: Expected 1 arguments, but got 2.
