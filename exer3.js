// 3 - Desenvolva um algoritmo que simule o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando. Imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".
let possibilidades = ['pedra', 'papel', 'tesoura'];
let jogada1 = Math.floor(Math.random() * 2);
let jogador1 = possibilidades[jogada1];

let jogada2 = Math.floor(Math.random() * 2);
let jogador2 = possibilidades[jogada2];



if (jogador1 == 'tesoura' && jogador2 == 'pedra' || jogador1 == 'pedra' && jogador2 == 'papel' || jogador1 == 'papel' && jogador2 == 'tesoura')
{
    console.log('Jogador 2 VENCEU!');
}else if(jogador1 == jogador2)
{
    console.log('EMPATE!');
}else
{
    console.log('Jogador 1 VENCEU');
}
console.log(`O jogador Um escolheu: ${jogador1}`);
console.log(`O jogador Dois escolheu: ${jogador2}`);