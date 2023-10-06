function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) { 
        sum += i;
    }
    return sum;
}
    console.log(calculateSum(5)); // Should print 15 (1 + 2 + 3 + 4 + 5) 
    console.log(calculateSum(10)); // Should print 55 (1 + 2 + 3 + ... + 10)