function fib(n) {
  if (n == 0) return [0]
  if (n == 1) return [0, 1]
  // array is equal to previous fib sequence, this
  // sequence calculates the next thing in
  // the sequence

  // the functions update the current array
  // to be the last array calculated
  // which is possible from the base case
  // this keeps track of it from there
  const arr = fib(n - 1)
  // return a new  array thay consists of
  // old array expanded in place, 
  // then added on the sum of the 
  // last and second last array indexes of 
  // the current array
  // eg [0,1] going in
  // returns
  // [ 0,1,(1+0)]
  // [0, 1, 2]
  // returns
  // expand array and add last to indexes

  return [...arr, arr[n-1] + arr[n-2]]
}
  
console.log(fib(7))