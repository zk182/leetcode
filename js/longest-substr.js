// Input: s = "abcabcbb"
// longest is "abc"
// Input = "aaaaa"
// "a"
// Input =  "pwwkew"
// "wke"

// Recorrer el str

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s.length) {
        return 0
    }

    let i = 0; // indice que va a ir barriendo el str
    let max = 1;

    while (i<=s.length || max < s.length - i) {
        let sum = 0;
        let hash = {};
        for (j=i; j<s.length; j++) {
            let c = s[j];
            if (hash[c]) { 
                if (sum > max) {
                    max = sum;
                }
                break;
            } else {
                hash[c] = 1;
                sum ++;
            }
        }
        if (sum > max) {
            max = sum;
        }
        i++;
    }
    return max;
};