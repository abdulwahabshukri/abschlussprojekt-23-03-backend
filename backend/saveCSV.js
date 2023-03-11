const { write } = require('fs');

// Bibliothek csv-writer
const createCsvWriter = require('csv-writer').createArrayCsvWriter;

// Pfad definieren für die CSV Datei
const csvPath = './data.csv';


// Funktion zum Schreiben der CSV Datei
function writeToCsvFile() {

// Auf den Inhalt der Eingabefelder mit get.ElementById zugreifen  
const anrede = document.getElementById('anrede').value;
const vorname = document.querySelector('vorname').value;
const nachname = document.querySelector('nachname').value;
const bday = document.querySelector('geburtsdatum').value;
const geschlecht = document.querySelector('geschlecht').value;
const staatsangehoerigkeit = document.querySelector('staatsangehoerigkeit').value;
const email = document.querySelector('email').value;
const telefon = document.querySelector('telefon').value;
const strasse = document.querySelector('strasse').value;
const plz = document.querySelector('plz').value;
const wohnort = document.querySelector('wohnort').value;
const bundesland = document.querySelector('bundesland').value;
const kontoinhaber = document.querySelector('kontoinhaber').value;
const iban = document.querySelector('iban').value;
const kreditinstitut = document.querySelector('kreditinstitut').value;
const steuerid = document.querySelector('steueridentifikationsnummer').value;
const steuerklasse = document.querySelector('steuerklasse').value;
const krankenkasse = document.querySelector('krankenkasse').value;
const versicherungsnummer = document.querySelector('versicherungsnummer').value;
const beginn = document.querySelector('beginn').value;
const berufsbezeichnung = document.querySelector('berufsbezeichnung').value;
const abteilung = document.querySelector('abteilung').value;



// Schreiben in die CSV Datei
const csvWriter = createCsvWriter({
    header: ['Andrede', 'Vorname'],
    path: csvPath,
    append: true
});

csvWriter.writeRecords([
    [anrede, vorname]
]);

}

document.getElementById('savedata').addEventListener('click', writeToCsvFile)
