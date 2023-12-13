const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    const totalValue1 = getTotalValue(s1);
    const totalValue2 = getTotalValue(s2);

    return Object.entries(totalValue1).reduce(
        (acc, [l, n]) => acc + Math.min(n, totalValue2[l] ?? 0),
        0
    );
}

function getTotalValue(s) {
    const total = {};
    for (const l of s) {
        total[l] = (total[l] ?? 0) + 1;
    }

    return total;
}

module.exports = {
    getCommonCharacterCount,
};
