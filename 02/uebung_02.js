
alert("Ergebnisse sind im Console Log");

// Übung 2
console.log("=== Übung 2 - Objekte ===");

// Variable
var course = {
    title: 'mmsys1',
    room: 10,
    description: 'Schwerpunkt: Grundlagen von JavaScript',
    credits: 4,
    num_students: 5
};
var moreCourseInformations = {
    building: 'E12',
    students: ['Anna', 'Tim', 'Lukas', 'Julia', 'Lena']
};
console.log();

// Übung 2.1a
// Löschen Sie die Eigenschaft 'description' aus dem Objekt 'course'.
console.log("== Übung 2.1a ==");
delete course.description;
console.log(course);

// Übung 2.1b
// Ändern Sie den Wert der Eigenschaft 'room' im Objekt 'course'.
console.log("== Übung 2.1b ==");
course.room = '2E.2.37';
console.log(course);

// Übung 2.1c
// Fügen Sie dem Objekt 'course' eine neue Eigenschaft 'lecturer' hinzu und weisen Sie ihr einen passenden Wert zu.
console.log("== Übung 2.1c ==");
course.lecturer = 'Marcel Rose';
console.log(course);

// Übung 2.1d
// Wenden Sie eine Methode an, die die Eigenschaft des Objekts 'course' in einem neuen Array zurückgibt 
// und weisen Sie dieses Array einer neuen Variable zu. Kürzen Sie Ihren Code, soweit es geht.
console.log("== Übung 2.1d ==");
var courseArray = Object.entries(course);
console.log(courseArray);

// Übung 2.1e
// Führen Sie das Objekt 'moreCourseInformations' mithilfe einer Methode mit dem Objekt 'course' zusammen.
// Überschreiben Sie den Wert der Variablen 'course' mit dem zusammengeführten Objekt. Kürzen Sie Ihren Code, soweit es geht.
console.log("== Übung 2.1e ==");
var course = Object.assign(course, moreCourseInformations);
console.log(course);

// 2.2 Advanced
console.log();
console.log("=== 2.2 - Advanced ===");
console.log();

// Variable
var library = {
    books: {total: 18000, subjects: 193400, digital: 12200},
    cds: {total: 1320, subjects: 1339},
    videos: {total: 9008, subjects: 8273, digital: 1299}
};
var books = [
    {
        title: 'JavaScript for impatient programmers',
        isbn: 1091210098,
        pages: 526,
        language: 'en'
    },
    {
        title: 'Client Side Scripting: Using JavaScript',
        isbn: 9333223878,
        pages: 164,
        language: 'en',
    }
];

// Übung 2.2a
// Geben Sie an, wie man auf den Wert der Eigenschaft 'digital' aus dem untergeordneten Objekt, 
// das der Objekt-Eigenschaft 'books' im Objekt 'library' zugewiesen ist, zugreifen kann.
console.log("== Übung 2.2a ==");
console.log(library.books.digital);

// Übung 2.2b
// Geben Sie an, wie man auf den Wert 'pages' im zweiten Objekt aus dem Array 'books' zugreifen kann.
console.log("== Übung 2.2b ==");

console.log(books[1]['pages']);

// Übung 2.2c
// Erweitern Sie das Objekt 'student', in dem Sie dafür eine Objekt-Methode 'fullName' erstellen.
// Die Methode soll die Werte der Eigenschaft 'firstName' und 'lastName' konkatenieren und das Ergebnis zurückgeben.
// Rufen Sie anschließend die Methode über das Objekt auf und weisen Sie den Rückgabewert einer neuen Variable zu.
console.log("== Übung 2.2c ==");
var student = {
    id: 1391,
    firstName: 'Jonas',
    lastName: 'Schulz',
    major: 'bim',
    fullName: function(){
        return this.firstName+' '+this.lastName;
    }
};
var studentFullName = student.fullName();
console.log(studentFullName);