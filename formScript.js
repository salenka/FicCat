import { uncheckOption, updateTipoPessoa, eraseChildText, saveData, geraFicha, geraPDF, removeRequiredInput } from './functions.js';

alert("Funcionando");


document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os campos de input que possuem o atributo required
    const requiredFields = document.querySelectorAll('input[required], select[required], textarea[required]');
    // Adiciona um manipulador de eventos "blur" a cada campo obrigatório
    requiredFields.forEach(field => {
        field.addEventListener('blur', function () {
            if (!field.checkValidity()) {
                field.classList.add('invalid-field')
            } else {
                field.classList.remove('invalid-field');
            }
        })
    })
})

// materialidade

document.querySelectorAll('input[name="materia"]').forEach(radio => {
    radio.addEventListener('change', function () {

        if (document.getElementById('fisico').checked) {
            eraseChildText('materialidade');

            document.getElementById('formato-fisico-section').style.display = 'block';
            
            document.getElementById('formato-digital').style.display = 'none';
            document.getElementById('extensao').removeAttribute('required','required');

            document.getElementById('material-adicional-section').style.display = 'block';

        } else if (document.getElementById('digital').checked) {
            uncheckOption('formato');
            uncheckOption('material-adicional-sn');
            eraseChildText('material-adicional-section');

            document.getElementById('formato-digital').style.display = 'block';
            document.getElementById('extensao').setAttribute('required','required');

            document.getElementById('formato-fisico-section').style.display = 'none';
            document.getElementById('material-adicional-section').style.display = 'none';
            
        } else {
            document.getElementById('formato-fisico-section').style.display = 'none';
            
            document.getElementById('formato-digital').style.display = 'none';
            document.getElementById('extensao').removeAttribute('required','required');

        }
    })
})

// CODIGOS OPCIONAIS

document.querySelectorAll('input[name="codigos-ckbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function () {

        if (document.getElementById('cdd-ckbox').checked) {
            document.getElementById('codigo-cdd').style.display = 'block'
        } else {
            document.getElementById('codigo-cdd').style.display = 'none'
        }

        if (document.getElementById('cdu-ckbox').checked) {
            document.getElementById('codigo-cdu').style.display = 'block'
        } else {
            document.getElementById('codigo-cdu').style.display = 'none'
        }

        if (document.getElementById('cutter-ckbox').checked) {
            document.getElementById('codigo-cutter').style.display = 'block'
        } else {
            document.getElementById('codigo-cutter').style.display = 'none'
        }

        if (document.getElementById('pha-ckbox').checked) {
            document.getElementById('codigo-pha').style.display = 'block'
        } else {
            document.getElementById('codigo-pha').style.display = 'none'
        }
    })
})

// LICENCA - Salva em localStorage

document.querySelectorAll('input[name="cc-radio"]').forEach(radio => {
    radio.addEventListener('change', function () {

        localStorage.setItem("licenca", document.querySelector('input[name="cc-radio"]:checked')?.value);
        console.log(`licenca salva em localStorage: ${localStorage.getItem("licenca")}`);


    })
})

/*
// CREDITOS - Salva em localStorage

    let creditos = document.getElementById("creditos").value;
    document.addEventListener("change", function () {
        localStorage.setItem('creditos', JSON.stringify(creditos));
    })

    */

// RESPONSABILIDADE INTELECTUAL

document.querySelectorAll('input[name="resp-int"]').forEach(radio => {
    radio.addEventListener('change', function () {

        uncheckOption('pessoa-tipo');
        uncheckOption('pessoa-qtd');
        eraseChildText('pessoa-section');
        eraseChildText('entidade-section');
        eraseChildText('evento-section');
        removeRequiredInput('resp-int-section');

        if (document.getElementById('pessoa').checked) {
            document.getElementById('pessoa-section').style.display = 'block';
            document.getElementById('entidade-section').style.display = 'none';
            document.getElementById('evento-section').style.display = 'none';

        } else if (document.getElementById('entidade').checked) {
            document.getElementById('pessoa-section').style.display = 'none';
            document.getElementById('entidade-section').style.display = 'block';
            document.getElementById('evento-section').style.display = 'none';

            document.getElementById('entidade-nome').setAttribute('required', 'required');


        } else if (document.getElementById('evento').checked) {
            document.getElementById('pessoa-section').style.display = 'none';
            document.getElementById('entidade-section').style.display = 'none';
            document.getElementById('evento-section').style.display = 'block';

            document.getElementById('evento-nome').setAttribute('required', 'required');
            document.getElementById('evento-ano').setAttribute('required', 'required');
            document.getElementById('evento-local').setAttribute('required', 'required');

        }
    });
});

