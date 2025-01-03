import { geraFicha } from './functions.js';

// Chama a função geraPagina ao carregar a página
window.onload = function() {

    const ficha = JSON.parse(localStorage.getItem('ficha'));
    const codigos = JSON.parse(localStorage.getItem('codigos'));
        
    document.getElementById("ficha_aqui").textContent = ficha;
    document.getElementById("codigos_aqui").textContent = codigos;
    /*
    
    const iframe = document.getElementById('card-box');
    const doc = iframe.contentDocument || iframe.contentWindow.document;

    doc.open();
    doc.write(`<p><pre>${ficha}</pre></p>`);
    doc.close();

    */
        
    console.log(ficha);
};