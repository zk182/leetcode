// eat --> 1 e, 1 a, 1 t ? false -> meto nuevo, sino meto en mismo que existe
// ['e', 'a', 't',]

// recorrer strs
// chequear si existe hash que tenga las letras exactas
// si? Agrego a array con mismo indice que hash
// no? Agrego hash + palabra al array en mismo indice


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const r = [];
    let anagrams = [];

    for (let str of strs) {
        const s = Array.from(str).sort().join('');
        const i = anagrams.findIndex(str => str == s);
        if (i>=0) {
            r[i].push(str);
        } else {
            r.push([str]);
            anagrams.push(s);
        }
    }
    return r;
};


// optimized

// eat --> 1 e, 1 a, 1 t ? false -> meto nuevo, sino meto en mismo que existe
// ['e', 'a', 't',]

// recorrer strs
// chequear si existe hash que tenga las letras exactas
// si? Agrego a array con mismo indice que hash
// no? Agrego hash + palabra al array en mismo indice


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagramsOptimized = function(strs) {
    const r = [];
    let ans = {};

    for (let s of strs) {
        const key = s.split('').sort().join('');
        if (!ans[key]) {
            ans[key] = [];
        }
        ans[key].push(s)
    }
    return Object.values(ans);
};