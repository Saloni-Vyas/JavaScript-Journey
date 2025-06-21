/*
 Burst Balloons
Given nums array, each balloon has a number. Bursting it gives coins nums[i-1] * nums[i] * nums[i+1]. Return max coins possible.
*/

function maxCoins(nums) {
    nums = [1, ...nums, 1];
    const n = nums.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    for (let len = 2; len < n; len++) {
        for (let left = 0; left < n - len; left++) {
            const right = left + len;
            for (let i = left + 1; i < right; i++) {
                dp[left][right] = Math.max(
                    dp[left][right],
                    nums[left] * nums[i] * nums[right] + dp[left][i] + dp[i][right]
                );
            }
        }
    }

    return dp[0][n - 1];
}
