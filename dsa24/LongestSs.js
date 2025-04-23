


function longestSubstring(s) {
    let set = new Set();
    let start = 0, maxLen = 0;
    let maxStart = 0;

    for (let end = 0; end < s.length; end++) {
        while (set.has(s[end])) {
            set.delete(s[start]);
            start++;
        }

        set.add(s[end]);

        if (end - start + 1 > maxLen) {
            maxLen = end - start + 1;
            maxStart = start; // store the start index of the longest substring
        }
    }

    return s.substring(maxStart, maxStart + maxLen);
}
console.log(longestSubstring("abcabcbb"))