
// Program to count Occurrences

let  countOccurrences = (str, char)=>{
    return str.split(char).length-1
}

let occurrences = countOccurrences("Javascript","a")

console.log(occurrences)