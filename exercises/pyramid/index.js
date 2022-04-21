// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

const steps = require("../steps");

function pyramid(n, h = 1, i = 1) {
    const hash = "#";
    const space = " ";

    if (i > n) {
        return;
    } else {
        console.log(space.repeat(Math.floor(n - h / 2)) + hash.repeat(h) + space.repeat(Math.floor(n - h / 2)))
        pyramid(n, h + 2, i + 1)
    }

}

module.exports = pyramid;
