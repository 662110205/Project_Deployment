"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.result = void 0;
const calculate_1 = require("./calculate");
const result = () => {
    if (calculate_1.cal.minus(2, 1) === 1) {
        console.log(0);
    }
    else {
        console.log(1);
    }
};
exports.result = result;
