alert("ALERT do JavaScript!");

var num1, num2;

parseFloat(num1) = prompt("Qual o valor do primeiro número?");
parseFloat(num2) = prompt("Qual o valor do segundo número?");

var soma = num1 + num2;
var sub = num1 - num2;
var multp = num1 * num2;
var divisao = num1 / num2;
var resto = num1 % num2;

alert("Soma: " + soma);
alert("Subtração: " + sub);
alert("Multiplicação: " + multp);
alert("Divisao: " + divisao);
alert("Resto: " + resto);



var decisao = confirm("Esses são os números?");

if (decisao) {

    alert("Você clicou no botão OK,\n retornou o valor: " + decisao);

} else {

    alert("Você clicou no botão CANCELAR,\n retornou o valor: " + decisao);

}