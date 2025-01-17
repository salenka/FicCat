import { uncheckOption, updateTipoPessoa, eraseChildText, saveData, recuperaFicha, geraFicha  } from './functions.js';



alert("Funcionando");

// Materialidade

    document.querySelectorAll('input[name="materia"]').forEach(radio => {
        radio.addEventListener('change', function () {
    
            if (document.getElementById('fisico').checked) {
                eraseChildText('materialidade');
                
                document.getElementById('formato-fisico').style.display = 'block';
                document.getElementById('formato-digital').style.display = 'none';
                document.getElementById('material-adicional-section').style.display = 'block';

            } else if (document.getElementById('digital').checked) {
                uncheckOption('formato');
                uncheckOption('material-adicional-sn');  
                eraseChildText('material-adicional-section');
                document.getElementById('formato-fisico').style.display = 'none';
                document.getElementById('material-adicional-section').style.display = 'none';
                document.getElementById('formato-digital').style.display = 'block';
            } else  {
                document.getElementById('formato-fisico').style.display = 'none';
                document.getElementById('formato-digital').style.display = 'none';
            }      
        })   
    })

// codigos-section

document.querySelectorAll('input[name="codigos_ckbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function () {

        if (document.getElementById('cdd_ckbox').checked) {
            document.getElementById('codigo-cdd').style.display = 'block' 
        } else {
            document.getElementById('codigo-cdd').style.display = 'none'
        }

        if (document.getElementById('cdu_ckbox').checked) {
            document.getElementById('codigo-cdu').style.display = 'block'
        } else {
            document.getElementById('codigo-cdu').style.display = 'none'
        }

        if (document.getElementById('cutter_ckbox').checked) {
            document.getElementById('codigo-cutter').style.display = 'block' 
        } else {
            document.getElementById('codigo-cutter').style.display = 'none'
        }

        if (document.getElementById('pha_ckbox').checked) {
            document.getElementById('codigo-pha').style.display = 'block' 
        } else {
            document.getElementById('codigo-pha').style.display = 'none'
        }
    })
})

    /* Licensa Section */

    document.querySelectorAll('input[name="cc_radio"]').forEach(radio => {
        radio.addEventListener('change', function () {
    
        localStorage.setItem("licenca", document.querySelector('input[name="cc_radio"]:checked')?.value); 
        console.log(`licenca salva em localStorage: ${localStorage.getItem("licenca")}`);
    

    })
})

// resp-int-section

