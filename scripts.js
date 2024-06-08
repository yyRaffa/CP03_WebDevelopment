const form = document.getElementById('form');

const formCampos = document.querySelectorAll('.input-box');
const spans = document.querySelectorAll('.span-required');

const telCampos = document.querySelectorAll('.input-telefone-box');
const adicionarTel = document.getElementById('adicionar-telefone');
const excluirTel = document.getElementById('excluir-telefone');

const perfilCampo = document.getElementById('select-perfil-box');
const textAreaCampo = document.getElementById('textarea-box');


// Validações
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
    else
        removeErro(1);
        validarConfirmarSenha();
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

// Convertendo textos
document.getElementById('textarea-box').addEventListener('blur', textareaMaiuscula);

function textareaMaiuscula() {
    var resultado;
    resultado = textAreaCampo.value.toUpperCase();
    textAreaCampo.value = resultado;
}

