
// Convert CamelCase to Kebab-Case:


function camelToKebab(str){
    return str.replace(/([a-z])([A-Z])/g,`$1-$2`).toLowerCase();
    //    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

}

console.log(camelToKebab("vaibhavShukla")) // vaibhav-shukla