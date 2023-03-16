function mergesort() {
    
    // idea is to sort smaller arrays and combine them together
    // // to merge them in sorted order 
    
    // IF more than one element, follow below process when
    // you runinto more than one element start again
    
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





    
    }