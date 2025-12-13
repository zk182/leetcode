  // s = "anagram"  , t = "nagaram"
  // a = 3 , a = 3
  // n = 1 , n = 1
  // g = 1 , g = 1
  // r = 1 , r = 1
  // m = 1 , m = 1
  // chequear lengths iguales, sino false
  // recorrer el primero

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const hash = {};
    let i = 0;

    for (c of s) {
        hash[c] = !!hash[c] ? ++hash[c] : 1;
        hash[t[i]] = !!hash[t[i]] ? --hash[t[i]] : -1;
        i ++;
    }

    return Object.values(hash).every(x => x ===0);
};

// Optimization

  // s = "anagram"  , t = "nagaram"
  // a = 3 , a = 3
  // n = 1 , n = 1
  // g = 1 , g = 1
  // r = 1 , r = 1
  // m = 1 , m = 1
  // chequear lengths iguales, sino false
  // recorrer el primero

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 17 ms
const isAnagramOptimized = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const hash = {};

    for (let i=0; i<s.length; i++) {
        const cs = t[i];
        const ts = s[i];

        hash[cs] = (hash[cs] || 0) + 1;
        hash[ts] = (hash[ts] || 0) - 1;
    }

    return Object.values(hash).every(x => x ===0);
};