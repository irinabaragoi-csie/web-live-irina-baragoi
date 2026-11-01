// Seminar 1 - homework
// Am comentat exercitiile 2-5 pentru a putea rula fiecare in parte. 
// Primul este gata de rulat.
// Puteti decomenta exercitiile următoare pentru a le testa.


// Exercițiul 1 - Concatenarea string-urilor

const afisareFacultate = (denumiri) => {
    let rezultat = "";

    for (const denumire of denumiri) {
        rezultat += denumire;
    }

    return rezultat;
};

const denumiri = ["ASE", "Informatica", "Economica", "ID"];

console.log(afisareFacultate(denumiri));



// Exercitiul 2 - Compararea a doua string-uri

// const numaraDiferente = (string1, string2) => {
//     if (string1.length !== string2.length) {
//         return -1;
//     }

//     let diferente = 0;

//     for (let i = 0; i < string1.length; i++) {
//         if (string1[i] !== string2[i]) {
//             diferente++;
//         }
//     }

//     return diferente;
// };

// console.log(numaraDiferente("ASE", "ARE"));
// console.log(numaraDiferente("JavaScript", "Java"));
// console.log(numaraDiferente("HTML", "HTML"));



// Exercitiul 3 - Numararea aparitiilor unei litere

// const numaraLitera = (text, litera) => {
//     let aparitii = 0;

//     for (let i = 0; i < text.length; i++) {
//         if (text[i] === litera) {
//             aparitii++;
//         }
//     }

//     return aparitii;
// };

// console.log(numaraLitera("Informatica Economica", "a"));
// console.log(numaraLitera("JavaScript", "a"));
// console.log(numaraLitera("ASE", "z"));



// Exercitiul 4 - Intercalarea a doua array-uri

// const intercaleazaArray = (array1, array2) => {
//     let rezultat = [];

//     for (let i = 0; i < array1.length; i++) {
//         rezultat.push(array1[i]);
//         rezultat.push(array2[i]);
//     }

//     return rezultat;
// };

// const array1 = ["ASE", "CSIE", "Anul III"];
// const array2 = ["Bucuresti", "Informatica Economica", "ID"];

// console.log(intercaleazaArray(array1, array2));



// // Exercitiul 5 - Calcularea mediei aritmetice

// const calculeazaMedia = (numere) => {
//     let suma = 0;

//     for (const numar of numere) {
//         suma += numar;
//     }

//     return suma / numere.length;
// };

// const numere = [3, 44, 90, 25, 10];

// console.log(calculeazaMedia(numere));