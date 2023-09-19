document.addEventListener('DOMContentLoaded', function () {
    var cadastros = [
        {
            cpf: 14463167698,
            nome: 'Filipe Ferreira Diniz',
            email: 'filipefdiniz30@gmail.com',
            telefone: 31993273796
        },
        
    ];

    var inputCPF = document.getElementById('form_cpf');
    var inputNome = document.getElementById('form_name');
    var inputEmail = document.getElementById('form_email');
    var inputTelefone = document.getElementById('form_telefone');

    inputCPF.addEventListener('input', function () {
        var valueCPF = inputCPF.value;
        for (var i = 0; i < cadastros.length; i++) {
            if (parseInt(valueCPF) === cadastros[i].cpf) {
                inputNome.value = cadastros[i].nome;
                inputEmail.value = cadastros[i].email;
                inputTelefone.value = cadastros[i].telefone;
                break;
            }
        }
    });

    
});
