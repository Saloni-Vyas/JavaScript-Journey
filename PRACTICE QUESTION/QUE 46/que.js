/*
Traveling Salesman Problem (TSP) — Bitmask DP
Given a list of cities and distances, find the minimum cost to visit each city exactly once and return to the origin.
*/

function tsp(graph) {
    const n = graph.length;
    const VISITED_ALL = (1 << n) - 1;
    const memo = Array.from({ length: n }, () => Array(1 << n).fill(undefined));

    function dp(pos, mask) {
        if (mask === VISITED_ALL) return graph[pos][0] || Infinity;
        if (memo[pos][mask] !== undefined) return memo[pos][mask];

        let res = Infinity;
        for (let city = 0; city < n; city++) {
            if (!(mask & (1 << city)) && graph[pos][city] > 0) {
                res = Math.min(res, graph[pos][city] + dp(city, mask | (1 << city)));
            }
        }

        memo[pos][mask] = res;
        return res;
    }

    return dp(0, 1);
}
