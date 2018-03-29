var x1 = 1; // Skapar globala variabler (tillhör window)
// Lokala variabler skapas med let (Block-scope-variables)
var x2 = 2;
// Konstanter skapas med const
var x3 = 3;
// x3 = 5 // fel
// Typer i TypeScript
var done = true;
done = false;
//done = 1; // Fel enligt TypeScript
var userID = 1;
var color = "Blue";
// color = 1; // fel
var notSure = 1;
notSure = "Text";
notSure = false;
// Arrays
var list1 = [1, 2, 3];
var list2 = ["Ett", "Två", "Tre"];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c1 = Color.Blue;
var c2 = Color.Red;
// Template Strings (String Interpolation)
var fullName = "Mahmud Al Hakim";
var age = 45;
var msg = "\nHello " + fullName + ".\nYou are " + age + " years old\"!\n";
// OBS! Du måste använda backticks ` (Det funkar inte med ")
console.log(msg);
