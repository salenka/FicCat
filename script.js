import { uncheckRadio } from './functions.js';
import { updateTipoPessoa } from './functions.js';
//import { radioIsChecked } from './functions.js';
import { saveData } from './functions.js';

//import {generatePDF} from ';/functions.js';
// JavaScript source code
alert("Funcionando");



// resp-int-section

document.querySelectorAll('input[name="resp-int"]').forEach(radio => {
    radio.addEventListener('change', function () {



        if (document.getElementById('pessoa').checked) {
            uncheckRadio('t-pessoa');
            uncheckRadio('qtd-pessoa');
            document.getElementById('pessoa-section').style.display = 'block';
            document.getElementById('entidade-section').style.display = 'none';
            document.getElementById('evento-section').style.display = 'none';
            
        } else if (document.getElementById('entidade').checked) {
            document.getElementById('pessoa-section').style.display = 'none';
            document.getElementById('entidade-section').style.display = 'block';
            document.getElementById('evento-section').style.display = 'none';

            
        } else if (document.getElementById('evento').checked) {
            document.getElementById('pessoa-section').style.display = 'none';
            document.getElementById('entidade-section').style.display = 'none';
            document.getElementById('evento-section').style.display = 'block';

            
        } 
    });
});


// pessoa-section

document.querySelectorAll('input[name="t-pessoa"]').forEach(radio => {
    radio.addEventListener('change', function () {
           
        uncheckRadio('qtd-pessoa');
        uncheckRadio('mais-pessoa');

        if (document.getElementById('autor').checked) {
            document.getElementById('autor-section').style.display = 'block';
            document.getElementById('organizador-section').style.display = 'none';
            document.getElementById('coordenador-section').style.display = 'none';
            document.getElementById('compilador-section').style.display = 'none';
            document.getElementById('editor-section').style.display = 'none';
            document.getElementById('mais-pessoa').style.display = 'block';


        } else if (document.getElementById('organizador').checked)  {
            document.getElementById('autor-section').style.display = 'none';
            document.getElementById('organizador-section').style.display = 'block';//não está mostrando
            document.getElementById('coordenador-section').style.display = 'none';
            document.getElementById('compilador-section').style.display = 'none';
            document.getElementById('editor-section').style.display = 'none';
            document.getElementById('mais-pessoa').style.display = 'block';
 
                
        } else if (document.getElementById('coordenador').checked) {
            document.getElementById('autor-section').style.display = 'none';
            document.getElementById('organizador-section').style.display = 'none';
            document.getElementById('coordenador-section').style.display = 'block';
            document.getElementById('compilador-section').style.display = 'none';
            document.getElementById('editor-section').style.display = 'none';
            document.getElementById('mais-pessoa').style.display = 'block';
  
            
        } else if (document.getElementById('compilador').checked) {
            document.getElementById('autor-section').style.display = 'none';
            document.getElementById('organizador-section').style.display = 'none';
            document.getElementById('coordenador-section').style.display = 'none';
            document.getElementById('compilador-section').style.display = 'block';
            document.getElementById('editor-section').style.display = 'none';
            document.getElementById('mais-pessoa').style.display = 'block';
     
            
        } else if (document.getElementById('editor').checked) {
            document.getElementById('autor-section').style.display = 'none';
            document.getElementById('organizador-section').style.display = 'none';
            document.getElementById('coordenador-section').style.display = 'none';
            document.getElementById('compilador-section').style.display = 'none';
            document.getElementById('editor-section').style.display = 'block';
            document.getElementById('mais-pessoa').style.display = 'block';
      
           
         } else {
            document.getElementById('autor-section').style.display = 'none';
            document.getElementById('organizador-section').style.display = 'none';
            document.getElementById('coordenador-section').style.display = 'none';
            document.getElementById('compilador-section').style.display = 'none';
            document.getElementById('editor-section').style.display = 'none';
            document.getElementById('mais-pessoa').style.display = 'none';
         
        }
    });

    document.querySelectorAll('input[name="t-pessoa"]').forEach(radio => {
        radio.addEventListener('change', updateTipoPessoa);
    });

});


//MAIS-PESSOA

document.querySelectorAll('input[name="mais-pessoa"]').forEach(radio => {
    radio.addEventListener('change', function () {
        if (document.getElementById('sim').checked) {
            document.getElementById('qtd-pessoa').style.display = 'block';
        } else {
            document.getElementById('qtd-pessoa').style.display = 'none';
        }
    });
});


