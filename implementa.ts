///<reference path="hospital.ts" />
///<reference path="medico.ts" />
///<reference path="enfermeiro.ts" />
///<reference path="paciente.ts" />
namespace medicina
{

    let hospital = new Hospital();
    hospital.setNome("Santa Rica");
    document.getElementById("nome").textContent = "Hospital - " + hospital.getNome();

    //Informações dos médicos nas tabelas
    let medico1 = new Medico();
    medico1.setNome("Maria");
    medico1.setCpf("344.769.550-10");
    medico1.setCodFuncionario(1);
    medico1.setCrm(11);
    medico1.setEspecialidade(1);

    let medico2 = new Medico();
    medico2.setNome("Roberto");
    medico2.setCpf("583.952.230-99");
    medico2.setCodFuncionario(2);
    medico2.setCrm(22);
    medico2.setEspecialidade(2);

    let medico3 = new Medico();
    medico3.setNome("Luiz");
    medico3.setCpf("238.524.500-04");
    medico3.setCodFuncionario(3);
    medico3.setCrm(33);
    medico3.setEspecialidade(3);

    //Informações dos enfermeiros nas tabelas
    let enfermeiro1 = new Enfermeiro();
    enfermeiro1.setNome("João");
    enfermeiro1.setCpf("343.499.300-27");
    enfermeiro1.setCodFuncionario(4);
    enfermeiro1.setCoren(44);

    let enfermeiro2 = new Enfermeiro();
    enfermeiro2.setNome("Marcos");
    enfermeiro2.setCpf("433.581.500-03");
    enfermeiro2.setCodFuncionario(5);
    enfermeiro2.setCoren(55);

    let enfermeiro3 = new Enfermeiro();
    enfermeiro3.setNome("Pedro");
    enfermeiro3.setCpf("026.826.600-02");
    enfermeiro3.setCodFuncionario(6);
    enfermeiro3.setCoren(66);

    //Informações dos pacientes nas tabelas
    let paciente1 = new Paciente();
    paciente1.setNome("Yvo");
    paciente1.setCpf("538.772.860-54");
    paciente1.setCodPaciente(7);

    let paciente2 = new Paciente();
    paciente2.setNome("Erick");
    paciente2.setCpf("881.977.430-53");
    paciente2.setCodPaciente(8);

    let paciente3 = new Paciente();
    paciente3.setNome("Carlos");
    paciente3.setCpf("128.418.450-10");
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
    let tabMedico = document.getElementById("tabMedico");

    let contMedico = "<tr><th>Nome:</th><th>CPF:</th><th>CodFuncionário:</th><th>CRM:</th><th>Especialidade:</th></tr>";
    hospital.getMedicos().forEach(element => {
        contMedico += "<tr><td>"+element.getNome()+"</td><td>"+element.getCpf()+"</td><td>"+element.getCodFuncionario()+"</td><td>"+element.getCrm()+"</td><td>"+element.getEspecialidade()+"</td></tr>";
    });
    tabMedico.innerHTML = contMedico;

    //Tabela de enfermeiros
    let tabEnfermeiro = document.getElementById("tabEnfermeiro");

    let contEnfermeiro = "<tr><th>Nome:</th><th>CPF:</th><th>CodFuncionário:</th><th>Coren:</th></tr>";
    hospital.getEnfermeiros().forEach(element => {
        contEnfermeiro += "<tr><td>"+element.getNome()+"</td><td>"+element.getCpf()+"</td><td>"+element.getCodFuncionario()+"</td><td>"+element.getCoren()+"</td></tr>";
    });
    tabEnfermeiro.innerHTML = contEnfermeiro;

    //Tabela de pacientes
    let tabPaciente = document.getElementById("tabPaciente");

    let contPaciente = "<tr><th>Nome:</th><th>CPF:</th><th>CodPaciente:</th></tr>";
    hospital.getPacientes().forEach(element => {
        contPaciente += "<tr><td>"+element.getNome()+"</td><td>"+element.getCpf()+"</td><td>"+element.getCodPaciente()+"</td></tr>";
    });
    tabPaciente.innerHTML = contPaciente;

}
