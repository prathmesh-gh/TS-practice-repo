// ================================
// Type Assertion
// ================================

let response: any = "12";

// forceful type assertion
// TypeScript ko manually bata rahe ho ki response string hai
let numericLength: number = (response as string).length;


// ================================
// Type Assertion with real example
// ================================

type Book = {
  name: string;
};

let bookString = `{"name":"who moved my cheese"}`;

// JSON.parse ka return type by default `any` hota hai
// yahan hum TypeScript ko assert kar rahe hain ki ye Book type ka object hai
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);


// ================================
// any type (no safety)
// ================================

let value: any;

value = "chai";
value = [1, 2, 3];
value = 2.5;

// any me TypeScript koi error nahi deta
// chahe runtime pe method exist kare ya nahi
value.toUpperCase(); // ❌ risky, runtime error aa sakta hai


// ================================
// unknown type (safe alternative to any)
// ================================

let newvalue: unknown;

newvalue = "chai";
newvalue = [1, 2, 3];
newvalue = 2.5;

// unknown pe directly operation allowed nahi
// pehle type check karna zaroori hai
if (typeof newvalue === "string") {
  newvalue.toUpperCase(); // ✅ safe after narrowing
}


// ================================
// try-catch & Error narrowing
// ================================

try {
  // error throw ho sakta hai
} catch (error) {

  // instanceof check → Type Narrowing
  if (error instanceof Error) {
    console.log(error.message); // safe access
  }

  // fallback logging
  console.log("error", error);
}


// ================================
// Type assertion with unknown
// ================================

const data: unknown = "chai aur code";

// unknown ko directly string assign nahi kar sakte
// isliye assertion use kiya
const strData: string = data as string;


// ================================
// never type
// ================================

// Literal union
type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role: Role) {

    if (role === "admin") {
        console.log(`redirect to admin dashboard`);
        return;
    }

    if (role === "user") {
        console.log(`redirect to admin dashboard`);
        return;
    }

    // yahan TypeScript ko pata hota hai
    // ki sirf "superadmin" bacha hai
    role; // exhaustive check indicator
}


// Function that never returns
// infinite loop → function kabhi end nahi hota
function neverReturn(): never {
    while (true) {
        // intentionally empty
    }
}