var medicina;
(function (medicina) {
    var Pessoa = /** @class */ (function () {
        function Pessoa() {
        }
        Pessoa.prototype.setNome = function (nome) {
            this._nome = nome;
        };
        Pessoa.prototype.getNome = function () {
            return this._nome;
        };
        Pessoa.prototype.setCpf = function (cpf) {
            this._cpf = cpf;
        };
        Pessoa.prototype.getCpf = function () {
            return this._cpf;
        };
        return Pessoa;
    }());
    medicina.Pessoa = Pessoa;
})(medicina || (medicina = {}));
