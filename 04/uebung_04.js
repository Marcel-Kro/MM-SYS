// Übung 4

// Übung 4.1a
// Schreiben Sie mithilfe einer Methode eine HTML-Überschrift mit beliebigem Text ins HTML-Dokument.
document.write('<h1 style="border:thin;border-style:solid;border-color:black; margin:5px">Übung 4 - DOM und Event-Listener (4.1a)</h1>');

// Übung 4.1b
// Finden Sie die Überschrift h5 über ihre ID 'subHeadline' und ändern Sie die Schriftgröße zu 18 Pixel.
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('subHeadline').style.fontSize = '18px';
});
    

// Übung 4.1c
// Geben Sie an, wie man den Dateipfad des src-Attributs im img-Element herausfindet bzw. den Wert auslesen lässt.

document.addEventListener('DOMContentLoaded', () => {
    document.getElementsByTagName('img')[1].title = (document.getElementsByTagName('img')[1]).getAttribute('src');
});

// Übung 4.1d
// Finden Sie die Paragraphen über ihre Tag-Namen und ändern Sie für den zweiten Paragraphen den Text.
document.addEventListener('DOMContentLoaded', () => {
    var p = document.getElementsByTagName('p');
    p[1].innerHTML = 'Zweiter Paragraph geändert.';
});
// Übung 4.1e
// Finden Sie die Liste ul über ihren Klassennamen 'list' und geben Sie an, wie man über die Liste die Anzahl der untergeordneten Kindknoten <li></li> herausfindet.

document.addEventListener('DOMContentLoaded', () => {
    var p = document.getElementsByTagName('p');
    p[2].innerHTML = 'Anzahl der Kindknoten: '+(document.querySelector('ul.list')).getElementsByTagName('li').length;
});
// 4.2 Advanced

// Übung 4.2a
// Registrieren Sie auf das Input (search) einen Event-Listener über seine Objekt-Eigenschaft.
// Wenn eine Taste beim Tippen losgelassen wird, soll eine anonyme Funktion aufgerufen werden.
// Innerhalb der Funktion soll überprüft werden, ob der Eingabetext des Inputs (search) eine Länge von mehr als 5 Zeichen hat.
// Trifft das zu, soll dem div-Container (container) die Klasse 'loading' hinzugefügt werden.
document.addEventListener('DOMContentLoaded', () => {
    var search = document.getElementById('search');
    var container = document.getElementById('loadingContainer');
    search.addEventListener('keyup', function(){
        if (search.value.length > 5){
            container.classList.add('loading');
            container.innerHTML = 'Loading...';
        } else{
            container.classList.remove('loading');
            container.innerHTML = '';
        }
    })
});

// Übung 4.2b
// Registrieren Sie auf den Button (btn) einen Event-Listener über eine Methode.
// Beim Klick auf dem Button soll eine anonyme Funktion aufgerufen werden.
// Innerhalb der Funktion soll geprüft werden, ob die Felder für E-Mail (email) sowie Passwort (pw) ausgefüllt sind und ob die Checkbox (cb) angehakt ist.
//
// Wenn alles übereinstimmt, soll
//      - das E-Mail-Feld geleert
//      - das Passwort-Feld geleert
//      - die Checkbox wieder abgehakt und
//      - der div-Container wieder ausgeblendet werden.
// 
// Trifft eins dieser Bedingungen nicht zu, soll der div-Container (alertEmptyFields) angezeigt werden.
document.addEventListener('DOMContentLoaded', () => {
    var email = document.getElementById('email');
    var pw = document.getElementById('password');
    var cb = document.getElementById('checkbox');
    var btn = document.getElementById('btn');
    var alertEmptyFields = document.getElementById('alertEmptyFields');
    alertEmptyFields.style.visibility = 'hidden';
    
    btn.addEventListener('click', fieldCheck);

    function fieldCheck(){
        if (email.value !== '' && pw.value !== '' && cb.checked){
            email.value = '';
            pw.value = '';
            cb.checked = false;
            alertEmptyFields.style.visibility = 'hidden'; 
        } else{
            alertEmptyFields.style.visibility = 'visible';
            alertEmptyFields.style.backgroundColor = 'tomato';
        }
    }
});