import * as card from './card.js' ;
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
    
    
    //Configuração da ficha catalográfica

    const ficha = `
    ${entradaPrincipal}
    ${areaTitulo}${areaEdicao}${areaResponsabilidade}${areaPublicacao}
    
    `;
    
    // Exibição da ficha no HTML
    document.getElementById("ficha_aqui").textContent = ficha;
    document.getElementById("fichaCatalografica").style.display = "block";


}