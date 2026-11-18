// Dag 3, del 1: Arrayer och objekt i Console.
import { meny } from "./data";
import {studentPris  } from "./rabatt";

//Reminder för mig själv - Array funktioner
//Lägga till element
//  push - Lägger till element sist i listan
//  unshift - Lägger till element i början av listan
//Ta bort element i listan
//  pop - Tar bort element sist i listan()
//  shift - Tar bort element först i listan



// UPPGIFT 1: arrayer
// a) skapa const drycker: string[] = ["Bryggkaffe", "Latte", "Te"];
// b) lägg till "Chai" sist med push. Skriv ut listan och längden.
// c) ta bort sista med pop och skriv ut vad som togs bort.
// d) skriv ut platsen för "Latte" (indexOf) och om "Cola" finns (includes).
// e) skriv ut hela listan som en text: drycker.join(", ")
// TODO
// a)
const drycker: string[] = ["Bryggkaffe", "Latte", "Te"];          
// b)
drycker.push("Chai");
console.log(`Antal artiklar i listan: ${drycker.length}`);
drycker.forEach(element => console.log(element));
// c) 
const raderadElement: string | undefined = drycker.pop();     //Vill inte ha Chai nu :)
console.log(`Raderad element är: ${raderadElement}`);
// d)
const indexLatte: number = drycker.indexOf("Latte");
const finnsCola: boolean = drycker.includes("Cola");
console.log(`Index för Latte: ${indexLatte} och status på Cola: ${ finnsCola ? "Tillgänglig" : "Finns ej" }`);
// e)
const listaAllaDrycker: string = drycker.join(", "); 
console.log(`Utbud drycker: ${ listaAllaDrycker }`);


// c)
interface Kopp {
  namn: string;
  pris: number;
  vegetarisk: boolean;
  storlek?: string;
}

// UPPGIFT 2: objekt
// a) skapa const kopp = { namn: "Latte", pris: 45, vegetarisk: true };
// b) skriv ut kopp.namn och kopp["pris"]
// c) ändra priset till 48, och lägg till egenskapen storlek: "stor"
//    TypeScript klagar på storlek. Beskriv objektet med en interface där storlek är valfri (storlek?: string).
// d) skriv ut Object.keys(kopp)
// TODO
// a)
const kopp: Kopp = { namn: "Latte", pris: 45, vegetarisk: true };
// b)
console.log(`Namn på Koppen: ${kopp.namn} och kostar: ${kopp["pris"]} kr`);
// c)
kopp.pris = 48;
kopp.storlek = "stor";
// d)
console.log(Object.keys(kopp));
//Note: Jag brukar alltid default till . formen när jag accessar egenskaper hos object. Skulle nyckeln
//ligga i en variabel eller t.ex om nyckeln innehåller mellanslag jag då får man använda haklapparna...hakparanstes/brackets

// UPPGIFT 3: arrayer av objekt
// a) skriv ut hur många rätter menyn har och namnet på den första
// b) loopa med for...of och skriv ut "namn – pris kr" för varje rätt
// c) skriv ut namnet på den sista rätten utan att veta antalet (tips: length - 1)
// TODO
// a) 
console.log(`Antal rätter på menyn: ${meny.length }`);
// b)
for (const matratt of meny){
    console.log(`${matratt.namn} - ${matratt.pris} kr`);
}
// c)
console.log(`Sista rätten på menyn är: ${meny[meny.length - 1].namn}`);

//Steg 4 - Vilken array method
// Måste vara ngn som returerar en ny array baserat på ett vilkor som uppfylls
// och tror det är filter

console.log(`2 Koppar latte kostar: ${ 2 * kopp.pris} kr. Studentpris(10% rabatt) blir: ${studentPris(2 * kopp.pris).toFixed(2)} kr`);
// STEG 10 - Kommentarer
// 1.Uncaught SyntaxError: import declarations may only appear at top level of a module
//  Den känner inte igen nyckelordet import. Detta tillhör det nya modul systemet som JS introducerade.
//  Tror även att modul systemet kräver att ES moduler går via en server...är det kanske därför vi vi kör npm run dev :D...
// 2. Uncaught ReferenceError: studentPris is not defined
//    Måste ju importa funktionen från en fil, hur skall den annars hitta den :D ?
// 3. Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at file:///src/main.ts. (Reason: CORS request not http). 2
// Module source URI is not allowed in this document: “file:///src/main.ts”.
// Jag refererar till kommentar 1 svar