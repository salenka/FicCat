import * as cs from './cardScript.js';


// AO CARREGAR O A4.HTML

window.onload = function () {

    
        const ficha = JSON.parse(localStorage.getItem('ficha'));
        const codigos = JSON.parse(localStorage.getItem('codigos'));
        const bibliotecario = JSON.parse(localStorage.getItem('bibliotecario'));
        const licenca = localStorage.getItem("licenca");

        const fontSelect = localStorage.getItem("fontSelect");
        const fontSizeInput = localStorage.getItem("fontSizeInput");
 
    

    // Oculta todas as divs de licença
    document.querySelectorAll('#licenca-section-pdf > div').forEach(div => {
        div.style.display = 'none';
    });

    //const licenca = cs.getLicenca().licenca;
  
/*
    // Mostra apenas a div correspondente à licença selecionada
    if (licenca) {
        const selectedDiv = licenca;
        selectedDiv.style.display = 'flex'; // Altera o display para flex
        selectedDiv.style.flexDirection = 'column'; // Define a direção do flex
        selectedDiv.style.alignItems = 'center'; // Centraliza os itens
    
    }
*/

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
    const content = document.getElementById("pagina");

    const options = {
        filename: "ficha-catalográfica",
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
    html2pdf().set(options).from(content).save();

});
