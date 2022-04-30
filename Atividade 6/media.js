alert("ALERT do JavaScript!");

var nome, nota1, nota2, nota3;

nome = prompt("Qual é o seu nome?");
parseFloat(nota1) = prompt("Qual o valor da primeira nota?");
parseFloat(nota2) = prompt("Qual o valor da segunda nota?");
parseFloat(nota2) = prompt("Qual o valor da terceira nota?");
var media = (nota1 + nota2 + nota3) / 3;

alert("Seu nome é " + nome);
alert("Sua média é " + parseFloat(media));



var decisao = confirm("Essa é mesmo a sua média?");

if (decisao) {

    alert("Você clicou no botão OK,\n retornou o valor: " + decisao);

} else {

    alert("Você clicou no botão CANCELAR,\n retornou o valor: " + decisao);

}