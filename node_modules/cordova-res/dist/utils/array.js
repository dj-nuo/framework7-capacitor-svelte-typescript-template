"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexCombinatoryIterator = exports.combinationJoiner = exports.flatten = void 0;
function flatten(t) {
    return [].concat(...t);
}
exports.flatten = flatten;
function combinationJoiner(ary, joiner) {
    return [...indexCombinatoryIterator(ary)]
        .map(indexes => indexes.map((index, i) => ary[i][index]))
        .map(joiner);
}
exports.combinationJoiner = combinationJoiner;
function* indexCombinatoryIterator(arys) {
    if (arys.length === 0) {
        return;
    }
    const lengths = arys.map(ary => ary.length);
    const progressions = arys.map(() => 0);
    const product = lengths.reduce((acc, value) => acc * value, 1);
    for (let pos = 0; pos <= product - 1; pos++) {
        yield [...progressions];
        for (let i = progressions.length - 1; i >= 0; i--) {
            if (progressions[i] < lengths[i] - 1) {
                progressions[i]++;
                break;
            }
            progressions[i] = 0;
        }
    }
}
exports.indexCombinatoryIterator = indexCombinatoryIterator;
