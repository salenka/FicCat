
// CÓDICOS OPCIONAIS

export function getCodigo() {
    
    let cdd = document.getElementById("cdd").value.trim();
        cdd = cdd? `CDD ${cdd}`: '';

    let cdu = document.getElementById("cdu").value.trim();
        cdu = cdu? `CDU ${cdu}` : '';

    let cutter = document.getElementById("cutter").value.trim();
        cutter = cutter? `Cutter ${cutter}` : '';

    let pha = document.getElementById("pha").value.trim();
        pha = pha? `PHA ${pha}` : '';

    return {cdd, cdu, cutter, pha}
}




// ÁREA DE TÍTULO


export function getTitulo() {
    
    let titulo = document.getElementById("titulo").value.trim();

    let subtitulo = document.getElementById("subtitulo").value.trim();
    subtitulo = subtitulo ? ': ' + subtitulo : "";
    
    let areaTitulo = `${titulo}${subtitulo}`;

    return {areaTitulo}
}

// ÁREA DE EDIÇÃO

export function getEdicao() {   
    
    let edicao = document.getElementById("edicao").value.trim();
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
        entidade = document.getElementById("entidade-nome").value.trim() || "";

    } else if (respInt === "evento") {
        console.log("radio evento selecionado");
        evento = document.getElementById("evento-nome").value.trim();
        const num = document.getElementById("evento-numero").value.trim() || "" ;
        const ano = document.getElementById("evento-ano").value.trim() || "" ;
        const local = document.getElementById("evento-local").value.trim() || "" ;
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
        const nome = document.getElementById("nome").value.trim() || "" ; 
        const sobrenome = document.getElementById("sobrenome").value.trim() || "" ;
        autorEntrada = sobrenome + ", " + nome;
        autor = nome + " " + sobrenome;

    } else if (tipoPessoa === "organizador") {
        const org = document.getElementById("organizador-nome").value.trim() || "" ;
        organizador = 'organizado por ' + org;

    } else if (tipoPessoa === "coordenador") {
        const coord = document.getElementById("coordenador-nome").value.trim() || "";
        coordenador = 'coordenado por ' + coord;

    } else if (tipoPessoa === "compilador") {
        const comp = document.getElementById("compilador-nome").value.trim() || "" ;
        compilador = 'compilado por ' + comp;

    } else if (tipoPessoa === "editor") {
    const ed = document.getElementById("editor-nome").value.trim() || "";
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
            const p2 = document.getElementById("pessoa-2").value.trim();
            pessoa2 = ' e ' + p2;
        } else if (qtdPessoa === "3") {
            const p2 = document.getElementById("pessoa-2").value.trim();
            const p3 = document.getElementById("pessoa-3").value.trim();
            pessoa2 = ', ' + p2;
            pessoa3 = ' e ' + p3;
        } else if (qtdPessoa === "4") {
            pessoa2 = " ... [et al.]";
        }
    }

//Contribuidores - Ilustrador
    let ilustrador = "";
    if (document.getElementById("ilustrador").checked) {
        const nIlustrador = document.getElementById("ilustrador-nome").value.trim();
        ilustrador = ' ; ilustrado por ' + nIlustrador;
    }

    const maisIlustrador = document.querySelector('input[name="ilustrador-mais"]:checked')?.value;
    const qtdIlustrador = document.querySelector('input[name="ilustrador-qtd"]:checked')?.value;
    let ilustrador2 = "";
    let ilustrador3 = "";

    if (maisIlustrador === "sim") {
        if (qtdIlustrador === "2") {
            ilustrador2 = document.getElementById("ilustrador-2").value.trim();
            ilustrador2 = ' e ' + ilustrador2;
        } else if (qtdIlustrador === "3") {
            ilustrador2 = document.getElementById("ilustrador-2").value.trim();
            ilustrador3 = document.getElementById("ilustrador-3").value.trim();
            ilustrador2 = ', ' + ilustrador2;
            ilustrador3 = ' e ' + ilustrador3;
        } else {
            ilustrador2 = " ... [et al.]";
        }
    }

