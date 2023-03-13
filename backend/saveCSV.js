
// Funktion zum Schreiben der CSV Datei
function saveToCSV(){

// Auf den Inhalt der Eingabefelder mit get.ElementById zugreifen  
const anrede = document.getElementById('anrede').value;
const vorname = document.getElementById('vorname').value;
const nachname = document.getElementById('nachname').value;
const bday = document.getElementById('geburtsdatum').value;
const geschlecht = document.getElementById('geschlecht').value;
const staatsangehoerigkeit = document.getElementById('staatsangehoerigkeit').value;
const email = document.getElementById('email');
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


/////////////

const csvContent = "Anrede,Vorname,Nachname,Geburtsdatum,Geschlecht,Staatsangehoerigkeit,E-mail,Telefon,Straße,PLZ,Wohnort,Bundesland,Kontoinhaber,Iban,Kreditinstitut,SteuerID,Steuerklasse,Krankenkasse,Verischerungsnummer,beginn,Berufsbezeichnung,Abteilung\n" + // Die erste Zeile enthält die Spaltenüberschriften
                    `${anrede},${vorname},${nachname},${bday},
                     ${geschlecht},${staatsangehoerigkeit},${email},${telefon},
                     ${strasse},${plz},${wohnort},${bundesland},
                     ${kontoinhaber},${iban},${kreditinstitut},${steuerid},
                     ${steuerklasse},${krankenkasse},${versicherungsnummer},${beginn},
                     ${berufsbezeichnung},${abteilung},`;
/*                    
var daten = [anrede,vorname,nachname,bday,geschlecht,
            staatsangehoerigkeit,email,telefon,strasse,plz,
            wohnort,bundesland,kontoinhaber,iban,kreditinstitut,steuerid,steuerklasse,krankenkasse,versicherungsnummer,
            beginn,berufsbezeichnung,abteilung].join(",") + "\n";
*/
var a = document.createElement("a");
var csvFile = new Blob([csvContent], {type: 'text/csv;charset=utf-8;'});

a.href = URL.createObjectURL(csvFile);
a.download = "daten.csv";
a.click();

}