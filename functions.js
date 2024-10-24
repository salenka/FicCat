export function uncheckRadio(radioName) {
    const radioTarget = document.querySelector(`input[name="${radioName}"]:checked`); 
    
    // desmarca o radio que estiver marcado
    if (radioTarget) {
        radioTarget.checked = false;
    }
    // dispara o evento 'change' nas opções com radioName
    const changeEvent = new Event('change');
    
    document.querySelectorAll(`input[name="${radioName}`).forEach(radio => {
        if (radio) {
        radio.dispatchEvent(changeEvent);
       } else {
            console.error(`Elemento ${radioName} não foi encontrado.`);
              }
    
    })
}

export function updateTipoPessoa() {
    const pessoaSelecionada = document.querySelector('input[name="t-pessoa"]:checked').value;
    
        // Atualiza todos os spans com a classe 'span-tipo-pessoa' com o valor selecionado
        const spans = document.querySelectorAll('.span-tipo-pessoa');
        spans.forEach(span => {
            span.textContent = pessoaSelecionada;
        });
}

