const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

//für die css Datei
app.use(express.static(__dirname));


app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

// CSV-Datei herunterladen
app.get('/telecharger-donnees', function(req, res) {
    res.download('donnees.csv', function(err) {
      if (err) {
        console.log(err);
        res.status(404).send('Datei nicht gefunden');
      }
    });
  });

app.post('/enregistrer-donnees', (req, res) => {
    const donnees = req.body;
    console.log(donnees);
    

    if (!donnees) {
        console.error('Die Daten sind leer.');
        res.json({ success: false });
        return;
    }


    fs.stat('donnees.csv', function (err, stat) {
        if (err == null) {
            console.log('Datei existiert');
            // Schreiben von Daten in eine CSV-Datei
            const ligne = `${donnees.personalnummer};${donnees.anrede};${donnees.vorname};${donnees.nachname};${donnees.geburtsdatum};${donnees.geschlecht};${donnees.staatsangehoerigkeit};${donnees.email};${donnees.telefon};${donnees.strasse};${donnees.hausnummer};${donnees.plz};${donnees.wohnort};${donnees.bundesland};${donnees.kontoinhaber};${donnees.iban};${donnees.kreditinstitut};${donnees.steueridentifikationsnummer};${donnees.steuerklasse};${donnees.krankenkasse};${donnees.versicherungsnummer};${donnees.beginn};${donnees.berufsbezeichnung};${donnees.abteilung};\n`;
            fs.appendFile('donnees.csv', ligne, (err) => {
                if (err) {
                    console.error(err);
                    res.json({ success: false });
                } else {
                    res.json({ success: true });
                }
            });
        } else if (err.code === 'ENOENT') {
            console.log('Datei existiert nicht');
            // Header und Daten in eine CSV-Datei schreiben
            const enTete = 'Personalnummer;Anrede;Vorname;Nachname;Geburtsdatum;Geschlecht;Staatsangehoerigkeit;E-mail;Telefon;Strasse;Hausnummer;Plz;Wohnort;Bundesland;Kontoinhaber;Iban;Kreditinstitut;Steueridentifikationsnummer;Steuerklasse;Krankenkasse;Versicherungsnummer;Beginn;Berufsbezeichnung;Abteilung\n';
            const ligne = `${donnees.personalnummer};${donnees.anrede};${donnees.vorname};${donnees.nachname};${donnees.geburtsdatum};${donnees.geschlecht};${donnees.staatsangehoerigkeit};${donnees.email};${donnees.telefon};${donnees.strasse};${donnees.hausnummer};${donnees.plz};${donnees.wohnort};${donnees.bundesland};${donnees.kontoinhaber};${donnees.iban};${donnees.kreditinstitut};${donnees.steueridentifikationsnummer};${donnees.steuerklasse};${donnees.krankenkasse};${donnees.versicherungsnummer};${donnees.beginn};${donnees.berufsbezeichnung};${donnees.abteilung};\n`;
            fs.writeFile('donnees.csv', enTete + ligne, (err) => {
                if (err) {
                    console.error(err);
                    res.json({ success: false });
                } else {
                    res.json({ success: true });
                }
            });
        } else {
            console.log('Beim Überprüfen der Existenz der Datei ist ein Fehler aufgetreten.');
            res.json({ success: false });
        }
    });
})

app.listen(3000, () => {
    console.log('Server auf Port 3000 gestartet.');
});