// Funktioner

function add(x:number , y:number):number {
    return x+y;
}
console.log(add(1 ,2));
// OBS! Om vi inte skickar number
// Då kommer webbläsaren att öppna JS-filen
// Som innehåller valid JS-kod!
console.log(add("Mahmud " ," Al Hakim"));

// Arrow function
let add2 = (x:number , y:number) => x+y;
console.log(add2(2,3));

