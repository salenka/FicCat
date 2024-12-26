
// ÁREA DE TÍTULO


export function getTitulo() {
    let titulo = document.getElementById("titulo").value;

    let subtitulo = document.getElementById("subtitulo").value;
    subtitulo = subtitulo ? ': ' + subtitulo : "";
    
    let areaTitulo = `${titulo}${subtitulo}`;

    return {areaTitulo}
}

// ÁREA DE EDIÇÃO

export function getEdicao() {   
    let edicao = document.getElementById("edicao").value;
    let areaEdicao = edicao ? '. -- ' + edicao + ' ed' : "";
    
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
        entidade = document.getElementById("entidade-nome").value || "";

    } else if (respInt === "evento") {
        console.log("radio evento selecionado");
        evento = document.getElementById("evento-nome").value;
        const num = document.getElementById("evento-numero").value || "" ;
        const ano = document.getElementById("evento-ano").value || "" ;
        const local = document.getElementById("evento-local").value || "" ;
        evento = evento? evento + " (" + num + ". : " + ano + " : " + local + ")" : "" ;
        
    }


// Tipo de pessoa
    let autor = "";
    let autorEntrada = "";
    let organizador = "";
    let coordenador = "";
    let compilador = "";
    let editor = "";

    const tipoPessoa = document.querySelector('input[name="pessoa-tipo"]:checked')?.value;
    if (tipoPessoa === "autor") {
        const nome = document.getElementById("nome").value || "" ; 
        const sobrenome = document.getElementById("sobrenome").value || "" ;
        autorEntrada = sobrenome + ", " + nome;
        autor = nome + " " + sobrenome;

    } else if (tipoPessoa === "organizador") {
        const org = document.getElementById("organizador-nome").value || "" ;
        organizador = 'organizado por ' + org;

    } else if (tipoPessoa === "coordenador") {
        const coord = document.getElementById("coordenador-nome").value || "";
        coordenador = 'coordenado por ' + coord;

    } else if (tipoPessoa === "compilador") {
        const comp = document.getElementById("compilador-nome").value || "" ;
        compilador = 'compilado por ' + comp;

    } else if (tipoPessoa === "editor") {
    const ed = document.getElementById("editor-nome").value || "";
    editor = 'editado por ' + ed;
}

//Mais pessoas com a mesma função
    const maisPessoa = document.querySelector('input[name="pessoa-mais"]:checked')?.value;
    const qtdPessoa = document.querySelector('input[name="pessoa-qtd"]:checked')?.value;
    let pessoa2 = "";
    let pessoa3 = "";
    let pessoa4 = "";

    if (maisPessoa === "sim") {
        if (qtdPessoa === "2") {
            const p2 = document.getElementById("pessoa-2").value;
            pessoa2 = ' e ' + p2;
        } else if (qtdPessoa === "3") {
            const p2 = document.getElementById("pessoa-2").value;
            const p3 = document.getElementById("pessoa-3").value;
            pessoa2 = ', ' + p2;
            pessoa3 = ' e ' + p3;
        } else if (qtdPessoa === "4") {
            pessoa2 = " ... [et al.]";
        }
    }

//Contribuidores - Ilustrador
    let ilustrador = "";
    if (document.getElementById("ilustrador").checked) {
        const nIlustrador = document.getElementById("ilustrador-nome").value;
        ilustrador = ' ; ilustrado por ' + nIlustrador;
    }

    const maisIlustrador = document.querySelector('input[name="ilustrador-mais"]:checked')?.value;
    const qtdIlustrador = document.querySelector('input[name="ilustrador-qtd"]:checked')?.value;
    let ilustrador2 = "";
    let ilustrador3 = "";

    if (maisIlustrador === "sim") {
        if (qtdIlustrador === "2") {
            ilustrador2 = document.getElementById("ilustrador-2").value;
            ilustrador2 = ' e ' + ilustrador2;
        } else if (qtdIlustrador === "3") {
            ilustrador2 = document.getElementById("ilustrador-2").value;
            ilustrador3 = document.getElementById("ilustrador-3").value;
            ilustrador2 = ', ' + ilustrador2;
            ilustrador3 = ' e ' + ilustrador3;
        } else {
            ilustrador2 = " ... [et al.]";
        }
    }

//Contribuidores - Tradutor  
    let tradutor = "";
    if (document.getElementById("tradutor").checked) {
        const nTradutor = document.getElementById("tradutor-nome").value;
        tradutor = ' ; traduzido por ' + nTradutor;
    }

    const maisTradutor = document.querySelector('input[name="tradutor-mais"]:checked')?.value;
    const qtdTradutor = document.querySelector('input[name="tradutor-qtd"]:checked')?.value;
    let tradutor2 = "";
    let tradutor3 = "";

    if (maisTradutor === "sim") {
        if (qtdTradutor === "2") {
            tradutor2 = document.getElementById("tradutor-2").value;
            tradutor2 = ' e ' + tradutor2;
        } else if (qtdTradutor === "3") {
            tradutor2 = document.getElementById("tradutor-2").value;
            tradutor3 = document.getElementById("tradutor-3").value;
            tradutor2 = ', ' + tradutor2;
            tradutor3 = ' e ' + tradutor3;
        } else {
            tradutor2 = " ... [et al.]";
        }
    }

