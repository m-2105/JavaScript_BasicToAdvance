// Topic 40: Function inside Function

const myCalculator = () => {
    const intro = () => {
        console.log('Hey, This is my basic calculator');
    };

    const addTwo = (num1, num2) => {
        return num1 + num2;
    };

    const subTwo = (num1, num2) => num1 - num2;

    const mulTwo = (num1, num2) => num1 * num2;

    const divTwo = (num1, num2) => {
        return num1 / num2;
    };

    console.log('Inside my calculator');
    intro();
    console.log('sum =',addTwo(3, 5));
    console.log('difference =',subTwo(9, 5));
    console.log('product =',mulTwo(8, 6));
    console.log('division =',divTwo(5, 2));
};

myCalculator();