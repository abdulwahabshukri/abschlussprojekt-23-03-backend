/*
    Diese Datei ist dafür da um in die CSV Datei zu schreiben
*/

import { appendFileSync, appendFile } from "fs";


function addToCSV(){
  // Auf den Inhalt der Eingabefelder mit get.ElementById zugreifen  
  const personalnr = document.getElementById('personalnummer').value;
  const anrede = document.getElementById('anrede').value;
  const vorname = document.getElementById('vorname').value;
  const nachname = document.getElementById('nachname').value;
  const geschlecht = document.getElementById('geschlecht').value;
  const staatsangehoerigkeit = document.getElementById('staatsangehoerigkeit').value;
  const email = document.getElementById('email').value;
  const telefon = document.getElementById('telefon').value;
  const strasse = document.getElementById('strasse').value;
  const plz = document.getElementById('plz').value;
  const wohnort = document.getElementById('wohnort').value;
  const bundesland = document.getElementById('bundesland').value;
  const kontoinhaber = document.getElementById('kontoinhaber').value;
  const iban = document.getElementById('iban').value;
  const kreditinstitut = document.getElementById('kreditinstitut').value;
  const steuerid = document.getElementById('steueridentifikationsnummer').value;
  const steuerklasse = document.getElementById('steuerklasse').value;
  const krankenkasse = document.getElementById('krankenkasse').value;
  const versicherungsnummer = document.getElementById('versicherungsnummer').value;
  const beginn = document.getElementById('beginn').value;
  const berufsbezeichnung = document.getElementById('berufsbezeichnung').value;
  const abteilung = document.getElementById('abteilung').value;

// Pfad zur CSV-Datei 

const filePath = path.join("./data.csv");

 // Neuen Eintrag in der CSV-Datei hinzufügen

  const neuerEintrag =`${personalnr},${anrede},${vorname},${nachname},
                       ${geschlecht},${staatsangehoerigkeit},${email},${telefon},
                       ${strasse},${plz},${wohnort},${bundesland},
                       ${kontoinhaber},${iban},${kreditinstitut},${steuerid},
                       ${steuerklasse},${krankenkasse},${versicherungsnummer},${beginn},
                       ${berufsbezeichnung},${abteilung}`;


// Hier wird die Zeile in die CSV-Datei geschrieben
    appendFileSync(filePath, neuerEintrag); 

    appendFile('data.csv', neuerEintrag, (err) => {
    if (err) throw err;
    alert("eintrag ok");
})

}