//Saída da função getRespInt

    const entradaPrincipal = `${autorEntrada}${entidade}${evento}`;  
    
    let areaResponsabilidade = "";

    // Verifica se a edição está presente para adicionar o ponto após "ed" além de "/"
    const edicaoPresente = document.getElementById("edicao").value;
    if (edicaoPresente && respInt === "pessoa" || respInt === "entidade") {
        areaResponsabilidade = ". / ";
    
    } else if (!edicaoPresente && respInt === "pessoa" || respInt === "entidade") {
        areaResponsabilidade = " / ";
    } 

    areaResponsabilidade += `${entidade}${autor}${organizador}${coordenador}${compilador}${editor}${pessoa2}${pessoa3}${ilustrador}${ilustrador2}${ilustrador3}${tradutor}${tradutor2}${tradutor3}`;
        
    return {entradaPrincipal, areaResponsabilidade}
}


// ÁREA DE PUBLICAÇÃO

export function getPublicacao() {

    let publicador = document.getElementById("publicador").value;
    publicador = publicador? ' : ' + publicador : ' : [s.n.]';
    
    let loc = document.getElementById("local").value;
    const local = loc? '. - ' + loc : ". - [S.l.]";

    let ano = document.getElementById("ano").value;
    ano = ano? ', ' + ano + '.' : ', [s.d.].'; 
    
    //Mais publicador
    
    const maisPublicador = document.querySelector('input[name="publicador-mais"]:checked')?.value;
        
    let publicador2 = document.getElementById("publicador-2").value;
    publicador2 = publicador2? ' : ' + publicador2 : "";

    let loc2 = document.getElementById("local-2").value;
    let local2 = loc2? ' ; ' + loc2 : "";

    if (maisPublicador === "sim") {
        if (loc2 === loc) {
            local2 = "";
        } 
    }

    const areaPublicacao = `${local}${publicador}${local2}${publicador2}${ano}`;

    return {areaPublicacao}

}

// ÁREA DE DESCRIÇÃO FÍSICA

    //Paginação

export function getDescricaoFisica() {

        const paginacao_radio = document.querySelector('input[name="paginacao"]:checked')?.value;
        const pagRomana_cbox = document.getElementById("pag-romana").checked;
        const paginaOuFolha_radio = document.querySelector('input[name="pag-ou-folha"]:checked')?.value;
        const pagLamina_cbox = document.getElementById("pag-lamina").checked;
        const radioCerteza = document.querySelector('input[name="pag-certeza"]:checked')?.value;

        let pagNum = "";
        let pagNaoNum = "";
        let pagRomana = "";
        let lamina = "";

        if (paginacao_radio === "pag-num") {
            pagNum = document.getElementById("pag-num-qtd")?.value;
            pagNum = pagNum + " p.";
        } else if (paginacao_radio === "pag-sem-num") {
            pagNaoNum = document.getElementById("pag-nao-num-qtd")?.value;
            if (radioCerteza === "certa") {
                pagNaoNum = pagNaoNum + " p.";
            } else if (radioCerteza === "presumida") {
                pagNaoNum = "[" + pagNaoNum + "] p.";
            } else {
                pagNaoNum = "";
            }
        }

        if (pagRomana_cbox) {
            pagRomana = document.getElementById("pag-romana-qtd")?.value;
            pagRomana = pagRomana + ", ";  
        }

        if (pagLamina_cbox) {

            if (paginaOuFolha_radio === "pagina") {
            lamina = document.getElementById("pag-lamina-qtd")?.value;
            lamina = ", [" + lamina + "] p. de lâminas";
            } else if (paginaOuFolha_radio === "folha") {
                lamina = document.getElementById("folha-lamina-qtd")?.value;
                lamina = ", [" + lamina + "] f. de lâminas"; 
            }
        
        }

              
        const paginacao = `${pagRomana}${pagNum}${lamina}${pagNaoNum}`;


    //Material gráfico (Imagens)

    const imagem = document.querySelector('input[name="imagem"]:checked')?.value;
    //const tipoImagem = document.querySelector('input[name="imagem-tipo"]:checked')?.value;
    const coloracaoIl = document.querySelector('input[name="il-coloracao"]:checked')?.value;
    const coloracaoFotos = document.querySelector('input[name="fotos-coloracao"]:checked')?.value;
    const coloracaoMapas = document.querySelector('input[name="mapas-coloracao"]:checked')?.value;

    let ilustracoes = "";
    let fotos = "";
    let mapas = "";

    if (coloracaoIl === "il-cores") {
        ilustracoes = "il. color."
    } else if (coloracaoIl === "il-pb") {
        ilustracoes = "il. p&b"
    } else if (coloracaoIl === "il") {
        ilustracoes = "il."
    } else {
        ilustracoes = "";
    }

    if (coloracaoFotos === "foto-cores") {
        fotos = "fotos color."
    } else if (coloracaoFotos === "foto-pb") {
        fotos = "fotos p&b"
    } else if (coloracaoFotos === "fotos") {
        fotos = "fotos"
    } else {
        fotos = "";
    }

    if (coloracaoMapas === "mapa-cores") {
        mapas = "mapas color."
    } else if (coloracaoMapas === "mapa-pb") {
        mapas = "mapas p&b"
    } else if (coloracaoMapas === "mapas") {
        mapas = "mapas"
    } else {
        mapas = "";
    }

// Cria uma lista com as imagens possíveis:
    const listaImagens = [ilustracoes, fotos, mapas];

// Filtra lista de imagens para remover as que não estão presentes no livro:
const imagensPresentes = listaImagens.filter(imagem => imagem);

// Cria uma string formatada para o resultado final:
let imagens = "";

if (imagem === "sim") {
    imagens = " : " + imagensPresentes[0];
}
    
if (imagensPresentes.length > 1) {
    // Adiciona as próximas imagens intermediárias precedidas com ", ":
    for (let i = 1; i < imagensPresentes.length; i++) {
        imagens += ", " + imagensPresentes[i];
}
}

// Dimensões

//formato digital

let ext = document.getElementById("extensao").value;
const extensao = ext? ` ; ${ext}` : "";

//formato físico

const formatoFisico = document.querySelector('input[name="formato"]:checked')?.value; //tradicional ou nao

let altura = "";
let alt = document.getElementById("altura").value;
let larg = document.getElementById("largura").value;

let largura = "";

if (formatoFisico === "tradicional") {
        altura = alt? ` ; ${alt} cm`: "";
} else if (formatoFisico === "nao-tradicional" ) {
    altura = alt? ` ; ${alt} cm`: "";
    largura = larg? ` x ${larg} cm` : "";
}

const dimensoes = `${altura}${largura}${extensao}`;


// Material adicional

let matAdic = document.getElementById("material-adicional-tipo").value;
let qtdMatAdic = document.getElementById("material-adicional-qtd").value;

const materialAdicional = matAdic? ` + ${qtdMatAdic} ${matAdic}` : "";

// Saída da área de descrição física------------------

return {paginacao, imagens, dimensoes, materialAdicional}

    }
    
