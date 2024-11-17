//const var = document.getElementById("var").value;


document.getElementById("ficcat").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário
    
    // Capturando os valores dos campos

    // AREA DO TITULO
    const titulo = document.getElementById("titulo").value;
    const idade = document.getElementById("subtitulo").value;


// RESPONSABILIDADE INTELECTUAL

    // tipo de responsável selecionado
    function radioSelected(inputName) {
    const selected = document.querySelector(`input[name="${inputName}"]:checked`);
    
    if(selected) {
        valueSelected = selected.value; 
    } else {
        alert('Seleção de radio ${inputName} não encontrado')
    }
}


    //pessoa
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;

    const nOrganizador = document.getElementById("n-organizador").value;
    const nCoordenador = document.getElementById("n-coordenador").value;
    const nCompilador = document.getElementById("n-compilador").value;
    const nEditor = document.getElementById("n-editor").value;

    // entidade
    const nEntidade = document.getElementById("n-entidade").value;

    // evento
    const nEvento = document.getElementById("n-evento").value;
    const numEvento = document.getElementById("num-evento").value;
    const localEvento = document.getElementById("local-evento").value;

    // outra pessoa

    const pessoa2 = document.getElementById("pessoa2").value;
    const pessoa3 = document.getElementById("pessoa3").value;

    // contribuidores

    const nIlustrador = document.getElementById("n-ilustrador").value;
    const nTradutor = document.getElementById("n-tradutor").value;

    const ilustrador2 = document.getElementById("ilustrador2").value;
    const ilustrador3 = document.getElementById("ilustrador3").value;

    const tradutor2 = document.getElementById("tradutor2").value;
    const tradutor3 = document.getElementById("tradutor3").value;

// ÁREA DE PUBLICAÇÃO

    const edicao = document.getElementsById("edicao").value;
    const publicador = document.getElementById("publicador").value;
    const local = document.getElementById("local").value;

    const publicador2 = document.getElementById("publicador2").value;
    const local2 = document.getElementById("local2").value;

// DESCRIÇÃO FÍSICA

    // Paginação

    const qtdPagUnica = document.getElementById("qtd-pag-unica").value;
    const qtdPagRomana = document.getElementById("qtd-pag-romana").value;
    const qtdPagArabica = document.getElementById("qtd-pag-arabica").value;
    const qtdPagSemNum = document.getElementById("qtd-pag-sem-num").value;
    const qtdPagAusente = document.getElementById("qtd-pag-ausente").value;

    // Formato

    const alturaTrad = document.getElementById("trad").value;
    const altura = document.getElementById("nao-trad-alt").value;
    const largura = document.getElementById("nao-trad-larg").value;
    const extensao = document.getElementById("extensao").value;

    // Material adicional

    const tipoMaterial = document.getElementById("tipo-material").value;
    const qtdMaterial = document.getElementById("qtd-material").value;
    
    const tipoMaterial2 = document.getElementById("tipo-material-2").value;
    const qtdMaterial2 = document.getElementById("qtd-material-2").value;

// SÉRIE

    const nomeSerie = document.getElementById("nome-serie").value;
    const numSerie = document.getElementById("num-serie").value;
    
    const nomeSubserie = document.getElementById("nome-bubserie").value;
    const numSubserie = document.getElementById("num-subserie").value;

// ÁREA DE NOTAS

    // ISBN

    const isbn1 = document.getElementById("isbn-1").value;
    const qualif1 = document.getElementById("qualif-1").value;

    const isbn2 = document.getElementById("isbn-2").value;
    const qualif2 = document.getElementById("qualif-2").value;

    // Notas
    const nota = document.getElementById("nota").value;

// ASSUNTOS

    const assunto1 = document.getElementById("assunto-1").value;
    const assunto2 = document.getElementById("assunto-2").value;
    const assunto3 = document.getElementById("assunto-3").value;
    const assunto4 = document.getElementById("assunto-4").value;
    const assunto5 = document.getElementById("assunto-5").value;


    // Exemplo de formatação do texto
    const textoFormatado = `
        Nome: ${nome}
        
        Mensagem: ${mensagem}
    `;

    console.log(textoFormatado); // Teste no console
    gerarPDF(textoFormatado); // Chama a função para criar o PDF
});