
// ÁREA DE TÍTULO


export function getTitulo() {
    let titulo = document.getElementById("titulo").value;

    let subtitulo = localStorage.getItem("subtitulo");
    subtitulo = subtitulo ? ': ' + subtitulo : "";
    
    let areaTitulo = `${titulo}${subtitulo}`;

    return {areaTitulo}
}

// ÁREA DE EDIÇÃO

export function getEdicao() {   
    let edicao = localStorage.getItem("edicao");
    let areaEdicao = edicao ? '. -- ' + edicao + ' ed.' : "";
    
    return {areaEdicao}
}

//ÁREA DE RESPONSABILIDADE INTELECTUAL

// Tipo de responsável

export function getRespInt() {
    let entidade = "";
    let evento = "";

    const respInt = document.querySelector('input[name="resp-int"]:checked')?.value;

    if (respInt === "pessoa") {
        console.log("radio pessoa selecionado");
        
    } else if (respInt === "entidade") {
        console.log("radio entidade selecionado");
        entidade = localStorage.getItem("n-entidade") || "";

    } else if (respInt === "evento") {
        console.log("radio evento selecionado");
        evento = localStorage.getItem("n-evento");
        const num = localStorage.getItem("num-evento") || "" ;
        const ano = localStorage.getItem("ano-evento") || "" ;
        const local = localStorage.getItem("local-evento") || "" ;
        evento = evento? evento + " (" + num + ". : " + ano + " : " + local + ")" : "" ;
        
    }


// Tipo de pessoa
    let autor = "";
    let autorEntrada = "";
    let organizador = "";
    let coordenador = "";
    let compilador = "";
    let editor = "";

    const tipoPessoa = document.querySelector('input[name="t-pessoa"]:checked')?.value;
    if (tipoPessoa === "autor") {
        const nome = localStorage.getItem("nome") || "" ; 
        const sobrenome = localStorage.getItem("sobrenome") || "" ;
        autorEntrada = sobrenome + ", " + nome;
        autor = nome + " " + sobrenome;

    } else if (tipoPessoa === "organizador") {
        const org = localStorage.getItem("n-organizador") || "" ;
        organizador = 'organizado por ' + org;

    } else if (tipoPessoa === "coordenador") {
        const coord = localStorage.getItem("n-coordenador") || "";
        coordenador = 'coordenado por ' + coord;

    } else if (tipoPessoa === "compilador") {
        const comp = localStorage.getItem("n-compilador") || "" ;
        compilador = 'compilado por ' + comp;

    } else if (tipoPessoa === "editor") {
    const ed = localStorage.getItem("n-editor") || "";
    editor = 'editado por ' + ed;
}

//Mais pessoas com a mesma função
    const maisPessoa = document.querySelector('input[name="mais-pessoa"]:checked')?.value;
    const qtdPessoa = document.querySelector('input[name="qtd-pessoa"]:checked')?.value;
    let pessoa2 = "";
    let pessoa3 = "";

    if (maisPessoa === "sim") {
        if (qtdPessoa === "2") {
            const p2 = localStorage.getItem("pessoa-2");
            pessoa2 = ' e ' + p2;
        } else if (qtdPessoa === "3") {
            const p2 = localStorage.getItem("pessoa-2");
            const p3 = localStorage.getItem("pessoa-3");
            pessoa2 = ', ' + p2;
            pessoa3 = ' e ' + p3;
        } else {
            pessoa2 = " ... [et al.]";
        }
    }

//Contribuidores - Ilustrador
    let ilustrador = "";
    if (document.getElementById("ilustrador").checked) {
        const nIlustrador = localStorage.getItem("n-ilustrador");
        ilustrador = ' ; ilustrado por ' + nIlustrador;
    }

    const maisIlustrador = document.querySelector('input[name="mais-ilustrador"]:checked')?.value;
    const qtdIlustrador = document.querySelector('input[name="qtd-ilustrador"]:checked')?.value;
    let ilustrador2 = "";
    let ilustrador3 = "";

    if (maisIlustrador === "sim") {
        if (qtdIlustrador === "2") {
            ilustrador2 = localStorage.getItem("ilustrador-2");
            ilustrador2 = ' e ' + ilustrador2;
        } else if (qtdIlustrador === "3") {
            ilustrador2 = localStorage.getItem("ilustrador-2");
            ilustrador3 = localStorage.getItem("ilustrador-3");
            ilustrador2 = ', ' + ilustrador2;
            ilustrador3 = ' e ' + ilustrador3;
        } else {
            ilustrador2 = " ... [et al.]";
        }
    }

//Contribuidores - Tradutor  
    let tradutor = "";
    if (document.getElementById("tradutor").checked) {
        const nTradutor = localStorage.getItem("n-tradutor");
        tradutor = ' ; traduzido por ' + nTradutor;
    }

    const maisTradutor = document.querySelector('input[name="mais-tradutor"]:checked')?.value;
    const qtdTradutor = document.querySelector('input[name="qtd-tradutor"]:checked')?.value;
    let tradutor2 = "";
    let tradutor3 = "";

    if (maisTradutor === "sim") {
        if (qtdTradutor === "2") {
            tradutor2 = localStorage.getItem("tradutor-2");
            tradutor2 = ' e ' + tradutor2;
        } else if (qtdTradutor === "3") {
            tradutor2 = localStorage.getItem("tradutor-2");
            tradutor3 = localStorage.getItem("tradutor-3");
            tradutor2 = ', ' + tradutor2;
            tradutor3 = ' e ' + tradutor3;
        } else {
            tradutor2 = " ... [et al.]";
        }
    }

//Saída da função getRespInt

    const entradaPrincipal = `${autorEntrada}${entidade}${evento}`;    
    const areaResponsabilidade = ` / ${entidade}${autor}${organizador}${coordenador}${compilador}${editor}${pessoa2}${pessoa3}${ilustrador}${ilustrador2}${ilustrador3}${tradutor}${tradutor2}${tradutor3}`;
        
    return {entradaPrincipal, areaResponsabilidade}
}


// ÁREA DE PUBLICAÇÃO

export function getPublicacao() {

    let publicador = localStorage.getItem("publicador");
    publicador = publicador? ': ' + publicador : ': [s.n.]';
    
    let local = localStorage.getItem("local");
    local = local? '. - ' + local : ". - [S.l.]";

    let ano = localStorage.getItem("ano");
    ano = ano? ', ' + ano + '.' : ', [s.d.].'; 

    const areaPublicacao = `${local}${publicador}${ano}`;
   
    return {areaPublicacao}
    
} 
