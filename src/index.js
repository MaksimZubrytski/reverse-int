module.exports = function reverse (n) {
    if(n < 0) {
        let newNumber = -n
        let newString = String(newNumber)
        let reverseString = newString.split('').reverse().join('');
        let reverseNumber = Number(reverseString)
        return reverseNumber;
    }
    else {
        let newString = String(n)
        let reverseString = newString.split('').reverse().join('');
        let reverseNumber = Number(reverseString)
        return reverseNumber;
    }
}
