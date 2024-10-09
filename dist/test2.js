"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculate_1 = require("./calculate");
if (calculate_1.cal.minus(calculate_1.cal.multiple(5, 6), 10) === 20) {
    process.exit(0);
}
else {
    process.exit(1);
}
