const clamp = require('./clamp').default;
const factorNumber = require('./factor_number').default;

exports.default = function (q, n) {
    q = clamp(q, 1, 50);
    n = Array.from(n, element => Number(element));

    const result = [];

    for (let i = 0; i < q; i++) {
        const number = n[i];

        if (number < 2 || number > 1000) {
            result.push('');
            continue;
        }

        const factors = factorNumber(number);
        const factorSum = factors.reduce((a, b) => a + b, 0);
        const difference = Math.abs(number - factorSum);

        switch (difference) {
            case 0:
                result.push('perfect');
                break;
            case 1:
                result.push('hampir');
                break;
            default:
                result.push('bukan');
        }
    }

    return result;
}