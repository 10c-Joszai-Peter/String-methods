let txt = "asdfghjkyxcvbnmztrew";
console.log(txt.slice(0, 5));
console.log(txt.slice(2, 8));
console.log(txt.slice(4));
console.log(txt.slice(4, 10));
console.log(txt.toUpperCase());
let alternatingCase = txt.split('').map((char, index) => index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()).join('');
console.log(alternatingCase);
console.log(txt.replace(/e/g, 'E'));
let splitByE = txt.split('e');
console.log(splitByE);


