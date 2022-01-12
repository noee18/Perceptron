let input = [
    [0,0],
    [0,1],
    [1,0],
    [1,1],
];

let output = [
    0,
    0,
    0,
    1
];


let neurona = {
    pesos: [],
    sesgo: null,
    lr: 0.01,

    init: function (numPesos) {
        for (let i = 0; i < numPesos; i++) {
            this.pesos[i] = Math.random() * (0.5 + 0.5) - 0.5;                        
        }      
        this.sesgo = Math.random() * (0.5 + 0.5) - 0.5;
    },
    salida(input){
        let salida = 0;
        for (let index = 0; index < input.length; index++) {
            salida += this.pesos[index] * input[index];            
        }
        salida += this.sesgo;

        if (salida < 1) {
            salida = 0;
            
        }else{
            salida = 1;
        }

        return salida;
    },
    train(epochs, dataInput, dataOutput){
        for (let index = 0; index < epochs; index++) {
            let errorEpoch = 0;
        for (let j = 0; j < dataInput.length; j++) {
            let currentInput = dataInput[j];
            let currentOutput = dataOutput[j];
            let salida = this.salida(currentInput);
            let error = currentOutput - salida;
            errorEpoch += Math.abs(error);
            this.ajustePesos(error, currentInput);
        }       
            console.log(errorEpoch / dataInput.length);
            
        }
    },

    ajustePesos(error, currentInput){
        for (let index = 0; index < this.pesos.length; index++) {
                let ajuste = error * this.lr * currentInput[index];
                this.pesos[index] += ajuste; 
        }
        // No pasa nada al ponerle el mismo nnombre a 2 variables miemtras sea LET
        let ajuste = error * this.lr * 1;
        this.sesgo = ajuste;

    }
};

    neurona.init(2);
    neurona.train(2000, input, output);
        
    for (let index = 0; index < input.length; index++) {
            console.log("=======================");
            console.log("Entrada: ");
            console.log(input[index]);
            console.log("Salida: ");
            console.log(neurona.salida(input[index]));
            console.log("Salida Esperada: ");
            console.log(output[index]);
        }

