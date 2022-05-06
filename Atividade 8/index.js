
var idade, maiorIdade = 0, menorIdade = 300, opiniaoP = 0, opiniaoR = 0, opiniaoB = 0, opiniaoO = 0, generoM = 0, generoF = 0, opiniao = 0, genero, soma = 0, media = 0;


for (var i = 0; i < 45; i++) {

    idade = parseInt(prompt("Digite sua idade"));
    genero = prompt("Digite seu sexo (F ou M)");
    opiniao = parseInt(prompt("Sua opinião: \n1- Péssimo\n2- Regular\n3- Bom\n4- Ótimo"));

    soma = soma + idade;
    media = soma / 45;

    if (maiorIdade < idade) {
        maiorIdade = idade;
    }

    if(menorIdade > idade){
        menorIdade = idade;
    }

    if (genero == "F") {
        generoF++;
    } else {
        generoM++;
    }

    if (opiniao == 1) {
        opiniaoP++;
    } else if (opiniao == 2) {
        opiniaoR++;
    } else if (opiniao == 3) {
        opiniaoB++;
    } else {
        opiniaoO++;
    }

    var porc = (opiniaoO + opiniaoB) * 100 / 45;
}
    alert("Média da idade: " + media +
    "\nMaior idade: " + maiorIdade +
    "\nMenor idade: " + menorIdade +
    "\n" + opiniaoP + " pessoas responderam péssimo" +
    "\n" + "Porcentagem de respostas Ótimo e Bom: " + porc +
    "\n" + generoF + " mulheres\n" + generoM + " homens");