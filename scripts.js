const form = document.getElementById('form');

const formCampos = document.querySelectorAll('.input-box');

const telCampos = document.querySelectorAll('.input-telefone-box');
const adicionarTel = document.getElementById('adicionar-telefone');
const excluirTel = document.getElementById('excluir-telefone');

const perfilCampo = document.getElementById('select-perfil-box');
const textAreaCampo = document.getElementById('textarea-box');


document.getElementById('textarea-box').addEventListener('blur', textareaMaiuscula);

function textareaMaiuscula() {
    var resultado;
    resultado = textAreaCampo.value.toUpperCase();
    textAreaCampo.value = resultado;
}