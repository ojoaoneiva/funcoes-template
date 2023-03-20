function calculo (numero) {
    const verifica = numero%2==0
    const soma = numero+10
    const multiplica = numero * numero

    return `O numero ${numero} é par? ${verifica}. Somado com 10, o resultado é ${soma}, e multiplicado por ele mesmo o resultado é ${multiplica}`
}

console.log(calculo(218))

const calculo2 = function(numero) {
    const verifica = numero%2==0
    const soma = numero+10
    const multiplica = numero * numero

    return `O numero ${numero} é par? ${verifica}. Somado com 10, o resultado é ${soma}, e multiplicado por ele mesmo o resultado é ${multiplica}`
}

console.log(calculo(217))