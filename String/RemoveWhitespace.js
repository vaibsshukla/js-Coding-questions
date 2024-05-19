

//Remove Whitespace from a String:



function removeWhitespace(str) {
    return str.replace(/\s+/g, '');
}
console.log(removeWhitespace(" h e l l o ")); // Output: "hello"
