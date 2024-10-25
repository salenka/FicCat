import { uncheckRadio } from './functions.js';
import { updateTipoPessoa } from './functions.js';
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