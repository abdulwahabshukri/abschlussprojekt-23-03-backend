/*
    Diese Datei ist dafür da um die Eingabefelder zu Ueberpruefen 
    ob die Eingaben auch nach Anforderung eingegeben wurden ist 

    Bspl.: 
    bei Vor-Nachname keine Zahlen 
    bei Email muss das " @ " zeichen mit dabei sein um 
    bei PLZ max 5 Zahlen 
    IBAN muss mit 2 Buchstaben beginnen 
    und und und 
*/

function validateName() {
  // Get the value of the input field with the id "name"
  const nameInput = document.getElementById("vorname").value;
  
  // Check if the value contains any numbers
  const regex = /\d+/; // Regex to match any digit(s)
  const containsNumbers = regex.test(nameInput);
  
  // Update UI based on validation result
  if (containsNumbers) {
    alert("Der Name darf keine Zahlen enthalten!");
    // Do other things here, such as disabling a submit button or resetting the input field
  } else {
    // Everything is fine, continue with other logic
  }
}

