import * as cs from './cardScript.js';
// FORM -----------------------------------------------------------------

// UNCHECK OPTIONS

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

// ERASE TEXT INPUTS

export function eraseChildText(motherDivId) {
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

    /*
    //chamada de funções de cada área em cs.js
    const areaTitulo = cs.getTitulo().areaTitulo;
    const areaEdicao = cs.getEdicao().areaEdicao;
    const entradaPrincipal = cs.getRespInt().entradaPrincipal;
    const areaResponsabilidade = cs.getRespInt().areaResponsabilidade;
    const areaPublicacao = cs.getPublicacao().areaPublicacao;
    const paginacao = cs.getDescricaoFisica().paginacao;
    const imagens = cs.getDescricaoFisica().imagens;
    const dimensoes = cs.getDescricaoFisica().dimensoes;
    const materialAdicional = cs.getDescricaoFisica().materialAdicional;
    const areaSerie = cs.getSerie().areaSerie;
    const isbn = cs.getISBN().ISBN;
    const nota1 = cs.getNota().nota1;
    const nota2 = cs.getNota().nota2;
    const assuntos = cs.getAssunto().assuntos;
    const codigos = cs.getCodigo().codigos;
    const bibliotecario = cs.getBibliotecario().bibliotecario;

    //Configuração da ficha catalográfica
    let ficha = `${entradaPrincipal}
    ${areaTitulo}${areaEdicao}${areaResponsabilidade}${areaPublicacao}
    ${paginacao}${imagens}${dimensoes}${materialAdicional}${areaSerie}
    ${nota1}${nota2}${isbn}
    ${assuntos}
    `
    // Ajustes finais da ficha
    ficha = ficha.replace('.. -- ', ' . -- ') // Elimina ponto final que é seguido de marcador de nova seção
    ficha = ficha.replace('il..', 'il.') // Elimina ponto final da área de série após abreviação il.
    ficha = ficha.replace('p..', 'p.') // Elimina ponto final da área de série após abreviação p.
    ficha = ficha.replace('color..', 'color.') // Elimina de ponto final da área de série após abreviação color.

    // Salva ficha no localStorage (para recuperação por a4.js)
    localStorage.setItem('ficha', JSON.stringify(ficha));
    localStorage.setItem('codigos', JSON.stringify(codigos));

    */

    // Captura das variáveis de cardScript.js
    const ficha = JSON.parse(cs.getFicha().ficha);

    const msg = `Ficha parseada: ${ficha}`

    console.log(msg);

    const codigos = JSON.parse(cs.getCodigos().codigos);
    const bibliotecario = JSON.parse(cs.getBibliotecario().bibliotecario);

    // Renderização da ficha
    document.getElementById("ficha-aqui").textContent = ficha;
    document.getElementById("codigos-aqui").textContent = codigos;

    // Identificação do bibliotecário
    document.getElementById("bibliotecario-aqui").textContent = bibliotecario;

    // Renderização dos elementos no HTML
    document.getElementById("ficha-catalografica").style.display = "block";
    document.getElementById("font-controls").style.display = "block";
    document.getElementById("opcionais-pdf").style.display = "block";
    document.getElementById("btn-pdf").style.display = "block";

    //return { ficha, codigos };
}


// GERA PDF

export function geraPDF() {

    // OCULTAÇÃO DE DIVS
    document.getElementById('card-form').style.display = "none";
    document.getElementById('ficha-catalografica').style.display = "none";
    document.getElementById('opcionais-pdf').style.display = "none";
    document.getElementById('pagina-pdf').style.display = "block";

    // RENDERIZAÇÃO DA LICENÇA

    const licenca = localStorage.getItem("licenca");
    
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

    // RENDERIZAÇÃO DOS CRÉDITOS

    const creditos = `${document.getElementById("creditos").value}`;
    document.getElementById("creditos-pdf").innerHTML = creditos;

    //RENDERIZAÇÃO DA FICHA

    const ficha = JSON.parse(localStorage.getItem('ficha'));
    const codigos = JSON.parse(cs.getCodigos().codigos);
    const fontSelect = localStorage.getItem("fontSelect");
    const fontSizeInput = localStorage.getItem("fontSizeInput");
    const bibliotecario = cs.getBibliotecario().bibliotecario;

    document.getElementById("ficha-aqui-pdf").textContent = ficha;
    document.getElementById("ficha-aqui-pdf").style.fontFamily = fontSelect;
    document.getElementById("ficha-aqui-pdf").style.fontSize = fontSizeInput + 'px';
    document.getElementById("codigos-aqui-pdf").textContent = codigos;
    document.getElementById("codigos-aqui-pdf").style.fontSize = (fontSizeInput - 1) + 'px';
    document.getElementById("bibliotecario-aqui-pdf").textContent = bibliotecario;


    // IMPRESSÃO DO PDF
    const content = document.getElementById("pagina-pdf");

    const options = {
        filename: "ficha-catalografica",
        scrollX: 0, //sem no ficcat2
        scrollY: 0, //sem no ficcat2
        scale: 1,
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
    
    setTimeout(function () {
        html2pdf().set(options).from(content).outputPdf('blob').then((blob) => {
            const url = URL.createObjectURL(blob);
            window.open(url);

            //versão do código que faz downloado do pdf ao invés de abrir:
            //const link = document.createElement('a');
            //link.href = URL.createObjectURL(blob);
            //link.download = 'documento.pdf';
            //link.click();
        })
    }, 2500);

    setTimeout(function () {
        //document.getElementById("pagina-pdf").style.display = "none";
        document.getElementById("card-form").style.display = "block";
        document.getElementById('ficha-catalografica').style.display = "block";
        document.getElementById("opcionais-pdf").style.display = "block";
    }, 2000);
}
