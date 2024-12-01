


// ÁREA DE TÍTULO

export const titulo = localStorage.getItem("titulo");  
    
export let subtitulo = "";
if (document.getElementById("subtitulo").value != "") {
        const sub = localStorage.getItem("subtitulo");
        subtitulo = ': ' + sub;
}

export let edicao = "";
if (document.getElementById("edicao").value != "") {
    const ed = localStorage.getItem("edicao");
    edicao = '. -- ' + ed + ' ed.';
}

//RESPONSABILIDADE INTELECTUAL

// Tipo de responsável

export let entidade = "";
let evento = "";

export const respInt = document.querySelector('input[name="resp-int"]:checked')?.value;

if (respInt === "pessoa") {
    console.log("autor");
    
} else if (respInt === "entidade") {
   entidade = localStorage.getItem("n-entidade");
   console.log("entidade");

} else if (respInt === "evento") {
    console.log("evento");
    evento = localStorage.getItem("n-evento");
    const num = localStorage.getItem("num-evento");
    const ano = localStorage.getItem("ano-evento");
    const local = localStorage.getItem("local-evento");
    evento = evento + " (" + num + ". : " + ano + " : " + local + ")";  
}


// Tipo de pessoa

export let autor = "";
export let autorEntrada = "";
export let organizador = "";
export let coordenador = "";
export let compilador = "";
export let editor = "";

const tipoPessoa = document.querySelector('input[name="t-pessoa"]:checked')?.value;
if (tipoPessoa === "autor") {
    const nome = localStorage.getItem("nome"); 
    const sobrenome = localStorage.getItem("sobrenome");
    autorEntrada = sobrenome + ", " + nome;
    autor = nome + " " + sobrenome;

} else if (tipoPessoa === "organizador") {
    const org = localStorage.getItem("n-organizador");
    organizador = 'organizado por ' + org;

} else if (tipoPessoa === "coordenador") {
    const coord = localStorage.getItem("n-coordenador");
    coordenador = 'coordenado por ' + coord;

} else if (tipoPessoa === "compilador") {
    const comp = localStorage.getItem("n-compilador");
    compilador = 'compilado por ' + comp;

} else if (tipoPessoa === "editor") {
    const ed = localStorage.getItem("n-editor");
    editor = 'editado por ' + ed;
}

const maisPessoa = document.querySelector('input[name="mais-pessoa"]:checked')?.value;
const qtdPessoa = document.querySelector('input[name="qtd-pessoa"]:checked')?.value;
export let pessoa2 = "";
export let pessoa3 = "";

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

//Contribuidores
export let ilustrador = "";
if (document.getElementById("ilustrador").checked) {
    const nIlustrador = localStorage.getItem("n-ilustrador");
    ilustrador = ' ; ilustrado por ' + nIlustrador;
}


const maisIlustrador = document.querySelector('input[name="mais-ilustrador"]:checked')?.value;
const qtdIlustrador = document.querySelector('input[name="qtd-ilustrador"]:checked')?.value;
export let ilustrador2 = "";
export let ilustrador3 = "";

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
 
export let tradutor = "";
if (document.getElementById("tradutor").checked) {
    const nTradutor = localStorage.getItem("n-tradutor");
    tradutor = ' ; traduzido por ' + nTradutor;
}

const maisTradutor = document.querySelector('input[name="mais-tradutor"]:checked')?.value;
const qtdTradutor = document.querySelector('input[name="qtd-tradutor"]:checked')?.value;
export let tradutor2 = "";
export let tradutor3 = "";

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