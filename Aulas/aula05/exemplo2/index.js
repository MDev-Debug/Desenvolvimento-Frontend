var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Pessoa.prototype.imprimeNome = function () {
        console.log("Fulano");
    };
    Pessoa.prototype.formataNome = function (nome) {
        return nome.toLocaleUpperCase();
    };
    return Pessoa;
}());
var pessoa = new Pessoa();
