// ================================
// Functions in TypeScript
// ================================

// Normal function with typed parameters
function makeChai(type: string, cups: number) {
  // type must be string, cups must be number
  console.log(`Making ${cups} cups of ${type}`);
}

makeChai("Masala", 2); // correct function call


// Function with explicit return type
function getChaiPrice(): number {
  // function hamesha number return karega
  return 25;
}


// Function with possible null return
function makeOrder(order: string) {
  // agar order empty / falsy ho
  if (!order) return null;

  // warna order string return karega
  return order;
}


// void return type
// void ka matlab function kuch return nahi karta
function loChai(): void {
  console.log(`chai is ready`);
}


// ================================
// Optional & Default Parameters
// ================================

// Optional parameter
// type ho sakta hai string ya undefined
function orderChai(type?: string) {
  // agar value na mile to bhi error nahi aayega
}


// Default parameter
// agar argument pass nahi kiya
// to default value use hogi
function OrderChai(type: string = "Masala") {
  // type by default "Masala" rahega
}


// ================================
// Function with object parameter
// ================================

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large"; // literal union type
}): number {
  // order object ka structure fix hai
  // function number return karega
  return 4;
}