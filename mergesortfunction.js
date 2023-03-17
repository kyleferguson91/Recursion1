
    
    // idea is to sort smaller arrays and combine them together
    // // to merge them in sorted order 
    
    // IF more than one element, follow below process when
    // you runinto more than one element start again
    // on input of array of n<2 elements return
    //  sort left half of list
    // sort right half of list
    // merge the two halves together
    
    //NUMBER OF PASSES TIME COMPLEXITY = log n (# of elements)
    // in each pass there are n merges and log n passes
    // total time = n(logn)
    // did log N things with N steps of merging (log n things * n) 
    // log base 2 n = exponenet
    // eg list of 8, dived by 2 3 times to get to one 
    
    
    // LOG N PASSES for n elements and n merges
    
    // log base 2 of 8 = 3, 3 passes
    // instead of 1 6 element array, think 6 1 element arrays
    // if n < 2 (less than 2 elements) return -- base case
    
    
    // 2 way merging
    //  A-arr1    B-arr2    C-sorted
    //  2  -i         5 -j      2 -k
    //  8           9
    //  15          12
    //  18          17
    // compare a[i] to b[j] append smaller values to c[k]
    // advance either i or j by 1, and k by 1
    // once i or j is out of bounds of arr (equal arr.length)
    // push all the items from the other list (since nothing remains
    // do this with for loop, i and j are already the correct indexes
    // to compare, and list is sorted to begin with

 //  sort left half of list
    // sort right half of list
    // merge the two halves together



    
    

     //  sort left half of list
    // sort right half of list
    // merge the two halves together

    function mergesort(arr) {

        let length = arr.length
        // if array passed is of length 1, return
          if (length < 2) {return}

        // otherwise, we want to split the array in half
        // length / 2 !
        // for even lengths 

        if (length % 2 == 0) {
            
            let half = length/2
            console.log(half, 'even half')
            // we take from 0 to half - 1
            // and from half to length - 1 
        }
        
        // for odd lengths
        else {
            // splits length in two, because we get a half value
            // we split into first half last half, which is the
            // value plus 0.5 and value minus 0.5
            let firsthalf = Math.floor(length/2)
            let secondhalf = Math.ceil(length/2)
         console.log(firsthalf,secondhalf)
         // we will copy one less value than these though --array starts at 0, eg.
         // 5 and 6 half of 11, 0-4 in one and 5-10 in abother
            // 0 to first half - 1
            // second half - 1 to length - 1
             

        }



    }


    console.log(mergesort([1,2,3,4, 3,2,3,4,5,3]))