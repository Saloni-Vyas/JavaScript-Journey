/*
 Palindrome Partitioning II
Given a string s, return the minimum number of cuts needed to make every substring a palindrome.
*/

function minCut(s) {
    const n = s.length;
    const isPal = Array.from({ length: n }, () => Array(n).fill(false));
    const dp = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        let minCut = i;
        for (let j = 0; j <= i; j++) {
            if (s[j] === s[i] && (i - j <= 2 || isPal[j + 1][i - 1])) {
                isPal[j][i] = true;
                minCut = j === 0 ? 0 : Math.min(minCut, dp[j - 1] + 1);
            }
        }
        dp[i] = minCut;
    }

    return dp[n - 1];
}
