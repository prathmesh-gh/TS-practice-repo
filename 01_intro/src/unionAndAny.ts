// ================================
// Union And Any (focus: Union)
// ================================

// Union Type: using | (pipe) we can allow multiple data types
// means variable ek se zyada type ka value hold kar sakta hai

let subs: number | string = 10;   // valid → number allowed
subs = "1M";                      // valid → string bhi allowed


// Literal Union Type
// variable sirf fixed set of values hi le sakta hai

let apiRequestStatus: 'pending' | 'sucess' | 'error' = 'pending';
// sirf 'pending', 'sucess', ya 'error' hi assign ho sakta hai
apiRequestStatus = 'sucess';      // valid


// Another literal union example
let airlineSeat: 'aisel' | 'window' | 'middle' = 'aisel';
// allowed values ke alawa kuch bhi assign nahi kar sakte
airlineSeat = 'aisel';            // valid



// ================================
// Real-world example with array
// ================================

const orders = ["28", "42", "12", "42"]; 
// orders is an array of strings

let currentorder: string | undefined;
// initially undefined because abhi koi order select nahi hua

for (let order of orders) {
  // loop har order ko ek-ek karke check karega

  if (order === '28') {
    // agar order '28' mil gaya
    currentorder = order; // currentorder ko match wala order assign
    break;                // loop yahin stop ho jayega
  }

  // agar '28' match nahi mila
  // to currentorder ko default value assign hoti rahegi
  currentorder = '11';
}

console.log(currentorder);
// agar '28' mila → output: "28"
// agar nahi mila → output: "11"