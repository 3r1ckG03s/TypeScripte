var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
///<reference path="pessoa.ts" />
var medicina;
(function (medicina) {
    var Paciente = /** @class */ (function (_super) {
        __extends(Paciente, _super);
        function Paciente() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Paciente.prototype.setCodPaciente = function (codPaciente) {
            this._codPaciente = codPaciente;
        };
        Paciente.prototype.getCodPaciente = function () {
            return this._codPaciente;
        };
        return Paciente;
    }(medicina.Pessoa));
    medicina.Paciente = Paciente;
})(medicina || (medicina = {}));
///<reference path="pessoa.ts" />
var medicina;
(function (medicina) {
    var Funcionario = /** @class */ (function (_super) {
        __extends(Funcionario, _super);
        function Funcionario() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Funcionario.prototype.setCodFuncionario = function (codFuncionario) {
            this._codFuncionario = codFuncionario;
        };
        Funcionario.prototype.getCodFuncionario = function () {
            return this._codFuncionario;
        };
        return Funcionario;
    }(medicina.Pessoa));
    medicina.Funcionario = Funcionario;
})(medicina || (medicina = {}));
///<reference path="funcionario.ts" />
var medicina;
(function (medicina) {
    var Medico = /** @class */ (function (_super) {
        __extends(Medico, _super);
        function Medico() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Medico.prototype.setCrm = function (crm) {
            this._crm = crm;
        };
        Medico.prototype.getCrm = function () {
            return this._crm;
        };
        Medico.prototype.setEspecialidade = function (especialidade) {
            this._especialidade = especialidade;
        };
        Medico.prototype.getEspecialidade = function () {
            return this._especialidade;
        };
        return Medico;
    }(medicina.Funcionario));
    medicina.Medico = Medico;
})(medicina || (medicina = {}));
///<reference path="funcionario.ts" />
var medicina;
(function (medicina) {
    var Enfermeiro = /** @class */ (function (_super) {
        __extends(Enfermeiro, _super);
        function Enfermeiro() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Enfermeiro.prototype.setCoren = function (coren) {
            this._coren = coren;
        };
        Enfermeiro.prototype.getCoren = function () {
            return this._coren;
        };
        return Enfermeiro;
    }(medicina.Funcionario));
    medicina.Enfermeiro = Enfermeiro;
})(medicina || (medicina = {}));
///<reference path="enfermeiro.ts" />
///<reference path="medico.ts" />
///<reference path="paciente.ts" />
var medicina;
(function (medicina) {
    var Hospital = /** @class */ (function () {
        function Hospital() {
            this._enfermeiros = [];
            this._medicos = [];
            this._pacientes = [];
        }
        Hospital.prototype.setNome = function (nome) {
            this._nome = nome;
        };
        Hospital.prototype.getNome = function () {
            return this._nome;
        };
        Hospital.prototype.addEnfermeiros = function (enfermeiro) {
            this._enfermeiros.push(enfermeiro);
        };
        Hospital.prototype.getEnfermeiros = function () {
            return this._enfermeiros;
        };
        Hospital.prototype.addMedicos = function (medico) {
            this._medicos.push(medico);
        };
        Hospital.prototype.getMedicos = function () {
            return this._medicos;
        };
        Hospital.prototype.addPacientes = function (paciente) {
            this._pacientes.push(paciente);
        };
        Hospital.prototype.getPacientes = function () {
            return this._pacientes;
        };
        return Hospital;
    }());
    medicina.Hospital = Hospital;
})(medicina || (medicina = {}));
///<reference path="hospital.ts" />
///<reference path="medico.ts" />
///<reference path="enfermeiro.ts" />
///<reference path="paciente.ts" />
var medicina;
(function (medicina) {
    //Instanciando a classe Hospital
    var hospital = new medicina.Hospital();
    hospital.setNome("Santa Casa");
    document.getElementById("nome").textContent = "Hospital - " + hospital.getNome();
    //Instanciando a classe Medico
    var medico1 = new medicina.Medico();
    medico1.setNome("Marcos");
    medico1.setCpf("123.123.123-12");
    medico1.setCodFuncionario(1);
    medico1.setCrm(11);
    medico1.setEspecialidade(1);
    var medico2 = new medicina.Medico();
    medico2.setNome("Roberto");
    medico2.setCpf("456.456.456-45");
    medico2.setCodFuncionario(2);
    medico2.setCrm(22);
    medico2.setEspecialidade(2);
    var medico3 = new medicina.Medico();
    medico3.setNome("Lucas");
    medico3.setCpf("789.789.789-78");
    medico3.setCodFuncionario(3);
    medico3.setCrm(33);
    medico3.setEspecialidade(3);
    //Instanciando a classe Enfermeiro
    var enfermeiro1 = new medicina.Enfermeiro();
    enfermeiro1.setNome("José");
    enfermeiro1.setCpf("012.012.012-01");
    enfermeiro1.setCodFuncionario(4);
    enfermeiro1.setCoren(44);
    var enfermeiro2 = new medicina.Enfermeiro();
    enfermeiro2.setNome("Heitor");
    enfermeiro2.setCpf("345.345.345-34");
    enfermeiro2.setCodFuncionario(5);
    enfermeiro2.setCoren(55);
    var enfermeiro3 = new medicina.Enfermeiro();
    enfermeiro3.setNome("Victor");
    enfermeiro3.setCpf("678.678.678-67");
    enfermeiro3.setCodFuncionario(6);
    enfermeiro3.setCoren(66);
    //Instanciando a classe Paciente
    var paciente1 = new medicina.Paciente();
    paciente1.setNome("Dália");
    paciente1.setCpf("901.901.901.90");
    paciente1.setCodPaciente(7);
    var paciente2 = new medicina.Paciente();
    paciente2.setNome("Joana");
    paciente2.setCpf("234.234.234.23");
    paciente2.setCodPaciente(8);
    var paciente3 = new medicina.Paciente();
    paciente3.setNome("Flávia");
    paciente3.setCpf("567.567.567.56");
    paciente3.setCodPaciente(9);
    //Adição de médicos, enfermeiros e pacientes
    hospital.addMedicos(medico1);
    hospital.addMedicos(medico2);
    hospital.addMedicos(medico3);
    hospital.addEnfermeiros(enfermeiro1);
    hospital.addEnfermeiros(enfermeiro2);
    hospital.addEnfermeiros(enfermeiro3);
    hospital.addPacientes(paciente1);
    hospital.addPacientes(paciente2);
    hospital.addPacientes(paciente3);
    //Tabela de médicos
    var tabMedico = document.getElementById("tabMedico");
    var contMedico = "<tr><th>Nome:</th><th>CPF:</th><th>CodFuncionário:</th><th>CRM:</th><th>Especialidade:</th></tr>";
    hospital.getMedicos().forEach(function (element) {
        contMedico += "<tr><td>" + element.getNome() + "</td><td>" + element.getCpf() + "</td><td>" + element.getCodFuncionario() + "</td><td>" + element.getCrm() + "</td><td>" + element.getEspecialidade() + "</td></tr>";
    });
    tabMedico.innerHTML = contMedico;
    //Tabela de enfermeiros
    var tabEnfermeiro = document.getElementById("tabEnfermeiro");
    var contEnfermeiro = "<tr><th>Nome:</th><th>CPF:</th><th>CodFuncionário:</th><th>Coren:</th></tr>";
    hospital.getEnfermeiros().forEach(function (element) {
        contEnfermeiro += "<tr><td>" + element.getNome() + "</td><td>" + element.getCpf() + "</td><td>" + element.getCodFuncionario() + "</td><td>" + element.getCoren() + "</td></tr>";
    });
    tabEnfermeiro.innerHTML = contEnfermeiro;
    //Tabela de pacientes
    var tabPaciente = document.getElementById("tabPaciente");
    var contPaciente = "<tr><th>Nome:</th><th>CPF:</th><th>CodPaciente:</th></tr>";
    hospital.getPacientes().forEach(function (element) {
        contPaciente += "<tr><td>" + element.getNome() + "</td><td>" + element.getCpf() + "</td><td>" + element.getCodPaciente() + "</td></tr>";
    });
    tabPaciente.innerHTML = contPaciente;
})(medicina || (medicina = {}));
