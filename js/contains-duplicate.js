/**
 * runtime: 59ms, 81.95mb
 * @param {number[]} nums
 * @return {boolean} 
 */
const containsDuplicate = function(nums) {
    const s = new Set(nums);
    if (s.length == nums.length) {
        return true;
    }

    let hash = {};
    let i = 0;
    for (n of nums){
        if (hash[n]) {
            return true;
        }
        hash[n] = 1;
        i++;
    }
    return false;
};