document.querySelectorAll('input[name="resp-int"]').forEach(radio => {
    radio.addEventListener('change', function () {

        uncheckOption('pessoa-tipo');
        uncheckOption('pessoa-qtd');
        eraseChildText('pessoa-section');
        eraseChildText('entidade-section');
        eraseChildText('evento-section');

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

document.querySelectorAll('input[name="pessoa-tipo"]').forEach(radio => {
    radio.addEventListener('change', function () {
           
        uncheckOption('pessoa-qtd');
        uncheckOption('pessoa-mais');
        eraseChildText('pessoa-section');

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

        uncheckOption('pessoa-qtd');
        eraseChildText('pessoa-outra');

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

        eraseChildText('pessoa-outra');

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

        eraseChildText('ilustrador-section');
           
        if (document.getElementById('ilustrador').checked) {
            document.getElementById('ilustrador-section').style.display = 'block';
            document.getElementById('ilustrador-mais').style.display = 'block';

        } else {
            document.getElementById('ilustrador-section').style.display = 'none';
            document.getElementById('ilustrador-mais').style.display = 'none';
            document.getElementById('ilustrador-qtd').style.display = 'none';
            document.getElementById('ilustrador-outro').style.display = 'none';             
        } 
    })

    //ilustrador-mais
    
    document.querySelectorAll('input[name="ilustrador-mais"]').forEach(radio => {
        radio.addEventListener('change', function () {

            uncheckOption('ilustrador-qtd');
            eraseChildText('ilustrador-outro');

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

            eraseChildText('ilustrador-outro');    
    
            if (document.getElementById('ilustrador-qtd-2').checked) {
                document.getElementById('ilustrador-outro').style.display = 'block';
                document.getElementById('ilustrador-segundo').style.display = 'block';
                document.getElementById('ilustrador-terceiro').style.display = 'none';
                document.getElementById('ilustrador-quarto').style.display = 'none';
            } else if (document.getElementById('ilustrador-qtd-3').checked) {
                document.getElementById('ilustrador-outro').style.display = 'block';
                document.getElementById('ilustrador-segundo').style.display = 'block';
                document.getElementById('ilustrador-terceiro').style.display = 'block';
                document.getElementById('ilustrador-quarto').style.display = 'none';
            } else if (document.getElementById('ilustrador-qtd-4').checked) {
                document.getElementById('ilustrador-outro').style.display = 'block'
                document.getElementById('ilustrador-segundo').style.display = 'none';
                document.getElementById('ilustrador-terceiro').style.display = 'none';
                document.getElementById('ilustrador-quarto').style.display = 'block';
            } else {
                document.getElementById('ilustrador-outro').style.display = 'none';

            }
        });
    });



//TRADUTOR

document.getElementById('tradutor').addEventListener('change', function () {
    

    eraseChildText('tradutor-section');
           
    if (document.getElementById('tradutor').checked) {
        document.getElementById('tradutor-section').style.display = 'block';
        document.getElementById('tradutor-mais').style.display = 'block';

    } else   {
        document.getElementById('tradutor-section').style.display = 'none';
        document.getElementById('tradutor-mais').style.display = 'none';
        document.getElementById('tradutor-qtd').style.display = 'none';
        document.getElementById('tradutor-outro').style.display = 'none';               
    } 
})



    //tradutor-mais
    
    document.querySelectorAll('input[name="tradutor-mais"]').forEach(radio => {
        radio.addEventListener('change', function () {

            uncheckOption('tradutor-qtd');
            eraseChildText('tradutor-outro');

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

            eraseChildText('tradutor-outro');    
    
            if (document.getElementById('tradutor-qtd-2').checked) {
                document.getElementById('tradutor-outro').style.display = 'block';
                document.getElementById('tradutor-terceiro').style.display = 'none';
                document.getElementById('tradutor-quarto').style.display = 'none';
            } else if (document.getElementById('tradutor-qtd-3').checked) {
                document.getElementById('tradutor-outro').style.display = 'block';
                document.getElementById('tradutor-segundo').style.display = 'block';
                document.getElementById('tradutor-terceiro').style.display = 'block';
                document.getElementById('tradutor-quarto').style.display = 'none';
            } else if (document.getElementById('tradutor-qtd-4').checked) {
                document.getElementById('tradutor-outro').style.display = 'block';
                document.getElementById('tradutor-segundo').style.display = 'none';
                document.getElementById('tradutor-terceiro').style.display = 'none';
                document.getElementById('tradutor-quarto').style.display = 'block';
            } else {
                document.getElementById('tradutor-outro').style.display = 'none';
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
                eraseChildText('paginacao-nao-numerada-section');
                uncheckOption('pag-certeza');
                document.getElementById('paginacao-numerada').style.display = 'block';
                document.getElementById('paginacao-nao-numerada').style.display = 'none';
            } else if (document.getElementById('pag-sem-num').checked) {
                eraseChildText('paginacao-numerada-section');
                uncheckOption('pag-outra');
                uncheckOption('pag-ou-folha');
                document.getElementById('paginacao-numerada').style.display = 'none';
                document.getElementById('paginacao-lamina').style.display = 'none';
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

            eraseChildText('paginacao-romana');
            eraseChildText('paginacao-lamina');

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
                eraseChildText('folha-lamina');
                document.getElementById('pagina-lamina').style.display = 'block';
                document.getElementById('folha-lamina').style.display = 'none';
                } else if (document.getElementById('folha').checked) {
                    eraseChildText('pagina-lamina');
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

                    eraseChildText('material-adicional');

                if (document.getElementById('material-adicional-sim').checked) {
                    document.getElementById('material-adicional').style.display = 'block';
                } else {
                    document.getElementById('material-adicional').style.display = 'none';
                }
            });
        });
       
    //ÁREA DE SÉRIE

    // Serie - sim ou não
    
    document.querySelectorAll('input[name="serie-sn"]').forEach(radio => {
        radio.addEventListener('change', function () {

            uncheckOption('subserie-sn');
            eraseChildText('serie-section');

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

            eraseChildText('subserie');

            if (document.getElementById('subserie-sim').checked) {
                document.getElementById('subserie').style.display = 'block';
            } else {
                document.getElementById('subserie').style.display = 'none';
            }
        });
    });

    //ÁREA DE NOTAS

    // ISBN - sim ou não
    
    document.querySelectorAll('input[name="isbn-sn"]').forEach(radio => {
        radio.addEventListener('change', function () {

            uncheckOption('isbn-2-sn');
            eraseChildText('isbn-section');

            if (document.getElementById('isbn-sim').checked) {
                document.getElementById('isbn').style.display = 'block';
                document.getElementById('isbn-2-sn').style.display = 'block';
            } else {
                document.getElementById('isbn').style.display = 'none';
                document.getElementById('isbn-2-sn').style.display = 'none';
                document.getElementById('isbn-outro').style.display = 'none';
            }
        });
    });

    // ISBN-2 - sim ou não

    document.querySelectorAll('input[name="isbn-2-sn"]').forEach(radio => {
        radio.addEventListener('change', function () {

            eraseChildText('isbn-outro');

            if (document.getElementById('isbn-2-sim').checked) {
                document.getElementById('isbn-outro').style.display = 'block';
            } else {
                document.getElementById('isbn-outro').style.display = 'none';
            }
        });
    });



        // Nota - sim ou não
    
        document.querySelectorAll('input[name="nota-sn"]').forEach(radio => {
            radio.addEventListener('change', function () {

                eraseChildText('nota');

                if (document.getElementById('nota-sim').checked) {
                    document.getElementById('nota').style.display = 'block';
                    document.getElementById('nota-2-sn').style.display = 'block';
                } else {
                    document.getElementById('nota').style.display = 'none';
                    document.getElementById('nota-2-sn').style.display = 'none';
                }
            });
        });
    
        // Segunda nota - sim ou não
    
        document.querySelectorAll('input[name="nota-2-sn"]').forEach(radio => {
            radio.addEventListener('change', function () {

                eraseChildText('nota-outro');

                if (document.getElementById('nota-2-sim').checked) {
                    document.getElementById('nota-outro').style.display = 'block';
                } else {
                    document.getElementById('nota-outro').style.display = 'none';
                }
            });
        });
    




     // SALVA DADOS - adicionando o evento 'input' para todos os campos do formulário
     document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll('#ficcat input[type="text"]').forEach(campo => {
           campo.addEventListener("input", saveData);
           });   
        })


// BOTÕES


// Botão Gera Ficha

document.getElementById("btn_gf").addEventListener("click", function () {

geraFicha();
    
})

// Botão Abrir Página
document.getElementById("btn_ap").addEventListener("click", function () {
    // Redireciona para a4.html
    //window.location.href = "a4.html"; // substitui a página atual
    console.log("Botão Abrir Página acionado");
    window.open("a4.html", "_blank");
    console.log("janela aberta");
    

});

// Controles de fonte

document.addEventListener('DOMContentLoaded', function() {
    const fontSelect = document.getElementById('font-select');
    const fontSizeInput = document.getElementById('font-size');
    const fichaAqui = document.getElementById('ficha_aqui');
    const codigosAqui = document.getElementById('codigos_aqui');

    fontSelect.addEventListener('change', function() {
        fichaAqui.style.fontFamily = fontSelect.value;
        localStorage.setItem("fontSelect", fontSelect.value);
    });

    fontSizeInput.addEventListener('input', function() {
        fichaAqui.style.fontSize = fontSizeInput.value + 'px';
        localStorage.setItem("fontSizeInput", fontSizeInput.value);
    });

    fontSizeInput.addEventListener('input', function() {
        codigosAqui.style.fontSize = (fontSizeInput.value - 1) + 'px';
        
    });

        

});