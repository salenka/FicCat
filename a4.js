import * as cs from './cardScript.js';


// AO CARREGAR O A4.HTML

window.onload = function () {


    const ficha = JSON.parse(localStorage.getItem('ficha'));
    const codigos = JSON.parse(localStorage.getItem('codigos'));
    console.log("codigos salvo em localStorage")
    console.log(codigos)

    const bibliotecario = JSON.parse(localStorage.getItem('bibliotecario'));
    const fontSelect = localStorage.getItem("fontSelect");
    const fontSizeInput = localStorage.getItem("fontSizeInput");

//Renderização da licença

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
    
    // Rnderização dos créditos

    const creditos = JSON.parse(localStorage.getItem('creditos'));
    
    document.getElementById("creditos-pdf").innerHTML = creditos;

    //Renderização da ficha

    document.getElementById("ficha-aqui-pdf").textContent = ficha;
    document.getElementById("ficha-aqui-pdf").style.fontFamily = fontSelect;
    document.getElementById("ficha-aqui-pdf").style.fontSize = fontSizeInput + 'px';
    document.getElementById("codigos-aqui-pdf").textContent = codigos;
    document.getElementById("codigos-aqui-pdf").style.fontSize = (fontSizeInput - 1) + 'px';
    document.getElementById("bibliotecario-aqui-pdf").textContent = bibliotecario;

};

// BOTÃO GERAR PDF

const btnGerarPDF = document.getElementById("btn-pdf-A4");

btnGerarPDF.addEventListener("click", function () {
    const content = document.getElementById("pagina-pdf");

    const options = {
        filename: "ficha-catalografica",
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
        margin: 0, //[5, 0, 0, 0], // [topo, direita, base, esquerda] no form
        padding: 0, //sem no form
        height: 297, //sem no form
        width: 210, //sem no form
    }

    //Gerar PDF
    //html2pdf().set(options).from(content).save(); // download do pdf

    html2pdf().set(options).from(content).outputPdf('blob').then((blob) => {
        const url = URL.createObjectURL(blob);
        window.open(url);
    }) //abre pdf em outra guia

});
