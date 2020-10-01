function Product(name, price, amount) {
    this.name = name;
    this.price = price;

    Object.defineProperty(this, 'amount', {
        enumerable: true, 
        get: () => {
            return amount;
        },
        set: (value) => {
            const isNumber = typeof value === 'number';
            console.log(isNumber);
        },
        configurable: true, 
    });
}

const prod = new Product("Lacradora", 20, 10);
prod.amount = 18;
console.log(prod.amount);

// console.log(Object.keys(prod));