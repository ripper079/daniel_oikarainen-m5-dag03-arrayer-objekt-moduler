// Dag 3, del 2: Funktioner som arbetar med menyn. Gör alla tester gröna på tests.html.
// Använd filter, map, find, reduce och sort där det passar.
// Typerna (Ratt, OrderRad) finns i typer.ts. Röda understrykningar tills du skrivit return är normalt.
import { formateraPris } from "./pris";
import type { Ratt, OrderRad } from "./typer";

// 1. Alla vegetariska rätter (filter). Returnerar en ny array.
export function vegetariskaRatter(meny: Ratt[]): Ratt[] {
  // TODO
  //Retunera en ny array baserat på ett vilkor för varje element
  return meny.filter((element) => element.vegetarisk);
}

// 2. Bara namnen, som en array av text (map). ["Kardemummabulle", ...]
export function rattNamn(meny: Ratt[]): string[] {
  // För varje element i arrary (titta hur Ratt ser ut i typer)
  // där varje ny element skall vara namnet på rätten
  //och map wrappes in alla element in i en array
  const baraNamn: string[] = meny.map((enRatt) => enRatt.namn);

  return baraNamn;
}

// 3. En prislista som text: "Kardemummabulle – 35 kr" (map + formateraPris)
export function prislista(meny: Ratt[]): string[] {
  // TODO
  //Ganska lik föregående med lägg till formatterade priset också
  //const namnPris: string[] = meny.map((enRatt) => enRatt.namn + " – " + enRatt.pris + " kr");
  const namnPris: string[] = meny.map((enRatt) => `${enRatt.namn} – ${enRatt.pris} kr`);
  return namnPris;
}

// 4. Hitta en rätt via id (find). Returnerar objektet, eller undefined om det saknas.
export function hittaRatt(meny: Ratt[], id: number): Ratt | undefined {
  // TODO
  const rattHittad: Ratt | undefined = meny.find((enRatt) => enRatt.id === id);
  //Om inget object hittas så retuneras undefined vilket gör att man inte behöver kolla resultatet
  return rattHittad;
}

// 5. Den billigaste rätten (reduce). Returnerar objektet. Tom lista ger undefined.
export function billigast(meny: Ratt[]): Ratt | undefined {
  // TODO
  if (meny.length === 0)
      return undefined;
  //Hmm underligt, man brukar ju accumlera värdet....

  //Sätter sista rätten i meny som den initiala värdet
  const rattBilligast = meny.reduce((accumulated, currentVal) => {
    if (currentVal.pris < accumulated.pris){
      return currentVal;
    }
    return accumulated;

  }, meny[meny.length -1]);

  return rattBilligast;
  //Chatgpt
  //const billigast = meny.reduce((minst, r) => (r.pris < minst ? r.pris : minst), Infinity);
}

// 6. Sortera efter pris, billigast först. Returnerar en NY array.
//    Den ursprungliga listan får INTE ändras (sort ändrar originalet, så kopiera först).
export function sorteraEfterPris(meny: Ratt[]): Ratt[] {
  // TODO
  let shallowCopyMenuLista: Ratt[] = [...meny];
  //Observera att denna funktion modifierar listan
  //Fungerar genom att du måste ha en funktion som kollar skillnaden mellan dessa  
  //MDN anger ett negativ eller positivt värde. Eller 0 om objekten anses vara lika
  shallowCopyMenuLista.sort( (rattEtt, rattTva) => rattEtt.pris - rattTva.pris);
  
  return shallowCopyMenuLista;
}

// 7. Totalpris för en order. order = [{ id: 1, antal: 2 }, { id: 5, antal: 1 }]
//    Slå upp priset för varje id i menyn. Okända id räknas som 0 kr.
export function totalPris(order: OrderRad[], meny: Ratt[]): number {
  // TODO
}

// 8. Antal rätter per kategori som ett objekt: { bakverk: 3, dryck: 2, lunch: 3 } (reduce)
export function perKategori(meny: Ratt[]): Record<string, number> {
  // TODO
}

// 9. En kopia av rätten med nytt pris. Originalet får INTE ändras (spread: { ...ratt }).
export function medNyttPris(ratt: Ratt, nyttPris: number): Ratt {
  // TODO
}
