window.alert("Hallo Welt");
// *einfach Text der angezeigt wird

window.prompt("Bitte geben Sie Ihren Namen ein.");
// *Feld zum eintragen

window.prompt("Bitte geben Sie Ihren Namen ein", "Placeholder");
// *Feld zum eintragen mit Placeholder

window.confirm("Stimmen Sie meiner Meinung zu?");
// *Text aber mit zwei Button zur Auswahl

let alter = window.prompt("Gib mir bitte dein Alter:");
// *Feld zum eintragen
console.log(alter);
// -in der Konsole wird der Wert ausgegeben, der vom Nutzer eingetragen wurde

let b = 5;
let a = b * 5 - 3;
// 5*5-3 =22
window.alert(a);
// *nur Text wird angezeigt, in dem Fall das Ergebnis der Rechnung innerhalb der Variable a
// -Text der im Popup Fenster angezeigt wird

let mann = "Robert Wadlow ist der größte Mann der Welt : ";
let grosse = "2,72m";

window.confirm(mann + grosse);
// *Text aber mit zwei Button zur Auswahl
// -confirm = true or false, man kann auch auf abbrechen drücken
