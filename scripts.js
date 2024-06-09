const formCampos = document.querySelectorAll('.input-box');
const spans = document.querySelectorAll('.span-required');

const formTel = document.getElementById('telefone-inputs');
const adicionarTelBotao = document.getElementById('adicionar-telefone');
const excluirTelBotao = document.getElementById('excluir-telefone');

const perfilCampo = document.getElementById('select-perfil-box');
const textAreaCampo = document.getElementById('textarea-box');


// Validações
document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    validarLogin();
    validarSenha();
    validarConfirmarSenha();
    validarNome();
    validarCPF();
    validarVoucher();
});

window.addEventListener('load', (event) => {
    event.preventDefault();
    validarLogin();
    validarSenha();
    validarConfirmarSenha();
    validarNome();
    validarCPF();
    validarVoucher();
});

function setErro(i) {
    formCampos[i].style.border = '2px solid #e63636';
    spans[i].style.display = 'flex';
}

function removeErro(i) {
    formCampos[i].style.border = '';
    spans[i].style.display = 'none';
}

function validarLogin() {
    const validacao = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(!validacao.test(formCampos[0].value))
        setErro(0);
    else
        removeErro(0);
}

function validarSenha() {
    if(formCampos[1].value.length < 8)
        setErro(1);
    else {
        removeErro(1);
        validarConfirmarSenha();
    }
}

function validarConfirmarSenha() {
    if(formCampos[1].value == formCampos[2].value && formCampos[2].value.length >= 8)
        removeErro(2);
    else
        setErro(2);
}

function validarNome() {
    if(formCampos[3].value.length < 3)
        setErro(3);
    else
        removeErro(3);
}

function validarCPF() {
    const validacao = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if(!validacao.test(formCampos[5].value))
        setErro(5);
    else
        removeErro(5);
}

function validarVoucher() {
    const voucherPermitidos = {
        'A': 'PRATA123',
        'B': 'OURO123',
        'C': 'DIAMANTE123'
    };

    if(formCampos[6].value === voucherPermitidos[perfilCampo.value])
        removeErro(6);
    else
        setErro(6);
}


// Formulário de Telefones
let contadorTel = 1;
const maxTel = 3;
const minTel = 1;

function adicionarTel() {
    if(contadorTel < maxTel) {
        contadorTel++;
        const inputTelefoneBox = document.createElement('div');
        inputTelefoneBox.classList.add('input-telefone');
        inputTelefoneBox.innerHTML = `<input class="input-telefone-box" type="tel" name="telefone" placeholder="(xx) xxxxx-xxxx" oninput="validarTelefone${contadorTel}()">`;
        formTel.insertBefore(inputTelefoneBox, adicionarTelBotao);
    }
}
function excluirTel() {
    if(contadorTel > minTel) {
        const inputTelefoneBox = formTel.getElementsByClassName('input-telefone');
        inputTelefoneBox[inputTelefoneBox.length - 1].remove();
        contadorTel--;
    }
}


// Convertendo textos
document.getElementById('voucher').addEventListener('input', voucherMaiuscula);
document.getElementById('textarea-box').addEventListener('blur', textareaMaiuscula);

function voucherMaiuscula() {
    var resultado;
    resultado = formCampos[6].value.toUpperCase();
    formCampos[6].value = resultado;
}

function textareaMaiuscula() {
    var resultado;
    resultado = textAreaCampo.value.toUpperCase();
    textAreaCampo.value = resultado;
}