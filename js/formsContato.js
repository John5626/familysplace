document.addEventListener('DOMContentLoaded', function() {
    var sacButton = document.getElementById('sacButton');
    var trabalheButton = document.getElementById('trabalheButton');
    var contato = document.getElementById('contato');
    var trabalheConosco = document.getElementById('trabalhe-conosco');

    sacButton.addEventListener('click', function() {
        contato.classList.remove('hidden');
        trabalheConosco.classList.add('hidden');
    });

    trabalheButton.addEventListener('click', function() {
        contato.classList.add('hidden');
        trabalheConosco.classList.remove('hidden');
    });
});
