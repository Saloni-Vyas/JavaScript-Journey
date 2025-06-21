/*
Digit DP — Count Numbers with Unique Digits (0 to n)
Count how many numbers less than or equal to n have no repeated digits.
*/

function countSpecialNumbers(n) {
    const s = n.toString();
    const memo = new Map();

    function dp(pos, usedMask, isTight, isNum) {
        const key = `${pos},${usedMask},${isTight},${isNum}`;
        if (memo.has(key)) return memo.get(key);
        if (pos === s.length) return isNum ? 1 : 0;

        let res = 0;
        const maxDigit = isTight ? Number(s[pos]) : 9;

        for (let d = 0; d <= maxDigit; d++) {
            if ((usedMask >> d) & 1) continue;
            const nextUsed = isNum || d > 0 ? usedMask | (1 << d) : usedMask;
            res += dp(pos + 1, nextUsed, isTight && d === maxDigit, isNum || d > 0);
        }

        memo.set(key, res);
        return res;
    }

    return dp(0, 0, true, false);
}
