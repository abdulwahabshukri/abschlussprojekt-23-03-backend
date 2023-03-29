const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const csv = require('csv-parser');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/eingabe.html', (req, res) => {
    res.sendFile(__dirname + '/eingabe.html');
});

app.get('/pruefen.html', (req, res) => {
    res.sendFile(__dirname + '/pruefen.html');
});


// CSV-Datei herunterladen
app.get('/telecharger-donnees', function (req, res) {
    res.download('donnees.csv', function (err) {
        if (err) {
            console.log(err);
            res.status(404).send('Datei nicht gefunden');
        }
    });
});


// Datei speichern
app.post('/enregistrer-donnees', (req, res) => {
    const donnees = req.body;
    console.log(donnees);


    if (!donnees) {
        console.error('Die Daten sind leer.');
        res.json({ success: false });
        return;
    }


    fs.stat('donnees.csv', function (err) {
        if (err == null) {
            console.log('Datei existiert');
            // Schreiben von Daten in eine CSV-Datei
            const ligne = `${donnees.personalnummer};${donnees.anrede};${donnees.vorname};${donnees.nachname};${donnees.geschlecht};${donnees.staatsangehoerigkeit};${donnees.email};${donnees.laendercodes};${donnees.telefon};${donnees.strasse};${donnees.hausnummer};${donnees.plz};${donnees.wohnort};${donnees.bundesland};${donnees.kontoinhaber};${donnees.iban};${donnees.kreditinstitut};${donnees.steueridentifikationsnummer};${donnees.steuerklasse};${donnees.krankenkasse};${donnees.versicherungsnummer};${donnees.beginn};${donnees.berufsbezeichnung};${donnees.abteilung};\n`;
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
            const enTete = 'Personalnummer;Anrede;Vorname;Nachname;Geschlecht;Staatsangehoerigkeit;E-mail;Ländercodes;Telefon;Strasse;Hausnummer;Plz;Wohnort;Bundesland;Kontoinhaber;Iban;Kreditinstitut;Steueridentifikationsnummer;Steuerklasse;Krankenkasse;Versicherungsnummer;Beginn;Berufsbezeichnung;Abteilung\n';
            const ligne = `${donnees.personalnummer};${donnees.anrede};${donnees.vorname};${donnees.nachname};${donnees.geschlecht};${donnees.staatsangehoerigkeit};${donnees.email};${donnees.laendercodes};${donnees.telefon};${donnees.strasse};${donnees.hausnummer};${donnees.plz};${donnees.wohnort};${donnees.bundesland};${donnees.kontoinhaber};${donnees.iban};${donnees.kreditinstitut};${donnees.steueridentifikationsnummer};${donnees.steuerklasse};${donnees.krankenkasse};${donnees.versicherungsnummer};${donnees.beginn};${donnees.berufsbezeichnung};${donnees.abteilung};\n`;
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
});


// Die Informationen einer Person mit ihrer Personalnummer haben 
app.post('/getPersonalData', (req, res) => {
    // Holen Sie sich die vom Client gesendete Personalnummer
    const personalnummer = req.body['eingabe-personalnummer'];

    // Lesen Sie die CSV-Datei mit den persönlichen Daten
    fs.readFile('donnees.csv', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur serveur');
        }

        // Transformiere die CSV-Daten in ein Array von Objekten
        const results = csvToArray(data);

        // Finden Sie die Zeile, die der Personalnummer entspricht
        const personalData = results.find((data) => data.Personalnummer === personalnummer);

        if (personalData) {
            // Wenn Daten gefunden wurden, die Daten an den Client zurücksenden
            res.send(JSON.stringify(personalData));
        } else {
            // Anderenfalls einen Fehler an den Client zurückgeben
            res.status(404).send('Personalnummer nicht gefunden');
        }
    });
});

// Funktion zum Umwandeln von CSV-Daten in ein Array von Objekten
function csvToArray(data) {
    const rows = data.trim().split('\n');
    const headers = rows.shift().split(';');

    return rows.map((row) => {
        const values = row.split(';');
        return headers.reduce((obj, header, index) => {
            obj[header] = values[index];
            return obj;
        }, {});
    });
}


app.listen(5000, () => {
    console.log('Server auf Port 5000 gestartet.');
});
