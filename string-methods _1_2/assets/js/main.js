const txt =
  "How inappropriate to call this planet Earth, when clearly it is Ocean.";

console.log(txt.indexOf("h"));

console.log(txt.indexOf("Earth"));

console.log(txt.indexOf("Moon"));
// - Konsole gibt -1 aus, das Wort gibt es nicht

let txt2 =
  "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

console.log(txt2.search(";"));

console.log(txt2.search("green"));

console.log(txt2.search("blue"));
// -blue gibt es nicht, da Js case sensitiv ist, Konsole gibt wieder -1 aus

console.log(txt2.search("Blue"));