// PESSOA

document.querySelectorAll('input[name="pessoa-tipo"]').forEach(radio => {
    radio.addEventListener('change', function () {

        uncheckOption('pessoa-qtd');
        uncheckOption('pessoa-sn');
        eraseChildText('pessoa-section');
        removeRequiredInput('pessoa-section'); //motherDivId

        if (document.getElementById('autor').checked) {
            document.getElementById('autor-section').style.display = 'block';
            document.getElementById('organizador-section').style.display = 'none';
            document.getElementById('coordenador-section').style.display = 'none';
            document.getElementById('compilador-section').style.display = 'none';
            document.getElementById('editor-section').style.display = 'none';
            document.getElementById('pessoa-sn').style.display = 'block';

            document.getElementById('nome').setAttribute('required', 'required');

        } else if (document.getElementById('organizador').checked) {
            document.getElementById('autor-section').style.display = 'none';
            document.getElementById('organizador-section').style.display = 'block';//não está mostrando
            document.getElementById('coordenador-section').style.display = 'none';
            document.getElementById('compilador-section').style.display = 'none';
            document.getElementById('editor-section').style.display = 'none';
            document.getElementById('pessoa-sn').style.display = 'block';

            document.getElementById('organizador-nome').setAttribute('required', 'required');

        } else if (document.getElementById('coordenador').checked) {
            document.getElementById('autor-section').style.display = 'none';
            document.getElementById('organizador-section').style.display = 'none';
            document.getElementById('coordenador-section').style.display = 'block';
            document.getElementById('compilador-section').style.display = 'none';
            document.getElementById('editor-section').style.display = 'none';
            document.getElementById('pessoa-sn').style.display = 'block';

            document.getElementById('coordenador-nome').setAttribute('required', 'required');

        } else if (document.getElementById('compilador').checked) {
            document.getElementById('autor-section').style.display = 'none';
            document.getElementById('organizador-section').style.display = 'none';
            document.getElementById('coordenador-section').style.display = 'none';
            document.getElementById('compilador-section').style.display = 'block';
            document.getElementById('editor-section').style.display = 'none';
            document.getElementById('pessoa-sn').style.display = 'block';

            document.getElementById('compilador-nome').setAttribute('required', 'required');

        } else if (document.getElementById('editor').checked) {
            document.getElementById('autor-section').style.display = 'none';
            document.getElementById('organizador-section').style.display = 'none';
            document.getElementById('coordenador-section').style.display = 'none';
            document.getElementById('compilador-section').style.display = 'none';
            document.getElementById('editor-section').style.display = 'block';
            document.getElementById('pessoa-sn').style.display = 'block';

            document.getElementById('editor-nome').setAttribute('required', 'required');

        } else {
            document.getElementById('autor-section').style.display = 'none';
            document.getElementById('organizador-section').style.display = 'none';
            document.getElementById('coordenador-section').style.display = 'none';
            document.getElementById('compilador-section').style.display = 'none';
            document.getElementById('editor-section').style.display = 'none';
            document.getElementById('pessoa-sn').style.display = 'none';

        }
    });

    document.querySelectorAll('input[name="pessoa-tipo"]').forEach(radio => {
        radio.addEventListener('change', updateTipoPessoa);
    });

});

//pessoa-sn

document.querySelectorAll('input[name="pessoa-sn"]').forEach(radio => {
    radio.addEventListener('change', function () {

        uncheckOption('pessoa-qtd');
        eraseChildText('pessoa-outro');

        if (document.getElementById('sim').checked) {
            document.getElementById('pessoa-qtd').style.display = 'block';
        } else {
            document.getElementById('pessoa-qtd').style.display = 'none';
        }
    });
});

