var countCharacters = function (words, chars) {
    let backLength = 0
    let copyStr = chars
    for (let i of words) {
        let cantSplit = false
        chars = copyStr
        for (let j of i) {
            if (chars.indexOf(j) >= 0) {
                chars = chars.replace(j, "0")
            } else {
                cantSplit = true
                break
            }
        }
        cantSplit ? '' : backLength += i.length
    }
    return backLength
};
console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach"))
