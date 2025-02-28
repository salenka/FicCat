import { uncheckOption, updateTipoPessoa, eraseAllChildTextOf, saveData, geraFicha, removeRequiredFromAllChildTextOf, setRequiredRadioFor, removeRequiredRadioFrom, geraPNG } from './functions.js';
import { getBibliotecario, getServico } from './cardScript.js'

// suporte

document.querySelectorAll('input[name="suporte"]').forEach(radio => {
    radio.addEventListener('change', function () {

        if (document.getElementById('fisico').checked) {

            document.getElementById('formato-fisico-section').style.display = 'block';
            setRequiredRadioFor('formato');

            document.getElementById('material-adicional-section').style.display = 'block';
            setRequiredRadioFor('material-adicional-sn');

            document.getElementById('suporte-digital').style.display = 'none';
            eraseAllChildTextOf('suporte-digital');
            removeRequiredFromAllChildTextOf('suporte-digital');


        } else if (document.getElementById('digital').checked) {

            document.getElementById('suporte-digital').style.display = 'block';
            document.getElementById('extensao').setAttribute('required', 'required');

            uncheckOption('formato');
            removeRequiredRadioFrom('formato');

            document.getElementById('formato-fisico-section').style.display = 'none';
            eraseAllChildTextOf('formato-fisico-section');
            removeRequiredFromAllChildTextOf('formato-tradicional');
            removeRequiredFromAllChildTextOf('formato-nao-tradicional');

            uncheckOption('material-adicional-sn');
            removeRequiredRadioFrom('material-adicional-sn');

            document.getElementById('material-adicional-section').style.display = 'none';
            eraseAllChildTextOf('material-adicional-section');
            removeRequiredRadioFrom('material-adicional-section');

            //eraseAllChildTextOf('material-adicional');


        } else {
            document.getElementById('formato-fisico-section').style.display = 'none';

            document.getElementById('suporte-digital').style.display = 'none';
            document.getElementById('extensao').removeAttribute('required', 'required');

        }
    })
})

// Códigos de catalogação
document.querySelectorAll('input[name="codigos-ckbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function () {

        if (document.getElementById('cdd-ckbox').checked) {

            document.getElementById('codigo-cdd').style.display = 'block';
            document.getElementById('cdd').setAttribute('required', 'required');

        } else {

            document.getElementById('codigo-cdd').style.display = 'none'
            document.getElementById('cdd').removeAttribute('required', 'required');
        }

        if (document.getElementById('cdu-ckbox').checked) {

            document.getElementById('codigo-cdu').style.display = 'block'
            document.getElementById('cdu').setAttribute('required', 'required');

        } else {

            document.getElementById('codigo-cdu').style.display = 'none'
            document.getElementById('cdu').removeAttribute('required', 'required');
        }

        if (document.getElementById('cutter-ckbox').checked) {

            document.getElementById('codigo-cutter').style.display = 'block'
            document.getElementById('cutter').setAttribute('required', 'required');

        } else {
            document.getElementById('codigo-cutter').style.display = 'none'
            document.getElementById('cutter').removeAttribute('required', 'required');
        }

        if (document.getElementById('pha-ckbox').checked) {

            document.getElementById('codigo-pha').style.display = 'block'
            document.getElementById('pha').setAttribute('required', 'required');

        } else {

            document.getElementById('codigo-pha').style.display = 'none'
            document.getElementById('pha').removeAttribute('required', 'required');
        }
    })
})

// RESPONSABILIDADE INTELECTUAL

document.querySelectorAll('input[name="resp-int"]').forEach(radio => {
    radio.addEventListener('change', function () {

        uncheckOption('pessoa-tipo');
        uncheckOption('pessoa-qtd');
        eraseAllChildTextOf('pessoa-section');
        eraseAllChildTextOf('entidade-section');
        eraseAllChildTextOf('evento-section');
        removeRequiredFromAllChildTextOf('resp-int-section');
        removeRequiredRadioFrom('pessoa-tipo')

        if (document.getElementById('pessoa').checked) {
            document.getElementById('pessoa-section').style.display = 'block';
            document.getElementById('entidade-section').style.display = 'none';
            document.getElementById('evento-section').style.display = 'none';

            setRequiredRadioFor('pessoa-tipo');

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

        } else {
            document.getElementById('pessoa-section').style.display = 'none';
            document.getElementById('entidade-section').style.display = 'none';
            document.getElementById('evento-section').style.display = 'none';
        }
    });
});


// PESSOA-TIPO

