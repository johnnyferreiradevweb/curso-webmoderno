//Semelhante a OO com uso de classes

function Carro(velocidadeMax = 200, delta=5) {
    
    //atributo privado
    let velocidadeAtual = 0;

    //metodo publico
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMax){
            velocidadeAtual += delta;
        }else{
            velocidadeAtual = velocidadeMax;
        }
    }

    //metodo publico
    this.getVelcidadeAtual = function(){
        return velocidadeAtual;
    }
}

const uno = new Carro //O parentese é opcional

console.log("Velocidade atual = "+uno.getVelcidadeAtual());

uno.acelerar();
console.log("Velocidade atual = "+uno.getVelcidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();

console.log("Velocidade atual (Ferrai) = "+ferrari.getVelcidadeAtual());

console.log(typeof ferrari);
console.log(typeof Carro);
