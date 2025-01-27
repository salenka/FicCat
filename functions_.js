import * as card from './cardScript.js';
// FORM -----------------------------------------------------------------

//UNCHECK OPTION

// ERASE CHILD

// SAVE DATA
// Saves form's text input in localStorage
export function saveData(event) {
    const campo = event.target; // Campo que disparou o evento
    const valor = campo.value; // Valor do campo
    const nome = campo.name; // Nome do campo (usado como chave no localStorage)

    console.log("salvando" + nome + ": " + valor);

    // Salva no localStorage
    localStorage.setItem(nome, valor);
}


// CARD -----------------------------------------------------------------

export function geracard() {

    console.log("botão Gerar Ficha acionado");

    //chamada de funções de cada área em Card.js

    const areaTitulo = card.getTitulo().areaTitulo;
    const areaEdicao = card.getEdicao().areaEdicao;
    const entradaPrincipal = card.getRespInt().entradaPrincipal;
    const areaResponsabilidade = card.getRespInt().areaResponsabilidade;
    const areaPublicacao = card.getPublicacao().areaPublicacao;
    const paginacao = card.getDescricaoFisica().paginacao;
    const imagens = card.getDescricaoFisica().imagens;
    const dimensoes = card.getDescricaoFisica().dimensoes;
    const materialAdicional = card.getDescricaoFisica().materialAdicional;
    const areaSerie = card.getSerie().areaSerie;
    const isbn = card.getISBN().ISBN;
    const nota1 = card.getNota().nota1;
    const nota2 = card.getNota().nota2;
    const assuntos = card.getAssunto().assuntos;
    const cdd = card.getCodigo().cdd;
    const cdu = card.getCodigo().cdu;
    const cutter = card.getCodigo().cutter;
    const pha = card.getCodigo().pha;


    const classificacao = `
    ${cdd}
    ${cdu}
    `
    const notacao = `
    ${cutter}
    ${pha}
    `
    const codes = `\n${cdd} ${cdu} ${cutter} ${pha}`

    //Configuração da card catalográfica

    let card = `${entradaPrincipal}
    ${areaTitulo}${areaEdicao}${areaResponsabilidade}${areaPublicacao}
    ${paginacao}${imagens}${dimensoes}${materialAdicional}${areaSerie}
    ${nota1}${nota2}${isbn}
    ${assuntos}
    `
    // Ajustes finais
    card = card.replace('.. -- ', ' . -- ') // Elimina ponto final que é seguido de marcador de nova seção
    card = card.replace('il..', 'il.') // Elimina ponto final da área de série após abreviação il.
    card = card.replace('p..', 'p.') // Elimina ponto final da área de série após abreviação p.
    card = card.replace('color..', 'color.') // Elimina de ponto final da área de série após abreviação color.

    // Salva card no localStorage (para recuperação por a4.js)

    localStorage.setItem('card', JSON.stringify(card));
    console.log("card salva no localStorage:");
    console.log(JSON.parse(localStorage.getItem('card')));

    localStorage.setItem('card', JSON.stringify(card));
    localStorage.setItem('codigos', JSON.stringify(codigos));

    // Renderização da card

    document.getElementById("card-here").textContent = card;
    document.getElementById("codigos-here").textContent = codigos;

    document.getElementById("catalogingCard").style.display = "block";
    document.getElementById("btn-pdf").style.display = "block";
    document.getElementById("font-controls").style.display = "block";

    console.log("Exibiu a card em index.html")

    // Verificações

    console.log('card gerada no HTML (textContent)');
    console.log(document.getElementById("card-here").textContent);

    /*

    card = removeUnwantedInvisibleChars(card);

    console.log('card gerada no HTML (textContent) sem caracteres invisíveis: ');
    console.log(document.getElementById("card-here").textContent);

    console.log('card salva em localStorage sem caracteres invisíveis: ');
    console.log(JSON.parse(localStorage.getItem('card')));

    */

    return { card, codes };
}

export function geraPDF() {

    document.getElementById("page").style.display = "block";

    const card = JSON.parse(localStorage.getItem('card'));
    const codes = JSON.parse(localStorage.getItem('codes'));
    const licenca = localStorage.getItem("licenca");
    const fontSelect = localStorage.getItem("fontSelect");
    const fontSizeInput = localStorage.getItem("fontSizeInput");


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

    document.getElementById("card-here-pdf").textContent = card;
    document.getElementById("card-here-pdf").style.fontFamily = fontSelect;
    document.getElementById("card-here-pdf").style.fontSize = fontSizeInput + 'px';

    document.getElementById("codes-here-pdf").textContent = codes;
    document.getElementById("codes-here-pdf").style.fontSize = (fontSizeInput - 1) + 'px';

    const content = document.getElementById("page");
    //const content = document.body;

    const options = {
        filename: "cataloging-card",
        //scrollX: 0, sem no ficcat2
        //scrollY: 0, sem no ficcat2
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
        //margin: 0,
        //padding: 0,
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


}
