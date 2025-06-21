/*
Maximum Profit in Job Scheduling (Weighted Job Scheduling)
You are given jobs with start, end, and profit. Return the maximum total profit with non-overlapping jobs.
*/

function jobScheduling(startTime, endTime, profit) {
    const jobs = startTime.map((s, i) => [s, endTime[i], profit[i]]);
    jobs.sort((a, b) => a[1] - b[1]);
    
    const dp = [[0, 0]]; // [endTime, totalProfit]

    for (const [s, e, p] of jobs) {
        let lo = 0, hi = dp.length;
        while (lo < hi) {
            const mid = Math.floor((lo + hi) / 2);
            if (dp[mid][0] <= s) lo = mid + 1;
            else hi = mid;
        }
        const currProfit = dp[lo - 1][1] + p;
        if (currProfit > dp[dp.length - 1][1]) {
            dp.push([e, currProfit]);
        }
    }

    return dp[dp.length - 1][1];
}
