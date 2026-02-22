// ================================
// Type Narrowing & Type Guards
// ================================

function getChai(kind:string|number) {
    if (typeof kind=== 'string'){
        return `making ${kind}`
    }
    return `chai orderd : ${kind}`
}


// Optional parameter (msg?: string)
// msg ya to string ho sakta hai ya undefined
function serveChai(msg?:string) {

    // truthy check → narrowing from string | undefined → string
    if (msg){
        return `Serving orderd : ${msg}`
    }

    // jab msg undefined ho
    return `serving default masala chai`
}


// Union of string literals + number
function orderChai(size:"small"|"medium"|"large"|number){

    // literal narrowing
    if (size==="small") {
        return `small cutting chai...`
    }

    if (size==="medium"||size==="large") {
        return `make extra chai`
    }

   
        return ` chai order # ${size}`
    
}


// ================================
// Classes & instanceof narrowing
// ================================


class kulhadchai {
    serve() {
        return `Serving Kulhad chai`
    }
}
class cuttingchai {
    serve() {
        return `Serving Kulhad chai`
    }
}

function serve(chai:kulhadchai|cuttingchai) {

    // instanceof → class-based type guard
    if ( chai instanceof kulhadchai ) {
        return chai.serve()
    }
    // cuttingchai ka case yahan handle ho sakta hai
}


// ================================
// Custom Type Guard using "is"
// ================================


type ChaiOrder={
    type:string
    sugar:number
}


// Custom type guard function
// return type: obj is ChaiOrder
function isChaiOrder(obj:any):obj is ChaiOrder {

    // runtime checks to validate structure
    return  (
        typeof obj==="object"
        &&obj!==null
        &&typeof obj.type ==='string'
        &&typeof obj.sugat === "number"
    )
}

function serveOrder(item:ChaiOrder|string) {
    
    // custom type guard usage
    if (isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar}`
    }
    return `serving custom chai ${item}`
}


// ================================
// Discriminated Union
// ================================

type Masalachai ={ type:"masala" ,spicelevel:number}
type gingerchai ={ type:"Ginger" ,spicelevel:number}
type Tulsichai ={ type:"Tulsi" ,spicelevel:number}

type Chai = Masalachai|gingerchai|Tulsichai



// Discriminated union narrowing using switch
function MakeChai(order:Chai){
    // order.type ek "discriminator" hai
    switch (order.type) {
        case "masala":
            return `Masala chai`
            break;
        case "Ginger":
            return `Ginger chai`
            break;
        case "Tulsi":
            return `Tulsi chai`
            break;
    
    }
}

// ================================
// "in" operator narrowing
// ================================

function brew(order: Masalachai | gingerchai) {

    // property existence check
    if ("spicelevel" in order) {
        // yahan order ke paas spicelevel hai
        // dono types me common property hone ki wajah se
        // narrowing safe ho jaati hai
    }
}


// ================================
// Unknown + custom guard (incomplete on purpose)
// ================================

function isStringArray(arr: unknown): arr is string[] {
    // yahan usually Array.isArray(arr)
    // aur typeof element === "string"
    // jaise checks hote hain
}