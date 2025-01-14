
// Chama a função geraPagina ao carregar a página
window.onload = function() {

    const ficha = JSON.parse(localStorage.getItem('ficha'));
    const codigos = JSON.parse(localStorage.getItem('codigos'));
    const licenca = localStorage.getItem("licenca");
    

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
    document.getElementById("codigos_aqui").textContent = codigos;

    console.log(`licença salva no localStorage: ${licenca}`)
        
    console.log(`ficha salva no localStorage: ${codigos}`);

    console.log(`códigos salvos no localStorage: ${ficha}`);
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
            format: [257, 170],
            content: {
            align: "center",
            valign: "middle",
          }},
        margin: 0,
        padding: 0,
        height: 257,
        width: 170,
    }

    //Gerar PDF
    html2pdf().set(options).from(content).save();

});
