/*
Word Break II
Given a string s and a dictionary of words wordDict, return all possible sentences where the words are from wordDict and together form s.
*/

function wordBreak(s, wordDict) {
    const wordSet = new Set(wordDict);
    const memo = {};

    function backtrack(start) {
        if (start in memo) return memo[start];
        if (start === s.length) return [''];

        const sentences = [];

        for (let end = start + 1; end <= s.length; end++) {
            const word = s.slice(start, end);
            if (wordSet.has(word)) {
                const rest = backtrack(end);
                for (const sentence of rest) {
                    sentences.push(word + (sentence ? ' ' + sentence : ''));
                }
            }
        }

        memo[start] = sentences;
        return sentences;
    }

    return backtrack(0);
}
