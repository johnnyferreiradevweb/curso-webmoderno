// Formas de criar objetos
// Forma literal

const obj1 = {};
console.log(obj1);

// Object
console.log(typeof Object, typeof new Object);
obj2 = new Object();
console.log(obj2);

// Funcoes construtoras
function Produto(nome, preco, desc){
    this.nome = nome;
    this.getPrecoComDesc = () => {
        return preco * (1 - desc);
    }
}

const p1 = new Produto('Caneta', 7.99, 0.5);
const p2 = new Produto('Notebook', 2000, 0.25);

console.log(p1.getPrecoComDesc(), p2.getPrecoComDesc());

// Funcao factory
function criarFuncionario(nome, salBase, faltas) {
    return {
        nome, 
        salBase,
        faltas,
        getSalario(){
            return (salBase/30) * (30 - faltas);
        }
    }
}

const f1 = criarFuncionario('Joao', 946.90, 4);
console.log(f1.getSalario());

const f2 = criarFuncionario('Maria', 3000.90, 1);
console.log(f2.getSalario());

// Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

// Uma função famosa que retorna um objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info);





