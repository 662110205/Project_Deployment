"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculate_1 = require("./calculate");
if (calculate_1.cal.add(1, 2) === 3) {
    process.exit(0);
}
else {
    process.exit(1);
}
