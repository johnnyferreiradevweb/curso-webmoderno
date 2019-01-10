// tagget template
function tag(partes, ...valores) {
    console.log(partes);
    console.log(valores);
    return 'Outra String'
}

const aluno = 'Johnny'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`);
