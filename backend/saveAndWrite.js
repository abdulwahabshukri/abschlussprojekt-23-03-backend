const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const express = require("express");
const csvWriter = require('csv-write-stream');
const fs = require('fs');



function addToCSV() {

  // Auf den Inhalt der Eingabefelder zugreifen  
  const personalnummer = document.getElementById('personalnummer').value;
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
  const steueridentifikationsnummer = document.getElementById('steueridentifikationsnummer').value;
  const steuerklasse = document.getElementById('steuerklasse').value;
  const krankenkasse = document.getElementById('krankenkasse').value;
  const versicherungsnummer = document.getElementById('versicherungsnummer').value;
  const beginn = document.getElementById('beginn').value;
  const berufsbezeichnung = document.getElementById('berufsbezeichnung').value;
  const abteilung = document.getElementById('abteilung').value;

  // Erstellen des neuen CSV-Eintrags
  const newRow = [personalnummer, anrede, vorname, nachname, geschlecht, staatsangehoerigkeit,
                 email, telefon, strasse, plz, wohnort, bundesland, kontoinhaber, iban, 
                 kreditinstitut, steueridentifikationsnummer, steuerklasse, krankenkasse,
                 versicherungsnummer, beginn, berufsbezeichnung, abteilung];

  // Schreiben der neuen Zeile in CSV-Datei     
  const writer = csvWriter({sendHeaders: false})
  writer.pipe(fs.createWriteStream('daten.csv', {flags: 'a'}))
  writer.write(newRow);
  writer.end();

}

const app = express();
app.use(express.urlencoded({ extended: true }));

// GET-Methode zum Anzeigen des HTML-Formulars
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// POST-Methode zum Speichern der Daten in CSV-Datei
app.post("/", (req, res) => {
    addToCSV(req.body);  // rufe die Funktion auf und übergeben req.body als Argument
    res.send("Daten erfolgreich gespeichert.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server ist bereit auf Port ${PORT}`);
});