//OUTRA-PESSOA

document.querySelectorAll('input[name="qtd-pessoa"]').forEach(radio => {
    radio.addEventListener('change', function () {


        if (document.getElementById('qtd-pessoa-2').checked) {
            document.getElementById('segunda-pessoa').style.display = 'block';
            document.getElementById('terceira-pessoa').style.display = 'none';
            document.getElementById('quarta-pessoa').style.display = 'none';
        } else if (document.getElementById('qtd-pessoa-3').checked) {
            document.getElementById('segunda-pessoa').style.display = 'block';
            document.getElementById('terceira-pessoa').style.display = 'block';
            document.getElementById('quarta-pessoa').style.display = 'none';
        } else if (document.getElementById('qtd-pessoa-4').checked) {
            document.getElementById('segunda-pessoa').style.display = 'none';
            document.getElementById('terceira-pessoa').style.display = 'none';
            document.getElementById('quarta-pessoa').style.display = 'block';
        } else {
            document.getElementById('segunda-pessoa').style.display = 'none';
            document.getElementById('terceira-pessoa').style.display = 'none';
            document.getElementById('quarta-pessoa').style.display = 'none';
        }
    });
});

//ILUSTRADOR

document.getElementById('ilustrador').addEventListener('change', function () {
           
        if (document.getElementById('ilustrador').checked) {
            document.getElementById('ilustrador-section').style.display = 'block';
            document.getElementById('mais-ilustrador').style.display = 'block';

        } else   {
            document.getElementById('ilustrador-section').style.display = 'none';
            document.getElementById('mais-ilustrador').style.display = 'none';               
        } 
    })

    //MAIS-Ilustrador
    
    document.querySelectorAll('input[name="mais-ilustrador"]').forEach(radio => {
        radio.addEventListener('change', function () {
            if (document.getElementById('sim-ilustrador').checked) {
                document.getElementById('qtd-ilustrador').style.display = 'block';
            } else {
                document.getElementById('qtd-ilustrador').style.display = 'none';
            }
        });
    });
    
    //OUTRO-Ilustrador

    document.querySelectorAll('input[name="qtd-ilustrador"]').forEach(radio => {
        radio.addEventListener('change', function () {
    
    
            if (document.getElementById('qtd-ilustrador-2').checked) {
                document.getElementById('segundo-ilustrador').style.display = 'block';
                document.getElementById('terceiro-ilustrador').style.display = 'none';
                document.getElementById('quarto-ilustrador').style.display = 'none';
            } else if (document.getElementById('qtd-ilustrador-3').checked) {
                document.getElementById('segundo-ilustrador').style.display = 'block';
                document.getElementById('terceiro-ilustrador').style.display = 'block';
                document.getElementById('quarto-ilustrador').style.display = 'none';
            } else if (document.getElementById('qtd-ilustrador-4').checked) {
                document.getElementById('segundo-ilustrador').style.display = 'none';
                document.getElementById('terceiro-ilustrador').style.display = 'none';
                document.getElementById('quarto-ilustrador').style.display = 'block';
            } else {
                document.getElementById('segundo-ilustrador').style.display = 'none';
                document.getElementById('terceiro-ilustrador').style.display = 'none';
                document.getElementById('quarto-ilustrador').style.display = 'none';
            }
        });
    });

//TRADUTOR

