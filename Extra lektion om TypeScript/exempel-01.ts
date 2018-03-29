var x1 = 1; // Skapar globala variabler (tillhör window)
// Lokala variabler skapas med let (Block-scope-variables)
let x2 = 2;
// Konstanter skapas med const
const x3 = 3;
// x3 = 5 // fel

// Typer i TypeScript
let done:boolean = true;
done = false;
//done = 1; // Fel enligt TypeScript

let userID:number = 1;

let color:string = "Blue";
// color = 1; // fel

let notSure:any = 1;
notSure = "Text";
notSure = false;

// Arrays
let list1:number[] = [1,2,3];
let list2:string[] = ["Ett" , "Två" , "Tre"];

// Enum
enum Color {Red , Green, Blue}
let c1:Color = Color.Blue;
let c2:Color = Color.Red;

// Template Strings (String Interpolation)
let fullName:string = "Mahmud Al Hakim";
let age:number = 45;
let msg:string = `
Hello ${fullName}.
You are ${age} years old"!
`
// OBS! Du måste använda backticks ` (Det funkar inte med ")
console.log(msg);

