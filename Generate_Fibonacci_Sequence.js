function* fibGenerator() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

function getFibonacciSequence(callCount) {
    const gen = fibGenerator();
    const result = [];
    for (let i = 0; i < callCount; i++) {
        result.push(gen.next().value);
    }
    return result;
}

console.log(getFibonacciSequence(5));
console.log(getFibonacciSequence(0));