// pessoa-outro

document.querySelectorAll('input[name="pessoa-qtd"]').forEach(radio => {
    radio.addEventListener('change', function () {

        eraseChildText('pessoa-outro');

        if (document.getElementById('pessoa-qtd-2').checked) {
            document.getElementById('pessoa-outro').style.display = 'block';
            document.getElementById('pessoa-segundo').style.display = 'block';
            document.getElementById('pessoa-terceiro').style.display = 'none';
            document.getElementById('pessoa-quarto').style.display = 'none';
        } else if (document.getElementById('pessoa-qtd-3').checked) {
            document.getElementById('pessoa-outro').style.display = 'block';
            document.getElementById('pessoa-segundo').style.display = 'block';
            document.getElementById('pessoa-terceiro').style.display = 'block';
            document.getElementById('pessoa-quarto').style.display = 'none';
        } else if (document.getElementById('pessoa-qtd-4').checked) {
            document.getElementById('pessoa-outro').style.display = 'block';
            document.getElementById('pessoa-segundo').style.display = 'none';
            document.getElementById('pessoa-terceiro').style.display = 'none';
            document.getElementById('pessoa-quarto').style.display = 'block';
        } else {
            document.getElementById('pessoa-segundo').style.display = 'none';
            document.getElementById('pessoa-terceiro').style.display = 'none';
            document.getElementById('pessoa-quarto').style.display = 'none';
        }
    });
});

// CONTRIBUIDORES - ILUSTRADOR

document.getElementById('ilustrador').addEventListener('change', function () {

    eraseChildText('ilustrador-section');

    if (document.getElementById('ilustrador').checked) {
        document.getElementById('ilustrador-section').style.display = 'block';
        document.getElementById('ilustrador-sn').style.display = 'block';

        document.getElementById('ilustrador-nome').setAttribute('required', 'required');

    } else {
        document.getElementById('ilustrador-section').style.display = 'none';
        document.getElementById('ilustrador-sn').style.display = 'none';
        document.getElementById('ilustrador-qtd').style.display = 'none';
        document.getElementById('ilustrador-outro').style.display = 'none';

        document.getElementById('ilustrador-nome').removeAttribute('required');
    }
})

//ilustrador-sn

