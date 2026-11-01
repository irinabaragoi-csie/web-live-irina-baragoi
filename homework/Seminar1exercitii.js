// Seminar 1 - homework
// Am comentat exercitiile 2-5 pentru a putea rula fiecare in parte. 
// Primul este gata de rulat.
// Puteti decomenta exercitiile următoare pentru a le testa.


// // Exercițiul 1 - Concatenarea string-urilor
// // Implementează o funcție arrow care primește ca parametru un array de string-uri și returnează un singur string obținut prin concatenarea string-urilor din array-ul primit ca parametru.

const afisareFacultate = (denumiri) => {
    let rezultat = "";

    for (const denumire of denumiri) {
        rezultat += denumire;
    }

    return rezultat;
};

const denumiri = ["ASE", "Informatica", "Economica", "ID"];

console.log(afisareFacultate(denumiri));



// // Exercitiul 2 - Compararea a doua string-uri
// // Implementează o funcție care returnează numărul de caractere diferite între două string-uri de aceeași lungime primite ca parametri. Dacă string-urile primite nu sunt de aceeași lungime, funcția va returna -1.

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



// // Exercitiul 3 - Numararea aparitiilor unei litere
// // Implementează o funcție care primește ca și parametri un string și o literă și returnează de câte ori se regăsește litera în respectivul text.

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



// // Exercitiul 4 - Intercalarea a doua array-uri
// // Implementează o funcție care primește ca parametrii două array-uri de aceeași lungime și returnează un array cu elementele din cele două surse intercalate.

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
// // Implementează o funcție care primește ca și parametru un array de numere și care calculează media aritmetică a numerelor.

// const calculeazaMedia = (numere) => {
//     let suma = 0;

//     for (const numar of numere) {
//         suma += numar;
//     }

//     return suma / numere.length;
// };

// const numere = [3, 44, 90, 25, 10];

// console.log(calculeazaMedia(numere));