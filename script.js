import { uncheckRadio } from './functions.js';
import { updateTipoPessoa } from './functions.js';
//import { radioIsChecked } from './functions.js';

//import {generatePDF} from ';/functions.js';
// JavaScript source code
alert("Funcionando");



// resp-int-section

document.querySelectorAll('input[name="resp-int"]').forEach(radio => {
    radio.addEventListener('change', function () {

        uncheckRadio('t-pessoa');
        uncheckRadio('qtd-pessoa');

        if (document.getElementById('pessoa').checked) {
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

 
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("btn").addEventListener("click", function () {
            alert("botão acionado");
        });
    })

    
//}) submit no início de CARD.JS