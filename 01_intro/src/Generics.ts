// generic templates hote hai and we can use them to create reusable components
// generics hume type safety provide karte hai without losing the flexibility of using any type



function wrapInArray<T>(item: T): T[] {
  return [item];
}


wrapInArray("Masala Chai");
wrapInArray(42);
wrapInArray({ flavor: "Ginger", price: 25 }); // object bhi wrap kar sakte hai


function pair <A,B>(a:A, b:B): [A,B] {
  return [a,b];
}

pair("Chai", 25);     
pair({ flavor: "Cardamom" }, { price: 30 });

// GENERICc inerface
interface Box<T> {
    content: T;
}

// t ki jagah hum kisi bhi type ka use kar sakte hai jab hum Box interface ko implement karte hai
const numberBox: Box<number> = { content: 123 };
const stringBox: Box<string> = { content: "Hello" };
const objectBox: Box<{ flavor: string; price: number }> = {
  content: { flavor: "Masala", price: 20 },
};  

// ismain partial,pick,amit types ka use kar sakte hai
interface User {
  name: string;
  age: number;
  email: string;
}

type PartialUser = Partial<User>; // sabhi properties optional ho jayengi
type PickUser = Pick<User, "name" | "email">; // sirf name aur email properties ko pick karega
type OmitUser = Omit<User, "age">; // age property ko omit karega   


// generic api main and state management main bhi use hota hai

interface ApiResponse<T> {
  data: T;
  status: number | null;
}
const res:ApiResponse<{ flavor: string }> = {
  data: { flavor: "Ginger"},
  status: 200,
};