function fibonacciSequence(n) {
    let fibSequence = [0, 1];
    while (fibSequence[fibSequence.length - 1] < n) {
        fibSequence.push(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]);
    }
    return fibSequence;
}

function isInFibonacci(n) {
    let fibSequence = fibonacciSequence(n);
    return fibSequence.includes(n);
}


let numero = 21;
if (isInFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
