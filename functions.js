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


