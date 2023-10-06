function printEvenNumbers(n) {
    let i = 2;
    while (i <= n) { 
        console.log(i); i += 2; 
    }
}

console.log("Even numbers up to 10:"); printEvenNumbers(10); // Should print 2, 4, 6, 8, 10

console.log("Even numbers up to 20:"); printEvenNumbers(20); // Should print 2, 4, 6, 8, 10, 12, 14, 16, 18, 20