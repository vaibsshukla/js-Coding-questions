function longestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    let longestSubstr = '';
    const charMap = {};

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        if (currentChar in charMap && charMap[currentChar] >= start) {
            start = charMap[currentChar] + 1;
        }
        charMap[currentChar] = end;
        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            longestSubstr = s.substring(start, end + 1);
        }
    }

    return longestSubstr;
}

// Example usage:
const inputString = "abcabcbb";
console.log("Longest substring without repeating characters:", longestSubstring(inputString)); // Output: "abc"
