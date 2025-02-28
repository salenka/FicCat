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
    document.getElementById("servico-aqui").textContent = servico;
    document.getElementById("bibliotecario-aqui").textContent = bibliotecario;

    // Renderização dos elementos HTML

    document.getElementById("ficha-catalografica-section").style.display = "block";
    document.getElementById("btn-png-wrapper").style.display = "block";
    document.getElementById("opcionais-pdf").style.display = "block";
    document.getElementById("btn-pdf-wrapper").style.display = "block";
    document.getElementById("btn-card-legend-top").style.display = "block";
    document.getElementById("btn-card-legend-bottom").style.display = "block";

    //a remoção dos itens abaixo é para que os últimos salvos não apareçam caso o usuário não acrescente nenhum elemento opcional do pdf

    localStorage.removeItem('licenca');
    localStorage.removeItem('creditos');
    localStorage.removeItem('fontSelect');
    localStorage.removeItem('fontSizeInput');
    localStorage.removeItem('bibliotecario');
    localStorage.removeItem('servico');
}

// GERA PNG

export function geraPNG() {

    // Renderização da ficha
    const ficha = JSON.parse(cs.getFicha().ficha);
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
    document.getElementById("servico-aqui").textContent = servico;
    document.getElementById("bibliotecario-aqui").textContent = bibliotecario;

    // Seleciona a div que você quer capturar
    const content = document.getElementById('ficha-catalografica');

    // Usa html2canvas para capturar a div como um canvas
    html2canvas(content).then(canvas => {
        // Converte o canvas para uma imagem PNG
        const imgData = canvas.toDataURL('image/png');

        // Cria um link para download da imagem
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'ficha-catalografica.png';

        // Simula o clique no link para iniciar o download
        link.click();
    });
}

/* ************************************************************************************
Esta função está indisponível enquanto não resolver o blob de html2pdf em index.html

export function geraPDF() {
// GERA PDF
    // Ocultação de divs
    document.getElementById('card-form').style.display = "none";
    document.getElementById('ficha-catalografica-section').style.display = "none";
    document.getElementById('opcionais-pdf').style.display = "none";
    document.getElementById('pagina-pdf').style.display = "block";

    // Renderização da licença

    // Oculta todas as divs de licença
    document.querySelectorAll('#licenca-section-pdf > div').forEach(div => {
        div.style.display = 'none';
    });

    let licenca = localStorage.getItem("licenca");
    licenca = licenca ? licenca : '';
    if (licenca == 'remove-license') {
        localStorage.removeItem("licenca");
    } else if (licenca) {
        const selectedDiv = document.getElementById(licenca);
        selectedDiv.style.display = 'flex'; // Altera o display para flex
        selectedDiv.style.flexDirection = 'column'; // Define a direção do flex
        selectedDiv.style.alignItems = 'center'; // Centraliza os itens
    } else {
        console.log("Licença não selecionada")
    }

    // Renderização dos créditos

    const creditos = JSON.parse(cs.getCreditos().creditos);
    document.getElementById("creditos-pdf").innerHTML = creditos;

    //Renderização da ficha

    const ficha = JSON.parse(cs.getFicha().ficha);
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
        filename: "ficha-catalografica-section",
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
    }

    //setTimeout(function () {
    html2pdf().set(options).from(content).outputPdf('blob').then((blob) => {
        const url = URL.createObjectURL(blob);
        window.open(url);
    })

    setTimeout(function () {
        //document.getElementById("pagina-pdf").style.display = "none";
        document.getElementById("card-form").style.display = "block";
        document.getElementById('ficha-catalografica-section').style.display = "block";
        document.getElementById("opcionais-pdf").style.display = "block";
    }, 2500);
}
 ************************************************************************************* */

