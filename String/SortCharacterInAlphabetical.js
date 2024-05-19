
function sortCharacterInAlphabetical(str){
    return str.toLowerCase().split("").sort().join("")
    // return str.split('').sort().join('');
}

console.log(sortCharacterInAlphabetical("javascript")) // Output: "aacijprstv"