/*
Longest Increasing Path in a Matrix
Given a matrix, return the length of the longest increasing path.
*/

function longestIncreasingPath(matrix) {
    const m = matrix.length, n = matrix[0].length;
    const memo = Array.from({ length: m }, () => Array(n).fill(0));
    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];

    function dfs(i, j) {
        if (memo[i][j]) return memo[i][j];
        let maxPath = 1;

        for (const [dx, dy] of dirs) {
            const x = i + dx, y = j + dy;
            if (x >= 0 && x < m && y >= 0 && y < n && matrix[x][y] > matrix[i][j]) {
                maxPath = Math.max(maxPath, 1 + dfs(x, y));
            }
        }

        memo[i][j] = maxPath;
        return maxPath;
    }

    let result = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            result = Math.max(result, dfs(i, j));
        }
    }

    return result;
}
