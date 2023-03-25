export declare function flatten<T>(t: readonly T[][]): T[];
export declare function combinationJoiner<T>(ary: T[][], joiner: (t: T[]) => T): T[];
export declare function indexCombinatoryIterator<T>(arys: T[][]): Generator<number[]>;
