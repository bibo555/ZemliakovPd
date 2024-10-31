function Calculator() {
    this.operations = {};

    
    this.addMethod = function(operation, func) {
        
        if (typeof operation !== 'string' || typeof func !== 'function') {
            throw new Error('INVALID_ARGUMENT');
        }
        
        this.operations[operation] = func;
    };

    
    this.calculate = function(expression) {
        
        if (typeof expression !== 'string') {
            throw new Error('INVALID_ARGUMENT');
        }

        
        const match = expression.match(/(-?\d+(\.\d+)?)\s*([+\-*/**])\s*(-?\d+(\.\d+)?)/);

        
        if (!match) {
            throw new Error('INVALID_OPERAND');
        }

        const [_, a, , operator, b] = match; // Извлекаем операнды и оператор
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);

        
        const operation = this.operations[operator];
        if (!operation) {
            throw new Error('UNKNOWN_OPERATION');
        }

        
        return operation(num1, num2);
    };
}

// Пример использования
try {
    const calc = new Calculator();

    calc.addMethod('+', (a, b) => a + b);
    calc.addMethod('-', (a, b) => a - b);
    calc.addMethod('*', (a, b) => a * b);
    calc.addMethod('/', (a, b) => a / b);
    calc.addMethod('**', (a, b) => a ** b);

    console.log(calc.calculate('2 + 3')); // 5
    console.log(calc.calculate('5 * 3')); // 15
    console.log(calc.calculate('2 ** 3')); // 8

    console.log(calc.calculate('12 + 4')); // 16
    console.log(calc.calculate('3 / 3')); // 1
} catch (error) {
    console.error(error.message);
}