document.getElementById('tradutor').addEventListener('change', function () {
           
    if (document.getElementById('tradutor').checked) {
        document.getElementById('tradutor-section').style.display = 'block';
        document.getElementById('mais-tradutor').style.display = 'block';

    } else   {
        document.getElementById('tradutor-section').style.display = 'none';
        document.getElementById('mais-tradutor').style.display = 'none';              
    } 
})

    //MAIS-tradutor
    
    document.querySelectorAll('input[name="mais-tradutor"]').forEach(radio => {
        radio.addEventListener('change', function () {
            if (document.getElementById('sim-tradutor').checked) {
                document.getElementById('qtd-tradutor').style.display = 'block';
            } else {
                document.getElementById('qtd-tradutor').style.display = 'none';
            }
        });
    });

    //OUTRO-Tradutor

    document.querySelectorAll('input[name="qtd-tradutor"]').forEach(radio => {
        radio.addEventListener('change', function () {
    
    
            if (document.getElementById('qtd-tradutor-2').checked) {
                document.getElementById('segundo-tradutor').style.display = 'block';
                document.getElementById('terceiro-tradutor').style.display = 'none';
                document.getElementById('quarto-tradutor').style.display = 'none';
            } else if (document.getElementById('qtd-tradutor-3').checked) {
                document.getElementById('segundo-tradutor').style.display = 'block';
                document.getElementById('terceiro-tradutor').style.display = 'block';
                document.getElementById('quarto-tradutor').style.display = 'none';
            } else if (document.getElementById('qtd-tradutor-4').checked) {
                document.getElementById('segundo-tradutor').style.display = 'none';
                document.getElementById('terceiro-tradutor').style.display = 'none';
                document.getElementById('quarto-tradutor').style.display = 'block';
            } else {
                document.getElementById('segundo-tradutor').style.display = 'none';
                document.getElementById('terceiro-tradutor').style.display = 'none';
                document.getElementById('quarto-tradutor').style.display = 'none';
            }
        });
    });

    //MAIS-PUBLICADOR
    
    document.querySelectorAll('input[name="mais-publicador"]').forEach(radio => {
        radio.addEventListener('change', function () {
            if (document.getElementById('sim-publicador').checked) {
                document.getElementById('segundo-publicador').style.display = 'block';
            } else {
                document.getElementById('segundo-publicador').style.display = 'none';
            }
        });
    });

    //PAGINAÇÃO

    
    document.querySelectorAll('input[name="paginacao"]').forEach(radio => {
        radio.addEventListener('change', function () {
    
    
            if (document.getElementById('radio-pag-unica').checked) {
                document.getElementById('paginacao-unica').style.display = 'block';
                document.getElementById('paginacao-variada').style.display = 'none';
                document.getElementById('paginacao-ausente').style.display = 'none';
            } else if (document.getElementById('radio-pag-variada').checked) {
                document.getElementById('paginacao-unica').style.display = 'none';
                document.getElementById('paginacao-variada').style.display = 'block';
                document.getElementById('paginacao-ausente').style.display = 'none';
            } else if (document.getElementById('radio-pag-ausente').checked) {
                document.getElementById('paginacao-unica').style.display = 'none';
                document.getElementById('paginacao-variada').style.display = 'none';
                document.getElementById('paginacao-ausente').style.display = 'block';
            } else {
                document.getElementById('paginacao-unica').style.display = 'none';
                document.getElementById('paginacao-variada').style.display = 'none';
                document.getElementById('paginacao-ausente').style.display = 'none';
            }
        });
    });

        
    //IMAGENS
    
    document.querySelectorAll('input[name="imagem"]').forEach(radio => {
        radio.addEventListener('change', function () {
            if (document.getElementById('sim-imagem').checked) {
                document.getElementById('tipo-imagem').style.display = 'block';
            } else {
                document.getElementById('tipo-imagem').style.display = 'none';
            }
        });
    });

        //Checkbox ILUSTRAÇÕES
        document.getElementById('ilustracoes').addEventListener('change', function () {
           
            if (document.getElementById('ilustracoes').checked) {
                document.getElementById('coloracao-il').style.display = 'block';
            } else   {
                document.getElementById('coloracao-il').style.display = 'none';             
            } 
        })

        //Checkbox FOTOS
        document.getElementById('fotos').addEventListener('change', function () {
           
            if (document.getElementById('fotos').checked) {
                document.getElementById('coloracao-fotos').style.display = 'block';
            } else   {
                document.getElementById('coloracao-fotos').style.display = 'none';             
            } 
        })

        //Checkbox MAPAS
        document.getElementById('mapas').addEventListener('change', function () {
           
            if (document.getElementById('mapas').checked) {
                document.getElementById('coloracao-mapas').style.display = 'block';
            } else   {
                document.getElementById('coloracao-mapas').style.display = 'none';             
            } 
        }) 


        
    //FORMATO

    // OPÇOES DIV MATERIALIDADE (name:MATERIA)
    document.querySelectorAll('input[name="materia"]').forEach(radio => {
        radio.addEventListener('change', function () {
            alert("entrou no listener da materialidade");

            uncheckRadio('formato');
            
    
    
            if (document.getElementById('fisico').checked) {
                alert("Entrou no if da opção físico");
                document.getElementById('formato-fisico').style.display = 'block';
                document.getElementById('formato-digital').style.display = 'none';

            } else if (document.getElementById('digital').checked) {
                alert("Entrou no if else da opção digital");
                document.getElementById('formato-fisico').style.display = 'none';
                document.getElementById('formato-digital').style.display = 'block';
            } else  {
                alert("Entrou no else de nenhuma opção selecionada");
                document.getElementById('formato-fisico').style.display = 'none';
                document.getElementById('formato-digital').style.display = 'none';
            }

       
            
        })
    
    //radioIsChecked("materia"); //não funciona!
    
    })


    // OPÇOES DIV FORMATO-FÍSICO (name:FORMATO)
    document.querySelectorAll('input[name="formato"]').forEach(radio => {
        radio.addEventListener('change', function () {
    
            
    
            if (document.getElementById('formato-trad').checked) {
                document.getElementById('formato-tradicional').style.display = 'block';
                document.getElementById('formato-nao-tradicional').style.display = 'none';
            } else if (document.getElementById('formato-nao-trad').checked) {
                document.getElementById('formato-tradicional').style.display = 'none';
                document.getElementById('formato-nao-tradicional').style.display = 'block';
            } else {
                document.getElementById('formato-tradicional').style.display = 'none';
                document.getElementById('formato-nao-tradicional').style.display = 'none';
            }
        });
    
    //radioIsChecked("formato"); //não funciona!
    
    })


    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("btn").addEventListener("click", function () {
            alert("botão acionado");
        });
    })


  // CARD ----------------------------------------------------------
 
 // Adiciona o evento 'input' para todos os campos do formulário
 document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('#ficcat input[type="text"]').forEach(campo => {
       campo.addEventListener("input", saveData);
       });
   
    })


