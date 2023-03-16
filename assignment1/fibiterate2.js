function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      // sum variable updated each iteration
        let c = a + b;
      a = b;
      b = c;
    }
    // return sum when done
    // of n == 1 or 2 we will return 1
    return b;
  }