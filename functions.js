
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

/*export function radioIsChecked(inputName){

    const radios = document.querySelectorAll(`input[name="${inputName}"]`);
    let algumSelecionado = false;

    radios.forEach((radio) => {
      if (radio.checked) {
        algumSelecionado = true;
      }
    });

        if (!algumSelecionado) {

            const myevent = new Event('event');
        myevent.preventDefault(); // Impede o envio do formulário
                
        // Crie um novo elemento de erro
                const mensagemErro = document.createElement("span");
                mensagemErro.id = "mensagemErro";
                mensagemErro.style.color = "red";
                mensagemErro.textContent = "Por favor, selecione ao menos uma opção.";

                // Insira a mensagem de erro na div de opções
                const divPai = radios[0].closest("div");
                divPai.appendChild(mensagemErro);
        }
}*/

// CARD -----------------------------------------------------------------

// Função para salvar automaticamente os dados no localStorage
export function saveData(event) {
    const campo = event.target; // Campo que disparou o evento
    const valor = campo.value; // Valor do campo
    const nome = campo.name; // Nome do campo (usado como chave no localStorage)

    // Salva no localStorage
    localStorage.setItem(nome, valor); 
}

export function geraFicha() {
    
	alert("botão Gera Ficha acionado");

    const script = document.createElement("script");
    script.src = "./card.js"; // Caminho do script
    script.type = "text/javascript"; // Tipo do script (opcional)
    //script.async = true; // Carregar de forma assíncrona (opcional)

    // Evento de sucesso no carregamento
    script.onload = () => {
        console.log("Script carregado com sucesso!");
        // Aqui você pode usar funções do script carregado
    };

    // Evento de erro no carregamento
    script.onerror = () => {
        console.error("Erro ao carregar o script.");
    };

    // Adiciona o elemento <script> ao <head> ou <body>
    document.head.appendChild(script);
}