// PROCESSO DE GERAÇÃO DA FICHA
//OBTENÇÃO DAS VARIÁVEIS A SEREM USADAS

document.getElementById("btn_gf").addEventListener("click", function () {

// ÁREA DE TÍTULO

    const titulo = localStorage.getItem("titulo");  
    
let subtitulo = "";
if (document.getElementById("subtitulo").value != "") {
        const sub = localStorage.getItem("subtitulo");
        subtitulo = ': ' + sub;
}

let edicao = "";
if (document.getElementById("edicao").value != "") {
    const ed = localStorage.getItem("edicao");
    edicao = '. -- ' + ed + ' ed.';
}

//RESPONSABILIDADE INTELECTUAL

// Tipo de responsável

let entidade = "";
let evento = "";

const respInt = document.querySelector('input[name="resp-int"]:checked')?.value;

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

let nome = "";
let sobrenome = "";
let autor = "";
let autorEntrada = "";
let organizador = "";
let coordenador = "";
let compilador = "";
let editor = "";

const tipoPessoa = document.querySelector('input[name="t-pessoa"]:checked')?.value;
if (tipoPessoa === "autor") {
    nome = localStorage.getItem("nome"); 
    sobrenome = localStorage.getItem("sobrenome");
    autorEntrada = sobrenome + ", " + nome;
    autor = nome + " " + sobrenome;

} else if (tipoPessoa === "organizador") {
    org = localStorage.getItem("n-organizador");
    organizador = 'organizado por ' + org;

} else if (tipoPessoa === "coordenador") {
    coord = localStorage.getItem("n-coordenador");
    coordenador = 'coordenado por ' + coord;

} else if (tipoPessoa === "compilador") {
    comp = localStorage.getItem("n-compilador");
    compilador = 'compilado por ' + comp;

} else if (tipoPessoa === "editor") {
    ed = localStorage.getItem("n-editor");
    editor = 'editado por ' + ed;
}



//Contribuidores
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

    // CONFIGURAÇÃO DA FICHA CATALOGRÁFICA

   
    const ficha = `
        ${autorEntrada}${entidade}${evento}
        ${titulo}${subtitulo}${edicao}/${autor}${entidade||""}${evento}${ilustrador}${ilustrador2}${ilustrador3}${tradutor}${tradutor2}${tradutor3} 
    `;





   // Exibir a ficha no HTML
   document.getElementById("ficha_aqui").textContent = ficha;
   document.getElementById("fichaCatalografica").style.display = "block";
});







    

