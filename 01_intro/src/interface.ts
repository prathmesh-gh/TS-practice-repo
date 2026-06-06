// interface ke liye keyword ata hai interface iska objective hota hai data ko ya object ko shape dena ya uska structure define karna
// interface me hum properties aur methods dono define kar sakte hai
// interface me hum optional properties bhi define kar sakte hai jiske liye hum ? ka use karte hai
// interface me hum readonly properties bhi define kar sakte hai jiske liye hum readonly keyword ka use karte hai
// interface me hum index signatures bhi define kar sakte hai jiske liye hum [key: string]: any; ka use karte hai
// interface me hum function types bhi define kar sakte hai jiske liye hum (param: type) => returnType; ka use karte hai

// interdface structure define karta hai lekin  javascript ka koi code generate nahi karta hai
interface chai {
  flavor: string;
  price: number;
  milk?: boolean; // optional property
}

const masalaChai: chai = {
  flavor: "Masala",
  price: 20,
  milk: true,
};

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = {
  id: 1,
  name: "Tea Shop",
};
// s.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

// handle interface with functions

interface DiscountCalculator {
  (price: number): number;
}

const calculateDiscount: DiscountCalculator = (p) => {
  return p * 0.1; // 10% discount
};

interface Teamachine {
  start(): void;
  stop(): void;
}

const machine: Teamachine = {
  start() {
    console.log("Machine started");
  },
  stop() {
    console.log("Machine stopped");
  },
};

// index signature example

interface ChaiRating {
  [flavor: string]: number; // flavor ke naam ke hisab se rating store karega
}

const ratings: ChaiRating = {
  Masala: 4.5,
  Ginger: 4.0,
  Cardamom: 4.2,
};

//alag alag interface same name ke hone par TypeScript unhe merge kar deta hai jise declaration merging kehte hai

interface User {
  name: string;
}

interface User {
  age: number;
}

// above code me humne do alag alag interface User define kiya hai lekin dono interface same name ke hai to TypeScript unhe merge kar dega aur dono properties ko ek hi interface me combine kar dega
const u: User = {
  name: "John",
  age: 30,
};

// interface ko kabi kabho extend bhi kar sakte hai jiske liye hum extends keyword ka use karte hai

interface A{a: string}
interface B{b:string}

interface C extends A, B {}
