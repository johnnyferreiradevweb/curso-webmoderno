const pessoa = {
    saudacao: 'Bom Dia',
    falar(){
        console.log(this.saudacao); // O this é necessario 
    }
}

pessoa.falar();
const falar =  pessoa.falar;

falar(); // conflito entre paradigmas: funcional e OO

const faladePessoa = pessoa.falar.bind(pessoa); // Resolvendo o conflito
faladePessoa();