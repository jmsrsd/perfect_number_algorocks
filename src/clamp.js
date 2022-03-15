exports.default = function (num, min, max) {
    num = Number(num);
    min = Number(min);
    max = Number(max);

    return Math.min(Math.max(num, min), max);
}