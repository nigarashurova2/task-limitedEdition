// undefined - qab var ancaq icinde meyve yoxdu
// null - ne deyisken var nede deyeri -- ne bosqab var ne de alma


// var a = null;
// console.log(typeof a);

// var b;
// console.log(typeof b);

// var a = 0;

// while (a < 10) {
//     a++;
//     console.log(a);
// }

// var a = 5;
// while (a < 2) {
//     a++;
//     console.log(a);
// }



// var b = 5;
// do {
//     b++;
//     console.log(b);
// } while (b<2);



// and && --  istenilen qeder true olsada en azi bi dene false olsa cavab false olacaq *
//  false +  true = true
if ((2>3) || (9>8)) {
    console.log("dogrudur");
}
else{
    console.log("yanlisdir");
}


// or || -- istenilen qeder false olsada en azi bi dene true olsa cavab true olacaq +


// not !
//   false * false = 0
if ((2>3) && !(9>8)) {
    console.log("dogrudur");
}
else{
    console.log("yanlisdir");
}




console.log((6<0) && (8<10)); //false

console.log((6<0) && !(8<10));
//          false 0  * false 0 = false


console.log((56>989) || (88<100)); // true
console.log(!((56>989) || (88<100))); //false
console.log((56>989) || !(88<100)); //false

//  == ===

console.log("2" !== 2); //true
console.log("2" != 2); 
console.log("HS" == "hs");
console.log("HS" === "hs"); 

// !=
// !==