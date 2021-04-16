/*
const pessoa1 = {
    nome : 'Alesandro',
    sobrenome: 'Lima',
    idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

========================================================

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Astrogildo', 'Farinha', 25);
const pessoa2 = criaPessoa('Hermenegilda', 'Sauro', 15);
const pessoa3 = criaPessoa('Poliberto', 'Ferreira', 33);
const pessoa4 = criaPessoa('Rigoberto', 'Souza', 40);

//console.log(pessoa1.nome, pessoa2, pessoa3, pessoa4);
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);

========================================================
*/

const pessoa1 = {
    nome : 'Alesandro',
    sobrenome: 'Lima',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade é ${this.idade}`);
    }, 
    
    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
