let cepField = document.querySelector('#cep');
const q = (element) => document.querySelector(element);

async function buscaCep(cepValue) {
    let req = await fetch(`https://viacep.com.br/ws/${cepValue}/json/`);

    let res = await req.json();

    preencheCampos(res.logradouro, res.localidade, res.uf);
}

cepField.addEventListener('focusout', (e) => {
    let cepValue = e.target.value;
    buscaCep(cepValue);
})


function preencheCampos(rua, cidade, estado) {
    q('#street').value = rua;
    q('#city').value = cidade;
    q('#state').value = estado;
}