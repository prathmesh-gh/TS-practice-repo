// ================================
// Object & Object Types
// ================================

const chai = {
  name: "Masala chai",
  price: 20,
  isHot: true,
};
// TypeScript yahan automatically type infer kar leta hai
// {
//   name: string;
//   price: number;
//   isHot: boolean;
// }


// ================================
// Explicit object type declaration
// ================================

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};
// yahan hum object ka structure manually define kar rahe hain

tea = {
  name: "Ginger tea",
  price: 25,
  isHot: true,
};


// ================================
// Type alias for object
// ================================

type Tea = {
  name: "Ginger tea";     // literal type (sirf yahi value allowed)
  price: 25;             // literal type
  ingrediants: string[];
};

const adrakChai: Tea = {
  name: "Ginger tea",
  price: 25,
  ingrediants: ["ginger", "tea leaves"],
};


// ================================
// Structural Typing
// ================================

type Cup = { size: string };

let smallCup: Cup = { size: "200ml" };

let bigCup = { size: "200ml", materials: "steel" };

// extra properties allowed when assigning variable
// as long as required structure match ho
smallCup = bigCup;


// ================================
// Another structural typing example
// ================================

type Brew = { brewTime: number };

const coffee = { brewTime: 5, beans: "Arabica" };

// coffee ke paas brewTime hai → structure match
const chaiBrew: Brew = coffee;


// ================================
// User type
// ================================

type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "Prathmesh",
  password: "123",
};


// ================================
// Nested object types
// ================================

type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  id: string;
  items: Item[];
  address: Address;
};


// ================================
// Partial<T> utility type
// ================================

type chai = {
  name: string;
  price: number;
  isHot: boolean;
};

// Partial → saari properties optional bana deta hai
const Updatedchai = (updates: Partial<chai>) => {
  console.log("updating chai with ", updates);
};

Updatedchai({ price: 25 });
Updatedchai({ isHot: false });
Updatedchai({}); // empty object bhi allowed


// ================================
// Required<T> utility type
// ================================

type ChaiOrder = {
  name?: string;
  quantity?: number;
};

// Required → saari optional properties mandatory bana deta hai
const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};

placeOrder({
  name: "Masala chai",
  quantity: 2,
});


// ================================
// Pick<T, K> utility type
// ================================

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
  ingrediants: string[];
};

// sirf selected properties pick karna
type BasicChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
  name: "Lemon Tea",
  price: 30,
};


// ================================
// Omit<T, K> utility type
// ================================

type ChaiNew = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngrediants: string[];
};

// specific property remove kar deta hai
type PublicChai = Omit<ChaiNew, "secretIngrediants">;