const perfectNumber = require('../../src/perfect_number').default;
const testCase = require('../test_case').default;

describe('perfectNumber.length', function () {
    const cases = [
        testCase(0,1), 
        testCase(1,1), 
        testCase(2,2), 
        testCase(3,3), 
        testCase(5,5), 
        testCase(8,8), 
        testCase(13,13), 
        testCase(21,21), 
        testCase(34,34), 
        testCase(55,50)
    ];

    for (let i = 0; i < cases.length; i++) {
        const input = cases[i]['input'];
        const output = cases[i]['output'];

        const given = input;
        const expected = output;

        test(`when ${given}, then ${expected}`, function () {
            let result = perfectNumber(
                given, []
            );

            expect(result.length).toBe(expected);
        });
    }
});