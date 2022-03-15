const factorNumber = require('../../src/factor_number').default;
const testCase = require('../test_case').default;

describe('factorNumber.values', function () {
    const cases = [
        testCase(6, [1, 2, 3]),
        testCase(28, [1, 2, 4, 7, 14]),
        testCase(496, [1, 2, 4, 8, 16, 31, 62, 124, 248]),
        testCase(8128, [1, 2, 4, 8, 16, 32, 64, 127, 254, 508, 1016, 2032, 4064]),
        testCase(0, []),
        testCase(1, []),
        testCase(2, [1]),
        testCase(3, [1]),
        testCase(5, [1]),
        testCase(8, [1, 2, 4]),
        testCase(13, [1]),
        testCase(21, [1, 3, 7]),
        testCase(34, [1, 2, 17]),
        testCase(55, [1, 5, 11])
    ];

    for (let i = 0; i < cases.length; i++) {
        const input = cases[i]['input'];
        const output = cases[i]['output'];

        const given = input;
        const expected = output;


        test(`when ${given}, then ${expected}`, function () {
            const result = factorNumber(given);

            expect(result).toStrictEqual(expected);
        });
    }
})