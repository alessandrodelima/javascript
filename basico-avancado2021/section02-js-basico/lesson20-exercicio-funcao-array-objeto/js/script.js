function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
   
    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas);

        resultado.innerHTML += `
        <tr>
            <td> ${nome.value}</td> 
            <td> ${sobrenome.value}</td> 
            <td> ${peso.value}</td> 
            <td> ${altura.value}</td>
        </tr>`;
        //console.log(nome.value, sobrenome.value, peso.value, altura.value);
    }

    form.addEventListener('submit', recebeEventoForm);

}
meuEscopo();