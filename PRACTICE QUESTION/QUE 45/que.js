/*
Knapsack 0/1 (Classic Version)
Given n items with weights and values, find the max value that fits into a knapsack of capacity W.
 */

function knapsack(weights, values, W) {
    const n = weights.length;
    const dp = Array(W + 1).fill(0);

    for (let i = 0; i < n; i++) {
        for (let w = W; w >= weights[i]; w--) {
            dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
        }
    }

    return dp[W];
}
