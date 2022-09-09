// Topic 15: Break and Continue keywords

// break keyword -> break is used for immediate termination of loop.
for (var i = 1; i <= 10; i++) {
 if(i==4){ // nested if
 break; // terminates the entire loop
 }
 console.log(i)
}

// continue keyword ->'continue' terminate the current iteration and 
// resumes the control to the next iteration of the loop.
for (var i = 1; i <= 10; i++) {
    if(i==4){ // nested if
    continue; // terminates the current iteration only
    }
    console.log(i)
   }