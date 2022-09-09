// Topic 10: Truthy and Falsy Values 

// falsy values (these value always falsify the condition) -> false, "" , null, undefined, 0 

// ""
let var1 = "";
if (var1) {
    console.log(`"" is truthy value`);
} else {
    console.log(`"" is falsy value`);
}

// null
let var2 = null;
if (var2) {
    console.log(`${var2} is truthy value`);
} else {
    console.log(`${var2} is falsy value`);
}

// false
let var3 = false;
if (var3) {
    console.log(`${var3} is truthy value`);
} else {
    console.log(`${var3} is falsy value`);
}

// undefined
let var4;
if (var4) {
    console.log(`${var4} is truthy value`);
} else {
    console.log(`${var4} is falsy value`);
}

// 0
let var5 = 0;
if (var5) {
    console.log(`${var5} is truthy value`);
} else {
    console.log(`${var5} is falsy value`);
}

// truthy values (these value always return true condition) -> "abc" , 1, -5

// "abc"
let var6 = "abc";
if (var6) {
    console.log(`${var6} is truthy value`);
} else {
    console.log(`${var6} is falsy value`);
}

// 1
let var7 = 1;
if (var7) {
    console.log(`${var7} is truthy value`);
} else {
    console.log(`${var7} is falsy value`);
}

// -5
let var8 = -5;
if (var8) {
    console.log(`${var8} is truthy value`);
} else {
    console.log(`${var8} is falsy value`);
}