//Contribuidores - Tradutor  
    let tradutor = "";
    if (document.getElementById("tradutor").checked) {
        const nTradutor = document.getElementById("tradutor-nome").value.trim();
        tradutor = ' ; traduzido por ' + nTradutor;
    }

    const maisTradutor = document.querySelector('input[name="tradutor-mais"]:checked')?.value;
    const qtdTradutor = document.querySelector('input[name="tradutor-qtd"]:checked')?.value;
    let tradutor2 = "";
    let tradutor3 = "";

    if (maisTradutor === "sim") {
        if (qtdTradutor === "2") {
            tradutor2 = document.getElementById("tradutor-2").value.trim();
            tradutor2 = ' e ' + tradutor2;
        } else if (qtdTradutor === "3") {
            tradutor2 = document.getElementById("tradutor-2").value.trim();
            tradutor3 = document.getElementById("tradutor-3").value.trim();
            tradutor2 = ', ' + tradutor2;
            tradutor3 = ' e ' + tradutor3;
        } else {
            tradutor2 = " ... [et al.]";
        }
    }

//Saída da função getRespInt

    const entradaPrincipal = `\n${autorEntrada}${entidade}${evento}`;  
    
    let areaResponsabilidade = "";

    // Verifica se a edição está presente para adicionar o ponto após "ed" além de "/"
    const edicaoPresente = document.getElementById("edicao").value.trim();
    if (edicaoPresente && respInt === "pessoa" || edicaoPresente && respInt === "entidade") {
        areaResponsabilidade = ". / ";
    
    } else if (!edicaoPresente && respInt === "pessoa" || !edicaoPresente &&respInt === "entidade") {
        areaResponsabilidade = " / ";
    } 

    areaResponsabilidade += `${entidade}${autor}${organizador}${coordenador}${compilador}${editor}${pessoa2}${pessoa3}${ilustrador}${ilustrador2}${ilustrador3}${tradutor}${tradutor2}${tradutor3}`;
        
    return {entradaPrincipal, areaResponsabilidade}
}


// ÁREA DE PUBLICAÇÃO

export function getPublicacao() {

    let publicador = document.getElementById("publicador").value.trim();
    publicador = publicador? ' : ' + publicador : ' : [s.n.]';
    
    let loc = document.getElementById("local").value.trim();
    const local = loc? '. -- ' + loc : ". -- [S.l.]";

    let ano = document.getElementById("ano").value.trim();
    ano = ano? ', ' + ano + '.' : ', [s.d.].'; 
    
    //Mais publicador
    
    const maisPublicador = document.querySelector('input[name="publicador-mais"]:checked')?.value;
        
    let publicador2 = document.getElementById("publicador-2").value.trim();
    publicador2 = publicador2? ' : ' + publicador2 : "";

    let loc2 = document.getElementById("local-2").value.trim();
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

        let pagNum = document.getElementById("pag-num-qtd")?.value;
        let pagNaoNum = document.getElementById("pag-nao-num-qtd")?.value;
        let pagRomana = document.getElementById("pag-romana-qtd")?.value;
        let pagLamina = document.getElementById("pag-lamina-qtd")?.value;
        let folhaLamina = document.getElementById("folha-lamina-qtd")?.value;


        if (paginacao_radio === "pag-num") {
            pagNum = pagNum? ` ${pagNum}` : ''; //essa construção só acontece quando houver um valor
        } else if (paginacao_radio === "pag-sem-num") {          
            if (radioCerteza === "presumida") {
                pagNaoNum = pagNaoNum? `[${pagNaoNum}] p.` : ''; // idem
            } else {
                pagNaoNum = pagNaoNum? `${pagNaoNum} p.` : ''; // idem
            }
        }

        if (pagRomana_cbox) {
            pagRomana = pagRomana? `${pagRomana}, `: '';  
        }

        if (pagLamina_cbox) {
            if (paginaOuFolha_radio === "pagina") {
            pagLamina = pagLamina? `, [${pagLamina}] p. de lâminas` : ' p.'; 
            //inclui o "p." das páginas num. qdo não há input de lâminas apesar do checkbox estar marcado
            //não vai precisar quando o preenchimento for obrigatório
            } else if (paginaOuFolha_radio === "folha") {
              folhaLamina = folhaLamina? ` p., [${folhaLamina}] f. de lâminas` : ''; // idem
            } 

        } else if (!pagLamina_cbox && pagNum) {
            pagLamina = " p."; // inclui o "p.' das páginas numeradas qdo não há lâminas
        }

              
        const paginacao = `${pagRomana}${pagNum}${pagLamina}${folhaLamina}${pagNaoNum}`;


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

let ext = document.getElementById("extensao").value.trim();
const extensao = ext? ` ; ${ext}` : "";

//formato físico

const formatoFisico = document.querySelector('input[name="formato"]:checked')?.value; //tradicional ou nao

let altura = "";
let alt = document.getElementById("altura").value.trim();
let larg = document.getElementById("largura").value.trim();

let largura = "";

if (formatoFisico === "tradicional") {
        altura = alt? ` ; ${alt} cm`: "";
} else if (formatoFisico === "nao-tradicional" ) {
    altura = alt? ` ; ${alt} cm`: "";
    largura = larg? ` x ${larg} cm` : "";
}

const dimensoes = `${altura}${largura}${extensao}`;


// Material adicional

let matAdic = document.getElementById("material-adicional-tipo").value.trim();
let qtdMatAdic = document.getElementById("material-adicional-qtd").value.trim();

const materialAdicional = matAdic? ` + ${qtdMatAdic} ${matAdic}` : "";

// Saída da área de descrição física------------------

return {paginacao, imagens, dimensoes, materialAdicional}

    }
    
