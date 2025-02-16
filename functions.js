import * as cs from './cardScript.js';
// FORM -----------------------------------------------------------------

//  DESMARCA RADIO OU CHECKBOX

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

// APAGA CONTEÚDO DOS CAMPOS

export function eraseAllChildTextOf(motherDivId) {
    const divMae = document.getElementById(`${motherDivId}`);
    const inputsText = divMae.querySelectorAll('input[type="text"]');

    inputsText.forEach(inputText => {
        inputText.value = '';
    })
}

// UPDATE TIPO DE PESSOA (2ª E 3ª PESSOA)

export function updateTipoPessoa() {
    const pessoaSelecionada = document.querySelector('input[name="pessoa-tipo"]:checked')?.value;

    // Atualiza todos os spans com a classe 'span-tipo-pessoa' com o valor selecionado
    const spans = document.querySelectorAll('.span-tipo-pessoa');
    spans.forEach(span => {
        span.textContent = pessoaSelecionada;
    });
}

// TORNA RADIO OU CHECKBOX OBRIGATÓRIO

export function setRequiredRadioFor(inputName) {
    const target = document.querySelectorAll(`input[type="radio"][name="${inputName}"]`);
    target.forEach(option => {
        option.setAttribute('required', 'required');
    })
}

// REMOVER OBRIGATORIEDADE DE CHECKBOX

export function removeRequiredRadioFrom(inputName) {
    const target = document.querySelectorAll(`input[type="radio"][name="${inputName}"]`);
    target.forEach(option => {
        option.removeAttribute('required', 'required');
    })    
}

// REMOVE OBRIGATORIEDADE DOS INPUTS

export function removeRequiredFromAllChildTextOf(motherDivId) {
    motherDivId = document.getElementById(`${motherDivId}`);
    const inputs = motherDivId.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        input.removeAttribute('required', 'required');
    })
}

// Função para salvar automaticamente os dados no localStorage
export function saveData(event) {
    const campo = event.target; // Campo que disparou o evento
    const valor = campo.value; // Valor do campo
    const nome = campo.name; // Nome do campo (usado como chave no localStorage)

    console.log("salvando" + nome + ": " + valor);

    // Salva no localStorage
    localStorage.setItem(nome, valor);
}




// GERA FICHA -----------------------------------------------------------------

export function geraFicha() {

    console.log("botão Gerar Ficha acionado");

    // Captura das variáveis de cardScript.js
    const ficha = JSON.parse(cs.getFicha().ficha);
    const codigos = JSON.parse(cs.getCodigos().codigos);
    const servico = cs.getServico().servico;
    const bibliotecario = cs.getBibliotecario().bibliotecario;

    // Renderização da ficha
    document.getElementById("ficha-aqui").textContent = ficha;
    document.getElementById("codigos-aqui").textContent = codigos;  

    // Renderização dos elementos HTML
    document.getElementById("ficha-catalografica").style.display = "block";
    document.getElementById("font-controls").style.display = "block";
    document.getElementById("opcionais-pdf").style.display = "block";
    document.getElementById("btn-pdf").style.display = "block";

    //a remoção dos itens abaixo é para que os últimos salvos não apareçam caso o usuário não acrescente nenhum elemento opcional do pdf

    localStorage.removeItem('licenca');
    localStorage.removeItem('creditos');
    localStorage.removeItem('fontSelect');
    localStorage.removeItem('fontSizeInput');
    localStorage.removeItem('bibliotecario');
    localStorage.removeItem('servico');
}


// GERA PDF

export function geraPDF() {

    // Ocultação de divs
    document.getElementById('card-form').style.display = "none";
    document.getElementById('ficha-catalografica').style.display = "none";
    document.getElementById('opcionais-pdf').style.display = "none";
    document.getElementById('pagina-pdf').style.display = "block";

    // Renderização da licença

    const licenca = localStorage.getItem("licenca"); //mudar para cs.get
    //const licenca = cs.getLicenca().licenca;

    // Oculta todas as divs de licença
    document.querySelectorAll('#licenca-section-pdf > div').forEach(div => {
        div.style.display = 'none';
    });

    // Mostra apenas a div correspondente à licença selecionada
    if (licenca) {
        const selectedDiv = document.getElementById(licenca);
        selectedDiv.style.display = 'flex'; // Altera o display para flex
        selectedDiv.style.flexDirection = 'column'; // Define a direção do flex
        selectedDiv.style.alignItems = 'center'; // Centraliza os itens
    }

    // Rnderização dos créditos

    const creditos = JSON.parse(cs.getCreditos().creditos);
    document.getElementById("creditos-pdf").innerHTML = creditos;

    //Renderização da ficha

    const ficha = JSON.parse(localStorage.getItem('ficha')); //mudar para cs.get
    const codigos = JSON.parse(cs.getCodigos().codigos);
    const fontSelect = localStorage.getItem("fontSelect");
    const fontSizeInput = localStorage.getItem("fontSizeInput");
    const servico = cs.getServico().servico;
    const bibliotecario = cs.getBibliotecario().bibliotecario;

    document.getElementById("ficha-aqui-pdf").textContent = ficha;
    document.getElementById("ficha-aqui-pdf").style.fontFamily = fontSelect;
    document.getElementById("ficha-aqui-pdf").style.fontSize = fontSizeInput + 'px';
    document.getElementById("codigos-aqui-pdf").textContent = codigos;
    document.getElementById("codigos-aqui-pdf").style.fontSize = (fontSizeInput - 1) + 'px';
    document.getElementById("servico-aqui-pdf").textContent = servico;
    document.getElementById("bibliotecario-aqui-pdf").textContent = bibliotecario;


    // Impressão do PDF
    const content = document.getElementById("pagina-pdf");

    const options = {
        filename: "ficha-catalografica",
        scrollX: 0, //sem no A4.html
        scrollY: 0, //sem no A4.html
        scale: 1,  // sem no A4.html
        jsPDF: {
            unit: "mm",
            orientation: "portrait",
            layout: "portrait",
            format: [298, 210],
            content: {
                align: "center",
                valign: "middle",
            }
        },
        margin: [5, 0, 0, 0], // [topo, direita, base, esquerda]
        //padding: 10,
        //height: 297, 
        //width: 210, 
    }

    //setTimeout(function () {
    html2pdf().set(options).from(content).outputPdf('blob').then((blob) => {
        const url = URL.createObjectURL(blob);
        window.open(url);

        //versão do código que faz downloado do pdf ao invés de abrir:
        //const link = document.createElement('a');
        //link.href = URL.createObjectURL(blob);
        //link.download = 'documento.pdf';
        //link.click();
    })
    //}, 3000);

    setTimeout(function () {
        //document.getElementById("pagina-pdf").style.display = "none";
        document.getElementById("card-form").style.display = "block";
        document.getElementById('ficha-catalografica').style.display = "block";
        document.getElementById("opcionais-pdf").style.display = "block";
    }, 2500);
}
