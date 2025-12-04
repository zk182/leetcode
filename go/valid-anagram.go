package problems

func isAnagram(s string, t string) bool {
    if (len(s) != len(t)) { 
        return false 
    }
    var r = make(map[byte]int)
    
    for i:=0; i<len(s); i++ {
        var cs = s[i]
        var ct = t[i]

        r[cs] = r[cs] + 1
        r[ct] = r[ct] - 1
    }
   
    for _, v := range r {
        if v != 0 {
            return false
        }
    }

    return true
}