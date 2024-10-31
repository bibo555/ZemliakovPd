function sum(...args) {
    
    if (args.length < 2) {
        throw new Error('INVALID_ARGUMENTS_COUNT');
    }
    
    for (let arg of args) {
        if (typeof arg !== 'number') {
            throw new Error('INVALID_ARGUMENT');
        }
    }
    
    return args.reduce((acc, curr) => acc + curr, 0);
}


try {
    console.log(sum(1, 2, 3)); // 6
} catch (error) {
    console.error(error.message);
}