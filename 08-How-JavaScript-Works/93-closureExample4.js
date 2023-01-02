// Topic 93: Closure Example 4

// count on function call
const uniqueFunction = () => {
    var count = 0;
    return () => {
        console.log(count)
        if (count == 0) {
            console.log('Hi, you called me');
            count++;
        } else {
            console.log('Hi, I have already been called');
        }
          }
}

const ans = uniqueFunction();
ans();
ans();

const ans1 = uniqueFunction();
ans1();

const ans2 = uniqueFunction();
ans2();
ans2();