function descendingOrder(number){
    const array = [];

    for (const digit of String(n)) {
        const arrayItem = Number(digit)
        array.push(arrayItem)
    }

    // Iterate through the array
    for (let i = 0; i < array.length; i++) {
        // Assume the first digit is the largest
        let maxIndex = i;

        // Find the largest number and set it to max
        for (let j = i + 1; j < array.length; j++) {

            if (array[j] > array[maxIndex]) {
                maxIndex = j;
            }
        }

        [array[i], array[maxIndex]] = [array[maxIndex], array[i]]
    }

    return Number(array.join(''))
}