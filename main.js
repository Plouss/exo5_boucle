// let multiplicateur = 5
// for (let index = 0; index <= 9; index++) {
//     console.log(multiplicateur + " x " + index + " = " + index) ;
// }

// // EXO2
// let multiplicateur = 5
// for (let index = 0; index <= 9; index+=2) {
//     console.log(multiplicateur + " x " + index + " = " + index) ;   
// }

// // EXO3
// for (let i = 20; i >= 0; i = i -= 2){
//     console.log(i);
// }

// // EXO 4
// let eleves = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "Loïc", "Mihai", "Oussama", "Tania", "William", "Alain"];
// let longPrenoms = []

// eleves.forEach(element => {
//     if (element.length>5) {
//         longPrenoms.push(element)
//         console.log(longPrenoms);
//     }
// });

// // EXO 5
// let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
// let grosseSommes = []
// for (let index = 0; index < sommes.length; index++) {
//     if (sommes[index]>60){
//         grosseSommes.push(sommes[index]);
//         sommes.splice(index,1);
//         index--
//     }

// } 
// console.log(grosseSommes);
// console.log(sommes);

// // EXO 6
// let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];
// let type = [];
// let typeNumber = [];
// let typeObject = [];
// let typeAutre = [];

// for (let index = 0; index < donnees.length; index++) {
//     if (typeof donnees[index]=="string") {
//         type.push(donnees[index]);
//         console.log(type);
//     }
//     else if (typeof donnees[index]=="number") {
//         typeNumber.push(donnees[index]);
//         console.log(typeNumber);
//     }
//     else if (typeof donnees[index]=="object") {
//         typeObject.push(donnees[index]);
//         console.log(typeObject);
//     }
    
// }
 



// // EXO1
// let multiplicateur = 5
// for (let index = 0; index <= 9; index++) {
//     console.log(multiplicateur + " x " + index + " = " + multiplicateur*index);
    
// } 

// // EXO2
// let multiplicateur= 5
// for (let index = 0; index <=9; index+=2) {
//     console.log(multiplicateur + " x " + index + " = " + multiplicateur*index);
    
// }

// // EXO3
// for (let index = 20; index >= 0; index-=2) {
//     console.log(index);
    
// }

// // EXO 4
// let eleves = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "Loïc", "Mihai", "Oussama", "Tania", "William", "Alain"];
// let longPrenoms = []
// eleves.forEach(element => {
//     if (element.length>5) {
//         longPrenoms.push(element)
//     }
// });
// console.log(longPrenoms);

// EXO 5
let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
let grosseSommes = []
for (let index = 0; index < sommes.length; index++) {
    if (sommes.length>60) {
        grosseSommes.push(sommes[index])
    }
    
}


