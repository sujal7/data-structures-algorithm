function memoizedAddTo80() {
  // Now, we are able to access cache object only inside function without it resetting. This is called closure.
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    }
    console.log('long time');
    cache[n] = n + 80;
    return cache[n];
  };
}

const memoized = memoizedAddTo80();

console.log(memoized(5));
console.log(memoized(5));
console.log(memoized(5));
console.log(memoized(15));
console.log(memoized(15));
