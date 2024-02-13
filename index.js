"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = require("./readline");
readline_1.rl.question('Digite um número: ', (first) => {
    const SaveFirstNumber = Number(first);
    readline_1.rl.question("Digite outro número para realizar o cálculo: ", (second) => {
        const SaveSecondNumber = Number(second);
        readline_1.rl.question("Digite uma operação válida (+, -, *, /): ", (operador) => {
            switch (operador) {
                case "+":
                    console.log(SaveFirstNumber + SaveSecondNumber);
                    break;
                case "-":
                    console.log(SaveFirstNumber - SaveSecondNumber);
                    break;
                case "*":
                    console.log(SaveFirstNumber * SaveSecondNumber);
                    break;
                case "/":
                    console.log(SaveFirstNumber / SaveSecondNumber);
                    break;
            }
            readline_1.rl.close();
        });
    });
});
