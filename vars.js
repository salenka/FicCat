//___________________________________________________________________________


//CARD.JS

//document.getElementById("ficcat").addEventListener("submit", function (event) {
    //event.preventDefault(); // Impede o envio do formulário
    
    // Capturando os valores dos campos

    // AREA DO TITULO
    localStorage.setItem('titulo', document.getElementById("titulo").value);
    localStorage.setItem('idade', document.getElementById("subtitulo").value);


// RESPONSABILIDADE INTELECTUAL

    //pessoa
    localStorage.setItem('nome', document.getElementById("nome").value);
    localStorage.setItem('sobrenome', document.getElementById("sobrenome").value);

    localStorage.setItem('nOrganizador', document.getElementById("n-organizador").value);
    localStorage.setItem('nCoordenador', document.getElementById("n-coordenador").value);
    localStorage.setItem('nCompilador', document.getElementById("n-compilador").value);
    localStorage.setItem('nEditor', document.getElementById("n-editor").value);

    // entidade
    localStorage.setItem('nEntidade', document.getElementById("n-entidade").value);

    // evento
    localStorage.setItem('nEvento', document.getElementById("n-evento").value);
    localStorage.setItem('numEvento', document.getElementById("num-evento").value);
    localStorage.setItem('localEvento', document.getElementById("local-evento").value);

    // outra pessoa

    localStorage.setItem('pessoa2', document.getElementById("pessoa2").value);
    localStorage.setItem('pessoa3', document.getElementById("pessoa3").value);

    // contribuidores

    localStorage.setItem('nIlustrador', document.getElementById("n-ilustrador").value);
    localStorage.setItem('nTradutor', document.getElementById("n-tradutor").value);

    localStorage.setItem('ilustrador2', document.getElementById("ilustrador2").value);
    localStorage.setItem('ilustrador3', document.getElementById("ilustrador3").value);

    localStorage.setItem('tradutor2', document.getElementById("tradutor2").value);
    localStorage.setItem('tradutor3', document.getElementById("tradutor3").value);

// ÁREA DE PUBLICAÇÃO

    localStorage.setItem('edicao', document.getElementsById("edicao").value);
    localStorage.setItem('publicador', document.getElementById("publicador").value);
    localStorage.setItem('local', document.getElementById("local").value);

    localStorage.setItem('publicador2', document.getElementById("publicador2").value);
    localStorage.setItem('local2', document.getElementById("local2").value);

// DESCRIÇÃO FÍSICA

    // Paginação

    localStorage.setItem('qtdPagUnica', document.getElementById("qtd-pag-unica").value);
    localStorage.setItem('qtdPagRomana', document.getElementById("qtd-pag-romana").value);
    localStorage.setItem('qtdPagArabica', document.getElementById("qtd-pag-arabica").value);
    localStorage.setItem('qtdPagSemNum', document.getElementById("qtd-pag-sem-num").value);
    localStorage.setItem('qtdPagAusente', document.getElementById("qtd-pag-ausente").value);

    // Formato

    localStorage.setItem('alturaTrad', document.getElementById("trad").value);
    localStorage.setItem('altura', document.getElementById("nao-trad-alt").value);
    localStorage.setItem('largura', document.getElementById("nao-trad-larg").value);
    localStorage.setItem('extensao', document.getElementById("extensao").value);

    // Material adicional

    localStorage.setItem('tipoMaterial', document.getElementById("tipo-material").value);
    localStorage.setItem('qtdMaterial', document.getElementById("qtd-material").value);
    
    localStorage.setItem('tipoMaterial2', document.getElementById("tipo-material-2").value);
    localStorage.setItem('qtdMaterial2', document.getElementById("qtd-material-2").value);

// SÉRIE

    localStorage.setItem('nomeSerie', document.getElementById("nome-serie").value);
    localStorage.setItem('numSerie', document.getElementById("num-serie").value);
    
    localStorage.setItem('nomeSubserie', document.getElementById("nome-bubserie").value);
    localStorage.setItem('numSubserie', document.getElementById("num-subserie").value);

// ÁREA DE NOTAS

    // ISBN

    localStorage.setItem('isbn1', document.getElementById("isbn-1").value);
    localStorage.setItem('qualif1', document.getElementById("qualif-1").value);

    localStorage.setItem('isbn2', document.getElementById("isbn-2").value);
    localStorage.setItem('qualif2', document.getElementById("qualif-2").value);

    // Notas
    localStorage.setItem('nota', document.getElementById("nota").value);

// ASSUNTOS

    localStorage.setItem('assunto1', document.getElementById("assunto-1").value);
    localStorage.setItem('assunto2', document.getElementById("assunto-2").value);
    localStorage.setItem('assunto3', document.getElementById("assunto-3").value);
    localStorage.setItem('assunto4', document.getElementById("assunto-4").value);
    localStorage.setItem('assunto5', document.getElementById("assunto-5").value);


    // Exemplo de formatação do texto
    //const ficha =  `
      //   ${titulo}: ${subtítulo}.
 //   `;

 //}) submit no início de CARD.JS