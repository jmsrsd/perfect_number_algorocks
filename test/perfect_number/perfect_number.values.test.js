const perfectNumber = require('../../src/perfect_number').default;
const testCase = require('../test_case').default;

describe('perfectNumber.values', function () {
    const cases = [
        testCase([0], ['']),
        testCase([1], ['']),
        testCase([2], ['hampir']),
        testCase([3], ['bukan']),
        testCase([4], ['hampir']),
        testCase([5], ['bukan']),
        testCase([6], ['perfect']),
        testCase([8], ['hampir']),
        testCase([13], ['bukan']),
        testCase([16], ['hampir']),
        testCase([21], ['bukan']),
        testCase([28], ['perfect']),
        testCase([34], ['bukan']),
        testCase([55], ['bukan']),
        testCase([496], ['perfect']),
        testCase([777], ['bukan']),
        testCase([8128], [''])
    ];

    for (let i = 0; i < cases.length; i++) {
        const input = cases[i]['input'];
        const output = cases[i]['output'];

        const given = input;
        const expected = output;

        test(`when ${given}, then ${expected}`, function () {
            let result = perfectNumber(
                given.length, given
            );

            expect(result).toStrictEqual(expected);
        });
    }
});