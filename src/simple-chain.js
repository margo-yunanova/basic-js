const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        this.chain.push(`( ${value !== undefined ? value : ""} )`);
        return this;
    },
    removeLink(position) {
        if (!Number.isInteger(position) || position > this.chain.length || position < 1) {
            this.chain.length = 0;
            throw new Error("You can't remove incorrect link!");
        }
        this.chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.chain = this.chain.reverse();
        return this;
    },
    finishChain() {
        const newChain = this.chain.join("~~");
        this.chain.length = 0;
        return newChain;
    },
};

module.exports = {
    chainMaker,
};
