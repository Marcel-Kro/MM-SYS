
//alert("Ergebnisse sind im Console Log");

// Übung 1
console.log("=== Übung 1 - Arrays ===");

// Variablen
var students = ['Anna', 'Matt', 'Giovanni', 'Julie', 'Vlad', 'Yoona'];
var newStudents = ['Leonard', 'Mai', 'Rana', 'Melis'];
console.log();

// Übung 1.1a
// Entfernen Sie mithilfe einer Methode 'Anna' aus dem Array 'students'.
console.log("== Übung 1.1a ==");
students.shift();                                                           // Entfernt erstes Element des Arrays
console.log(students);
console.log();

// Übung 1.1b
// Ersetzen Sie den Wert 'Vlad' im Array 'students' mit dem Wert 'Alex'.
console.log("== Übung 1.1b ==");
students[3] = "Alex";                                                       // Wert 'Vlad' ist im neuen Array der Index 3
console.log(students);
console.log();

// Übung 1.1c
// Entfernen Sie mithilfe einer Methode aus dem Array 'students' die Elemente 'Giovanni', 'Julie' und 'Alex'.
console.log("== Übung 1.1c ==");
students.splice(1,3);                                                       // Index 1 bis 3 des neuen Arrays entfernen
console.log(students);
console.log();

// Übung 1.1d
// Schreiben Sie eine Anweisung, die mittels einer Methode sämtliche Elemente des Arrays 'students' zu einem String zusammenführt.
console.log("== Übung 1.1d ==");
console.log(students.toString());                                           // Führt Elemente des neuen Arrays zu einem String zusammen
console.log();

// Übung 1.1e
// Schreiben Sie eine Anweisung, die mithilfe einer Methode das Array 'newStudents' mit dem Array 'students' zusammenführt.
console.log("== Übung 1.1e ==");
console.log(students.concat(newStudents));                                  // Konkatenation der Arrays
console.log();

// 1.2 Advanced
console.log();
console.log("=== 1.2 - Advanced ===");
console.log();

// Variable
var teams = [
    ['Ruby', 'Angel'],
    ['Mia', 'Yui', 'Merve', 'Agathe', ['Min']],
    ['Nattapong', 'Giulia', 'Alva']
];

// Übung 1.2a
// Schreiben Sie eine Anweisung, die das Element (nicht das Array) mit dem Wert 'Min' findet.
console.log("== Übung 1.2a ==");
                                                                            // flat() zum abflachen der Ebenen des Arrays
                                                                            // Argument 'Infinity' für alle Ebenen
console.log(teams.flat(Infinity).includes('Min'));                          // Ist das Element 'Min' im Array vorhanden? 
console.log(
    teams.flat(Infinity).find(function(element){
        return element === 'Min';
    })
);
console.log();

// Übung 1.2b
// Verwenden Sie eine Methode, die den Index des Elements mit dem Wert 'Giulia' im Array 'teams' herausfindet und das entsprechende Element zurückgibt.
console.log("== Übung 1.2b ==");
console.log(                                                                // Mehrdimensionales Array
    "Index: Teams["+teams.findIndex(x=>x.includes('Giulia'))                // "Reihe" des Arrays mit dem Wert 'Giulia' (2)
    +"]["
    +teams[teams.findIndex(x=>x.includes('Giulia'))].indexOf('Giulia')      // "Spalte" im Array mit dem Wert 'Giulia' (1)
    +"]"
);
console.log(teams[teams.findIndex(x=>x.includes('Giulia'))]);               // Array mit dem Wert 'Giulia'
console.log(                                                                // Gibt den Wert des Arrays mit Index [2][1] aus
    teams
    [teams.findIndex(x=>x.includes('Giulia'))]
    [teams[teams.findIndex(x=>x.includes('Giulia'))].indexOf('Giulia')]
);
console.log();

// Übung 1.2c
// Schreiben Sie eine Anweisung, die
// - die Reihenfolge jedes untergeordneten Arrays im Array 'teams' umkehrt,
// - das Array 'teams' anschließend so abflacht, dass keine untergeordneten Arrays enthalten sind
// - und das geänderte Array im Anschluss zurückgibt.
console.log("== Übung 1.2c ==");
console.log(
    (teams.map(function(revTeam){
        return revTeam.reverse()                                            // Jeder untergeordnete Array wird umgedreht
    })).flat(Infinity)                                                      // Array wird abgeflacht
);