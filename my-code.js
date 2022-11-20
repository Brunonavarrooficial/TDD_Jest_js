const sum = (a, b) => {
    return a + b
}

const inOneHour = () => {
    const now = Date.now()
    const oneHourInMilli = 1 * 60 * 60 * 1000
    return now + oneHourInMilli
}

module.exports = { sum, inOneHour }

