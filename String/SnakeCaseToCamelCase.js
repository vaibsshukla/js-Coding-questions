
// Convert Snake_Case to CamelCase:

function snakeCaseToCamelCase (str){
    return str.replace(/_([a-z])/g,function(g){
        return g[1].toUpperCase();
    })
}

console.log(snakeCaseToCamelCase("snake_case_string")) // 'snakeCaseString'