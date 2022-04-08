// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function findBiggestValue(obj) {
    let biggest = 0;
    let biggestKey;
    Object.keys(obj).forEach((key) => {
        if (obj[key] > biggest) {
            biggest = obj[key];
            biggestKey = key;
        }
    })
    return biggestKey;
}


function maxChar(str) {
    const chars = {};

    str.split('').forEach((char) => {
        if (chars[char] !== undefined) {
            chars[char]++;
        } else {
            chars[char] = 1;
        }
    })
    return findBiggestValue(chars)

}

module.exports = maxChar;
