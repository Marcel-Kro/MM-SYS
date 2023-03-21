// Übung 5


// Übung 5.1a
// Finden Sie den div-Container über seine Klasse 'container01' und geben Sie an,
// wie man mittels einer Methode auf die gesamte Breite eines Elements (inkl. padding, margin und border) zugreift bzw. herausfindet.
$(document).ready(function(){
    $('.container01').html('<b>5.1a:</b> '+$('.container01').outerWidth(true));
});

// Übung 5.1b
// Wählen Sie die Checkbox über seine ID 'remember' aus und haken Sie diese über eine Methode an.
$(document).ready(function(){
    $('#remember').prop('checked', true);
});

// Übung 5.1c
// Wählen Sie die h1-Überschriften über ihren Tag-Namen aus und ändern Sie die Schriftfarbe mittels einer Methode.
// Verwenden Sie für die Angabe Ihrer Farbe einen Hex-Farbcode.
$(document).ready(function(){
    $('h1').css('color', '#0010FF');
});

// Übung 5.1d
// Blenden Sie das (über CSS ausgeblendete) Bild mit der ID 'image' mit Hilfe einer Methode ein.
$(document).ready(function(){
    $('#image').show();
});

// Übung 5.1e
// Löschen Sie mittels einer Methode alle Kind-Elemente (Child-Nodes) des div-Containers mit der Klasse 'container02'.
$(document).ready(function(){
    $('.container02').empty();
});

// 5.2 Advanced


// Variable
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
    var firstName = $('#first').val();
    var lastName = $('#last').val();
    var tableRow = '<tr><td>' + firstName + '</td><td>' + lastName + '</td></tr>';
    if(firstName == '' || lastName == ''){
        $('#warning').show();
    } else {
        $('#table tbody').append(tableRow);
        $('#first').val('');
        $('#last').val('');
        $('#warning').hide();
    }
};
$(document).ready(function(){
    $('#addName').click(addRow);
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
$(document).ready(function(){
    $('#warning').hide();
    $('#first').keyup(checkEnterAndAdd);
    $('#last').keyup(checkEnterAndAdd);
});


// Extra
// 1. Vor- und Nachname müssen eingetragen werden,
// ansonsten wird Warnung gezeigt

// 2. Reset der Tabelle
$(document).ready(function(){
    $('#warning').hide();
    $('#removeTable').click(removeTable);
});
function removeTable(){
    $('tbody').empty();
};
