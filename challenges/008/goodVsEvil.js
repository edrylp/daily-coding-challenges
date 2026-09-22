function goodVsEvil(good, evil){

    const goodValues = [1, 2, 3, 3, 4, 10]
    const evilValues = [1, 2, 2, 2, 3, 5, 10]

    const goodInt = good.split(" ").map(x => Number(x))
    const evilInt = evil.split(" ").map(x => Number(x))

    const goodArray = []
    const evilArray = []

    for (let i = 0; i < goodValues.length; i++) {
        goodArray.push(goodInt[i] * goodValues[i])
    }

    for (let i = 0; i < evilValues.length; i++) {
        evilArray.push(evilInt[i] * evilValues[i])
    }

    const goodScore = goodArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0)


    const evilScore = evilArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0)

    if (goodScore > evilScore) {
        return "Battle Result: Good triumphs over Evil"
    } else if (goodScore < evilScore ) {
        return "Battle Result: Evil eradicates all trace of Good"
    } else return "Battle Result: No victor on this battle field"
}