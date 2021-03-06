// Feladatok

// 1.feladat 
// Adott az alábbi objektum:

// const user = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// Mentsd el külön lastName, firstName, és job változókba a fenti objektum property-jeit!
// Ha valamelyik nincs megadva, akkor az érték legyen a “unknown” string!
console.log('1.feladat');
const user1 = {
        firstName: 'John',
        lastName: 'Doe'
};
const{firstName,lastName,job='unknown'} = user1;
console.log(firstName,lastName,job);

// 2. feladat
// Adott az alábbi objektum:

// const user = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// Ments el külön l, f, és j változókba a fenti objektum lastName, firstName, és job property-jeit!
// Ha valamelyik nincs megadva, akkor az érték legyen a “unknown” string!
console.log('2.feladat');

const user2 = {
    firstName: 'John',
    lastName: 'Doe'
};
const{firstName: f, lastName:l, job:j='unknown'} = user2;
console.log(f,l,j);

// 3. feladat
// Ments el külön, tesszőleges nevű változókba az alábbi tömb első, harmadik, és ötödik indexű elemét!

// const names = ['John', 'Jane', 'Judith', 'Jennefer', 'Jeremiah', 'Johnny'];
console.log('3.feladat');

const names = ['John', 'Jane', 'Judith', 'Jennefer', 'Jeremiah', 'Johnny'];

const [one, , three, , five, ] = names;

console.log(one,three,five);
