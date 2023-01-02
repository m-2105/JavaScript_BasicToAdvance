// Topic 42: Block Scope vs Function Scope

// let and const are block scope
// var is function scope
{
    var firstName = 'Muqaddas';
}
console.log(firstName);
{
    let lastName = 'Farooq';
    console.log(lastName);
}


function myApp() {
    if (true) {
        var age = 22
        console.log(age);
    }
    if(true){
        console.log(age); // only possible when variable is declared using var
    }
    console.log(age);
}

myApp();