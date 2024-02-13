import { rl } from "./readline";

rl.question('Digite um número: ', (first: string) => {
    const SaveFirstNumber: number = Number(first)
    rl.question("Digite outro número para realizar o cálculo: ", (second: string) => {
        const SaveSecondNumber: number = Number(second)
        rl.question("Digite uma operação válida (+, -, *, /): ", (operador: string) => {
            switch (operador) {
                case "+": console.log(SaveFirstNumber + SaveSecondNumber)
                break
                case "-": console.log(SaveFirstNumber - SaveSecondNumber)
                break
                case "*": console.log(SaveFirstNumber * SaveSecondNumber)
                break
                case "/": console.log(SaveFirstNumber/ SaveSecondNumber)
                break
            }
            rl.close()
        })
    })
})