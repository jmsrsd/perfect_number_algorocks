exports.default = function (value) {
    value = Math.trunc(Number(value));

    const result = [];

    for (let i = 1; i <= value / 2; i++) {
        if (value % i !== 0) continue;

        result.push(i);
    }

    return result;
}