document.querySelectorAll('input[name="ilustrador-sn"]').forEach(radio => {
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

//outro-ilustrador

document.querySelectorAll('input[name="ilustrador-qtd"]').forEach(radio => {
    radio.addEventListener('change', function () {

        eraseChildText('ilustrador-outro');
        removeRequiredInput('ilustrador-outro');

        if (document.getElementById('ilustrador-qtd-2').checked) {
            document.getElementById('ilustrador-outro').style.display = 'block';
            document.getElementById('ilustrador-segundo').style.display = 'block';
            document.getElementById('ilustrador-terceiro').style.display = 'none';
            document.getElementById('ilustrador-quarto').style.display = 'none';

            document.getElementById('ilustrador-segundo').setAttribute('required', 'required');

        } else if (document.getElementById('ilustrador-qtd-3').checked) {
            document.getElementById('ilustrador-outro').style.display = 'block';
            document.getElementById('ilustrador-segundo').style.display = 'block';
            document.getElementById('ilustrador-terceiro').style.display = 'block';
            document.getElementById('ilustrador-quarto').style.display = 'none';

            document.getElementById('ilustrador-segundo').setAttribute('required', 'required');
            document.getElementById('ilustrador-terceiro').setAttribute('required', 'required');

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

// CONTRIBUIDORES - TRADUTOR

document.getElementById('tradutor').addEventListener('change', function () {


    eraseChildText('tradutor-section');

    if (document.getElementById('tradutor').checked) {
        document.getElementById('tradutor-section').style.display = 'block';
        document.getElementById('tradutor-sn').style.display = 'block';

        document.getElementById('tradutor-nome').setAttribute('required', 'required');

    } else {
        document.getElementById('tradutor-section').style.display = 'none';
        document.getElementById('tradutor-sn').style.display = 'none';
        document.getElementById('tradutor-qtd').style.display = 'none';
        document.getElementById('tradutor-outro').style.display = 'none';

        document.getElementById('tradutor-nome').removeAttribute('required', 'required');
    }
})

//tradutor-sn

document.querySelectorAll('input[name="tradutor-sn"]').forEach(radio => {
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

//outro-tradutor

document.querySelectorAll('input[name="tradutor-qtd"]').forEach(radio => {
    radio.addEventListener('change', function () {

        eraseChildText('tradutor-outro');
        removeRequiredInput('tradutor-outro');

        if (document.getElementById('tradutor-qtd-2').checked) {
            document.getElementById('tradutor-outro').style.display = 'block';
            document.getElementById('tradutor-terceiro').style.display = 'none';
            document.getElementById('tradutor-quarto').style.display = 'none';

            document.getElementById('tradutor-segundo').setAttribute('required', 'required');

        } else if (document.getElementById('tradutor-qtd-3').checked) {
            document.getElementById('tradutor-outro').style.display = 'block';
            document.getElementById('tradutor-segundo').style.display = 'block';
            document.getElementById('tradutor-terceiro').style.display = 'block';
            document.getElementById('tradutor-quarto').style.display = 'none';

            document.getElementById('tradutor-segundo').setAttribute('required', 'required');
            document.getElementById('tradutor-terceiro').setAttribute('required', 'required');

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

// PUBLICADORES

//publicador-sn

document.querySelectorAll('input[name="publicador-sn"]').forEach(radio => {
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
            document.getElementById('pag-num-qtd').setAttribute('required', 'required');

            document.getElementById('paginacao-nao-numerada').style.display = 'none';
            document.getElementById('pag-nao-num-qtd').removeAttribute('required', 'required');

        } else if (document.getElementById('pag-sem-num').checked) {

            eraseChildText('paginacao-numerada-section');
            removeRequiredInput('paginacao-numerada-section');

            uncheckOption('pag-outra');
            uncheckOption('pag-ou-folha');

            document.getElementById('paginacao-nao-numerada').style.display = 'block';
            document.getElementById('pag-nao-num-qtd').setAttribute('required', 'required');

            document.getElementById('paginacao-numerada').style.display = 'none';
            document.getElementById('pag-num-qtd').removeAttribute('required', 'required');

        } else {

            document.getElementById('paginacao-numerada').style.display = 'none';
            document.getElementById('paginacao-nao-numerada').style.display = 'none';

            document.getElementById('pag-num-qtd').removeAttribute('required', 'required');
            document.getElementById('pag-nao-num-qtd').removeAttribute('required', 'required');
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
            document.getElementById('pag-romana-qtd').setAttribute('required', 'required');

        } else {
            document.getElementById('paginacao-romana').style.display = 'none';
            document.getElementById('pag-romana-qtd').removeAttribute('required', 'required');
        }

        // Checkbox laminas
        if (document.getElementById('pag-lamina').checked) {

            document.getElementById('paginacao-lamina').style.display = 'block';

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
            document.getElementById('pag-lamina-qtd').setAttribute('required', 'required');

            document.getElementById('folha-lamina').style.display = 'none';
            document.getElementById('folha-lamina-qtd').removeAttribute('required', 'required');


        } else if (document.getElementById('folha').checked) {
            eraseChildText('pagina-lamina');

            document.getElementById('folha-lamina').style.display = 'block';
            document.getElementById('folha-lamina-qtd').setAttribute('required', 'required');

            document.getElementById('pagina-lamina').style.display = 'none';
            document.getElementById('pag-lamina-qtd').removeAttribute('required', 'required');  
            
        } else {
            document.getElementById('pagina-lamina').style.display = 'none';
            document.getElementById('folha-lamina').style.display = 'none';

            document.getElementById('pag-lamina-qtd').removeAttribute('required', 'required');
            document.getElementById('folha-lamina-qtd').removeAttribute('required', 'required');
            
        }
    });
});

//IMAGENS  

document.querySelectorAll('input[name="imagem"]').forEach(radio => {
    radio.addEventListener('change', function () {
        if (document.getElementById('imagem-sim').checked) {
            document.getElementById('imagem-tipo').style.display = 'block';
            document.getElementsByName('imagem-tipo').setAttribute('required', 'required')
            

        } else {
            document.getElementById('imagem-tipo').style.display = 'none';
        }
    });
});

//Checkbox ILUSTRAÇÕES
document.getElementById('img-ilustracoes').addEventListener('change', function () {

    if (document.getElementById('img-ilustracoes').checked) {

        document.getElementById('il-coloracao').style.display = 'block';
        

    } else {
        document.getElementById('il-coloracao').style.display = 'none';
    }
})

//Checkbox FOTOS
document.getElementById('img-fotos').addEventListener('change', function () {

    if (document.getElementById('img-fotos').checked) {
        document.getElementById('fotos-coloracao').style.display = 'block';
    } else {
        document.getElementById('fotos-coloracao').style.display = 'none';
    }
})

//Checkbox MAPAS
document.getElementById('img-mapas').addEventListener('change', function () {

    if (document.getElementById('img-mapas').checked) {
        document.getElementById('mapas-coloracao').style.display = 'block';
    } else {
        document.getElementById('mapas-coloracao').style.display = 'none';
    }
})

//FORMATO

// FORMATO-FÍSICO
document.querySelectorAll('input[name="formato"]').forEach(radio => {
    radio.addEventListener('change', function () {

        eraseChildText('formato-fisico-section');

        if (document.getElementById('formato-trad').checked) {

            document.getElementById('formato-tradicional').style.display = 'block';
            document.getElementById('altura').setAttribute('required', 'required');

            document.getElementById('formato-nao-tradicional').style.display = 'none';
            document.getElementById('largura').removeAttribute('required', 'required');

        } else if (document.getElementById('formato-nao-trad').checked) {

            document.getElementById('formato-tradicional').style.display = 'block';
            document.getElementById('largura').setAttribute('required', 'required');
            document.getElementById('formato-nao-tradicional').style.display = 'block';
            document.getElementById('altura').setAttribute('required', 'required');

        } else {
            document.getElementById('formato-tradicional').style.display = 'none';
            document.getElementById('formato-nao-tradicional').style.display = 'none';

            document.getElementById('largura').removeAttribute('required', 'required');
            document.getElementById('altura').removeAttribute('required', 'required');
        }
    });
})

// MATERIAL Adicional

document.querySelectorAll('input[name="material-adicional-sn"]').forEach(radio => {
    radio.addEventListener('change', function () {

        eraseChildText('material-adicional');

        if (document.getElementById('material-adicional-sim').checked) {
            document.getElementById('material-adicional').style.display = 'block';
            document.getElementById('material-adicional-tipo').setAttribute('required', 'required');

        } else {
            document.getElementById('material-adicional').style.display = 'none';
            document.getElementById('material-adicional-tipo').removeAttribute('required', 'required');
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
            document.getElementById('serie-nome').setAttribute('required', 'required');

            document.getElementById('subserie-sn').style.display = 'block';

        } else {

            document.getElementById('serie').style.display = 'none';
            document.getElementById('serie-nome').removeAttribute('required', 'required');

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
            document.getElementById('subserie-nome').setAttribute('required', 'required');

        } else {

            document.getElementById('subserie').style.display = 'none';
            document.getElementById('subserie-nome').removeAttribute('required', 'required');
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
            document.getElementById('isbn-1').setAttribute('required', 'required');

            document.getElementById('isbn-2-sn').style.display = 'block';

        } else {

            document.getElementById('isbn').style.display = 'none';
            document.getElementById('isbn-1').removeAttribute('required', 'required');

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

            document.getElementById('qualificador-1').setAttribute('required', 'required');
            document.getElementById('isbn-2').setAttribute('required', 'required');
            document.getElementById('qualificador-2').setAttribute('required', 'required');
            

        } else {

            document.getElementById('isbn-outro').style.display = 'none';

            document.getElementById('qualificador-1').removeAttribute('required', 'required');
            document.getElementById('isbn-2').removeAttribute('required', 'required');
            document.getElementById('qualificador-2').removeAttribute('required', 'required');
        }
    });
});

// Nota - sim ou não

document.querySelectorAll('input[name="nota-sn"]').forEach(radio => {
    radio.addEventListener('change', function () {

        eraseChildText('nota');

        if (document.getElementById('nota-sim').checked) {

            document.getElementById('nota').style.display = 'block';
            document.getElementById('nota-1').setAttribute('required', 'required');

            document.getElementById('nota-2-sn').style.display = 'block';

        } else {

            document.getElementById('nota').style.display = 'none';
            document.getElementById('nota-1').removeAttribute('required', 'required')
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
            document.getElementById('nota-2').setAttribute('required', 'required');

        } else {

            document.getElementById('nota-outro').style.display = 'none';
            document.getElementById('nota-2').removeAttribute('required', 'required');  
        }
    });
});

// JavaScript para limitar a quantidade máxima de linhas
document.getElementById('creditos').addEventListener('input', function () {
    const maxLines = 20;
    const textarea = this;
    const lines = textarea.value.split('\n');

    if (lines.length > maxLines) {
        textarea.value = lines.slice(0, maxLines).join('\n');
    }
});

// SALVA DADOS - adicionando o evento 'input' para todos os campos do formulário
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('#card-form input[type="text"]').forEach(campo => {
        campo.addEventListener("input", saveData);
    });
})


// BOTÕES


// Botão Gera Ficha
// validação de inputs de texto
document.getElementById("btn-card").addEventListener("click", function (event) {

    let formIsValid = true;
    const requiredFields = document.querySelectorAll('input[required], select[required], textarea[required]');
    requiredFields.forEach(field => {
        if (!field.checkValidity()) {
            field.classList.add('invalid-field');
            formIsValid = false;
        } else {
            field.classList.remove('invalid-field');
        }
    });

// validaçao de radios

        // Verifica se pelo menos um radio button está selecionado
        const radioGroups = document.querySelectorAll('input[type="radio"][required]');
        let radioSelected = false;
        radioGroups.forEach(radio => {
            if (radio.checked) {
                radioSelected = true;
            }
        });

        if (!radioSelected) { //só executa se TRUE
            formIsValid = false;
            radioGroups.forEach(radio => {
                radio.classList.add('invalid-radio');
            });
            //alert('Por favor, selecione uma das opções obrigatórias.');
        } else {
            radioGroups.forEach(radio => {
                radio.classList.remove('invalid-radio');
            });
        }

//daqui pra baixo vale pra inputs de texto e radio tb

    if (!formIsValid) {  //só executa se TRUE
        event.preventDefault(); // Impede o envio do formulário se houver campos inválidos
        alert('Por favor, preencha todos os campos obrigatórios.');
    } else {
        geraFicha();
    }
})

// Botão Abrir PDF
document.getElementById("btn-pdf").addEventListener("click", function () {

    geraPDF();


});

// Botão Abrir HTML A4

document.getElementById("btn-A4").addEventListener("click", function () {

    console.log("Botão Abrir Página acionado");
    window.open("a4.html", "_blank");
    console.log("janela aberta");


});

// Controles de fonte

document.addEventListener('DOMContentLoaded', function () {
    const fontSelect = document.getElementById('font-select');
    const fontSizeInput = document.getElementById('font-size');
    const fichaAqui = document.getElementById('ficha-aqui');
    const codigosAqui = document.getElementById('codigos-aqui');

    fontSelect.addEventListener('change', function () {
        fichaAqui.style.fontFamily = fontSelect.value;
        localStorage.setItem("fontSelect", fontSelect.value);
    });

    fontSizeInput.addEventListener('input', function () {
        fichaAqui.style.fontSize = fontSizeInput.value + 'px';
        localStorage.setItem("fontSizeInput", fontSizeInput.value);
    });

    fontSizeInput.addEventListener('input', function () {
        codigosAqui.style.fontSize = (fontSizeInput.value - 1) + 'px';

    });
});