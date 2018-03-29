// Klasser
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        // this.firstName = firstName;
        // this.lastName  = lastName;
        Person.antal++;
    }
    Person.prototype.fullname = function () {
        return this.firstName + " " + this.lastName;
    };
    // Instansvariabler / Egenskaper 
    // firstName:string;
    // lastName:string;
    // Statiska variabler
    Person.antal = 0;
    return Person;
}());
// Skapa ett objekt av klassen Person
var p1 = new Person("Mahmud", "Al Hakim");
var p2 = new Person("Kalle", "Anka");
var el = document.getElementById("content");
el.innerHTML = p1.fullname();
el.innerHTML += "<br>" + p2.fullname();
// el.innerHTML = p1.firstName; // Förbjudet i TypeScript
el.innerHTML += "<br>Antal personer: " + Person.antal;
