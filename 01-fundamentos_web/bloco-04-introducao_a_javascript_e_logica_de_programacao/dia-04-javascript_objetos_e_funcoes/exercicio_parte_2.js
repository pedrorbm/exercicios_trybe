//exercício 1
function palindromo (param) {
    for (index = 1; index < param; index += 1){
        if (param[index] === param[index - 1]){
            return 'true';
        } else {
            return 'false';
        };
    }   
}   

console.log(palindromo('nada'))