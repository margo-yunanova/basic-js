const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
    let addition = options.addition === undefined ? "" : `${options.addition}`;
    if (options.additionRepeatTimes) {
        addition = Array(options.additionRepeatTimes)
            .fill(addition)
            .join(options.additionSeparator ?? "|");
    }
    let string = str + addition;
    if (options.repeatTimes) {
        string = Array(options.repeatTimes)
            .fill(string)
            .join(options.separator ?? "+");
    }
    return string;
}

module.exports = {
    repeater,
};
