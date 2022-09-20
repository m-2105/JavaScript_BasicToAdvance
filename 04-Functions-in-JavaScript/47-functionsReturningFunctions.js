// Topic 47: Function returning Function

function myFunc() {
    function hello(){
        console.log('Hello World');
    }
    return hello;
}

const ans = myFunc();
console.log(ans);
ans();