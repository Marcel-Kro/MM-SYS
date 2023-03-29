// Übung 5


// Übung 5.1a
// Finden Sie den div-Container über seine Klasse 'container01' und geben Sie an,
// wie man mittels einer Methode auf die gesamte Breite eines Elements (inkl. padding, margin und border) zugreift bzw. herausfindet.

$(document).ready(function(){       // Skript wartet bis das Dokument geladen ist
    $('.container01').html('<b>5.1a:</b> '+$('.container01').outerWidth(true));     // '.container01' ist die Klasse, '.outerWidth' ist gesamte Breite
});

// Übung 5.1b
// Wählen Sie die Checkbox über seine ID 'remember' aus und haken Sie diese über eine Methode an.

$(document).ready(function(){       // Skript wartet bis das Dokument geladen ist
    $('#remember').prop('checked', true);       // '#remember' ist id, '.prop' greift auf Properties zu
});

// Übung 5.1c
// Wählen Sie die h1-Überschriften über ihren Tag-Namen aus und ändern Sie die Schriftfarbe mittels einer Methode.
// Verwenden Sie für die Angabe Ihrer Farbe einen Hex-Farbcode.

$(document).ready(function(){       // Skript wartet bis das Dokument geladen ist
    $('h1').css('color', '#0010FF');        // '.css' ändert style des tags 'h1'
});

// Übung 5.1d
// Blenden Sie das (über CSS ausgeblendete) Bild mit der ID 'image' mit Hilfe einer Methode ein.

$(document).ready(function(){       // Skript wartet bis das Dokument geladen ist
    $('#image').show();     // '.show' zeigt Element mit id 'image'
});

// Übung 5.1e
// Löschen Sie mittels einer Methode alle Kind-Elemente (Child-Nodes) des div-Containers mit der Klasse 'container02'.

$(document).ready(function(){       // Skript wartet bis das Dokument geladen ist
    $('.container02').empty();      // Löscht Kind-Elemente (in diesem Fall <ul></ul> und <li></li>) des Elements mit id '.container02'
});

// 5.2 Advanced


// Variablen
var first = $('#first');
var last = $('#last');
var table = $('#table');
var btn = $('#addName');

// Übung 5.2a
// Rufen Sie beim Klick auf den Button die Funktion 'addRow' auf.
// In der Funktion soll
//      - eine neue Tabellenreihe mit zwei Tabellenzellen erzeugt werden, die die eingegebenen Werte aus den jeweiligen Eingabefelder 'Vorname' und 'Nachname' anzeigt.
//      - die erzeugte Tabellenreihe zu der Tabelle hinzugefügt werden.
//      - die beiden Eingabefelder Vor- und Nachname im Anschluss leeren.

function addRow(){
    // Variablen
    var firstName = $('#first').val();
    var lastName = $('#last').val();
    var tableRow = '<tr><td>' + firstName + '</td><td>' + lastName + '</td></tr>';      // Tabellenreihe mit dem Wert der Variable 'firstName' in der ersten Spalte und dem Wert der Variable 'lastName' in der zweiten Spalte
    
    if(firstName == '' || lastName == ''){      // Wenn Inhalt des Inputs 'firstName' oder 'lastName' leer ist
        $('#warning').show();       // Element mit der id 'warning' anzeigen
    } else {        // Wenn beide Inputfelder ausgefüllt sind
        $('#table tbody').append(tableRow);     // Neue Reihe in der Tabelle einfügen
        $('#first').val('');        // Inputfeld mit der id 'first' leeren
        $('#last').val('');     // Inputfeld mit der id 'last' leeren
        $('#warning').hide();       // Element mit der id 'warning' nicht mehr angezeigt
    }
};
$(document).ready(function(){       // Skript wartet bis das Dokument geladen ist
    $('#addName').click(addRow);        // Wenn der Button mit der id 'addName' gedrückt wird, wird die Funktion 'addRow' ausgeführt
});

// Übung 5.2b
// Rufen Sie während der Eingabe bzw. dem Tippen innerhalb der Eingabefelder 'Vorname' und 'Nachname' die untenstehende Funktion 'checkEnterAndAdd' auf.
// In der Funktion soll überprüft werden, ob die Enter-Taste gedrückt wurde.
// Ist dies der Fall, soll die Funktion 'addRow' aus der vorherigen Aufgabe aufgerufen werden.

function checkEnterAndAdd(event){
    if (event.keyCode == 13){
        addRow();
    }
}
$(document).ready(function(){       // Skript wartet bis das Dokument geladen ist
    $('#warning').hide();       // Element mit der id 'warning' nicht mehr angezeigt
    $('#first').keyup(checkEnterAndAdd);
    $('#last').keyup(checkEnterAndAdd);
});


// Extra
// 1. Vor- und Nachname müssen eingetragen werden,
// ansonsten wird Warnung gezeigt

// 2. Reset der Tabelle

$(document).ready(function(){       // Skript wartet bis das Dokument geladen ist
    $('#warning').hide();       // Element mit der id 'warning' nicht mehr angezeigt       
    $('#removeTable').click(removeTable);       // Wird der Button mit der id 'removeTable' gedrückt, wird die Funktion 'removeTable' ausgeführt
});
function removeTable(){
    $('tbody').empty();      // Löscht Kind-Elemente des Elements mit dem tag tbody, Tabelle wird geleert
};