// ÁREA DE SÉRIE



export function getSerie() {
// Elementos antessessores sem ponto final
const pagRomana = document.getElementById("pag-romana").checked ;
const imagem = document.getElementById("imagem-sim").checked ;
const digital = document.getElementById("digital").checked ;
const formatoTrad = document.getElementById("formato-trad").checked ;
const formatoNaoTrad = document.getElementById("formato-nao-trad").checked;

const elementosAntecessoresSemPontoFinal = pagRomana || imagem || digital || formatoTrad || formatoNaoTrad ;


const serieSN = document.querySelector('input[name="serie-sn"]:checked')?.value;
let areaSerie = "";


let serieNome = document.getElementById("serie-nome").value;
let serieVolume = document.getElementById("serie-volume").value;
    serieVolume = serieVolume? " ; " + serieVolume : "";


let subserieNome = document.getElementById("subserie-nome").value;
let subserieVolume = document.getElementById("subserie-volume").value;
    subserieVolume = subserieVolume? " ; " + subserieVolume : "";

    // Construção da área da série
    if (serieSN === "sim") {
        areaSerie = `. -- (${serieNome}${serieVolume}`;
        if (subserieNome) {
            areaSerie += ` : ${subserieNome}${subserieVolume})`;
        } else {
            areaSerie += `)`;
        }
    } else if (elementosAntecessoresSemPontoFinal) {
        areaSerie = ".";
    }

    return { areaSerie };
}

export function getISBN() {
         
   // const isbnSN = document.querySelector('input[name="isbn-sn"]:checked')?.value;
    //let areaNotaISBN = "";
    
    
    let isbn1 = document.getElementById("isbn-1").value;
        isbn1 = isbn1? `ISBN ${isbn1}` : "";
    let qualificador1 = document.getElementById("qualificador-1").value;
        qualificador1 = qualificador1? ` (${qualificador1})` : "";

    isbn1 = `${isbn1}${qualificador1}`;

    let isbn2 = document.getElementById("isbn-2").value;
        isbn2 = isbn2? `. -- ISBN ${isbn2}` : "";
    let qualificador2 = document.getElementById("qualificador-2").value;
        qualificador2 = qualificador2? ` (${qualificador2})` : "";

     isbn2 = `${isbn2}${qualificador2}`;

     let ISBN = isbn1 + isbn2;
        
        return { ISBN  };
    }

    export function getNota() {

        const isbnSN = document.querySelector('input[name="isbn-sn"]:checked')?.value;
        let areaNotaISBN = "";
        
        
        let nota1 = document.getElementById("nota-1").value;
            nota1 = nota1? nota1 : "";

    
        let nota2 = document.getElementById("nota-2").value;
            nota2 = nota2? nota2 : "";

            
            return { nota1, nota2  };
        }