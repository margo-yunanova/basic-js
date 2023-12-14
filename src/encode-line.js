const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
    let encodeStr = "";
    let counter = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1]) {
            encodeStr += (counter === 1 ? "" : counter) + str[i];
            counter = 1;
            continue;
        }
        counter++;
    }
    return encodeStr;
}

// function encodeLine(str) {
//     const newArr = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i - 1]) {
//             let index = newArr.findIndex(([n, l]) => l === str[i]);
//             index = index === -1 ? newArr.length : index;
//             newArr[index][0] = newArr[index][0] + 1;
//         } else {
//             newArr.push([1, str[i]]);
//         }
//     }
//     return newArr
//         .map(([n, l]) => (n === 1 ? l : [n, l]))
//         .flat()
//         .join("");
// }

module.exports = {
    encodeLine,
};
