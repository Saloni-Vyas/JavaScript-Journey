/*
 Cherry Pickup II (Grid + 2D Robot Path)
Two players start at top row and collect cherries moving down. Return max total cherries collected.
 */

function cherryPickup(grid) {
    const m = grid.length, n = grid[0].length;
    const memo = new Map();

    function dp(r, c1, c2) {
        if (c1 < 0 || c1 >= n || c2 < 0 || c2 >= n) return 0;
        const key = `${r},${c1},${c2}`;
        if (memo.has(key)) return memo.get(key);

        let result = grid[r][c1];
        if (c1 !== c2) result += grid[r][c2];

        if (r < m - 1) {
            let max = 0;
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    max = Math.max(max, dp(r + 1, c1 + i, c2 + j));
                }
            }
            result += max;
        }

        memo.set(key, result);
        return result;
    }

    return dp(0, 0, n - 1);
}
