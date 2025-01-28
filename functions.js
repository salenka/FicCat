import * as cs from './cardScript.js';
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
    const cdd = cs.getCodigo().cdd;
    const cdu = cs.getCodigo().cdu;
    const cutter = cs.getCodigo().cutter;
    const pha = cs.getCodigo().pha;
    const bibliotecario = cs.getBibliotecario().bibliotecario;


    const classificacao = `
    ${cdd}
    ${cdu}
    `
    const notacao = `
    ${cutter}
    ${pha}
    `
    const codigos = `\n${cdd} ${cdu} ${cutter} ${pha}`

    //Configuração da ficha catalográfica

    let ficha = `${entradaPrincipal}
    ${areaTitulo}${areaEdicao}${areaResponsabilidade}${areaPublicacao}
    ${paginacao}${imagens}${dimensoes}${materialAdicional}${areaSerie}
    ${nota1}${nota2}${isbn}
    ${assuntos}
    `
    // Ajustes finais
    ficha = ficha.replace('.. -- ', ' . -- ') // Elimina ponto final que é seguido de marcador de nova seção
    ficha = ficha.replace('il..', 'il.') // Elimina ponto final da área de série após abreviação il.
    ficha = ficha.replace('p..', 'p.') // Elimina ponto final da área de série após abreviação p.
    ficha = ficha.replace('color..', 'color.') // Elimina de ponto final da área de série após abreviação color.

    // Salva ficha no localStorage (para recuperação por a4.js)

    localStorage.setItem('ficha', JSON.stringify(ficha));
    console.log("Ficha salva no localStorage:");
    console.log(JSON.parse(localStorage.getItem('ficha')));


    localStorage.setItem('codigos', JSON.stringify(codigos));


    // Renderização da ficha

    document.getElementById("ficha-aqui").textContent = ficha;
    document.getElementById("codigos-aqui").textContent = codigos;

    document.getElementById("ficha-catalografica").style.display = "block";
    document.getElementById("btn-pdf").style.display = "block";
    document.getElementById("font-controls").style.display = "block";

    // Identificação do bibliotecário
    
    document.getElementById("bibliotecario-aqui").textContent = bibliotecario;




    return { ficha, codigos };
}


// GERA PDF

export function geraPDF() {

    document.getElementById('card-form').style.display = "none";
    document.getElementById("pagina-impressao").style.display = "block";


    const ficha = JSON.parse(localStorage.getItem('ficha'));
    const codigos = JSON.parse(localStorage.getItem('codigos'));
    const licenca = localStorage.getItem("licenca");
    const fontSelect = localStorage.getItem("fontSelect");
    const fontSizeInput = localStorage.getItem("fontSizeInput");
    const bibliotecario = cs.getBibliotecario().bibliotecario;

    // Oculta todas as divs de licença previamente habilitadas
    document.querySelectorAll('#licenca > div').forEach(div => {
        div.style.display = 'none';
    });

    switch (licenca) {
        case "by":
            document.getElementById("by").style.display = 'block';
            break;
        case "by-sa":
            document.getElementById("by-sa").style.display = 'block';
            break;
        case "by-nd":
            document.getElementById("by-nd").style.display = 'block';
            break;
        case "by-nc":
            document.getElementById("by-nc").style.display = 'block';
            break;
        case "by-nc-sa":
            document.getElementById("by-nc-sa").style.display = 'block';
            break;
        case "by-nc-nd":
            document.getElementById("by-nc-nd").style.display = 'block';
            break;
        case "cc-0":
            document.getElementById("cc-0").style.display = 'block';
            break;
        default:
            console.log("Licença não selecionada")

    }

    document.getElementById("ficha-aqui-pdf").textContent = ficha;
    document.getElementById("ficha-aqui-pdf").style.fontFamily = fontSelect;
    document.getElementById("ficha-aqui-pdf").style.fontSize = fontSizeInput + 'px';

    document.getElementById("codigos-aqui-pdf").textContent = codigos;
    document.getElementById("codigos-aqui-pdf").style.fontSize = (fontSizeInput - 1) + 'px';

    document.getElementById("bibliotecario-aqui-pdf").textContent = bibliotecario;

    const content = document.getElementById("pagina-impressao");
    //const content = document.body;

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

    //Comando para gerar o PDF
    html2pdf().set(options).from(content).outputPdf('blob').then((blob) => {
        const url = URL.createObjectURL(blob);
        window.open(url);

        //versão do código que faz downloado do pdf ao invés de abrir:
        //const link = document.createElement('a');
        //link.href = URL.createObjectURL(blob);
        //link.download = 'documento.pdf';
        //link.click();
    })

    setTimeout(function () {
        document.getElementById("pagina-impressao").style.display = "none";
        document.getElementById("card-form").style.display = "block";
    }, 2000);
}
