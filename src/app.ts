console.log("APP");

//const numbers: number[] = [1, 15, 9, -9, -8, -7, 2, 8, 51, 6, 5];
//const numbers2: number[] = [10, 105, 90, -90, -18, -17, 20, 18, 51, 16, 35];

// 1. parasyti funkcija kuri ima masyva kaip argumenta ir grazina vidurki (jei galit su reduce)

const numbers: number[] = [1, 15, 9, -9, -8, -7, 2, 8, 51, 6, 5];
let sd = numbers.reduce((sum, current) => sum + current / 2, 0);
console.log(sd);

// 4. parasyti funkcija kuri ima masyva kaip argumenta ir grazina pirmus 4 elementus

const numbers1: number[] = [1, 15, 9, -9, -8, -7, 2, 8, 51, 6, 5];
let sdf = numbers1.slice(0, 4);
console.log(sdf);
