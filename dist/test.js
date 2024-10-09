"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculate_1 = require("./calculate");
const result = calculate_1.cal.minus(2, 1);
if (result === 1) {
    process.exit(0);
}
else {
    process.exit(1);
}
