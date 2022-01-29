module.exports = function reverse (n) {
    const positiveN = Math.abs(n);
    const arr = Array.from(String(positiveN), Number);

    return +arr.reverse().join('');
}
