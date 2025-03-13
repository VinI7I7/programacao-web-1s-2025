function verificarNumeroPrimo(n){
    if(n <= 1){
        return false;
    }
    if(n!=2 && n % 2 == 0){
        return false;
    }
    for(let i = 3; i < n; i+= 2){
        if (n % i ==0)
            return false;

    }

    return true;
}

console.log('verificarNumeroPrimo(0);='+verificarNumeroPrimo(0)); //false
console.log('verificarNumeroPrimo(1);='+verificarNumeroPrimo(1)); //false
console.log('verificarNumeroPrimo(2);='+verificarNumeroPrimo(2)); //true
console.log('verificarNumeroPrimo(3);='+verificarNumeroPrimo(3)); //true
console.log('verificarNumeroPrimo(7);='+verificarNumeroPrimo(7)); //true
console.log('verificarNumeroPrimo(83);='+verificarNumeroPrimo(83)); //true
console.log('verificarNumeroPrimo(100);='+verificarNumeroPrimo(100)); //false
console.log('verificarNumeroPrimo(991);='+verificarNumeroPrimo(991)); //true
console.log('verificarNumeroPrimo(104729);='+verificarNumeroPrimo(104729)); //true
console.log('verificarNumeroPrimo(14348907);='+verificarNumeroPrimo(14348907)); //false