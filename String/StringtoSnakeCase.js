
// Convert a String to Snake_Case:

function toSnakeCase(str) {
    return str.replace(/\W+/g, ' ')
              .split(/ |\B(?=[A-Z])/)
              .map(word => word.toLowerCase())
              .join('_');
}
console.log(toSnakeCase("snake case string")); // Output: "snake_case_string"
