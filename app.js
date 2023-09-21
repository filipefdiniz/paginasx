document.addEventListener('DOMContentLoaded', function () {
    //Inserir e retirar div da tela
    var div = document.getElementById('main');
    var button = document.getElementById('cadastro');
    var bool = true;
    button.addEventListener('click', function Inserir() {
        if (bool) {
            div.innerHTML = `<div class="container-popup">
        <div class="pop-form">
            <h3 style="text-align: center; margin: 30px;">Insira seus dados para se cadastrar</h3>
            <form action="submit">
                <input type="text" placeholder="CPF" id="form_cpf">
                <input type="text" placeholder="Nome completo" id="form_name">
                <input type="text" placeholder="E-mail" id="form_email">
                <input type="text" placeholder="Telefone" id="form_telefone">
                <button type="submit" class="form-btn">Avançar</button>
            </form>
        </div>
    </div>`;
            // Dados do formulário
            var cadastros = [
                {
                    cpf: 14463167698,
                    nome: 'Filipe Ferreira Diniz',
                    email: 'filipefdiniz30@gmail.com',
                    telefone: 31993273796
                },
                {
                    cpf: 90510224687,
                    nome: 'Fabio Luiz Alves Diniz',
                    email: 'fabioluizalves@gmail.com',
                    telefone: 31991650801
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
            bool = false;
        }
        else {
            div.innerHTML = ``;
            bool = true;
        }
    });

});
