import * as card from './card.js';
// FORM -----------------------------------------------------------------

//desmarca o rádio selecionado de uma div-filha com determinado name
//use na div-pai
export function uncheckRadio(inputName) {
    const radioTarget = document.querySelector(`input[name="${inputName}"]:checked`); 
    
    // desmarca o radio que estiver marcado
    if (radioTarget) {
        radioTarget.checked = false;
    }
    // dispara o evento 'change' nas opções com inputName
    const changeEvent = new Event('change');
    
    document.querySelectorAll(`input[name="${inputName}`).forEach(radio => {
        if (radio) {
        radio.dispatchEvent(changeEvent);
       } else {
            console.error(`Elemento ${inputName} não foi encontrado.`);
              }
    
    })
}

export function updateTipoPessoa() {
    const pessoaSelecionada = document.querySelector('input[name="t-pessoa"]:checked')?.value;
    
        // Atualiza todos os spans com a classe 'span-tipo-pessoa' com o valor selecionado
        const spans = document.querySelectorAll('.span-tipo-pessoa');
        spans.forEach(span => {
            span.textContent = pessoaSelecionada;
        });
}

// Função para salvar automaticamente os dados no localStorage
export function saveData(event) {
    const campo = event.target; // Campo que disparou o evento
    const valor = campo.value; // Valor do campo
    const nome = campo.name; // Nome do campo (usado como chave no localStorage)

    // Salva no localStorage
    localStorage.setItem(nome, valor); 
}

// CARD -----------------------------------------------------------------

export function geraFicha() {
    
	alert("botão Gera Ficha acionado");


    //variáveis aqui -------------------------------------

    const titulo = card.getTitulo();
    const subtitulo = card.getSubtitulo();
    const edicao = card.getEdicao();
    const entidade = card.getRespInt();
    const evento = card.getRespInt().evento;
    const autor = card.getPessoa().autor;
    const autorEntrada = card.getPessoa().autorEntrada;
    const organizador = card.getPessoa().organizador;
    const coordenador = card.getPessoa().coordenador;
    const compilador = card.getPessoa().compilador;
    const editor = card.getPessoa().editor;
    const pessoa2 = card.getMaisPessoa().pessoa2;
    const pessoa3 = card.getMaisPessoa().pessoa3; 
    const ilustrador = card.getContribuidor().ilustrador;
    const ilustrador2 = card.getContribuidor().ilustrador2;
    const ilustrador3 = card.getContribuidor().ilustrador3;
    const tradutor = card.getContribuidor().tradutor;
    const tradutor2 = card.getContribuidor().tradutor2;
    const tradutor3 = card.getContribuidor().tradutor3;




    //----------------------------------------------------

    const ficha = `
    ${autorEntrada}${entidade}${evento}
    ${titulo}${subtitulo}${edicao}/${autor}${organizador}${coordenador}${compilador}${editor}${pessoa2}${pessoa3}${entidade}${ilustrador}${ilustrador2}${ilustrador3}${tradutor}${tradutor2}${tradutor3} 
    `;
    
    // Exibir a ficha no HTML
    document.getElementById("ficha_aqui").textContent = ficha;
    document.getElementById("fichaCatalografica").style.display = "block";

    

}