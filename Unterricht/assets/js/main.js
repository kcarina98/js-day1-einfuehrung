// console.(log)
// damit können wir uns Sachen in der Konsole ausgeben lassen. Das werden wir viel zum Testen benötigen -- Am Ende muss ein Semikolon stehen;

console.log("Hallo");

// Variablen
let location1 = "München";
const location2 = "Hamburg";

// * const- variablen sollen für Werte verwendet, die sich nicht ändern (bspw. Geburtsdatum)
// * let-variablen für Werte, die ich später ggf. noch ändern muss (Alter)
// * var- diese Variable kann man wir let auch ändern - var wird aber NICHT MEHR BENUTZT

// ? CONST
// stell dir vor du möchtest eine Varibla deklarieren, um den Namen einer Person zu speichern. Wenn du den Namen einmal eingespeichert hast, soll der Name nicht mehr verändert werden können
//- const name = "Max";

// ? LET
// stell dir vor du möchtet eine variable Variable deklarieren, um die Anzahl der Punkte bei einem Spielstand zu speichern. Diese Variable wird sich im Laura des Spiels ständig ändern.
// - let score = 8;

// ?Zuweisen und aufrufen einer Variable
// let
// mit let erstellen wir eine Variable
// let num1
// hier initialisieren wir eine Variable und weisen direkt einen Wert zu

let num1 = 3;
console.log("num1", num1);

let num2 = 5;
console.log("num2", num2);

let num3 = 7;
console.log({ num3 });

num1 = 100;
console.log({ num1 });

// ! DATEN TYPEN

// -string
// strings sind Textelemente
// um einen String kommen ""
// Strings werden in der Konsole immer weiß angezeigt

// - numbers
// numbers werden in der Konsole lila angezeigt

// -Booleans
// Booleans werden in der Konsole lila angezeigt
console.log(true);
console.log(false);

// !Konventionen

// selbsterklärende Namen verwenden
// Namen dürfen nie mit Zahlen anfangen
// Case-sensitiv benutzen

// - Case sensitiv
//  A a sind zwei verschiedene Werte
let a = 10;
let A = 100;

console.log(a);
console.log(A);

// -Camel case
// erster Buchstabe klein und alles zusammen geschrieben

let meineErsteVariable;
// am besten direkt in Englisch
let myFirstVarible;

// underscoure
let my_first_variable;

// Psacalcase
let My_first_variable;

// auf keinen Fall alles klein schreiben oder mit $ zeichen anfangen

// ! String Concatination
// Wir können mehrere Textelemente miteinader verbinden
const firstName = "Bruce";
const lastName = "Wayne";
let adress = "Gotham City";

console.log("Ich bin" + firstName + "" + lastName + "und lebe in" + adress);

// !Aritmetische Operatoren

let x = 5;
let y = 3;
let z = 15;

// addieren
console.log(x + y);

// subtrahieren
console.log(z - x);

// multiplizieren

console.log(y * z);

// dividieren
console.log(z / x);

// ! Modulo = Restwert
// Wir gucken ob ein Restwert bleibt
// % = Modulo Operator

console.log(z % y);

console.log(x % y);

// !Increment
// mit ++ wird 1 zum vorherigen Wert hinzugefügt

// !Decrement
// mit -- wird 1 zum vorherigen Wert abgezogen
let zahl2 = 5;
console.log(zahl2);
zahl2--;
console.log(zahl2);

// !Output

// -document.write()
// mit write können wir Elemente in unser Html hinzufügen
// *Wichtig: wird immer am Ende des Html hinzugefügt
// Wir können auch html reinschreiben
document.write("<h2> test </h2>");

// -window.alert()
// es öffnet sich ein Pop-up mit einem Text
window.alert("Hallo");

// !Input

// -window.prompt()
// damit öffnet sich ein pop up in den der Nutzer etwas eingeben kann
// window.prompt("Bitte deinen Namen eingeben");

// wenn wir das ganze in einer Variable speichern, bekommen wir in console.log() den wert ausgegeben, den der Nutzer eingegeben hat

let windowInput = window.prompt(
  "Bitte gib deinen Namen ein:",
  "Vorname Nachname"
);

console.log(windowInput);
// eingetragener Wert wird in Konsole angezeigt

// -window.confirm()
// window.confirm("Stimmen Sie den Cookies zu?");

// wenn wir das ganze in einer Variable speichern, bekommen wir in console.log() was der Nutzer ausgewählt hat
let confirm = window.confirm("Stimmen Sie den Cookies zu?");
console.log(confirm);
