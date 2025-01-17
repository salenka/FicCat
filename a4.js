// Chama a função geraPagina ao carregar a página
window.onload = function() {

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


    document.getElementById("ficha_aqui").textContent = ficha;
    document.getElementById("ficha_aqui").style.fontFamily = fontSelect;
    document.getElementById("ficha_aqui").style.fontSize = fontSizeInput + 'px';

    document.getElementById("codigos_aqui").textContent = codigos;
    document.getElementById("codigos_aqui").style.fontSize = (fontSizeInput - 1) + 'px';
    
    console.log(`licença salva no localStorage: ${licenca}`)
        
    console.log(`ficha salva no localStorage: ${ficha}`);

    console.log(`códigos salvos no localStorage: ${codigos}`);
};

const btnGerarPDF = document.getElementById("btnGerarPDF");

btnGerarPDF.addEventListener("click", function() {
    const content = document.getElementById("pagina");

    const options = {
        filename: "ficha-catalográfica",
        jsPDF: {
            unit: "mm", 
            orientation: "portrait",
            layout: "portrait",
            format: [297, 210],
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

});
