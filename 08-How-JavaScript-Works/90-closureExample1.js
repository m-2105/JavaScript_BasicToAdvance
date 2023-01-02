// Topic 90: Closure Example 1

function printFullName(firstName, lastName) {
    function printName() {
        console.log(firstName, lastName)
    }
    return printName; 
    // return function along with the variables(i.e. firstName and lastName) 
    // from lexical scope of outer function
}

const ans = printFullName('Muqaddas', 'Farooq') 
ans();