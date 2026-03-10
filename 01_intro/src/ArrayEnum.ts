// ================================
// Arrays in TypeScript
// ================================

// Array of strings
const chaiFlavours: string[] = ["Masala", "Adrak"];

// Array of numbers
const chaiPrice: number[] = [10, 20];

// Generic array syntax
const rating: Array<number> = [4.5, 5.5];


// ================================
// Array of Objects
// ================================

type Chai = {
  name: string;
  price: number;
};

// menu is an array of Chai objects
const menu: Chai[] = [
  {
    name: "Masala",
    price: 15,
  },
  {
    name: "adrak",
    price: 25,
  },
];


// ================================
// Readonly Array
// ================================

// readonly array → values change nahi kar sakte
const cities: readonly string[] = ["delhi", "jaipur"];
// cities.push("pune"); ❌ not allowed


// ================================
// Multidimensional Array
// ================================

// 2D array (array of arrays)
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];


// ================================
// Tuples
// ================================

// Tuple → fixed order + fixed types
let chaiTuple: [string, number];

// exact format required: [string, number]
chaiTuple = ["Masala", 20];


// Another tuple example
let userInfo: [string, Number, boolean];

// order and types must match
userInfo = ["Prathmesh", 100, false];
userInfo = ["Prathmesh", 50, true];


// Readonly tuple
let chaiLocation: readonly [number, number] = [28.66, 32.22];
// chaiLocation[0] = 30 ❌ not allowed


// ================================
// Named Tuples
// ================================

// Tuple with named elements (for readability)
const ChaiItems: [name: string, price: number] = ["Masala", 25];


// ================================
// Enums
// ================================

// Numeric enum (auto-incremented values)
enum CupSize {
  SMALL,  // 0
  MEDIUM, // 1
  LARGE,  // 2
}

const size = CupSize.LARGE;


// Enum with custom starting value
enum Status {
  PENDING = 100,
  SERVED,     // 101
  CANCELLED,  // 102
}


// String enum
enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}

function makechai(type: ChaiType) {
  // function sirf ChaiType enum values accept karega
  console.log(`MAking : ${type}`);
}

makechai(ChaiType.GINGER);
// makechai("masala"); ❌ not allowed


// ================================
// Heterogeneous Enum
// (Not recommended in real projects)
// ================================

enum RandomEnum {
  ID = 1,
  Name = "chai",
}


// ================================
// const enum (compile-time optimization)
// ================================

// const enum JavaScript me emit nahi hota
// direct inline values use hote hain
const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

const s = Sugars.HIGH;


// ================================
// Tuple Edge Case
// ================================

let t: [string, number] = ["chai", 10];

// Technically allowed in JS, but tuple ka intention break hota hai
t.push("extra"); // ❗ avoid in real code