// ÁREA DE SÉRIE



export function getSerie() {
// Elementos antessessores sem ponto final
// const pagRomana = document.getElementById("pag-romana").checked ; // xv (na vdd esse nunca vai ser o caso)
const imagem = document.getElementById("imagem-sim").checked ; // p&b fotos mapas (menos color. e il.)
const digital = document.getElementById("digital").checked ; // PDF
const formatoTrad = document.getElementById("formato-trad").checked ; // cm
const formatoNaoTrad = document.getElementById("formato-nao-trad").checked; // cm


const elementosAntecessoresSemPontoFinal = imagem || digital || formatoTrad || formatoNaoTrad ;


const serieSN = document.querySelector('input[name="serie-sn"]:checked')?.value;
let areaSerie = ".";


let serieNome = document.getElementById("serie-nome").value.trim();
let serieVolume = document.getElementById("serie-volume").value.trim();
    serieVolume = serieVolume? " ; " + serieVolume : "";


let subserieNome = document.getElementById("subserie-nome").value.trim();
let subserieVolume = document.getElementById("subserie-volume").value.trim();
    subserieVolume = subserieVolume? " ; " + subserieVolume : "";

    // Construção da área da série
    if (serieSN === "sim") {
        areaSerie = `. -- (${serieNome}${serieVolume}`;
        if (subserieNome) {
            areaSerie += ` : ${subserieNome}${subserieVolume})`;
        } else {
            areaSerie += `)`;
        }
    } 

    return { areaSerie };
}

    export function getNota() {

        const isbnSN = document.querySelector('input[name="isbn-sn"]:checked')?.value;
        let areaNotaISBN = "";
        
        
        let nota1 = document.getElementById("nota-1").value.trim();
            nota1 = nota1? `\n    ${nota1}` : "";

    
        let nota2 = document.getElementById("nota-2").value.trim();
            nota2 = nota2? `\n    ${nota2}` : "";

            
            return { nota1, nota2  };
        }

        export function getISBN() {
         
            // const isbnSN = document.querySelector('input[name="isbn-sn"]:checked')?.value;
             //let areaNotaISBN = "";
             
             
             let isbn1 = document.getElementById("isbn-1").value.trim();
                 isbn1 = isbn1? `\n    ISBN ${isbn1}` : "";
             let qualificador1 = document.getElementById("qualificador-1").value.trim();
                 qualificador1 = qualificador1? ` (${qualificador1})` : "";
         
             isbn1 = `${isbn1}${qualificador1}`;
         
             let isbn2 = document.getElementById("isbn-2").value.trim();
                 isbn2 = isbn2? `. -- ISBN ${isbn2}` : "";
             let qualificador2 = document.getElementById("qualificador-2").value.trim();
                 qualificador2 = qualificador2? ` (${qualificador2})` : "";
         
              isbn2 = `${isbn2}${qualificador2}`;
         
              let ISBN = isbn1 + isbn2;
                 
                 return { ISBN  };
             }

    export function getAssunto() {
        let assunto1 = document.getElementById("assunto-1").value.trim();
        assunto1 = assunto1? `1. ${assunto1}` : "";

        let assunto2 = document.getElementById("assunto-2").value.trim();
        assunto2 = assunto2? `2. ${assunto2}` : "";

        let assunto3 = document.getElementById("assunto-3").value.trim();
        assunto3 = assunto3? `3. ${assunto3}` : "";

        let assunto4 = document.getElementById("assunto-4").value.trim();
        assunto4 = assunto4? `4. ${assunto4}` : "";

        let assunto5 = document.getElementById("assunto-5").value.trim();
        assunto5 = assunto5? `5. ${assunto5}` : "";

        const assuntos = `${assunto1} ${assunto2} ${assunto3} ${assunto4} ${assunto5}`;

        return { assuntos };

    
        } 