

// String Palindrome check

const palindrome = (str)=>{
    return str.split("").reverse().join("") == str
}

let isPalindrome = palindrome("vaibhav")

console.log(isPalindrome)