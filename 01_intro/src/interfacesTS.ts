// ------------------------------
// Chai Order Type
// ------------------------------

// ChaiOrder ek custom type hai jo chai ke order ka structure define karta hai
type ChaiOrder = {
  type: string;      // chai ka type (masala, ginger, etc.)
  sugar: number;     // sugar quantity
  strong: boolean;   // chai strong hai ya nahi
};

// chai function ek ChaiOrder type ka object accept karta hai
function chai(order: ChaiOrder) {
  console.log(order); // order details print karega
}

// serveChai bhi same type ka object accept karta hai
function serveChai(order: ChaiOrder) {
  console.log(order);
}

// ------------------------------
// Tea Recipe Type
// ------------------------------

// TeaRecipe ek structure hai jisme ingredients define hote hain
type TeaRecipe = {
  water: number; // pani ki matra
  milk: number;  // doodh ki matra
};

// Masalachai class TeaRecipe ko implement karti hai
// matlab water aur milk properties hona compulsory hai
class Masalachai implements TeaRecipe {
  water = 100;
  milk = 100;
}

// ------------------------------
// Interface Example
// ------------------------------

// CupSize interface cup ke size ko restrict karta hai
interface CupSize {
  size: "small" | "large"; // sirf small ya large allowed
}

// Chai class CupSize ko implement karti hai
class Chai implements CupSize {
  size: "small" | "large" = "large"; // default value large
}

// ------------------------------
// Union Type Issue Example
// ------------------------------

// Union type ka example
// type Response = { ok: true } | { ok: false }

// ❌ Error isliye aata hai kyunki
// class ek union type ko directly implement nahi kar sakti
// class myRes implements Response {
//   ok: boolean = true;
// }

// ------------------------------
// Literal Union Type
// ------------------------------

// TeaTypes ek union of string literals hai
type TeaTypes = "masala" | "ginger" | " lemon";

// orderChai function sirf defined TeaTypes accept karega
function orderChai(t: TeaTypes) {
  console.log(t);
}

// ------------------------------
// Intersection Type
// ------------------------------

// BaseChai basic chai ingredients define karta hai
type BaseChai = { teaLeaves: number };

// Extra masala define karta hai
type Extra = { masala: number };

// MasalaChai dono types ka combination hai
// isse intersection type kehte hain
type MasalaChai = BaseChai & Extra;

// MasalaChai type ka object
const cup: MasalaChai = {
  teaLeaves: 2,
  masala: 1,
};

// ------------------------------
// Optional Property
// ------------------------------

// User type jisme bio optional hai
type User = {
  username: string;
  bio?: string; // ? ka matlab optional
};

// bio ke bina valid
const u1: User = { username: "Prathmesh" };

// bio ke saath bhi valid
const u2: User = { username: "Prathmesh", bio: "Developer" };

// ------------------------------
// Readonly Property
// ------------------------------

// Config type jisme appName readonly hai
type Config = {
  readonly appName: string; // sirf read ho sakta hai
  version: number;
};

// Config object
const cfg: Config = {
  appName: "appName",
  version: 1,
};

// ❌ Error: readonly property ko change nahi kar sakte
// cfg.appName = "New appName";