document.querySelectorAll('input[name="pessoa-tipo"]').forEach(radio => {
    radio.addEventListener('change', function () {

        uncheckOption('pessoa-qtd');
        removeRequiredRadioFrom('pessoa-qtd');
        uncheckOption('pessoa-sn');
        removeRequiredRadioFrom('pessoa-sn');
        eraseAllChildTextOf('pessoa-section');
        removeRequiredFromAllChildTextOf('pessoa-section');
        eraseAllChildTextOf('pessoa-outro');
        removeRequiredFromAllChildTextOf('pessoa-outro');

        document.getElementById('contribuidor-organizador').style.display = 'block';
        

        if (document.getElementById('autor').checked) {
            document.getElementById('autor-section').style.display = 'block';
            document.getElementById('organizador-section').style.display = 'none';
            document.getElementById('coordenador-section').style.display = 'none';
            document.getElementById('compilador-section').style.display = 'none';
            document.getElementById('editor-section').style.display = 'none';
            document.getElementById('pessoa-sn').style.display = 'block';


            document.getElementById('nome').setAttribute('required', 'required');
            document.getElementById('sobrenome').setAttribute('required', 'required')
            setRequiredRadioFor('pessoa-sn')

        } else if (document.getElementById('organizador').checked) {
            document.getElementById('autor-section').style.display = 'none';
            document.getElementById('organizador-section').style.display = 'block';
            document.getElementById('coordenador-section').style.display = 'none';
            document.getElementById('compilador-section').style.display = 'none';
            document.getElementById('editor-section').style.display = 'none';
            document.getElementById('pessoa-sn').style.display = 'block';

            document.getElementById('organizador-nome').setAttribute('required', 'required');
            setRequiredRadioFor('pessoa-sn');

            document.getElementById('contribuidor-organizador').style.display = 'none';
            eraseAllChildTextOf('contribuidor-organizador');
            removeRequiredFromAllChildTextOf('contribuidor-organizador');
            uncheckOption('organizador-sn');
            uncheckOption('organizador-qtd');
            removeRequiredRadioFrom('organizador-sn');
            removeRequiredRadioFrom('organizador-qtd');

        } else if (document.getElementById('coordenador').checked) {
            document.getElementById('autor-section').style.display = 'none';
            document.getElementById('organizador-section').style.display = 'none';
            document.getElementById('coordenador-section').style.display = 'block';
            document.getElementById('compilador-section').style.display = 'none';
            document.getElementById('editor-section').style.display = 'none';
            document.getElementById('pessoa-sn').style.display = 'block';

            document.getElementById('coordenador-nome').setAttribute('required', 'required');
            setRequiredRadioFor('pessoa-sn')

        } else if (document.getElementById('compilador').checked) {
            document.getElementById('autor-section').style.display = 'none';
            document.getElementById('organizador-section').style.display = 'none';
            document.getElementById('coordenador-section').style.display = 'none';
            document.getElementById('compilador-section').style.display = 'block';
            document.getElementById('editor-section').style.display = 'none';
            document.getElementById('pessoa-sn').style.display = 'block';

            document.getElementById('compilador-nome').setAttribute('required', 'required');
            setRequiredRadioFor('pessoa-sn')

        } else if (document.getElementById('editor').checked) {
            document.getElementById('autor-section').style.display = 'none';
            document.getElementById('organizador-section').style.display = 'none';
            document.getElementById('coordenador-section').style.display = 'none';
            document.getElementById('compilador-section').style.display = 'none';
            document.getElementById('editor-section').style.display = 'block';
            document.getElementById('pessoa-sn').style.display = 'block';

            document.getElementById('editor-nome').setAttribute('required', 'required');
            setRequiredRadioFor('pessoa-sn')

        } else {
            document.getElementById('autor-section').style.display = 'none';
            document.getElementById('organizador-section').style.display = 'none';
            document.getElementById('coordenador-section').style.display = 'none';
            document.getElementById('compilador-section').style.display = 'none';
            document.getElementById('editor-section').style.display = 'none';
            document.getElementById('pessoa-sn').style.display = 'none';
            document.getElementById('pessoa-outro').style.display = 'none';
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
        eraseAllChildTextOf('pessoa-outro');

        if (document.getElementById('sim').checked) {
            document.getElementById('pessoa-qtd').style.display = 'block';
            setRequiredRadioFor('pessoa-qtd')
        } else {
            document.getElementById('pessoa-qtd').style.display = 'none';
            removeRequiredRadioFrom('pessoa-qtd')
        }
    });
});

// pessoa-outro

document.querySelectorAll('input[name="pessoa-qtd"]').forEach(radio => {
    radio.addEventListener('change', function () {

        eraseAllChildTextOf('pessoa-outro');
        removeRequiredFromAllChildTextOf('pessoa-outro');
        


        if (document.getElementById('pessoa-qtd-2').checked) {
            document.getElementById('pessoa-outro').style.display = 'block';

            document.getElementById('pessoa-segundo').style.display = 'block';
            document.getElementById('pessoa-2').setAttribute('required', 'required');

            document.getElementById('pessoa-terceiro').style.display = 'none';
            document.getElementById('pessoa-quarto').style.display = 'none';

        } else if (document.getElementById('pessoa-qtd-3').checked) {
            document.getElementById('pessoa-outro').style.display = 'block';

            document.getElementById('pessoa-segundo').style.display = 'block';
            document.getElementById('pessoa-2').setAttribute('required', 'required');

            document.getElementById('pessoa-terceiro').style.display = 'block';
            document.getElementById('pessoa-3').setAttribute('required', 'required');

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

// CONTRIBUIDORES - APRESENTADOR

document.getElementById("apresentador-checkbox").addEventListener('change', function () {

    eraseAllChildTextOf('apresentador-primeiro');
    removeRequiredFromAllChildTextOf('apresentador-primeiro');
    eraseAllChildTextOf('apresentador-outro');
    removeRequiredFromAllChildTextOf('apresentador-outro');

    uncheckOption('apresentador-sn');
    removeRequiredRadioFrom('apresentador-sn');
    uncheckOption('apresentador-qtd');
    removeRequiredRadioFrom('apresentador-qtd');

    if (document.getElementById('apresentador-checkbox').checked) {
        document.getElementById('apresentador-primeiro').style.display = 'block';
        document.getElementById('apresentador-sn').style.display = 'block';

        document.getElementById('apresentador-1').setAttribute('required', 'required');
        setRequiredRadioFor('apresentador-sn')

    } else {
        document.getElementById('apresentador-primeiro').style.display = 'none';
        document.getElementById('apresentador-sn').style.display = 'none';
        document.getElementById('apresentador-qtd').style.display = 'none';
        document.getElementById('apresentador-outro').style.display = 'none';

        document.getElementById('apresentador-1').removeAttribute('required');
        removeRequiredRadioFrom('apresentador-sn')
    }
})

//apresentador-sn

document.querySelectorAll('input[name="apresentador-sn"]').forEach(radio => {
    radio.addEventListener('change', function () {

        document.getElementById('apresentador-outro').style.display = 'none';
        uncheckOption('apresentador-qtd');
        removeRequiredRadioFrom('apresentador-qtd');
        eraseAllChildTextOf('apresentador-outro');
        removeRequiredFromAllChildTextOf('apresentador-outro');

        if (document.getElementById('apresentador-sim').checked) {
            document.getElementById('apresentador-qtd').style.display = 'block';
            setRequiredRadioFor('apresentador-qtd');
        } else {
            document.getElementById('apresentador-qtd').style.display = 'none';
            removeRequiredRadioFrom('apresentador-qtd');
        }
    });
});

//outro-apresentador

document.querySelectorAll('input[name="apresentador-qtd"]').forEach(radio => {
    radio.addEventListener('change', function () {

        eraseAllChildTextOf('apresentador-outro');
        removeRequiredFromAllChildTextOf('apresentador-outro');

        if (document.getElementById('apresentador-qtd-2').checked) {
            document.getElementById('apresentador-outro').style.display = 'block';

            document.getElementById('apresentador-segundo').style.display = 'block';
            document.getElementById('apresentador-2').setAttribute('required', 'required');

            document.getElementById('apresentador-terceiro').style.display = 'none';
            document.getElementById('apresentador-quarto').style.display = 'none';


        } else if (document.getElementById('apresentador-qtd-3').checked) {
            document.getElementById('apresentador-outro').style.display = 'block';

            document.getElementById('apresentador-segundo').style.display = 'block';
            document.getElementById('apresentador-2').setAttribute('required', 'required');

            document.getElementById('apresentador-terceiro').style.display = 'block';
            document.getElementById('apresentador-3').setAttribute('required', 'required');

            document.getElementById('apresentador-quarto').style.display = 'none';

        } else if (document.getElementById('apresentador-qtd-4').checked) {
            document.getElementById('apresentador-outro').style.display = 'block'
            document.getElementById('apresentador-segundo').style.display = 'none';
            document.getElementById('apresentador-terceiro').style.display = 'none';
            document.getElementById('apresentador-quarto').style.display = 'block';

        } else {
            document.getElementById('apresentador-outro').style.display = 'none';
        }
    });
});


// CONTRIBUIDORES - ILUSTRADOR

document.getElementById("ilustrador-checkbox").addEventListener('change', function () {

    eraseAllChildTextOf('ilustrador-primeiro');
    removeRequiredFromAllChildTextOf('ilustrador-primeiro');
    eraseAllChildTextOf('ilustrador-outro');
    removeRequiredFromAllChildTextOf('ilustrador-outro');

    uncheckOption('ilustrador-sn');
    removeRequiredRadioFrom('ilustrador-sn');
    uncheckOption('ilustrador-qtd');
    removeRequiredRadioFrom('ilustrador-qtd');

    if (document.getElementById('ilustrador-checkbox').checked) {
        document.getElementById('ilustrador-primeiro').style.display = 'block';
        document.getElementById('ilustrador-sn').style.display = 'block';

        document.getElementById('ilustrador-nome').setAttribute('required', 'required');
        setRequiredRadioFor('ilustrador-sn')

    } else {
        document.getElementById('ilustrador-primeiro').style.display = 'none';
        document.getElementById('ilustrador-sn').style.display = 'none';
        document.getElementById('ilustrador-qtd').style.display = 'none';
        document.getElementById('ilustrador-outro').style.display = 'none';

        document.getElementById('ilustrador-nome').removeAttribute('required');
        removeRequiredRadioFrom('ilustrador-sn')
    }
})

//ilustrador-sn

document.querySelectorAll('input[name="ilustrador-sn"]').forEach(radio => {
    radio.addEventListener('change', function () {

        document.getElementById('ilustrador-outro').style.display = 'none';
        uncheckOption('ilustrador-qtd');
        removeRequiredRadioFrom('ilustrador-qtd');
        eraseAllChildTextOf('ilustrador-outro');
        removeRequiredFromAllChildTextOf('ilustrador-outro');

        if (document.getElementById('ilustrador-sim').checked) {
            document.getElementById('ilustrador-qtd').style.display = 'block';
            setRequiredRadioFor('ilustrador-qtd')
        } else {
            document.getElementById('ilustrador-qtd').style.display = 'none';
            removeRequiredRadioFrom('ilustrador-qtd')
        }
    });
});

//outro-ilustrador

document.querySelectorAll('input[name="ilustrador-qtd"]').forEach(radio => {
    radio.addEventListener('change', function () {

        eraseAllChildTextOf('ilustrador-outro');
        removeRequiredFromAllChildTextOf('ilustrador-outro');

        if (document.getElementById('ilustrador-qtd-2').checked) {
            document.getElementById('ilustrador-outro').style.display = 'block';

            document.getElementById('ilustrador-segundo').style.display = 'block';
            document.getElementById('ilustrador-2').setAttribute('required', 'required');

            document.getElementById('ilustrador-terceiro').style.display = 'none';
            document.getElementById('ilustrador-quarto').style.display = 'none';


        } else if (document.getElementById('ilustrador-qtd-3').checked) {
            document.getElementById('ilustrador-outro').style.display = 'block';

            document.getElementById('ilustrador-segundo').style.display = 'block';
            document.getElementById('ilustrador-2').setAttribute('required', 'required');

            document.getElementById('ilustrador-terceiro').style.display = 'block';
            document.getElementById('ilustrador-3').setAttribute('required', 'required');

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

// CONTRIBUIDORES - ORGANIZADOR

document.getElementById("organizador-checkbox").addEventListener('change', function () {

    eraseAllChildTextOf('organizador-primeiro');
    removeRequiredFromAllChildTextOf('organizador-primeiro');
    eraseAllChildTextOf('organizador-outro');
    removeRequiredFromAllChildTextOf('organizador-outro');

    uncheckOption('organizador-sn');
    removeRequiredRadioFrom('organizador-sn');
    uncheckOption('organizador-qtd');
    removeRequiredRadioFrom('organizador-qtd');

    if (document.getElementById('organizador-checkbox').checked) {
        document.getElementById('organizador-primeiro').style.display = 'block';
        document.getElementById('organizador-sn').style.display = 'block';

        document.getElementById('organizador-1').setAttribute('required', 'required');
        setRequiredRadioFor('organizador-sn')

        document.getElementById('org').style.display = 'none'; //organizador pessoa radio

    } else {
        document.getElementById('organizador-primeiro').style.display = 'none';
        document.getElementById('organizador-sn').style.display = 'none';
        document.getElementById('organizador-qtd').style.display = 'none';
        document.getElementById('organizador-outro').style.display = 'none';

        document.getElementById('organizador-1').removeAttribute('required');
        removeRequiredRadioFrom('organizador-sn')

        document.getElementById('org').style.display = 'block'; //organizador pessoa radio
    }
})

//organizador-sn

document.querySelectorAll('input[name="organizador-sn"]').forEach(radio => {
    radio.addEventListener('change', function () {

        document.getElementById('organizador-outro').style.display = 'none';
        uncheckOption('organizador-qtd');
        removeRequiredRadioFrom('organizador-qtd');
        eraseAllChildTextOf('organizador-outro');
        removeRequiredFromAllChildTextOf('organizador-outro');

        if (document.getElementById('organizador-sim').checked) {
            document.getElementById('organizador-qtd').style.display = 'block';
            setRequiredRadioFor('organizador-qtd');
        } else {
            document.getElementById('organizador-qtd').style.display = 'none';
            removeRequiredRadioFrom('organizador-qtd');
        }
    });
});

//outro-organizador

document.querySelectorAll('input[name="organizador-qtd"]').forEach(radio => {
    radio.addEventListener('change', function () {

        eraseAllChildTextOf('organizador-outro');
        removeRequiredFromAllChildTextOf('organizador-outro');

        if (document.getElementById('organizador-qtd-2').checked) {
            document.getElementById('organizador-outro').style.display = 'block';

            document.getElementById('organizador-segundo').style.display = 'block';
            document.getElementById('organizador-2').setAttribute('required', 'required');

            document.getElementById('organizador-terceiro').style.display = 'none';
            document.getElementById('organizador-quarto').style.display = 'none';


        } else if (document.getElementById('organizador-qtd-3').checked) {
            document.getElementById('organizador-outro').style.display = 'block';

            document.getElementById('organizador-segundo').style.display = 'block';
            document.getElementById('organizador-2').setAttribute('required', 'required');

            document.getElementById('organizador-terceiro').style.display = 'block';
            document.getElementById('organizador-3').setAttribute('required', 'required');

            document.getElementById('organizador-quarto').style.display = 'none';

        } else if (document.getElementById('organizador-qtd-4').checked) {
            document.getElementById('organizador-outro').style.display = 'block'
            document.getElementById('organizador-segundo').style.display = 'none';
            document.getElementById('organizador-terceiro').style.display = 'none';
            document.getElementById('organizador-quarto').style.display = 'block';

        } else {
            document.getElementById('organizador-outro').style.display = 'none';
        }
    });
});

// CONTRIBUIDORES - PREFACIADOR

document.getElementById("prefaciador-checkbox").addEventListener('change', function () {

    eraseAllChildTextOf('prefaciador-primeiro');
    removeRequiredFromAllChildTextOf('prefaciador-primeiro');
    eraseAllChildTextOf('prefaciador-outro');
    removeRequiredFromAllChildTextOf('prefaciador-outro');

    uncheckOption('prefaciador-sn');
    removeRequiredRadioFrom('prefaciador-sn');
    uncheckOption('prefaciador-qtd');
    removeRequiredRadioFrom('prefaciador-qtd');

    if (document.getElementById('prefaciador-checkbox').checked) {
        document.getElementById('prefaciador-primeiro').style.display = 'block';
        document.getElementById('prefaciador-sn').style.display = 'block';

        document.getElementById('prefaciador-1').setAttribute('required', 'required');
        setRequiredRadioFor('prefaciador-sn')

    } else {
        document.getElementById('prefaciador-primeiro').style.display = 'none';
        document.getElementById('prefaciador-sn').style.display = 'none';
        document.getElementById('prefaciador-qtd').style.display = 'none';
        document.getElementById('prefaciador-outro').style.display = 'none';

        document.getElementById('prefaciador-1').removeAttribute('required');
        removeRequiredRadioFrom('prefaciador-sn')
    }
})

//prefaciador-sn

document.querySelectorAll('input[name="prefaciador-sn"]').forEach(radio => {
    radio.addEventListener('change', function () {

        document.getElementById('prefaciador-outro').style.display = 'none';
        uncheckOption('prefaciador-qtd');
        removeRequiredRadioFrom('prefaciador-qtd');
        eraseAllChildTextOf('prefaciador-outro');
        removeRequiredFromAllChildTextOf('prefaciador-outro');

        if (document.getElementById('prefaciador-sim').checked) {
            document.getElementById('prefaciador-qtd').style.display = 'block';
            setRequiredRadioFor('prefaciador-qtd');
        } else {
            document.getElementById('prefaciador-qtd').style.display = 'none';
            removeRequiredRadioFrom('prefaciador-qtd');
        }
    });
});

//outro-prefaciador

document.querySelectorAll('input[name="prefaciador-qtd"]').forEach(radio => {
    radio.addEventListener('change', function () {

        eraseAllChildTextOf('prefaciador-outro');
        removeRequiredFromAllChildTextOf('prefaciador-outro');

        if (document.getElementById('prefaciador-qtd-2').checked) {
            document.getElementById('prefaciador-outro').style.display = 'block';

            document.getElementById('prefaciador-segundo').style.display = 'block';
            document.getElementById('prefaciador-2').setAttribute('required', 'required');

            document.getElementById('prefaciador-terceiro').style.display = 'none';
            document.getElementById('prefaciador-quarto').style.display = 'none';


        } else if (document.getElementById('prefaciador-qtd-3').checked) {
            document.getElementById('prefaciador-outro').style.display = 'block';

            document.getElementById('prefaciador-segundo').style.display = 'block';
            document.getElementById('prefaciador-2').setAttribute('required', 'required');

            document.getElementById('prefaciador-terceiro').style.display = 'block';
            document.getElementById('prefaciador-3').setAttribute('required', 'required');

            document.getElementById('prefaciador-quarto').style.display = 'none';

        } else if (document.getElementById('prefaciador-qtd-4').checked) {
            document.getElementById('prefaciador-outro').style.display = 'block'
            document.getElementById('prefaciador-segundo').style.display = 'none';
            document.getElementById('prefaciador-terceiro').style.display = 'none';
            document.getElementById('prefaciador-quarto').style.display = 'block';

        } else {
            document.getElementById('prefaciador-outro').style.display = 'none';
        }
    });
});

// CONTRIBUIDORES - TRADUTOR

document.getElementById("tradutor-checkbox").addEventListener('change', function () {

    eraseAllChildTextOf('tradutor-primeiro');
    removeRequiredFromAllChildTextOf('tradutor-primeiro');
    eraseAllChildTextOf('tradutor-outro');
    removeRequiredFromAllChildTextOf('tradutor-outro');

    uncheckOption('tradutor-sn');
    removeRequiredRadioFrom('tradutor-sn');
    uncheckOption('tradutor-qtd');
    removeRequiredRadioFrom('tradutor-qtd');

    if (document.getElementById('tradutor-checkbox').checked) {
        document.getElementById('tradutor-primeiro').style.display = 'block';
        document.getElementById('tradutor-sn').style.display = 'block';

        document.getElementById('tradutor-1').setAttribute('required', 'required');
        setRequiredRadioFor('tradutor-sn')

    } else {
        document.getElementById('tradutor-primeiro').style.display = 'none';
        document.getElementById('tradutor-sn').style.display = 'none';
        document.getElementById('tradutor-qtd').style.display = 'none';
        document.getElementById('tradutor-outro').style.display = 'none';

        document.getElementById('tradutor-1').removeAttribute('required');
        removeRequiredRadioFrom('tradutor-sn')
    }
})

//tradutor-sn

document.querySelectorAll('input[name="tradutor-sn"]').forEach(radio => {
    radio.addEventListener('change', function () {

        document.getElementById('tradutor-outro').style.display = 'none';
        uncheckOption('tradutor-qtd');
        removeRequiredRadioFrom('tradutor-qtd');
        eraseAllChildTextOf('tradutor-outro');
        removeRequiredFromAllChildTextOf('tradutor-outro');

        if (document.getElementById('tradutor-sim').checked) {
            document.getElementById('tradutor-qtd').style.display = 'block';
            setRequiredRadioFor('tradutor-qtd');
        } else {
            document.getElementById('tradutor-qtd').style.display = 'none';
            removeRequiredRadioFrom('tradutor-qtd');
        }
    });
});

//outro-tradutor

document.querySelectorAll('input[name="tradutor-qtd"]').forEach(radio => {
    radio.addEventListener('change', function () {

        eraseAllChildTextOf('tradutor-outro');
        removeRequiredFromAllChildTextOf('tradutor-outro');

        if (document.getElementById('tradutor-qtd-2').checked) {
            document.getElementById('tradutor-outro').style.display = 'block';

            document.getElementById('tradutor-segundo').style.display = 'block';
            document.getElementById('tradutor-2').setAttribute('required', 'required');

            document.getElementById('tradutor-terceiro').style.display = 'none';
            document.getElementById('tradutor-quarto').style.display = 'none';


        } else if (document.getElementById('tradutor-qtd-3').checked) {
            document.getElementById('tradutor-outro').style.display = 'block';

            document.getElementById('tradutor-segundo').style.display = 'block';
            document.getElementById('tradutor-2').setAttribute('required', 'required');

            document.getElementById('tradutor-terceiro').style.display = 'block';
            document.getElementById('tradutor-3').setAttribute('required', 'required');

            document.getElementById('tradutor-quarto').style.display = 'none';

        } else if (document.getElementById('tradutor-qtd-4').checked) {
            document.getElementById('tradutor-outro').style.display = 'block'
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

        eraseAllChildTextOf('publicador-segundo');

        if (document.getElementById('publicador-sim').checked) {

            document.getElementById('publicador-segundo').style.display = 'block';
            document.getElementById('publicador-2').setAttribute('required', 'required');

        } else {

            document.getElementById('publicador-segundo').style.display = 'none';
            document.getElementById('publicador-2').removeAttribute('required', 'required');
        }
    });
});

//PAGINAÇÃO

// Paginacao numerada ou não 
document.querySelectorAll('input[name="paginacao"]').forEach(radio => {
    radio.addEventListener('change', function () {

        if (document.getElementById('pag-num').checked) {

            eraseAllChildTextOf('paginacao-nao-numerada-section');
            uncheckOption('pag-certeza');
            removeRequiredRadioFrom('pag-certeza');

            document.getElementById('paginacao-numerada').style.display = 'block';
            document.getElementById('pag-num-qtd').setAttribute('required', 'required');

            document.getElementById('paginacao-nao-numerada').style.display = 'none';
            document.getElementById('pag-nao-num-qtd').removeAttribute('required', 'required');

        } else if (document.getElementById('pag-sem-num').checked) {

            eraseAllChildTextOf('paginacao-numerada-section');
            removeRequiredFromAllChildTextOf('paginacao-numerada-section');

            uncheckOption('pag-outra'); //pag-romana e pag-lamina

            removeRequiredRadioFrom('pag-ou-folha');
            uncheckOption('pag-ou-folha');

            document.getElementById('paginacao-nao-numerada').style.display = 'block';
            document.getElementById('pag-nao-num-qtd').setAttribute('required', 'required');
            setRequiredRadioFor('pag-certeza');

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

        // Checkbox paginacao romana

        if (document.getElementById('pag-romana').checked) {

            document.getElementById('paginacao-romana').style.display = 'block';
            document.getElementById('pag-romana-qtd').setAttribute('required', 'required');

        } else {
            document.getElementById('paginacao-romana').style.display = 'none';
            document.getElementById('pag-romana-qtd').removeAttribute('required', 'required');
            eraseAllChildTextOf('paginacao-romana');
        }

        // Checkbox laminas
        if (document.getElementById('pag-lamina').checked) {

            document.getElementById('paginacao-lamina').style.display = 'block';
            setRequiredRadioFor('pag-ou-folha');

        } else {
            document.getElementById('paginacao-lamina').style.display = 'none';
            eraseAllChildTextOf('paginacao-lamina');
            uncheckOption('pag-ou-folha');
            removeRequiredRadioFrom('pag-ou-folha');

        }
    });
});

document.querySelectorAll('input[name="pag-ou-folha"]').forEach(radio => {
    radio.addEventListener('change', function () {

        if (document.getElementById('pagina').checked) {
            eraseAllChildTextOf('folha-lamina');

            document.getElementById('pagina-lamina').style.display = 'block';
            document.getElementById('pag-lamina-qtd').setAttribute('required', 'required');

            document.getElementById('folha-lamina').style.display = 'none';
            document.getElementById('folha-lamina-qtd').removeAttribute('required', 'required');


        } else if (document.getElementById('folha').checked) {
            eraseAllChildTextOf('pagina-lamina');

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
/*
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
*/

//Checkbox ILUSTRAÇÕES
document.getElementById('img-ilustracoes').addEventListener('change', function () {

    const ilColoracaoRadios = document.querySelectorAll('input[type="radio"][name="il-coloracao"]');

    if (document.getElementById('img-ilustracoes').checked) {

        document.getElementById('il-coloracao').style.display = 'block';
        setRequiredRadioFor('il-coloracao');


    } else {
        document.getElementById('il-coloracao').style.display = 'none';
        removeRequiredRadioFrom('il-coloracao');
        uncheckOption('il-coloracao');
    }

})

//Checkbox FOTOS
document.getElementById('img-fotos').addEventListener('change', function () {
    const fotosColoracaoRadios = document.querySelectorAll('input[type="radio"][name="fotos-coloracao"]');

    if (document.getElementById('img-fotos').checked) {
        document.getElementById('fotos-coloracao').style.display = 'block';
        setRequiredRadioFor('fotos-coloracao')

    } else {
        document.getElementById('fotos-coloracao').style.display = 'none';
        removeRequiredRadioFrom('fotos-coloracao')
        uncheckOption('fotos-coloracao');
    }
})

/*
//Checkbox MAPAS
document.getElementById('img-mapas').addEventListener('change', function () {

    if (document.getElementById('img-mapas').checked) {
        document.getElementById('mapas-coloracao').style.display = 'block';
    } else {
        document.getElementById('mapas-coloracao').style.display = 'none';
    }
})
*/

//FORMATO

// FORMATO-FÍSICO
document.querySelectorAll('input[name="formato"]').forEach(radio => {
    radio.addEventListener('change', function () {

        eraseAllChildTextOf('formato-fisico-section');

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

        eraseAllChildTextOf('material-adicional');

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
        removeRequiredRadioFrom('subserie-sn');
        eraseAllChildTextOf('serie-section'); // inclui inputs de subserie

        if (document.getElementById('serie-sim').checked) {

            document.getElementById('serie').style.display = 'block';
            document.getElementById('serie-nome').setAttribute('required', 'required');

            document.getElementById('subserie-sn').style.display = 'block';
            setRequiredRadioFor('subserie-sn');

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

        eraseAllChildTextOf('subserie');

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


        eraseAllChildTextOf('isbn-section');

        if (document.getElementById('isbn-sim').checked) {

            document.getElementById('isbn').style.display = 'block';
            document.getElementById('isbn-1').setAttribute('required', 'required');

            document.getElementById('isbn-2-sn').style.display = 'block';
            setRequiredRadioFor('isbn-2-sn');

        } else {

            document.getElementById('isbn').style.display = 'none';
            document.getElementById('isbn-1').removeAttribute('required', 'required');

            document.getElementById('isbn-2-sn').style.display = 'none';
            document.getElementById('isbn-outro').style.display = 'none';


            uncheckOption('isbn-2-sn');
            removeRequiredRadioFrom('isbn-2-sn');
        }


    });
});

// ISBN-2 - sim ou não

document.querySelectorAll('input[name="isbn-2-sn"]').forEach(radio => {
    radio.addEventListener('change', function () {

        eraseAllChildTextOf('isbn-outro');

        if (document.getElementById('isbn-2-sim').checked) {

            document.getElementById('isbn-outro').style.display = 'block';

            document.getElementById('isbn-2').setAttribute('required', 'required');
            document.getElementById('qualificador-2').setAttribute('required', 'required');


        } else {

            document.getElementById('isbn-outro').style.display = 'none';

            document.getElementById('isbn-2').removeAttribute('required', 'required');
            document.getElementById('qualificador-2').removeAttribute('required', 'required');
        }
    });
});

// Nota - sim ou não

document.querySelectorAll('input[name="nota-sn"]').forEach(radio => {
    radio.addEventListener('change', function () {

        removeRequiredFromAllChildTextOf, ('notas-section');
        eraseAllChildTextOf('notas-section');
        uncheckOption('nota-2-sn');


        if (document.getElementById('nota-sim').checked) {

            document.getElementById('nota').style.display = 'block';
            document.getElementById('nota-1').setAttribute('required', 'required');

            document.getElementById('nota-2-sn').style.display = 'block';

        } else {

            document.getElementById('nota').style.display = 'none';
            document.getElementById('nota-1').removeAttribute('required', 'required')
            document.getElementById('nota-2-sn').style.display = 'none';
            document.getElementById('nota-outro').style.display = 'none';


        }
    });
});

// Segunda nota - sim ou não

document.querySelectorAll('input[name="nota-2-sn"]').forEach(radio => {
    radio.addEventListener('change', function () {

        eraseAllChildTextOf('nota-outro');

        if (document.getElementById('nota-2-sim').checked) {

            document.getElementById('nota-outro').style.display = 'block';
            document.getElementById('nota-2').setAttribute('required', 'required');

        } else {

            document.getElementById('nota-outro').style.display = 'none';
            document.getElementById('nota-2').removeAttribute('required', 'required');
        }
    });
});

// OPCIONAIS DO PDF


// LICENCA - Salva em localStorage
const ccSelect = document.getElementById('cc-select');
ccSelect.addEventListener('change', function () {
    localStorage.setItem("licenca", ccSelect.value);
    console.log(`Licença salva em localStorage: ${localStorage.getItem("licenca")}`);
});

// CREDITOS - Salva em localStorage (diferente de input[type="text"])
document.getElementById("creditos").addEventListener("change", function () {
    let creditos = document.getElementById("creditos").value.trim();

    if (creditos) {
        creditos = JSON.stringify(creditos);
        localStorage.setItem('creditos', creditos); // Store the *value* of the element, not the whole element
        console.log(`Créditos salvos em localStorage: ${localStorage.getItem("creditos")}`);
    } else {
        console.error("Créditos não encontrados")
    }

})
// Bibliotecario-genero - seleção
document.getElementById('bibliotecario-nome').addEventListener("change", function () {

    const bibNome = document.getElementById('bibliotecario-nome').value.trim();
    const bibGenero = document.querySelectorAll('input[name="bibliotecario-genero"]');

    if (bibNome !== "") {
        bibGenero.forEach(radio => {
            radio.setAttribute('required', 'required');
        })
    } else {
        bibGenero.forEach(radio => {
            radio.removeAttribute('required');
        })
    };
});


// JavaScript para limitar a quantidade máxima de linhas em #creditos (acho que não funciona mais com Quilljs
document.getElementById('creditos').addEventListener('input', function () {
    const maxLines = 20;
    const textarea = this;
    const lines = textarea.value.split('\n');

    if (lines.length > maxLines) {
        textarea.value = lines.slice(0, maxLines).join('\n');
    }
});


// SALVA EM LOCAL STORAGE 'input[type="text"]' de todos os campos do formulário
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('input[type="text"]').forEach(campo => {
        campo.addEventListener("input", saveData);
    });
})


// BOTÕES

// Botão Gera Ficha

// valida inputs de texto
document.getElementById("btn-card").addEventListener("click", function (event) {

    let formIsValid = true;

    const requiredFields = document.querySelectorAll('input[required]:not([type="radio"]), select[required], textarea[required]');
    requiredFields.forEach(field => {
        if (!field.checkValidity()) {
            field.classList.add('invalid-field');
            formIsValid = false;
        } else {
            field.classList.remove('invalid-field');
        }
    });

    // valida grupos de rádio
    const radioGroups = document.querySelectorAll('input[type="radio"][required]');
    let radiosPorGrupo = {};

    // agrupa rádios pelo atributo "name"
    radioGroups.forEach(radio => {

        if (!radiosPorGrupo[radio.name]) {
            radiosPorGrupo[radio.name] = []; 	//cria um grupo em radiosPorGrupo
        }
        radiosPorGrupo[radio.name].push(radio); //add o rádio atual ao array correspondente dentro de radiosPorGrupo
    });

    // Verifica se pelo menos um rádio de cada grupo está marcado
    Object.values(radiosPorGrupo).forEach(radios => { // itera sobre cada grupo de radios
        if (!radios.some(radio => radio.checked)) { //.some() retorna true se ao menos 1 elemento do array estiver marcado
            formIsValid = false;
            radios.forEach(radio => radio.classList.add('invalid-radio'));
        } else {
            radios.forEach(radio => radio.classList.remove('invalid-radio'));
        }
    });

    //daqui pra baixo vale pra inputs de texto e radio tb

    if (!formIsValid) {  //só executa se TRUE
        event.preventDefault(); // Impede o envio do formulário se houver campos inválidos
        alert('Por favor, preencha todos os campos obrigatórios.');
    } else {
        geraFicha();
    }
})

/* *********************************************************************************
Este código está indisponível enquanto não se resolver o blob de html2pdf
document.getElementById("btn-pdf").addEventListener("click", function (event) {
    // Botão Abrir PDF

    let formIsValid = true;

    // Validação específica para os rádios bibliotecario-genero
    const bibGenero = document.querySelectorAll('input[name="bibliotecario-genero"][required]');

    if (bibGenero.length > 0 && !Array.from(bibGenero).some(radio => radio.checked)) {
        formIsValid = false;
        bibGenero.forEach(radio => radio.classList.add('invalid-radio'));

    } else {

        bibGenero.forEach(radio => radio.classList.remove('invalid-radio'));
    }

    if (!formIsValid) {  //só executa se TRUE
        event.preventDefault(); // Impede o envio do formulário se houver campos inválidos
        alert('Por favor, preencha todos os campos obrigatórios.');

    } else {

        geraPDF();
    }
});

**************************************************************************************** */

// Botão Baixar PNG
document.getElementById("btn-png").addEventListener("click", function (event) {

    let formIsValid = true;

    // Validação específica para os rádios bibliotecario-genero
    const bibGenero = document.querySelectorAll('input[name="bibliotecario-genero"][required]');

    if (bibGenero.length > 0 && !Array.from(bibGenero).some(radio => radio.checked)) {
        formIsValid = false;
        bibGenero.forEach(radio => radio.classList.add('invalid-radio'));

    } else {

        bibGenero.forEach(radio => radio.classList.remove('invalid-radio'));
    }

    if (!formIsValid) {  //só executa se TRUE
        event.preventDefault(); // Impede o envio do formulário se houver campos inválidos
        alert('Por favor, preencha todos os campos obrigatórios.');

    } else {

        geraPNG();
    }
});


// Botão Abrir HTML A4

document.getElementById("btn-A4").addEventListener("click", function (event) {

    // Salva as variáveis processadas em cardScript

    localStorage.setItem('bibliotecario', getBibliotecario().bibliotecario);
    localStorage.setItem('servico', getServico().servico);

    // Salva conteúdo formatado do campo Créditos

    const delta = quill.getContents();
    const deltaString = JSON.stringify(delta);

    localStorage.setItem('quillContent', deltaString);

    // Validação específica para os rádios bibliotecario-genero

    let formIsValid = true;
    const bibGenero = document.querySelectorAll('input[name="bibliotecario-genero"][required]');

    if (bibGenero.length > 0 && !Array.from(bibGenero).some(radio => radio.checked)) {
        formIsValid = false;
        bibGenero.forEach(radio => radio.classList.add('invalid-radio'));
    } else {
        bibGenero.forEach(radio => radio.classList.remove('invalid-radio'));
    }

    if (!formIsValid) {  //só executa se TRUE
        event.preventDefault(); // Impede o envio do formulário se houver campos inválidos
        alert('Por favor, preencha todos os campos obrigatórios.');
    } else {

        console.log("Botão Abrir Página HTML A4 acionado");
        window.open("a4.html", "_blank");
        console.log("janela aberta");

    }

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

// Inicialize o Quill
const quill = new Quill('#creditos', {
    theme: 'snow', // Tema do editor
    modules: {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'], // Ferramentas de formatação
            //[{ 'align': [] }], alinhamento não está funcionando
            [{ 'list': 'ordered' }], // Listas { 'list': 'bullet' } não está funcionando
            ['link', 'image'] // Links e imagens
        ]
    }
});

