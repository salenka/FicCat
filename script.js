import { uncheckOption, updateTipoPessoa, eraseChildText, saveData  } from './functions.js';
import { geraFicha } from './functions.js';


alert("Funcionando");



// resp-int-section

document.querySelectorAll('input[name="resp-int"]').forEach(radio => {
    radio.addEventListener('change', function () {

        if (document.getElementById('pessoa').checked) {
            uncheckOption('pessoa-tipo');
            uncheckOption('pessoa-qtd');
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

document.querySelectorAll('input[name="pessoa-tipo"]').forEach(radio => {
    radio.addEventListener('change', function () {
           
        uncheckOption('pessoa-qtd');
        uncheckOption('pessoa-mais');

        if (document.getElementById('autor').checked) {
            document.getElementById('autor-section').style.display = 'block';
            document.getElementById('organizador-section').style.display = 'none';
            document.getElementById('coordenador-section').style.display = 'none';
            document.getElementById('compilador-section').style.display = 'none';
            document.getElementById('editor-section').style.display = 'none';
            document.getElementById('pessoa-mais').style.display = 'block';

        } else if (document.getElementById('organizador').checked)  {
            document.getElementById('autor-section').style.display = 'none';
            document.getElementById('organizador-section').style.display = 'block';//não está mostrando
            document.getElementById('coordenador-section').style.display = 'none';
            document.getElementById('compilador-section').style.display = 'none';
            document.getElementById('editor-section').style.display = 'none';
            document.getElementById('pessoa-mais').style.display = 'block';
                 
        } else if (document.getElementById('coordenador').checked) {
            document.getElementById('autor-section').style.display = 'none';
            document.getElementById('organizador-section').style.display = 'none';
            document.getElementById('coordenador-section').style.display = 'block';
            document.getElementById('compilador-section').style.display = 'none';
            document.getElementById('editor-section').style.display = 'none';
            document.getElementById('pessoa-mais').style.display = 'block';
              
        } else if (document.getElementById('compilador').checked) {
            document.getElementById('autor-section').style.display = 'none';
            document.getElementById('organizador-section').style.display = 'none';
            document.getElementById('coordenador-section').style.display = 'none';
            document.getElementById('compilador-section').style.display = 'block';
            document.getElementById('editor-section').style.display = 'none';
            document.getElementById('pessoa-mais').style.display = 'block';
                 
        } else if (document.getElementById('editor').checked) {
            document.getElementById('autor-section').style.display = 'none';
            document.getElementById('organizador-section').style.display = 'none';
            document.getElementById('coordenador-section').style.display = 'none';
            document.getElementById('compilador-section').style.display = 'none';
            document.getElementById('editor-section').style.display = 'block';
            document.getElementById('pessoa-mais').style.display = 'block';
                
         } else {
            document.getElementById('autor-section').style.display = 'none';
            document.getElementById('organizador-section').style.display = 'none';
            document.getElementById('coordenador-section').style.display = 'none';
            document.getElementById('compilador-section').style.display = 'none';
            document.getElementById('editor-section').style.display = 'none';
            document.getElementById('pessoa-mais').style.display = 'none';

        }
    });

    document.querySelectorAll('input[name="pessoa-tipo"]').forEach(radio => {
        radio.addEventListener('change', updateTipoPessoa);
    });

});

//pessoa-mais

document.querySelectorAll('input[name="pessoa-mais"]').forEach(radio => {
    radio.addEventListener('change', function () {
        if (document.getElementById('sim').checked) {
            document.getElementById('pessoa-qtd').style.display = 'block';
        } else {
            document.getElementById('pessoa-qtd').style.display = 'none';
        }
    });
});

//OUTRA-PESSOA

document.querySelectorAll('input[name="pessoa-qtd"]').forEach(radio => {
    radio.addEventListener('change', function () {

        if (document.getElementById('pessoa-qtd-2').checked) {
            document.getElementById('pessoa-segunda').style.display = 'block';
            document.getElementById('pessoa-terceira').style.display = 'none';
            document.getElementById('pessoa-quarta').style.display = 'none';
        } else if (document.getElementById('pessoa-qtd-3').checked) {
            document.getElementById('pessoa-segunda').style.display = 'block';
            document.getElementById('pessoa-terceira').style.display = 'block';
            document.getElementById('pessoa-quarta').style.display = 'none';
        } else if (document.getElementById('pessoa-qtd-4').checked) {
            document.getElementById('pessoa-segunda').style.display = 'none';
            document.getElementById('pessoa-terceira').style.display = 'none';
            document.getElementById('pessoa-quarta').style.display = 'block';
        } else {
            document.getElementById('pessoa-segunda').style.display = 'none';
            document.getElementById('pessoa-terceira').style.display = 'none';
            document.getElementById('pessoa-quarta').style.display = 'none';
            
        }
    });
});

//ILUSTRADOR

document.getElementById('ilustrador').addEventListener('change', function () {
           
        if (document.getElementById('ilustrador').checked) {
            document.getElementById('ilustrador-section').style.display = 'block';
            document.getElementById('ilustrador-mais').style.display = 'block';

        } else   {
            document.getElementById('ilustrador-section').style.display = 'none';
            document.getElementById('ilustrador-mais').style.display = 'none';               
        } 
    })

    //ilustrador-mais
    
    document.querySelectorAll('input[name="ilustrador-mais"]').forEach(radio => {
        radio.addEventListener('change', function () {
            if (document.getElementById('ilustrador-sim').checked) {
                document.getElementById('ilustrador-qtd').style.display = 'block';
            } else {
                document.getElementById('ilustrador-qtd').style.display = 'none';
            }
        });
    });
    
    //OUTRO-Ilustrador

    document.querySelectorAll('input[name="ilustrador-qtd"]').forEach(radio => {
        radio.addEventListener('change', function () {
    
    
            if (document.getElementById('ilustrador-qtd-2').checked) {
                document.getElementById('ilustrador-segundo').style.display = 'block';
                document.getElementById('ilustrador-terceiro').style.display = 'none';
                document.getElementById('ilustrador-quarto').style.display = 'none';
            } else if (document.getElementById('ilustrador-qtd-3').checked) {
                document.getElementById('ilustrador-segundo').style.display = 'block';
                document.getElementById('ilustrador-terceiro').style.display = 'block';
                document.getElementById('ilustrador-quarto').style.display = 'none';
            } else if (document.getElementById('ilustrador-qtd-4').checked) {
                document.getElementById('ilustrador-segundo').style.display = 'none';
                document.getElementById('ilustrador-terceiro').style.display = 'none';
                document.getElementById('ilustrador-quarto').style.display = 'block';
            } else {
                document.getElementById('ilustrador-segundo').style.display = 'none';
                document.getElementById('ilustrador-terceiro').style.display = 'none';
                document.getElementById('ilustrador-quarto').style.display = 'none';
            }
        });
    });

//TRADUTOR

document.getElementById('tradutor').addEventListener('change', function () {
           
    if (document.getElementById('tradutor').checked) {
        document.getElementById('tradutor-section').style.display = 'block';
        document.getElementById('tradutor-mais').style.display = 'block';

    } else   {
        document.getElementById('tradutor-section').style.display = 'none';
        document.getElementById('tradutor-mais').style.display = 'none';              
    } 
})

    //tradutor-mais
    
    document.querySelectorAll('input[name="tradutor-mais"]').forEach(radio => {
        radio.addEventListener('change', function () {
            if (document.getElementById('tradutor-sim').checked) {
                document.getElementById('tradutor-qtd').style.display = 'block';
            } else {
                document.getElementById('tradutor-qtd').style.display = 'none';
            }
        });
    });

    //OUTRO-Tradutor

    document.querySelectorAll('input[name="tradutor-qtd"]').forEach(radio => {
        radio.addEventListener('change', function () {
    
    
            if (document.getElementById('tradutor-qtd-2').checked) {
                document.getElementById('tradutor-segundo').style.display = 'block';
                document.getElementById('tradutor-terceiro').style.display = 'none';
                document.getElementById('tradutor-quarto').style.display = 'none';
            } else if (document.getElementById('tradutor-qtd-3').checked) {
                document.getElementById('tradutor-segundo').style.display = 'block';
                document.getElementById('tradutor-terceiro').style.display = 'block';
                document.getElementById('tradutor-quarto').style.display = 'none';
            } else if (document.getElementById('tradutor-qtd-4').checked) {
                document.getElementById('tradutor-segundo').style.display = 'none';
                document.getElementById('tradutor-terceiro').style.display = 'none';
                document.getElementById('tradutor-quarto').style.display = 'block';
            } else {
                document.getElementById('tradutor-segundo').style.display = 'none';
                document.getElementById('tradutor-terceiro').style.display = 'none';
                document.getElementById('tradutor-quarto').style.display = 'none';
            }
        });
    });

    //publicador-mais
    
    document.querySelectorAll('input[name="publicador-mais"]').forEach(radio => {
        radio.addEventListener('change', function () {
            if (document.getElementById('publicador-sim').checked) {
                document.getElementById('publicador-segundo').style.display = 'block';
            } else {
                document.getElementById('publicador-segundo').style.display = 'none';
            }
        });
    });

    //PAGINAÇÃO

    // Paginacao numerada ou não 
    document.querySelectorAll('input[name="paginacao"]').forEach(radio => {
        radio.addEventListener('change', function () {
    
            if (document.getElementById('pag-num').checked) {
                document.getElementById('paginacao-numerada').style.display = 'block';
                document.getElementById('paginacao-nao-numerada').style.display = 'none';
            } else if (document.getElementById('pag-sem-num').checked) {
                document.getElementById('paginacao-numerada').style.display = 'none';
                document.getElementById('paginacao-nao-numerada').style.display = 'block';
            } else {
                document.getElementById('paginacao-numerada').style.display = 'none';
                document.getElementById('paginacao-nao-numerada').style.display = 'none';
            }
        });
    });


    // Paginação romana ou laminas 
    document.querySelectorAll('input[name="pag-outra"]').forEach(checkbox => {
        checkbox.addEventListener('change', function () {

            // Checkbox paginacao romana
    
            if (document.getElementById('pag-romana').checked) {
                document.getElementById('paginacao-romana').style.display = 'block';     
            } else {
                document.getElementById('paginacao-romana').style.display = 'none';
            }

            // Checkbox laminas
            if (document.getElementById('pag-lamina').checked) {
                document.getElementById('paginacao-lamina').style.display = 'block';
                document.getElementById('imagem').style.display = 'none';
                document.getElementById('imagem-tipo').style.display = 'block'; 
            } else {
                document.getElementById('paginacao-lamina').style.display = 'none';
            }
        });
    });

    document.querySelectorAll('input[name="pag-ou-folha"]').forEach(radio => { 
        radio.addEventListener('change', function () {
            if (document.getElementById('pagina').checked) {
                document.getElementById('pagina-lamina').style.display = 'block';
                document.getElementById('folha-lamina').style.display = 'none';
                } else if (document.getElementById('folha').checked) {
                    document.getElementById('pagina-lamina').style.display = 'none';
                    document.getElementById('folha-lamina').style.display = 'block';
                } else {
                    document.getElementById('pagina-lamina').style.display = 'none';
                    document.getElementById('folha-lamina').style.display = 'none';
                }
                });
            });
                
    
    //IMAGENS  
    
    document.querySelectorAll('input[name="imagem"]').forEach(radio => {
        radio.addEventListener('change', function () {
            if (document.getElementById('imagem-sim').checked) {
                document.getElementById('imagem-tipo').style.display = 'block';
            } else {
                document.getElementById('imagem-tipo').style.display = 'none';
            }
        });
    });

        //Checkbox ILUSTRAÇÕES
        document.getElementById('ilustracoes').addEventListener('change', function () {
           
            if (document.getElementById('ilustracoes').checked) {
                document.getElementById('il-coloracao').style.display = 'block';
            } else   {
                document.getElementById('il-coloracao').style.display = 'none';             
            } 
        })

        //Checkbox FOTOS
        document.getElementById('fotos').addEventListener('change', function () {
           
            if (document.getElementById('fotos').checked) {
                document.getElementById('fotos-coloracao').style.display = 'block';
            } else   {
                document.getElementById('fotos-coloracao').style.display = 'none';             
            } 
        })

        //Checkbox MAPAS
        document.getElementById('mapas').addEventListener('change', function () {
           
            if (document.getElementById('mapas').checked) {
                document.getElementById('mapas-coloracao').style.display = 'block';
            } else   {
                document.getElementById('mapas-coloracao').style.display = 'none';             
            } 
        }) 
        
    //FORMATO

    // OPÇOES DIV MATERIALIDADE (name:MATERIA)
    document.querySelectorAll('input[name="materia"]').forEach(radio => {
        radio.addEventListener('change', function () {
    
            if (document.getElementById('fisico').checked) {
                eraseChildText('materialidade');
                
                document.getElementById('formato-fisico').style.display = 'block';
                document.getElementById('formato-digital').style.display = 'none';
                document.getElementById('material-adicional').style.display = 'block';

            } else if (document.getElementById('digital').checked) {
                uncheckOption('formato');   
                eraseChildText('material-adicional');
                document.getElementById('formato-fisico').style.display = 'none';
                document.getElementById('formato-digital').style.display = 'block';
            } else  {
                document.getElementById('formato-fisico').style.display = 'none';
                document.getElementById('formato-digital').style.display = 'none';
            }      
        })   
    })


    // OPÇOES DIV FORMATO-FÍSICO (name:FORMATO)
    document.querySelectorAll('input[name="formato"]').forEach(radio => {
        radio.addEventListener('change', function () {

            eraseChildText('formato-fisico');
            
            if (document.getElementById('formato-trad').checked) {
                document.getElementById('formato-tradicional').style.display = 'block';
                document.getElementById('formato-nao-tradicional').style.display = 'none';
            } else if (document.getElementById('formato-nao-trad').checked) {
                document.getElementById('formato-tradicional').style.display = 'block';
                document.getElementById('formato-nao-tradicional').style.display = 'block';
            } else {
                document.getElementById('formato-tradicional').style.display = 'none';
                document.getElementById('formato-nao-tradicional').style.display = 'none';
            }
        }); 
    })

    // MATERIAL Adicional

        document.querySelectorAll('input[name="material-adicional-sn"]').forEach (radio => {
            radio.addEventListener('change', function () {
                if (document.getElementById('material-adicional-sim').checked) {
                    document.getElementById('material-adicional-section').style.display = 'block';
                } else {
                    document.getElementById('material-adicional-section').style.display = 'none';
                }
            });
        });
       
    //ÁREA DE SÉRIE

    // Serie - sim ou não
    
    document.querySelectorAll('input[name="serie-sn"]').forEach(radio => {
        radio.addEventListener('change', function () {
            if (document.getElementById('serie-sim').checked) {
                document.getElementById('serie').style.display = 'block';
                document.getElementById('subserie-sn').style.display = 'block';
            } else {
                document.getElementById('serie').style.display = 'none';
                document.getElementById('subserie-sn').style.display = 'none';
            }
        });
    });

    // Subserie - sim ou não

    document.querySelectorAll('input[name="subserie-sn"]').forEach(radio => {
        radio.addEventListener('change', function () {
            if (document.getElementById('subserie-sim').checked) {
                document.getElementById('subserie').style.display = 'block';
            } else {
                document.getElementById('subserie').style.display = 'none';
            }
        });
    });






     // SALVA DADOS - adicionando o evento 'input' para todos os campos do formulário
     document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll('#ficcat input[type="text"]').forEach(campo => {
           campo.addEventListener("input", saveData);
           });   
        })


// BOTÃO DE TESTE DE CONEXÃO (REMOVER)
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("btn").addEventListener("click", function () {
            alert("botão acionado");
        });
    })


      // CARD ----------------------------------------------------------

      // Botão Gera Ficha

document.getElementById("btn_gf").addEventListener("click", function () {

geraFicha();
    
})