/*
    Diese Datei ist dafür da um die CSV Datei abzuspeichern 
    

*/

const form = document.querySelector('#myForm');
form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const personalnr = document.querySelector('#personalnummer').value;
    const anrede = document.querySelector('#anrede').value;
    const vorname = document.querySelector('#vorname').value;
    const nachname = document.querySelector('#nachname').value;
    const bday = document.querySelector('#geburtsdatum').value;
    const staatsangehoerigkeit = document.querySelector('#staatsangehoerigkeit').value;
    const geschlecht = document.querySelector('#geschlecht').value;
    const email = document.querySelector('#email').value;
    const telefon = document.querySelector('#telefon').value;
    const strasse = document.querySelector('#strasse').value;
    const plz = document.querySelector('#plz').value;
    const wohnort = document.querySelector('#wohnort').value;
    const kontoinhaber = document.querySelector('#kontoinhaber').value;
    const iban = document.querySelector('#iban').value;

      
    const data = { personalnr, anrede, vorname };
    const csv = convertToCSV(data); saveToCSV(csv);
}

function convertonToCSV(data) {
    const rows = [Object.keys(data), Object.values(data)];
    return rows.map(row => row.join(',')).join('\n');
}

function saveToCSV(csv) {
    const filename = 'data.csv';
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename; a.click();
}


