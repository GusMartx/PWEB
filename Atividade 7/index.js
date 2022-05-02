
var jogadaJogador = parseInt(prompt("Eschola sua jogada:\n1 - Pedra\n2 - Papel\n3 - Tesoura"));

var jogadaMaquina = Math.floor(Math.random() * 3) + 1;
alert(jogadaJogador, jogadaMaquina);

if (jogadaJogador == jogadaMaquina) {
    alert("Empate");
} else if (jogadaJogador == 1 && jogadaMaquina == 2) {
    alert("Perdeu, Pedra perde pro Papel");
} else if (jogadaJogador == 1 && jogadaMaquina == 3) {
    alert("Venceu, Pedra ganha da Tesoura");
} else if (jogadaJogador == 2 && jogadaMaquina == 1) {
    alert("Venceu, Papel ganha da Pedra");
} else if (jogadaJogador == 2 && jogadaMaquina == 3) {
    alert("Perdeu, Papel perde pra Tesoura");
} else if (jogadaJogador == 3 && jogadaMaquina == 1) {
    alert("Perdeu, Tesoura perde pra Pedra");
} else {
    alert("Venceu, Tesoura ganha do Papel");
}
