// 1 - Desenvolva um algoritmo que calcula a soma dos números 1 até 50 usando a estrutura condicional "for". Retorne a resposta no seguinte formato:
// A soma total de 1 até 50 é: X
let somaTotal = 0;

for (let index = 1; index < 51; index += 1) {
  somaTotal += index;
} 

console.log(`A soma total de 1 até 50 é ${somaTotal}`);