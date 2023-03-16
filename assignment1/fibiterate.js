function fib(n) {

    // the sum of the two previous numbers
    // 0,1,1,2,3,5,8,13
    
    // variable for answer
    
    let result = 0
    let storedanswers = []
    
    // start at zero add zero to 1 and store that sum
    
    for (let i = 0; i<=n; i++)
    
    // we wnat to repeat the additions for n iterations
    
        // store the first value in the array
        
        if (i == 0) {
            storedanswers.push(0)
        }
    
        // and store the second (fib is sum of last 2, lets have these)
        else if (i == 1) {
            
        storedanswers.push(1)
        }
        else {
            
            // if it is the first or second iteration push the numbers
            // otherwise starting with the third iteration
            // take the sum of last 2 numbers and push on end of array
    
            storedanswers.push(storedanswers[i-1] + storedanswers[i-2])
    
        }
    
    return storedanswers[n]
    }
    
    console.log(fib(2))