function findOdd(A) {

    let oddInteger = 0;
    const uniqueIntegers = [];

    for (const digit of A) {
        if (!uniqueIntegers.includes(digit))
            uniqueIntegers.push(digit)
    }

    for (const int of uniqueIntegers) {
        let integerCount = 0

        for (const digit of A) {
            if (int == digit) {
                integerCount ++;
            }
        }
        
        if (integerCount % 2 != 0) {
            oddInteger += int;
        }
    }

    console.log(oddInteger)
    return oddInteger;

}


// Simpler version usiung js builtin methods
/*
function findOdd(A) {
    return A.find((num) => A.filter((item) => item === num).length % 2 !== 0);
}
*/