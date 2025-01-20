import * as card from './cardScript.js' ;
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
   

    localStorage.setItem('ficha', JSON.stringify(ficha));
    localStorage.setItem('codigos', JSON.stringify(codigos));

    // Renderização da ficha

    document.getElementById("ficha_aqui").textContent = ficha;
    document.getElementById("codigos_aqui").textContent = codigos

    document.getElementById("fichaCatalografica").style.display = "block";
    document.getElementById("btn_ap").style.display = "block";
    document.getElementById("font-controls").style.display = "block";

    console.log("Exibiu a ficha em index.html")

    // Verificações

    console.log('ficha gerada no HTML (textContent)');
    console.log(document.getElementById("ficha_aqui").textContent);

    /*

    ficha = removeUnwantedInvisibleChars(ficha);

    console.log('ficha gerada no HTML (textContent) sem caracteres invisíveis: ');
    console.log(document.getElementById("ficha_aqui").textContent);

    console.log('ficha salva em localStorage sem caracteres invisíveis: ');
    console.log(JSON.parse(localStorage.getItem('ficha')));

    */

    return { ficha, codigos };
}

    export function geraPDF() {

        const ficha = JSON.parse(localStorage.getItem('ficha'));
        const codigos = JSON.parse(localStorage.getItem('codigos'));
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
    
    
        document.getElementById("ficha_aqui_pdf").textContent = ficha;
        document.getElementById("ficha_aqui_pdf").style.fontFamily = fontSelect;
        document.getElementById("ficha_aqui_pdf").style.fontSize = fontSizeInput + 'px';
    
        document.getElementById("codigos_aqui_pdf").textContent = codigos;
        document.getElementById("codigos_aqui_pdf").style.fontSize = (fontSizeInput - 1) + 'px';
        
        const content = document.getElementById("pagina");

        const options = {
            filename: "ficha_catalografica",
            jsPDF: {
                unit: "mm", 
                orientation: "portrait",
                layout: "portrait",
                format: [298, 210],
                content: {
                align: "center",
                valign: "middle",
              }},
            margin: 0,
            padding: 0,
            height: 297,
            width: 210,
        }
    
        //Gerar PDF
        html2pdf().set(options).from(content).save();

    }
