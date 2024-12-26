import * as card from './card.js' ;
// FORM -----------------------------------------------------------------

//desmarca a opção selecionada de uma div-filha com determinado name
//use na div-mãe

export function uncheckOption(inputName) {
    const target = document.querySelector(`input[name="${inputName}"]:checked`); 
    
    // desmarca a seleção (rádio ou checkbox) que estiver marcada
    if (target) {
        target.checked = false;
    }
    // dispara o evento 'change' nas opções com inputName
    const changeEvent = new Event('change');
    
    document.querySelectorAll(`input[name="${inputName}"]`).forEach(option => {
        if (option) {
        option.dispatchEvent(changeEvent);
       } else {
            console.error(`Elemento ${inputName} não foi encontrado.`);
              }    
    })
}

//apaga input textual do usuário quando ele muda de opção
//use na div-mãe

export function eraseChildText(motherDivId) {
    const divMae = document.getElementById(`${motherDivId}`); 
    const inputsText = divMae.querySelectorAll('input[type="text"]');

    inputsText.forEach(inputText => {
        inputText.value = '';
    })
}

export function updateTipoPessoa() {
    const pessoaSelecionada = document.querySelector('input[name="pessoa-tipo"]:checked')?.value;
    
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

    console.log("salvando" +nome +": " +valor);

    // Salva no localStorage
    localStorage.setItem(nome, valor); 
}








// CARD -----------------------------------------------------------------

export function geraFicha() {
    
	console.log("botão Gera Ficha acionado");  

    //chamada de funções de cada área em Card.js
    const areaTitulo  = card.getTitulo().areaTitulo;
    const areaEdicao = card.getEdicao().areaEdicao;
    const entradaPrincipal = card.getRespInt().entradaPrincipal;
    const areaResponsabilidade = card.getRespInt().areaResponsabilidade;
    const areaPublicacao = card.getPublicacao().areaPublicacao;
    const paginacao = card.getDescricaoFisica().paginacao;
    const imagens = card.getDescricaoFisica().imagens;
    const dimensoes = card.getDescricaoFisica().dimensoes;
    const materialAdicional = card.getDescricaoFisica().materialAdicional;
    const areaSerie = card.getSerie().areaSerie;
    
    //Configuração da ficha catalográfica

    const ficha = `
    ${entradaPrincipal}
    ${areaTitulo}${areaEdicao}${areaResponsabilidade}${areaPublicacao}
    ${paginacao}${imagens}${dimensoes}${materialAdicional}${areaSerie}
    
    `
    
    // Exibição da ficha no HTML
    document.getElementById("ficha_aqui").textContent = ficha;
    document.getElementById("fichaCatalografica").style.display = "block";


}