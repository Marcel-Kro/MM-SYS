
alert("Ergebnisse sind im Console Log");

// Übung 3
console.log("=== Übung 3 - Funktionen und Kontrollstrukturen ===");
console.log();

// Variablen
var word1 = 'informationsmanagement';
var word2 = 'multimediasysteme';
var text;

var i = 0;
var list = [];

var numList = [3, 4, 9];

console.log("=== 3.1 - Kontrollstrukturen ===");
// Übung 3.1a
// Schreiben Sie eine if-Anweisung, die die Länge der Strings bzw. Variablen 'word1' und 'word2' miteinander vergleicht.
// Wenn 'word1' länger als 'word2' ist, soll der Variable 'text' folgender String zugewiesen werden:
// 'Das erste Wort ist länger.'.
//
// Ergänzen Sie die if-Anweisung mit einer else-Anweisung. Darin soll der Variable 'text' folgender String zugewiesen werden:
// 'Das zweite Wort ist länger.'.
//
// Ergänzen Sie die if...else-Anweisung aus der vorherigen Aufgabe mit einer else if-Anweisung.
// Wenn 'word1' und 'word2' gleich lang sind, soll der Variable 'text' folgender String zugewisen werden:
// 'Die Wörter sind gleich lang.'.
console.log("== Übung 3.1a ==");

if (word1.length > word2.length){       // Wenn word1 länger als word2 ist
    text = 'Das erste Wort ist länger.';
} else if (word1.length == word2.length){       // Wenn beide Wörter gleich lang sind
    text = 'Die Wörter sind gleich lang.';
} else {        // Wenn word2 länger als word1 ist
    text = 'Das zweite Wort ist länger.';
};
console.log(text);

// Übung 3.1b
// Schreiben Sie eine while-Schleife, die von 0 bis 5 iteriert.
// Während jeder Iteration soll der Wert von i mit 10 multipliziert und das Ergebnis dem Array 'list' hinzugefügt werden.
console.log("== Übung 3.1b ==");

while (i < 6){      // Während i kleiner als 6 ist
    var result = i * 10;        // Variable 'result' = 0*10, 1*10, 2*10, usw.
    list.push(result);      // Variable 'result' der Liste hinzufügen
    i += 1;     // i=i+1
};
console.log(list);

// Übung 3.1c
// Schreiben Sie eine for-Schleife, die von 0 bis 10 iteriert. 
// Während jeder Iteration soll mithilfe einer Methode überprüft werden, ob i in der Liste 'numList' enthalten ist.
// Trifft dies zu, soll der Wert anschließend in der Konsole ausgegeben werden.
console.log("== Übung 3.1c ==");

for (i = 0; i <= 10; i++){      // i=0; solange i kleiner oder gleich 10 ist; i+1
    if (numList.includes(i)){       // Wenn der Wert von i in der Liste ist
        console.log(i);     // i ausgeben
    }
};

// 3.2 Funktionen (und Kontrollstrukturen)
console.log();
console.log("=== 3.2 - Funktionen ===");
console.log();


// Übung 3.2a
// Schreiben Sie eine Funktion 'numberIsOdd', die
// - einen Parameter 'num' entgegennimmt.
// - zurückgibt, ob das Argument ungerade ist.
//
// Verwenden Sie dazu keine if-else-Anweisung oder andere Kontrollstrukturen.
console.log("== Übung 3.2a ==");

function numberIsOdd(num){
    return !!(num % 2);     // Gibt Boolean zurück, Argument Modulus 2
};
console.log('3 : '+ numberIsOdd(3));        // Argument 3 ist ungerade
console.log('8 : '+ numberIsOdd(8));        // Argument 8 ist gerade

// Übung 3.2b
// Schreiben Sie eine Funktion 'cantineActionDay', die
// - einen Parameter 'day' vom Datentyp String entgegennimmt.
// - eine Variable 'text' deklariert.
// - eine switch-Anweisung enthält, welche 'day' auswertet und
//      - für den Wert 'monday' der Variablen 'text' den Wert 'taco monday'
//      - für den Wert 'wednesday' der Variablen 'text' den Wert 'pizza wednesday'
//      - für den Wert 'friday' der Variablen 'text' den Wert 'pasta friday' und
//      - in jedem dieser aufgeführten Fälle die Anweisung abbricht und
//      - für alle anderen Werte der Variablen 'text' den Wert 'no action' zuweist
// - anschließend den Wert von 'text' zurückgibt.
// 
// Die Funktion soll das Argument case insensitive behandeln, d.h. 'Monday' oder 'MONDAY'
// werden als 'monday' erkannt.
console.log("== Übung 3.2b ==");

function cantineActionDay(day){
    var txt;
    // switch
    switch (day.toLowerCase()){     // Großbuchstaben werden durch Kleinbuchstaben ersetzt
        case 'monday':      // Wenn Argument 'monday'
            txt = 'taco monday';
            break;
        case 'wednesday':       // Wenn Argument 'wednesday'
            txt = 'pizza wednesday';
            break;
        case 'friday':      // Wenn Argument 'friday'
            txt = 'pasta friday';
            break;
        default:        // Jedes andere Argument
            txt = 'no action';
            break;
    }
    return txt;
};
console.log('MONDAY = '+cantineActionDay('MONDAY'));
console.log('Monday = '+cantineActionDay('Monday'));
console.log('wednesday = '+cantineActionDay('wednesday'));
console.log('friday = '+cantineActionDay('friday'));
console.log('tuesday = '+cantineActionDay('tuesday'));