class Retangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    calcArea() {
        return this.base * this.altura;
    }
}

objRetangulo = new Retangulo(10,5);

alert(objRetangulo.calcArea());