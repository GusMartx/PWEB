class Conta {
    constructor(nomeCorrentista, banco, numConta, saldo) {
        this.nomeCorrentista = nomeCorrentista;
        this.banco = banco;
        this.numConta = numConta;
        this.saldo = saldo;
    }
}

class Corrente extends Conta {
    constructor(saldoEspecial) {
        this.saldoEspecial = saldoEspecial;
    }
    
    get saldoEspecial() {
        return saldoEspecial;
    }

    set saldoEspecial(value) {
        this.saldoEspecial = value;
    }
}

class Poupanca extends Conta {
    constructor(juros, dataVencimento) {
        this.juros = juros;
        this.dataVencimento = dataVencimento;
    }

    get juros() {
        return juros;
    }

    set juros(value) {
        this.juros = juros;
    }

    get dataVencimento() {
        return dataVencimento;
    }

    set dataVencimento(value) {
        this.dataVencimento = value;
    }

}

objCorrente = new Conta();
objCorrente.nomeCorrentista = "oi";
objCorrente.banco = "tchau";
objCorrente.numConta = "14";
objCorrente.saldo = 1240;
objCorrente.saldoEspecial = 3000;

alert("Nome correntista: " + objCorrente.nomeCorrentista 
        + "\nBanco: " + objCorrente.banco 
        + "\nNumero da conta: " + objCorrente.numConta
        + "\nSaldo: " + objCorrente.saldo
        + "\nSaldo Especial: " + objCorrente.saldoEspecial);

objPoupanca = new Conta();
objPoupanca.nomeCorrentista = "ola";
objPoupanca.banco = "adeus";
objPoupanca.numConta = "24";
objPoupanca.juros = 500;
objPoupanca.saldo = 3000 - objPoupanca.juros;
objPoupanca.dataVencimento = "14/07/2023";

alert("Nome correntista: " + objPoupanca.nomeCorrentista
        + "\nBanco: " + objPoupanca.banco
        + "\nNumero da conta: " + objPoupanca.numConta
        + "\nSaldo: " + objPoupanca.saldo
        + "\nJuros: " + objPoupanca.juros
        + "\nData de vencimento: " + objPoupanca.dataVencimento);