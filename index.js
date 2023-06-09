const { json } = require("body-parser");
const { data } = require("jquery");

function enregistrerDonnees(event) {
    event.preventDefault(); // Formularübermittlung verhindern

    // Abrufen von Formularfeldwerten
    const personalnummer = document.getElementById("personalnummer").value;
    const anrede = document.getElementById("anrede").value;
    const vorname = document.getElementById("vorname").value;
    const nachname = document.getElementById("nachname").value;
    const geschlecht = document.getElementById("geschlecht").value;
    const staatsangehoerigkeit = document.getElementById("staatsangehoerigkeit").value;
    const email = document.getElementById("email").value;
    const laendercodes = document.getElementById("laendercodes").value;
    const telefon = document.getElementById("telefon").value;
    const strasse = document.getElementById("strasse").value;
    const hausnummer = document.getElementById("hausnummer").value;
    const plz = document.getElementById("plz").value;
    const wohnort = document.getElementById("wohnort").value;
    const bundesland = document.getElementById("bundesland").value;
    const kontoinhaber = document.getElementById("kontoinhaber").value;
    const iban = document.getElementById("iban").value;
    const kreditinstitut = document.getElementById("kreditinstitut").value;
    const steueridentifikationsnummer = document.getElementById("steueridentifikationsnummer").value;
    const steuerklasse = document.getElementById("steuerklasse").value;
    const krankenkasse = document.getElementById("krankenkasse").value;
    const versicherungsnummer = document.getElementById("versicherungsnummer").value;
    const beginn = document.getElementById("beginn").value;
    const berufsbezeichnung = document.getElementById("berufsbezeichnung").value;
    const abteilung = document.getElementById("abteilung").value;

    // Erstellen eines Objekts mit Formulardaten
    const donnees = {
        personalnummer: personalnummer,
        anrede: anrede,
        vorname: vorname,
        nachname: nachname,
        geschlecht: geschlecht,
        staatsangehoerigkeit: staatsangehoerigkeit,
        email: email,
        laendercodes: laendercodes,
        telefon: telefon,
        strasse: strasse,
        hausnummer: hausnummer,
        plz: plz,
        wohnort: wohnort,
        bundesland: bundesland,
        kontoinhaber: kontoinhaber,
        iban: iban,
        kreditinstitut: kreditinstitut,
        steueridentifikationsnummer: steueridentifikationsnummer,
        steuerklasse: steuerklasse,
        krankenkasse: krankenkasse,
        versicherungsnummer: versicherungsnummer,
        beginn: beginn,
        berufsbezeichnung: berufsbezeichnung,
        abteilung: abteilung
    };
    console.log(donnees);

    // Senden von Daten an den Node.js-Server mit Abruf
    fetch('/enregistrer-donnees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(donnees)

    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Daten erfolgreich gespeichert !');

            } else {
                alert('Beim Speichern der Daten ist ein Fehler aufgetreten.');
            }
        })
        .catch(error => console.error(error));
};




function suchePersonal() {
  const personalnummer = document.getElementById('eingabe-personalnummer').value;
  fetch('/getPersonalData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 'eingabe-personalnummer': personalnummer })
  })
  .then(response => response.json())
  .then(data => {
    let ausgabe = '';
    for (const [key, value] of Object.entries(data)) {
      ausgabe += `${key}: ${value}\n`;
    }
    document.getElementById('ausgabe-personalnummer').value = ausgabe;
  })
  .catch(error => {
    console.error(error);
    document.getElementById('ausgabe-personalnummer').value = "Dieser Personalnummer entschript keine Person!";
  });
}
