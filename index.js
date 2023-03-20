
alert("Ergebnisse sind im Console Log");

// Übung 1
console.log("=== Übung 1 - Arrays ===");

// Variablen
var students = ['Anna', 'Matt', 'Giovanni', 'Julie', 'Vlad', 'Yoona'];
var newStudents = ['Leonard', 'Mai', 'Rana', 'Melis'];
console.log();

// Übung 1a
// Entfernen des Elements 'Anna'
console.log("== Übung 1a ==");
students.shift();                                                           // Entfernt erstes Element des Arrays
console.log(students);
console.log();

// Übung 1b
// Wert 'Vlad' durch 'Alex' ersetzen
console.log("== Übung 1b ==");
students[3] = "Alex";                                                       // Wert 'Vlad' ist im neuen Array der Index 3
console.log(students);
console.log();

// Übung 1c
// Entfernen der Elemente 'Giovanni', 'Julie' und 'Alex'
console.log("== Übung 1c ==");
students.splice(1,3);                                                       // Index 1 bis 3 des neuen Arrays entfernen
console.log(students);
console.log();

// Übung 1d
// Elemente des Arrays 'students' zu einem string zusammenfügen
console.log("== Übung 1d ==");
console.log(students.toString());                                           // Führt Elemente des neuen Arrays zu einem String zusammen
console.log();

// Übung 1e
// Array 'students' und 'newStudents' zusammenführen
console.log("== Übung 1e ==");
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
// Element mit dem Wert 'Min' finden
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
// Index des Elements mit dem Wert 'Giulia' herausfinden und entsprechendes Element zurückgeben
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
// Reihenfolge jedes untergeordneten Arrays im Array 'teams' umkehren
// Array 'teams' so abflachen, dass keine untergeordneten Arrays enthalten sind
// Geänderten Array zurückgeben
console.log("== Übung 1.2c ==");
console.log(
    (teams.map(function(revTeam){
        return revTeam.reverse()                                            // Jeder untergeordnete Array wird umgedreht
    })).flat(Infinity)                                                      // Array wird abgeflacht
);
