const fizBuz = (number) => {
    const isNumber = typeof(number) === 'number';
    
    if (isNumber) {
        const isDivisileFor3 = number % 3 === 0;
        const isDivisileFor5 = number % 5 === 0;
        
        if (isDivisileFor3 && isDivisileFor5) {
            return `${number} fiz buzz`;
        }else
            if (isDivisileFor3) {
                return `${number} fiz`;
            }
        else
            if (isDivisileFor5) {
                return `${number} buz`;
            }
        return number;
        
        
    }else{
        console.log('not is number');
    }

}

console.log(fizBuz(1));
console.log(fizBuz(3));
console.log(fizBuz(5));
console.log(fizBuz(15));
