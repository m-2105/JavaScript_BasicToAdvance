// Topic 33: Object Destructuring
const band = {
    bandName: 'led zeppelin',
    famousSound: 'stairway to heaven',
    year: 1968,
    anotherFamousSong: 'kashmir'
};

// Normal method
// let var1 = band.bandName;
// let var2 = band.famousSound;
// console.log(var1);
// console.log(var2);

// object destructing  
// const { bandName, famousSound, year } = band; //key is your variable name by default
// console.log(bandName);
// console.log(famousSound);
// console.log(year);

// Explicitly passing variable names to store values
const { bandName: var1, famousSound : var2, ...restProperties } = band;
console.log(var1);
// console.log(bandName) // bandName will throw an variable undefined error
console.log(var2);
console.log(restProperties);