let  s = "anagram", t = "nagaram";
if(s.length!==t.length) return false
let first = s.split('').sort().join()
let second = s.split('').sort().join()
return first==second