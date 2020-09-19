function calculator(operator, amout, ...numbers){
    const isSum = operator === '+';
    
    for(let number of numbers) {
        if(isSum){
            amout += number;
        }
    }
    console.log(amout);
}

calculator('+', 0, 1, 2, 3);