// JavaScript source code
alert("Funcionando");

// resp-int-section

document.querySelectorAll('input[name="resp-int"]').forEach(radio => {
    radio.addEventListener('change', function () {
        if (document.getElementById('pessoa').checked) {
            document.getElementById('pessoa-section').style.display = 'block';
            document.getElementById('entidade-section').style.display = 'none';
            document.getElementById('evento-section').style.display = 'none';
        } else if (document.getElementById('entidade').checked) {
            document.getElementById('pessoa-section').style.display = 'none';
            document.getElementById('entidade-section').style.display = 'block';
            document.getElementById('evento-section').style.display = 'none';
            document.getElementById('detalhes-pessoa').style.display = 'none';
            document.getElementById('mais-pessoa').style.display = 'none'; 
            document.getElementById('qtd-pessoa').style.display = 'none';
        } else if (document.getElementById('evento').checked) {
            document.getElementById('pessoa-section').style.display = 'none';
            document.getElementById('entidade-section').style.display = 'none';
            document.getElementById('evento-section').style.display = 'block';
            document.getElementById('detalhes-pessoa').style.display = 'none';
            document.getElementById('mais-pessoa').style.display = 'none';
            document.getElementById('qtd-pessoa').style.display = 'none';
        }
    });
});

// pessoa-section

document.querySelectorAll('input[name="t-pessoa"]').forEach(radio => {
    radio.addEventListener('change', function () {
        document.getElementById('qtd-pessoa').style.display = 'none';//para o caso de mudança de tipo de pessoa
        if (document.getElementById('autor').checked) {
            document.getElementById('autor-section').style.display = 'block';
            document.getElementById('organizador-section').style.display = 'none';
            document.getElementById('coordenador-section').style.display = 'none';
            document.getElementById('compilador-section').style.display = 'none';
            document.getElementById('editor-section').style.display = 'none';
            document.getElementById('mais-pessoa').style.display = 'block';

        } else if (document.getElementById('organizador').checked) {
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
            
        }
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


