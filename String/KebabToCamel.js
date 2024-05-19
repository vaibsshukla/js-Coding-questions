
// Convert Kebab-Case to CamelCase:


function kebabToCamel(str) {
    return str.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
    });
}
console.log(kebabToCamel("kebab-case-string")); // Output: "kebabCaseString"