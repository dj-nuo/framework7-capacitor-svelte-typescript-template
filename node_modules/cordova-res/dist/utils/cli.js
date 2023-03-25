"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptionValue = void 0;
function getOptionValue(args, arg, defaultValue) {
    const i = args.indexOf(arg);
    if (i >= 0) {
        return args[i + 1];
    }
    return defaultValue;
}
exports.getOptionValue = getOptionValue;
