function enregistrerDonnees(event) {
    event.preventDefault(); // Formularübermittlung verhindern

    // Abrufen von Formularfeldwerten
    const personalnummer = document.getElementById("personalnummer").value;
    const vorname = document.getElementById("vorname").value;
    const nachname = document.getElementById("nachname").value;
    const email = document.getElementById("email").value;
    const anrede = document.getElementById("anrede").value;
    const geburtsdatum = document.getElementById("geburtsdatum").value;
    const staatsangehörigkeit = document.getElementById("staatsangehörigkeit").value;
    const geschlecht = document.getElementById("geschlecht").value;
    const telefon = document.getElementById("telefon").value;
    const strasse = document.getElementById("strasse").value;
    const plz = document.getElementById("plz").value;
    const wohnort = document.getElementById("wohnort").value;
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


    // Überprüfung von Formularfeldern
    if (personalnummer === '' || vorname === '' || nachname === '' || email === '' || anrede === '' || geburtsdatum === '' || staatsangehörigkeit === ''
        || geschlecht === '' || telefon === '' || strasse === '' || plz === '' || wohnort === '' || kontoinhaber === '' || iban === '' || kreditinstitut === ''
        || steueridentifikationsnummer === '' || steuerklasse === '' || krankenkasse === '' || versicherungsnummer === '' || beginn === ''
        || berufsbezeichnung === '' || abteilung === '') {
        alert('Bitte füllen Sie alle Felder des Formulars aus');
        return;
    }

    // Erstellen eines Objekts mit Formulardaten
    const donnees = {
        personalnummer: personalnummer,
        vorname: vorname,
        nachname: nachname,
        email: email,
        anrede: anrede,
        geburtsdatum: geburtsdatum,
        staatsangehörigkeit: staatsangehörigkeit,
        geschlecht: geschlecht,
        telefon: telefon,
        strasse: strasse,
        plz: plz,
        wohnort: wohnort,
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
            'Content-Type': 'application/json'
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
}