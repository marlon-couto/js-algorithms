// 2 - Desenvolva um algoritmo que conte quantos números, em um intervalo entre dois números, são divisíveis por 3. Exemplo: 1 e 20.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta (pode inventar uma).
// Não conta pra ninguém, mas no intervalo entre 2 e 150 existem 50 números divisíveis por 3 ;)

let x = 2;
let y = 150;
let contador = 0;

for (let index = x; index <= y; index += 1) {
  if (index % 3 === 0) {
    contador += 1;
  }
}

if (contador === 50) {
  console.log('Xablau!');
} else {
  console.log(`Foram achados ${contador} números divisíveis por 3`);
}
