// Klasser
class Person {
   
    // Instansvariabler / Egenskaper 
    // firstName:string;
    // lastName:string;

    // Statiska variabler
    public static antal:number = 0;

    constructor(private firstName:string, public lastName:string){
        // this.firstName = firstName;
        // this.lastName  = lastName;
        Person.antal++;
    }

    fullname(){
        return this.firstName + " " + this.lastName;
    }
}

// Skapa ett objekt av klassen Person
var p1 = new Person("Mahmud" , "Al Hakim");
var p2 = new Person("Kalle" , "Anka");
var el = document.getElementById("content");
el.innerHTML = p1.fullname();
el.innerHTML += "<br>" + p2.fullname();
// el.innerHTML = p1.firstName; // Förbjudet i TypeScript
el.innerHTML += "<br>Antal personer: " + Person.antal;